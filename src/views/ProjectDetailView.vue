<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useProjectStore } from '@/stores/ProjectStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { isEmpty, reverse } from 'ramda';
import { useNotificationStore } from '@/stores/NotificationStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import TableIssuesByType from '@/components/TableIssuesByType.vue';
import DxTagBox from 'devextreme-vue/tag-box';
import ProjectInfo from '@/components/ProjectInfo.vue';
import AuditSettingsRead from '@/components/AuditSettingsRead.vue';
import useNewProject from '@/composables/useNewProject';
const InstanceStore = useInstanceStore();
const ProjectStore = useProjectStore();
const NotificationStore = useNotificationStore();
const route = useRoute();
const router = useRouter();
const BusinessStore = useBusinessStore();
const items = ref([
  {
    label: 'Projects',
    routeName: 'Projects'
  }
]);

onMounted(async () => {
  if (route.params.id && ProjectStore.projects) {
    const project = ProjectStore.projects?.find(
      (_project: any) => _project.slug === route.params.id
    );
    if (project) {
      await ProjectStore.setSelectedProject(project);
      ProjectStore.getIssuesOfAllCrawlsByProjectId();
    }
  }
});

const { resetNewProject } = useNewProject();

onUnmounted(() => {
  ProjectStore.strategy.summary = null;
  ProjectStore.strategy.basket = null;
  ProjectStore.strategy.dates = null;
  ProjectStore.strategy.competitors = null;
  ProjectStore.strategy.backlinks = null;
  ProjectStore.strategyIsLoading = true;
  resetNewProject();
});
const modaliInfoProjectIsOpen = ref(false);
const modelLastSettingsIsOpen = ref(false);
const checkCrawl = (crawlId: string) => {
  const listOfProjectCrawls = ProjectStore?.selectedProject?.crawls ?? {};
  ProjectStore.setSelectedCrawl(listOfProjectCrawls[crawlId]);
};

// CHANGE OWNER FEATURE
const modalChangeOwnerIsOpen = ref(false);

const newProjectOwners: any = ref([]);
const openModalChangeOwner = () => {
  newProjectOwners.value = ProjectStore.selectedProject?.businessesIds ?? [];
  modalChangeOwnerIsOpen.value = true;
};

watch(
  () => InstanceStore.selectedInstance?.seoToolsToken,
  async (ne: any, ol: any) => {
    if (InstanceStore.selectedInstance) {
      ProjectStore.getStrategySummary(
        InstanceStore.selectedInstance,
        ProjectStore.selectedProject?.domainId
      );
    }
  },
  { deep: true }
);

const changeOwner = async () => {
  if (!ProjectStore?.selectedProject) {
    console.error('Project not found');
    return;
  }
  await ProjectStore.changeOwner([ProjectStore.selectedProject], newProjectOwners.value)
    .then((res) => {
      if (res.every((_singleRes: any) => _singleRes === 'OK')) {
        NotificationStore.notify('Project successfully updated', '', {
          style: 'success'
        });
      } else {
        NotificationStore.notify(
          'Unable to update one or more projects',
          'Something went wrong: ask an operator',
          {
            style: 'error'
          }
        );
        console.error('Something went wrong updating one or more projects');
        // throw new Error('Something went wrong')
      }
    })
    .catch((err) => {
      NotificationStore.notify('Unable to update the business', err.message, {
        style: 'error'
      });
      console.error(err);
    })
    .finally(() => {
      modalChangeOwnerIsOpen.value = false;
      newProjectOwners.value = [];
      // dataGridProjects.value.instance.deselectAll();
    });
};

