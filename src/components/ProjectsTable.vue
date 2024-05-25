<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  DxDataGrid,
  DxSearchPanel,
  DxSorting,
  DxFilterRow,
  DxLoadPanel,
  DxHeaderFilter,
  DxPager,
  DxPaging,
  DxToolbar,
  DxItem,
  DxColumnChooser
} from 'devextreme-vue/data-grid';
import useDxDataGrid from '@/composables/useDxDataGrid';
import DxTagBox from 'devextreme-vue/tag-box';
import { useProjectStore } from '@/stores/ProjectStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useBusinessStore } from '@/stores/BusinessStore';
import { useNotificationStore } from '@/stores/NotificationStore';
import ProjectInfo from './ProjectInfo.vue';
import type { Project } from '@/models';
const { onContentReady } = useDxDataGrid();
const NotificationStore = useNotificationStore();
const emit = defineEmits(['show-preview', 'create', 'open-project-audit', 'clean-cache']);
const modalChangeOwnerIsOpen = ref(false);
const modalChangeInstanceIsOpen = ref(false);
const BusinessStore = useBusinessStore();
const ProjectStore = useProjectStore();

const props = defineProps({
  projects: {
    type: Object,
    required: true
  },
  selectedProject: {
    type: Object,
    required: false
  },
  internalType: {
    type: String,
    required: false
  }
});

// SELECTION FEATURE
// TODO: Extract in composable
const dataGridProjects = ref(null as any);
const selectedProjects: any = ref([]);
const onSelectionChanged = (e: any) => {
  selectedProjects.value = e.selectedRowsData;
};
const modaliInfoProjectIsOpen = ref(false);

// CHANGE INSTANCE FEATURE
const suitableInstances = ref({});
const selectedNewInstance: any = ref(null);
const openModalChangeInstance = () => {
  modalChangeInstanceIsOpen.value = true;
  suitableInstances.value = ProjectStore.getSuitableInstances(selectedProjects.value);
};
const onConfirmChangeInstance = async () => {
  const InstanceStore = useInstanceStore();
  await ProjectStore.changeInstance({
    ...selectedNewInstance.value,
    projectId: selectedProjects.value[0].id
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
    .finally(() => {
      modalChangeInstanceIsOpen.value = false;
      InstanceStore.reloadApplicationData();
    });
};

// CHANGE OWNER FEATURE
const newProjectOwners = ref([]);
const openModalChangeOwner = () => {
  modalChangeOwnerIsOpen.value = true;
};

const changeOwner = async () => {
  await ProjectStore.changeOwner(selectedProjects.value, newProjectOwners.value)
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
      dataGridProjects.value.instance.deselectAll();
    });
};

