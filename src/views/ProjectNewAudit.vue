<script setup lang="ts">
import useNewProject from '@/composables/useNewProject';
import AuditSettingsRecrawl from '@/components/AuditSettingsRecrawl.vue';
import useFetch from '@/composables/useFetch';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useProjectStore } from '@/stores/ProjectStore';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { sleep } from '@/utils';
const { newProject, resetNewProject } = useNewProject();
const { selectedProject } = storeToRefs(useProjectStore());
onMounted(async () => {
  if (route.params.id && ProjectStore.projects) {
    const project = ProjectStore.projects?.find(
      (_project: any) => _project.slug === route.params.id
    );
    if (project) {
      await ProjectStore.setSelectedProject(project);
      const crawlsArray = Object.values(ProjectStore?.selectedProject?.crawls ?? {});
      const lastCrawl = crawlsArray[crawlsArray.length - 1];
      if (lastCrawl) {
        const lastCrawlSettings = lastCrawl.settings;
        const agent1 = {
          id: 'BOT',
          label: 'Bot'
        };
        switch (lastCrawlSettings.userAgent) {
          case 'BOT':
            agent1.id = 'BOT';
            agent1.label = 'Bot';
            break;
          case 'MOB':
            agent1.id = 'MOB';
            agent1.label = 'Mobile';
            break;
          case 'PC':
            agent1.id = 'PC';
            agent1.label = 'Desktop';
            break;
          default:
            agent1.id = 'CUSTOM';
            agent1.label = 'Custom';
            break;
        }
        newProject.value.settings = {
          ...lastCrawlSettings,
          hasLogin:
            lastCrawlSettings.authPassword && lastCrawlSettings.authUser
              ? { id: 'Y', label: 'Yes' }
              : { id: 'N', label: 'No' },
          agent1
        };
      }
    }
  }
});

onUnmounted(() => {
  resetNewProject();
});

watch(
  () => selectedProject,
  (value) => {
    if (value) {
      const crawlsArray = Object.values(selectedProject.value?.crawls ?? {});
      const lastCrawl = crawlsArray[crawlsArray.length - 1];
      if (lastCrawl) {
        const lastCrawlSettings = lastCrawl.settings;
        const agent1 = {
          id: 'BOT',
          label: 'Bot'
        };
        switch (lastCrawlSettings.userAgent) {
          case 'BOT':
            agent1.id = 'BOT';
            agent1.label = 'Bot';
            break;
          case 'MOB':
            agent1.id = 'MOB';
            agent1.label = 'Mobile';
            break;
          case 'PC':
            agent1.id = 'PC';
            agent1.label = 'Desktop';
            break;
          default:
            agent1.id = 'CUSTOM';
            agent1.label = 'Custom';
            break;
        }
        newProject.value.settings = {
          ...lastCrawlSettings,
          hasLogin:
            lastCrawlSettings.authPassword && lastCrawlSettings.authUser
              ? { id: 'Y', label: 'Yes' }
              : { id: 'N', label: 'No' },
          agent1
        };
      }
    }
  },
  { deep: true, immediate: true }
);
const route = useRoute();
const router = useRouter();
const isLoading = ref(false);

const InstanceStore = useInstanceStore();
const ProjectStore = useProjectStore();

const saveProject = async () => {
  isLoading.value = true;
  const { httpGet } = useFetch();
  const newSettings = JSON.stringify(newProject.value.settings);
  if (ProjectStore.selectedProject) {
    httpGet('scan/updScan', {
      params: {
        id: ProjectStore.selectedProject.id,
        json: newSettings
      }
    });

    await sleep(2000);

    try {
      httpGet('scan/runScan', {
        params: {
          id: ProjectStore.selectedProject.id
        }
      });
    } catch (err) {
      console.error(err);
    } finally {
      await sleep(10000);
      await InstanceStore.reloadApplicationData();
      await sleep(1000);
      router.push({
        name: 'Projects'
      });
      isLoading.value = false;
    }
  }
};

const items = ref([
  {
    label: 'Projects',
    routeName: 'Projects'
  }
]);
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.isLoadingInstances || InstanceStore.isInizializingApplication"
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div v-else-if="InstanceStore.instances && ProjectStore.selectedProject" class="col-span-full">
      <BaseBreadcrumb
        :title="ProjectStore.selectedProject.label"
        action="New Audit"
        :items="items"
        :resource="{
          name: 'Project',
          slug: ProjectStore.selectedProject.slug
        }">
      </BaseBreadcrumb>
      <div class="p-8">
        <div class="max-w-[800px]">
          <p class="block mb-1 text-sm text-gray-700">Define New Audit Settings</p>
          <div :class="{ 'opacity-40 pointer-events-none cursor-not-allowed': isLoading }">
            <AuditSettingsRecrawl />
          </div>
        </div>

        <BaseButton
          class="w-[200px] mt-12"
          kind="primary"
          :is-loading="isLoading"
          @click="saveProject">
          Run Project
        </BaseButton>
      </div>
    </div>
    <div class="col-span-full">
      <!-- <json-viewer :expanded="true" :value="newProject"> </json-viewer> -->
    </div>
  </div>
</template>