// CHANGE INSTANCE FEATURE
const modalChangeInstanceIsOpen = ref(false);
const suitableInstances = ref({});
// TODO: che forma ha?
const selectedNewInstance: any = ref(null);
const openModalChangeInstance = () => {
  modalChangeInstanceIsOpen.value = true;
  if (!ProjectStore?.selectedProject) {
    return;
  }
  suitableInstances.value = ProjectStore.getSuitableInstances([ProjectStore?.selectedProject]);
};
const onConfirmChangeInstance = async () => {
  const InstanceStore = useInstanceStore();
  if (!selectedNewInstance.value) {
    console.error('No instance selected');
    return;
  }

  if (!ProjectStore?.selectedProject) {
    console.error('Project not found');
    return;
  }
  await ProjectStore.changeInstance({
    ...selectedNewInstance.value,
    projectId: ProjectStore?.selectedProject?.id
  })
    .then(() => {
      NotificationStore.notify('Project successfully updated', '', {
        style: 'success'
      });
    })
    .catch((err) => {
      NotificationStore.notify('Unable to update the project', err.message, {
        style: 'error'
      });
      console.error(err);
    })
    .finally(async () => {
      modalChangeInstanceIsOpen.value = false;
      await InstanceStore.reloadApplicationData();
      alert("Aspetta 1 minuto e ricarica l' applicazione per vedere i nuovi cambiamenti");
    });
};

const removeInstance = async () => {
  if (!ProjectStore?.selectedProject) {
    console.error('Project not found');
    return;
  }
  await ProjectStore.changeInstance({
    apikbase: null,
    domainId: null,
    instanceId: null,
    projectId: ProjectStore?.selectedProject?.id
  })
    .then(() => {
      NotificationStore.notify('Project successfully updated', '', {
        style: 'success'
      });
    })
    .catch((err) => {
      NotificationStore.notify('Unable to update the project', err.message, {
        style: 'error'
      });
      console.error(err);
    })
    .finally(async () => {
      modalChangeInstanceIsOpen.value = false;
      await InstanceStore.reloadApplicationData();
      alert("Aspetta 1 minuto e ricarica l' applicazione per vedere i nuovi cambiamenti");
    });
};