const columns = computed(() => {
  return [
    {
      caption: 'Id',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      visible: false
    },

    {
      caption: 'Label',
      dataField: 'label',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'projectTemplate'
    },
    {
      caption: 'Instance',
      dataField: 'instanceId',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'instanceTemplate',
      visible: props.internalType ? false : true
    },
    {
      caption: 'Businesses',
      dataField: 'businessesIds',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'businessTemplate',
      calculateCellValue: function (data: Project): string {
        return data?.businessesIds.toString() ?? '';
      },
      filterOperations: ['contains', 'notcontains']
    },
    {
      caption: 'Total Crawls',
      dataField: 'crawlsTotal',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'totTemplate'
    },
    {
      caption: 'Date',
      dataField: 'lastCrawlDate',
      dataType: 'date',
      sortIndex: 1,
      sortOrder: 'desc',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'dateTemplate'
    },
    {
      caption: 'Status',
      dataField: 'status',
      dataType: 'string',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      alignment: 'center',
      cellTemplate: 'statusTemplate',
      calculateDisplayValue: function (data: Project): Record<string, string> {
        if (data.status === 0) return { text: 'Completed', color: 'gray' };
        if (data.status === 7) return { text: 'Queued', color: 'yellow' };
        if (data.status > 0) return { text: 'Crawling', color: 'green' };
        return { text: 'Error', color: 'red' };
      },
      calculateCellValue: function (data: Project): number {
        if (data.status === 0) return 0;
        if (data.status === 7) return 1;
        if (data.status > 0) return 2;
        return -1;
      },
      headerFilter: {
        dataSource: function (data: any) {
          data.dataSource.postProcess = function () {
            return [
              {
                text: 'Completed',
                value: 0
              },
              {
                text: 'Queued',
                value: 1
              },
              {
                text: 'Crawling',
                value: 2
              },
              {
                text: 'Error',
                value: -1
              }
            ];
          };
        }
      }
    },
    {
      caption: 'Clean cache',
      dataField: '',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      visible: true,
      cellTemplate: 'cleanCacheTemplate',
      alignment: 'center',
      width: '140'
    }
  ];
});
</script>
<template>
  <div>
    <DxDataGrid
      class="kl-dataGrid"
      ref="dataGridProjects"
      :data-source="projects"
      :columns="columns"
      key-expr="id"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      :show-borders="true"
      :show-row-lines="true"
      :show-column-lines="true"
      :hover-state-enabled="false"
      :row-alternation-enabled="false"
      :onContentReady="onContentReady"
      @selectionChanged="onSelectionChanged">
      <DxToolbar>
        <DxItem location="before" template="titleTemplate" />
        <DxItem name="columnChooserButton" />
      </DxToolbar>

      <template #businessTemplate="{ data }">
        <ul v-if="data.data.businessesIds && data.data.businessesIds.length > 0">
          <BaseTableInternalLink
            v-for="businessId in data.data.businessesIds"
            :key="businessId"
            resource="Business"
            :resourceId="businessId" />
        </ul>
      </template>
      <template #projectTemplate="{ data }">
        <BaseTableInternalLink
          v-if="data.data.id"
          as="p"
          resource="Project"
          :resourceLabel="data.data.label"
          :resourceId="data.data.id" />
      </template>
      <template #instanceTemplate="{ data }">
        <BaseTableInternalLink
          v-if="data.data.instanceId"
          as="p"
          resource="Instance"
          :resourceId="data.data.instanceId" />
      </template>
      <template #totTemplate="{ data }">
        <span v-show="data.data.status === 0">{{ data.data.crawlsTotal }}</span>
      </template>
      <template #dateTemplate="{ data }">
        <span v-show="data.data.status === 0">{{ data.data.lastCrawlDate }}</span>
      </template>
      <template #statusTemplate="{ data }">
        <BaseBadge :label="data.displayValue.text" :color="data.displayValue.color" />
      </template>
      <template #cleanCacheTemplate="{ data }">
        <BaseButton
          v-if="data.data.domainId && data.data.instanceId"
          @click="() => emit('clean-cache', data.data)"
          kind="tertiary"
          size="sm">
          Clean Cache
        </BaseButton>
      </template>
      <template #actionsTemplate="{ data }">
        <BaseButton
          @click="() => emit('open-project-audit', data.data)"
          kind="ghost"
          size="sm"
          icon="ChartPieIcon">
        </BaseButton>
        <!-- <BaseButton
          @click="console.log(data.data)"
          kind="ghost"
          size="sm"
          icon="EllipsisVerticalIcon">
        </BaseButton> -->
      </template>
      <template #titleTemplate>
        <div class="flex items-center">
          <BaseTableTitle
            @show-info="modaliInfoProjectIsOpen = true"
            :info="true"
            text="Projects" />
          <div class="flex ml-4 space-x-4">
            <BaseButton
              v-if="selectedProjects.length >= 1"
              kind="tertiary"
              size="sm"
              :disabled="selectedProjects.length === 0"
              @click="openModalChangeOwner">
              Change Owner
            </BaseButton>
            <BaseButton
              v-if="selectedProjects.length === 1"
              kind="tertiary"
              size="sm"
              :disabled="selectedProjects.length === 0"
              @click="openModalChangeInstance">
              Change Instance
            </BaseButton>
            <BaseTooltip text="Create New Project" v-if="props.internalType ? false : true">
              <BaseButton kind="primary" size="sm" @click="emit('create')" icon="PlusIcon">
                New
              </BaseButton>
            </BaseTooltip>
          </div>
        </div>
      </template>
      <!-- <template #auditTemplate="{ data }">
        <span class="text-xs text-blue-600 uppercase cursor-pointer" @click="showAudit(data)"
          >audit</span
        >
      </template>
      <template #strategyTemplate="{ data }">
        <span
          v-if="data.data.instanceId"
          class="text-xs text-blue-600 uppercase cursor-pointer"
          @click="showStrategy(data)"
          >strategy</span
        >
      </template>
       -->
      <DxColumnChooser :enabled="true" mode="select" :search="{ enabled: true }" :height="600" />
      <DxPaging :page-size="50" />
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
      <DxSorting mode="multiple" />
      <DxFilterRow :visible="true" />
      <DxHeaderFilter :visible="true" />
      <!-- <DxSelection select-all-mode="allPages" show-check-boxes-mode="always" mode="multiple" /> -->
      <DxLoadPanel :enabled="true" text="" :show-pane="false" />
      <DxPager
        :allowed-page-sizes="[5, 10, 20, 30, 40, 50]"
        :show-info="true"
        :show-navigation-buttons="true"
        :show-page-size-selector="true"
        :visible="true" />
    </DxDataGrid>
    <BaseDialog
      :open="modalChangeOwnerIsOpen"
      title="Change project ownership"
      :disableConfirm="newProjectOwners.length === 0"
      @cancel="(modalChangeOwnerIsOpen = false), (newProjectOwners = [])"
      @confirm="changeOwner">
      <template #default>
        <DxTagBox
          class="my-12"
          v-model="newProjectOwners"
          :items="BusinessStore.businessesLabels"
          :search-enabled="true" />
      </template>
    </BaseDialog>
    <BaseDialog
      :open="modalChangeInstanceIsOpen"
      isLarge
      title="Change project instance"
      :disableConfirm="false"
      @cancel="modalChangeInstanceIsOpen = false"
      @confirm="onConfirmChangeInstance"
      @after-leave="(selectedNewInstance = null), dataGridProjects.instance.deselectAll()">
      <template #default>
        <p class="mb-8 text-red-500" v-if="!selectedProjects[0].domainData">
          Domain Data not available (this cound mean that the project is associated with a domain
          that does not exist)
        </p>
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
                      selectedProjects[0].domainData &&
                      selectedProjects[0].domainData.domainListed === (item as any).domainListed &&
                      selectedProjects[0].instanceId === (item as any).instanceId
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
  </div>
</template>
