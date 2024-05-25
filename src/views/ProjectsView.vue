<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useProjectStore } from '@/stores/ProjectStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import ProjectsTable from '@/components/ProjectsTable.vue';
import useResources from '@/composables/useResources';
import { useRouter } from 'vue-router';
import { isNil } from 'ramda';
const ProjectStore = useProjectStore();
const router = useRouter();
const InstanceStore = useInstanceStore();
const drawerIsOpen = ref(false);
useResources(ProjectStore.projects);
onMounted(async () => {
  const InstanceStore = useInstanceStore();
  if (isNil(InstanceStore.instances) && !InstanceStore.isLoadingInstances) {
    await InstanceStore.getInstancesAndProjects();
  }
  if (ProjectStore.selectedProject) {
    ProjectStore.selectedProject = undefined;
  }
});
const onShowPreview = (project: any) => {
  drawerIsOpen.value = true;
  ProjectStore.setSelectedProject(project);
};
const onOpenProjectAudit = (project: any) => {
  router.push({
    name: 'ProjectAudit',
    params: {
      id: project.slug
    }
  });
  ProjectStore.setSelectedProject(project);
};
const onCreate = () => {
  router.push({
    name: `ProjectNew`
  });
};

const onCleanCache = (project: any) => {
  InstanceStore.cleanCache(project.instanceId, project.domainId);
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="ProjectStore.projects"
      class="overflow-y-auto kl-datagrid-padding-special col-span-full">
      <ProjectsTable
        :projects="ProjectStore.projects"
        :selected-project="ProjectStore.selectedProject"
        @show-preview="onShowPreview"
        @open-project-audit="onOpenProjectAudit"
        @create="onCreate"
        @clean-cache="onCleanCache" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Projects" />
    </div>
    <BaseDrawer
      :open="drawerIsOpen"
      :title="ProjectStore.selectedProject?.label ?? ''"
      @close="drawerIsOpen = false"
      @after-leave="ProjectStore.selectedProject = undefined">
      <BaseTabs v-if="ProjectStore.selectedProject" class="mt-12">
        <BaseTab class="" title="Raw Data">
          <div>
            <json-viewer :value="ProjectStore.selectedProject"></json-viewer>
          </div>
        </BaseTab>
      </BaseTabs>
    </BaseDrawer>
  </div>
</template>