const openModalNewAudit = () => {
  router.push({
    name: 'ProjectNewAudit',
    params: {
      id: ProjectStore.selectedProject?.slug
    }
  });
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="
        InstanceStore.isLoadingInstances ||
        InstanceStore.isInizializingApplication ||
        ProjectStore.isLoadingProjects
      "
      class="col-span-full">
      <BaseApplicationLoader />
    </div>
    <div v-else-if="InstanceStore.instances && ProjectStore.selectedProject" class="col-span-full">
      <BaseBreadcrumb :title="ProjectStore.selectedProject.label" :items="items" />
      <div class="grid grid-cols-3 gap-8 p-8">
        <div>
          <div>
            <div class="flex items-center justify-between mt-2 mb-2">
              <BaseTableTitle
                text="Base Info"
                @show-info="modaliInfoProjectIsOpen = true"
                :info="true" />
              <BaseIcon
                class="w-5 h-5 text-gray-500 cursor-pointer"
                name="ArrowPathIcon"
                @click="InstanceStore.reloadApplicationData()" />
            </div>
            <div class="p-8 space-y-8 border border-gray-200 rounded-sm">
              <div class="space-y-0.5 text-sm">
                <p>
                  <span class="mr-2 font-semibold">status</span>
                  <span
                    v-if="ProjectStore.selectedProject.status === 0"
                    label="Completed"
                    color="gray"
                    >Completed</span
                  >
                  <span
                    v-else-if="ProjectStore.selectedProject.status === 7"
                    label="Queued"
                    color="yellow"
                    >Queued</span
                  >
                  <span
                    v-else-if="ProjectStore.selectedProject.status > 0"
                    label="Crawling"
                    class="font-bold text-green-600"
                    >Crawling</span
                  >
                  <span v-else label="Error" color="red">Error</span>
                </p>
                <p class="truncate">
                  <span class="mr-2 font-semibold">id</span>{{ ProjectStore.selectedProject.id }}
                </p>
                <p class="truncate">
                  <span class="mr-2 font-semibold">label</span
                  >{{ ProjectStore.selectedProject.label }}
                </p>
                <p class="truncate">
                  <span class="mr-2 font-semibold">URL</span
                  >{{ ProjectStore.selectedProject.seedUrl }}
                </p>

                <p>
                  <span class="mr-2 font-semibold">instance</span>
                  <BaseTableInternalLink
                    v-if="ProjectStore.selectedProject.instanceId"
                    as="span"
                    resource="Instance"
                    underlined
                    :resourceId="ProjectStore.selectedProject.instanceId" />
                  <span class="text-orange-600" v-else> N/D </span>
                </p>

                <p
                  v-if="
                    ProjectStore.selectedProject.instanceId &&
                    ProjectStore.selectedProject.domainData?.domainListed
                  ">
                  <span class="mr-2 font-semibold">locale</span
                  >{{ ProjectStore.selectedProject.domainData?.domainListed ?? 'Missing' }}
                </p>
                <p v-if="ProjectStore.selectedProject.domainId">
                  <span class="mr-2 font-semibold">domain ID</span
                  >{{ ProjectStore.selectedProject.domainId ?? 'Missing' }}
                </p>
                <p>
                  <span class="mr-2 font-semibold">owners</span>
                  <span
                    v-if="
                      ProjectStore.selectedProject.businessesIds &&
                      ProjectStore.selectedProject.businessesIds.length !== 0
                    ">
                    <span
                      class="space-x-2"
                      v-for="(owner, i) in ProjectStore.selectedProject.businessesIds"
                      :key="i + owner">
                      <BaseTableInternalLink
                        v-if="owner"
                        as="span"
                        resource="Business"
                        underlined
                        :resourceId="owner" />
                    </span>
                  </span>
                  <span class="text-orange-600" v-else> N/D </span>
                </p>
                <p v-if="ProjectStore.selectedProject.status === 0">
                  <span
                    class="mr-2 font-semibold underline cursor-pointer"
                    @click="modelLastSettingsIsOpen = true"
                    >last audit settings</span
                  >
                </p>
              </div>
              <div
                v-if="ProjectStore.selectedProject.status === 0"
                class="flex flex-wrap items-center gap-4">
                <BaseButton
                  v-if="!ProjectStore.selectedProject.instanceId"
                  kind="tertiary"
                  size="sm"
                  @click="openModalChangeInstance">
                  {{
                    !ProjectStore.selectedProject.instanceId ? 'Add Instance' : 'Change Instance'
                  }}
                </BaseButton>
                <BaseButton v-else kind="ghost" size="sm" @click="removeInstance">
                  Remove Instance
                </BaseButton>
                <BaseButton kind="tertiary" size="sm" @click="openModalChangeOwner">
                  {{
                    ProjectStore.selectedProject.businessesIds.length === 0
                      ? 'Add Owner(s)'
                      : 'Change Owner(s)'
                  }}
                </BaseButton>
                <BaseButton kind="primary" size="sm" @click="openModalNewAudit" icon="PlusIcon">
                  New Audit
                </BaseButton>
              </div>
            </div>
          </div>
          <div
            class="mt-8"
            v-if="
              ProjectStore.selectedProject.crawls &&
              Object.values(ProjectStore.selectedProject.crawls).length > 0
            ">
            <h3 class="flex items-baseline mb-2 text-gray-500">
              <BaseTableTitle text="Audits" />
              <span class="ml-auto text-xs"
                >tot: {{ Object.values(ProjectStore.selectedProject.crawls).length }}</span
              >
              <span
                class="ml-2 text-xs text-red-600"
                v-if="
                  ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                  Object.values(ProjectStore.selectedProject.crawls).some((el) => {
                    return isEmpty(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[el.id]);
                  })
                "
                >broken:
                {{
                  ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                  Object.values(ProjectStore.selectedProject.crawls).filter((el) =>
                    isEmpty(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[el.id])
                  ).length
                }}</span
              >
            </h3>
            <div
              class="p-8 space-y-8 border border-gray-200 rounded-sm max-h-[300px] overflow-y-scroll">
              <div
                style="grid-template-columns: repeat(4, max-content) 1fr"
                class="grid gap-1.5 text-sm items-center">
                <!-- <div
                  class="text-red-600 col-span-full"
                  v-if="
                    Object.keys(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero).some(
                      (el) => el === '0'
                    )
                  ">
                  Critical Error: exist crawls with id = 0
                </div> -->
                <div
                  style="display: contents"
                  class="flex items-center bg-red-500 cursor-pointer"
                  :class="
                    ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                    isEmpty(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[crawl.id])
                      ? 'text-red-600'
                      : ''
                  "
                  v-for="crawl in reverse(
                    Object.values(ProjectStore.selectedProject.crawls ?? {}) ?? []
                  )"
                  :key="crawl.id"
                  @click="checkCrawl(crawl.id)">
                  <p style="display: contents" v-if="crawl && crawl.dateUI">
                    <span>{{ crawl.dateUI.monthDay }}</span
                    ><span>{{ crawl.dateUI.year }}</span
                    ><span>{{ crawl.dateUI.time }}</span>
                    <span>{{ crawl.dateUI.time2 }}</span>
                    <span
                      class="inline-flex items-baseline text-xs"
                      v-if="
                        ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                        isEmpty(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[crawl.id])
                      "
                      >• ID: <span class="font-medium">{{ crawl.id }}</span></span
                    >
                    <span class="p-1 rounded-md justify-self-end hover:bg-gray-200" v-else
                      ><BaseIcon class="w-3 h-3 text-blue-600" name="ArrowRightIcon"
                    /></span>
                  </p>
                </div>
              </div>
            </div>
            <div
              v-if="
                ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                Object.values(ProjectStore.selectedProject.crawls).some((el) => {
                  return isEmpty(ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[el.id]);
                })
              ">
              <BaseMessage kind="warning" class="mt-4">
                <div class="text-xs">
                  If a crawl is broken communicate the audit date and the audit ID to
                  <a class="underline" href="mailto:roberto.pellagatti@kleecks.com"
                    >Roberto Pellagatti</a
                  >. He will decide then if the crawl is to be deleted or not.
                </div>
              </BaseMessage>
            </div>
            <!-- <json-viewer :value="ProjectStore.issuesOfAllCrawlsByProjectWithNoZero"></json-viewer> -->
          </div>
        </div>
        <!-- seconda colonna -->
        <div class="col-span-2">
          <div>
            <template v-if="ProjectStore.selectedProject.status === 0">
              <h3
                v-if="ProjectStore.selectedCrawl"
                class="flex items-baseline gap-2 mt-2 mb-3 text-gray-500">
                <BaseTableTitle
                  class="font-semibold"
                  :text="'Audit ' + ProjectStore.selectedCrawl.date" />
                <span
                  class="text-xs text-red-600 uppercase"
                  v-show="
                    ProjectStore.issuesOfAllCrawlsByProjectWithNoZero &&
                    isEmpty(
                      ProjectStore.issuesOfAllCrawlsByProjectWithNoZero[
                        ProjectStore.selectedCrawl?.id ?? ''
                      ]
                    )
                  "
                  >Broken</span
                >
                <span class="ml-auto text-xs text-gray-500 uppercase"
                  >ID: {{ ProjectStore.selectedCrawl.id }}</span
                >
              </h3>
              <div
                v-if="ProjectStore.selectedCrawl"
                class="grid grid-cols-2 gap-8 border-t border-gray-200 kl-table-inpage">
                <div
                  v-if="
                    ProjectStore.newCrawlsStats &&
                    ProjectStore.selectedCrawl &&
                    ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id]
                  "
                  class="col-span-2 mt-8">
                  <!-- newCrawlsStats -->
                  <div class="flex flex-wrap gap-4 text-sm">
                    <p>
                      <span class="font-semibold">URLs: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].crawledUrls }}
                    </p>
                    <p>
                      <span class="font-semibold">HTML: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].mimeHTML }}
                    </p>
                    <p>
                      <span class="font-semibold">JS: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].mimeJs }}
                    </p>
                    <p>
                      <span class="font-semibold">CSS: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].mimeCSS }}
                    </p>
                    <p>
                      <span class="font-semibold">Images: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].mimeIMAGE }}
                    </p>
                    <p>
                      <span class="font-semibold">2XX: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].status200 }}
                    </p>
                    <p>
                      <span class="font-semibold">3XX: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].status300 }}
                    </p>
                    <p>
                      <span class="font-semibold">4XX: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].status400 }}
                    </p>
                    <p>
                      <span class="font-semibold">5XX: </span
                      >{{ ProjectStore.newCrawlsStats[ProjectStore.selectedCrawl.id].status500 }}
                    </p>
                  </div>
                </div>
                <table-issues-by-type type="errors" />
                <table-issues-by-type type="warnings" />
                <!-- <table-issues-by-type v-if="ProjectStore.selectedCrawl" type="warnings" /> -->
                <!-- <json-viewer
                v-if="ProjectStore.selectedCrawl"
                :value="ProjectStore.selectedCrawl"></json-viewer>
              <json-viewer
                v-if="ProjectStore.selectedCrawl"
                :value="ProjectStore.crawlIssuesByTypes"></json-viewer>
              <json-viewer :value="ProjectStore.issuesOfAllCrawlsByProjectWithNoZero"></json-viewer> -->
              </div>
            </template>
            <template v-else>
              <h3
                class="flex items-baseline gap-2 pb-3 mt-2 mb-3 text-gray-500 border-b border-gray-200">
                <BaseTableTitle
                  class="font-semibold"
                  text="Audit is crawling - come back when finished" />
              </h3>
            </template>
            <div class="mt-8" v-if="ProjectStore.selectedProject.instanceId">
              <div class="flex items-center pb-2 mb-3 space-x-2 border-b border-gray-200">
                <BaseTableTitle class="font-semibold" text="Strategy" />
                <BaseIcon
                  class="w-5 h-5 text-gray-500 cursor-pointer"
                  name="ArrowPathIcon"
                  @click="
                    ProjectStore.getStrategySummary(
                      InstanceStore.selectedInstance,
                      ProjectStore.selectedProject.domainId
                    )
                  " />
              </div>
              <div v-if="ProjectStore.strategyIsLoading" class="col-span-full">
                <div class="text-sm text-gray-600 uppercase col-span-full animate-pulse">
                  Loading Strategy Data - It could take a while...
                </div>
              </div>
              <div v-else>
                <BaseMessage
                  v-if="
                    InstanceStore.selectedInstance &&
                    (InstanceStore.selectedInstance.node?.includes('ofservices') ||
                      InstanceStore.selectedInstance.node?.includes('ogservices') ||
                      InstanceStore.selectedInstance.node?.includes('ovhservices'))
                  "
                  kind="warning"
                  class="mb-4">
                  <div class="text-xs">
                    Questo Project è associato a un'istanza che si trova ancora sui vecchi Server. I
                    dati ritornati la prima volta potrebbe esserre corrotti. È consigliato fare un
                    refresh dei dati della Strategy.
                    <p class="mt-2">
                      <BaseButton
                        kind="secondary"
                        size="sm"
                        icon="ArrowPathIcon"
                        @click="
                          ProjectStore.getStrategySummary(
                            InstanceStore.selectedInstance,
                            ProjectStore.selectedProject.domainId
                          )
                        ">
                        Refresh
                      </BaseButton>
                    </p>
                  </div>
                </BaseMessage>
                <div class="text-sm space-y-0.5">
                  <p class="flex items-center gap-2">
                    <span class="">Strategy Data</span>
                    <span class="text-green-600" v-if="ProjectStore.strategy.summary">OK</span>
                    <span class="text-red-600" v-else>Missing</span>
                    <!-- <json-viewer :value="ProjectStore.strategy.summary"></json-viewer> -->
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="">Strategy Last Crawl</span>
                    <span class="text-green-600" v-if="ProjectStore.strategy.dates">{{
                      ProjectStore.strategy.dates[0]
                    }}</span>
                    <span class="text-red-600" v-else>Missing</span>
                    <!-- <json-viewer :value="ProjectStore.strategy.dates"></json-viewer> -->
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="">Keywords Uploaded</span>
                    <span
                      class="text-green-600"
                      v-if="
                        ProjectStore.strategy.basket &&
                        Array.isArray(ProjectStore.strategy.basket) &&
                        ProjectStore.strategy.basket.some((el: any) => el.source === 'USER')
                      "
                      >OK</span
                    >
                    <span class="text-red-600" v-else>Missing</span>
                    <!-- <json-viewer :value="ProjectStore.strategy.basket"></json-viewer> -->
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="">Competitors Uploaded</span>
                    <span class="text-green-600" v-if="ProjectStore.strategy.competitors">OK</span>
                    <span class="text-red-600" v-else>Missing</span>
                    <!-- <json-viewer :value="ProjectStore.strategy.competitors"></json-viewer> -->
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="">Backlinks Data</span>
                    <span class="text-green-600" v-if="ProjectStore.strategy.backlinks">OK</span>
                    <span class="text-red-600" v-else>Missing</span>
                    <!-- <json-viewer :value="ProjectStore.strategy.backlinks"></json-viewer> -->
                  </p>
                </div>
                <BaseMessage
                  v-if="!ProjectStore.strategyIsLoading && ProjectStore.strategy.dates"
                  kind="info"
                  class="mt-4">
                  <div class="text-xs">
                    Solitamente i dati della Strategy vengono raccolti una volta al mese. Se vedi
                    che la data dell'ultimo crawl della strategy è vecchia, contattare
                    <a class="underline" href="mailto:luca.manigrasso@kleecks.com"
                      >Luca Manigrasso</a
                    >
                    o
                    <a class="underline" href="mailto:marco.barichevich@kleecks.com"
                      >Marco Baricevic</a
                    >
                    per eseguire un nuovo crawl. Una volta che il crawl è finito è necessario
                    <span class="underline cursor-pointer" @click="modaliInfoProjectIsOpen = true"
                      >pulire manualmente le cache del Project</span
                    >
                    per poter vedere i nuovi dati in Kleecks 4
                  </div>
                </BaseMessage>
                <BaseMessage
                  v-if="
                    !ProjectStore.strategyIsLoading &&
                    (!ProjectStore.strategy.basket || !ProjectStore.strategy.competitors)
                  "
                  kind="warning"
                  class="mt-4">
                  <div class="text-xs">
                    Le keyword non sono state caricate o i competitor non sono stati caricati.
                    Assicurarsi che la Strategia del cliente sia stata definita, quindi caricate le
                    Keyword e i competitor in Kleecks 4 o da DB e contattate
                    <a class="underline" href="mailto:luca.manigrasso@kleecks.com"
                      >Luca Manigrasso</a
                    >
                    o
                    <a class="underline" href="mailto:marco.barichevich@kleecks.com"
                      >Marco Baricevic</a
                    >
                    per far girare il crawl della Strategy. Una volta che il crawl è finito è
                    necessario
                    <span class="underline cursor-pointer" @click="modaliInfoProjectIsOpen = true"
                      >pulire manualmente le cache del Project</span
                    >
                    per poter vedere i nuovi dati in Kleecks 4
                  </div>
                </BaseMessage>
              </div>
            </div>
          </div>
          <!-- <json-viewer :value="ProjectStore.selectedProject"></json-viewer> -->
        </div>
      </div>
    </div>
    <div v-else class="col-span-full">
      <BaseBreadcrumb title="Error" :items="items" />
      <div>
        <json-viewer :value="ProjectStore.selectedProject"></json-viewer>
      </div>
    </div>
  </div>
  <BaseDialog
    :open="modalChangeOwnerIsOpen"
    title="Change project ownership"
    isMedium
    :disableConfirm="newProjectOwners.length === 0"
    @cancel="(modalChangeOwnerIsOpen = false), (newProjectOwners = [])"
    @confirm="changeOwner">
    <template #default>
      <div>
        <p class="mb-1 text-sm text-gray-700">Owners</p>
        <DxTagBox
          v-model="newProjectOwners"
          :items="BusinessStore.businessesLabels"
          :search-enabled="true" />
      </div>
    </template>
  </BaseDialog>
  <BaseDialog
    :open="modalChangeInstanceIsOpen"
    isLarge
    title="Change project instance"
    :disableConfirm="false"
    @cancel="modalChangeInstanceIsOpen = false"
    @confirm="onConfirmChangeInstance"
    @after-leave="selectedNewInstance = null">
    <template #default>
      <p
        class="mb-8 text-red-500"
        v-if="!ProjectStore.selectedProject || !ProjectStore.selectedProject.domainData">
        Domain Data not available (this cound mean that the project is associated with a domain that
        does not exist)
      </p>
      <BaseMessage kind="warning" class="mt-4 mb-4">
        <div class="text-xs">
          Questa operazione può richiedere fino a 10 minuti. Aspettare e ricaricare l'applicazione
          una volta cambiata l'istanza.
        </div>
      </BaseMessage>
      <ul class="space-y-8" v-if="suitableInstances">
        <li :key="key" v-for="(list, key) in suitableInstances">
          <p class="mb-2 font-semibold uppercase">{{ key }}</p>
          <ul class="grid grid-cols-3 gap-8">
            <li
              class="relative p-4 border border-gray-300 rounded-md cursor-pointer hover:outline outline-indigo-500"
              :class="{
                'outline outline-4':
                  selectedNewInstance &&
                  selectedNewInstance.domainListed === (item as any).domainListed &&
                  selectedNewInstance.instanceId === (item as any).instanceId
              }"
              v-for="item in list"
              :key="(item as any).id"
              @click="selectedNewInstance = item">
              <template v-if="item && (item as any).domainListed">
                <p>{{ (item as any).domainListed }} - {{ (item as any).id }}</p>
                <span
                  class="text-red-500"
                  v-if="
                    ProjectStore.selectedProject &&
                    ProjectStore.selectedProject.domainData &&
                    ProjectStore.selectedProject.domainData.domainListed ===
                      (item as any).domainListed &&
                    ProjectStore.selectedProject.instanceId === (item as any).instanceId
                  "
                  >Current</span
                >
              </template>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </BaseDialog>
  <BaseDialog
    @cancel="modaliInfoProjectIsOpen = false"
    :open="modaliInfoProjectIsOpen"
    title="Project Documentation"
    just-text
    isLarge>
    <template #default><ProjectInfo /></template>
  </BaseDialog>
  <BaseDialog
    @cancel="modelLastSettingsIsOpen = false"
    :open="modelLastSettingsIsOpen"
    title="Last Audit Settings"
    just-text
    isLarge>
    <template #default>
      <div
        v-if="
          ProjectStore.selectedProject &&
          ProjectStore.selectedProject?.crawls &&
          Object.values(ProjectStore.selectedProject?.crawls).length > 0
        ">
        <AuditSettingsRead
          :audit-settings="
            Object.values(ProjectStore.selectedProject.crawls)[
              Object.values(ProjectStore.selectedProject?.crawls).length - 1
            ]?.settings
          "></AuditSettingsRead>
      </div>
    </template>
  </BaseDialog>
</template>
