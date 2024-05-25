<script setup lang="ts">
import { computed, ref } from 'vue';
import useDxDataGrid from '@/composables/useDxDataGrid';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import InstanceInfo from '@/components/InstanceInfo.vue';
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
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { usePopper } from '@/composables/usePopper';
import type { Instance } from '@/models';
export interface InstancesTableProps {
  instances: (Instance | undefined)[];
  internalType?: string;
}
defineProps<InstancesTableProps>();

const { onContentReady } = useDxDataGrid();

const [trigger, container] = usePopper({
  placement: 'bottom-end',
  strategy: 'fixed',
  modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
});

const columns = computed(() => {
  return [
    {
      caption: 'id',
      dataField: 'instanceId',
      dataType: 'string',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'instanceTemplate'
    },
    {
      caption: 'Is Enabled',
      dataField: 'isEnabled',
      dataType: 'boolean',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      width: '200'
    },
    {
      caption: 'Projects',
      dataField: 'projects',
      dataType: 'number',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'projectsTemplate'
    },
    {
      caption: 'Businesses',
      dataField: 'businessesIds',
      dataType: 'string',
      allowSorting: false,
      allowHeaderFiltering: true,
      allowFiltering: true,
      cellTemplate: 'businessesTemplate',
      calculateCellValue: (rowData: any) => {
        return rowData.businessesIds.toString();
      },
      filterOperations: ['contains', 'notcontains']
    },
    {
      caption: 'Server',
      dataField: 'node',
      dataType: 'string',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: true
    }
  ];
});
const instanceInfoIsOpen = ref(false);
</script>
<template>
  <DxDataGrid
    class="kl-dataGrid"
    :data-source="instances"
    :columns="columns"
    key-expr="id"
    :allow-column-reordering="true"
    :allow-column-resizing="true"
    :column-auto-width="true"
    :show-borders="true"
    :show-row-lines="true"
    :show-column-lines="true"
    :hover-state-enabled="true"
    :row-alternation-enabled="false"
    :onContentReady="onContentReady">
    <template #instanceTemplate="{ data }">
      <BaseTableInternalLink as="div" resource="Instance" :resourceId="data.value" />
    </template>
    <template #businessesTemplate="{ data }">
      <ul v-if="data.data.businessesIds && data.data.businessesIds.length > 0">
        <BaseTableInternalLink
          v-for="businessId in data.data.businessesIds"
          :key="businessId"
          as="li"
          resource="Business"
          :resourceId="businessId" />
      </ul>
    </template>
    <DxToolbar>
      <DxItem location="before" template="titleTemplate" />
      <DxItem location="after" template="actionTemplate" />
      <DxItem name="searchPanel" />
      <DxItem name="columnChooserButton" />
    </DxToolbar>
    <template #titleTemplate>
      <div class="flex items-center">
        <BaseTableTitle @show-info="instanceInfoIsOpen = true" :info="true" text="Instances" />
      </div>
    </template>
    <template #actionTemplate>
      <div class="inline-block mr-2 space-x-4">
        <div class="inline-flex items-center"></div>
        <div class="inline-flex items-center"></div>
      </div>
    </template>
    <template #projectsTemplate="{ data }">
      <Popover>
        <PopoverButton
          class="w-full rounded-md focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none group"
          ref="trigger"
          ><span class="flex items-center justify-end"
            >{{ data.data?.projectsDetail?.length }}
            <ChevronDownIcon
              :class="
                data.data.projectsDetail && data.data.projectsDetail.length > 0 ? 'block' : 'hidden'
              "
              class="w-4 h-4 ml-0.5 text-indigo-600" /></span
        ></PopoverButton>
        <teleport to="body">
          <PopoverPanel ref="container" class="z-50 bg-white">
            <ul class="px-3 py-2 space-y-1 text-xs border border-gray-300 rounded-md shadow-md">
              <BaseTableInternalLink
                v-for="project in data.data.projectsDetail"
                :key="project.id"
                as="p"
                resource="Project"
                :resourceLabel="project.label"
                :resourceId="project.id" />
            </ul>
          </PopoverPanel>
        </teleport>
      </Popover>
    </template>
    <DxColumnChooser :enabled="true" mode="select" :search="{ enabled: true }" :height="600" />
    <DxPaging :page-size="internalType ? 5 : 50" />
    <DxSearchPanel :visible="false" :width="240" placeholder="Search..." />
    <DxSorting mode="multiple" />
    <DxFilterRow :visible="true" />
    <DxHeaderFilter :visible="true" />
    <DxLoadPanel :enabled="true" text="" :show-pane="false" />
    <DxPager
      :allowed-page-sizes="[5, 10, 20, 30, 40, 50]"
      :show-info="true"
      :show-navigation-buttons="true"
      :show-page-size-selector="true"
      :visible="true" />
  </DxDataGrid>
  <BaseDialog
    @cancel="instanceInfoIsOpen = false"
    :open="instanceInfoIsOpen"
    title="Instances Documentation"
    just-text
    isLarge>
    <template #default><InstanceInfo /></template>
  </BaseDialog>
</template>
