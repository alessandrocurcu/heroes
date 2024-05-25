<script setup lang="ts">
import { computed, ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
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
import useDxDataGrid from '@/composables/useDxDataGrid';
import BusinessInfo from '@/components/BusinessInfo.vue';
import type { Business } from '@/models';
import useRestrictions from '@/composables/useRestrictions';
export interface BusinessesTableProps {
  businesses: Business[];
}
defineProps<BusinessesTableProps>();
const { onContentReady, onSelectionChanged } = useDxDataGrid();
const dataGridBusinesses = ref(null as any);
const modalInfoIsOpen = ref(false);

const emit = defineEmits(['create']);
const { dxHeaderFilterRestrictionsDataSource } = useRestrictions();

const [trigger, container] = usePopper({
  placement: 'bottom-end',
  strategy: 'fixed',
  modifiers: [{ name: 'offset', options: { offset: [0, 10] } }]
});

const calculateFilterExpressionRestrictions = function (this: any, filterValue: any) {
  return [this.calculateCellValue, 'contains', filterValue];
};

const columns = computed(() => {
  return [
    {
      caption: 'Id',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true,
      cellTemplate: 'businessTemplate'
    },
    {
      caption: 'Label',
      dataField: 'label',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: false
    },
    {
      caption: 'Instances',
      dataField: 'instances',
      dataType: 'number',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'instancesTemplate',
      width: '100',
      visible: true
    },
    {
      caption: 'Users',
      dataField: 'users',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'usersTemplate'
    },
    {
      caption: 'Restrictions',
      dataField: 'permissions',
      cssClass: 'dx-datagrid-custom-wrap-column',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: true,
      width: '300',
      cellTemplate: 'restrictionsTemplate',
      calculateCellValue: function (data: any): string[] {
        const excludedKeys = [
          'setInstances',
          'numOfInstances',
          'writeTitlesAudit',
          'writeDescriptionsAudit',
          'writeTreeMan',
          'writeTreeStructRep',
          'writeStrategy',
          'writeBacklinks',
          'guestView'
        ];
        return Object.keys(data.permissions).filter(
          (key) => data.permissions[key] === true && !excludedKeys.includes(key)
        );
      },
      headerFilter: {
        dataSource: dxHeaderFilterRestrictionsDataSource
      },
      calculateFilterExpression: calculateFilterExpressionRestrictions
    }
    // {
    //   caption: 'Is Disabled',
    //   dataField: 'isDisabled',
    //   allowSorting: true,
    //   allowHeaderFiltering: true,
    //   allowFiltering: false,
    //   visible: false,
    // },
  ];
});
</script>

<template>
  <div>
    <DxDataGrid
      ref="dataGridBusinesses"
      class="kl-dataGrid"
      :data-source="businesses"
      :columns="columns"
      key-expr="id"
      :allow-column-resizing="true"
      :allow-column-reordering="true"
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
        <BaseTableInternalLink as="p" resource="Business" :resourceId="data.value" />
      </template>
      <template #usersTemplate="{ data }">
        <Popover>
          <PopoverButton
            class="w-full rounded-md focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none group"
            ref="trigger"
            ><span class="flex items-center justify-end"
              >{{ data.data?.users?.length }}
              <!-- hidden group-hover:inline-block group-focus-visible:inline-bloc -->
              <ChevronDownIcon
                :class="data.data.users && data.data.users.length > 0 ? 'block' : 'hidden'"
                class="w-4 h-4 ml-0.5 text-indigo-600" /></span
          ></PopoverButton>
          <teleport to="body">
            <PopoverPanel ref="container" class="z-50 bg-white">
              <ul class="px-3 py-2 space-y-1 text-xs border border-gray-300 rounded-md shadow-md">
                <BaseTableInternalLink
                  v-for="user in data.data.users"
                  :key="user.id"
                  as="li"
                  resource="User"
                  :resourceLabel="user.label"
                  :resourceId="user.id" />
              </ul>
            </PopoverPanel>
          </teleport>
        </Popover>
      </template>
      <template #instancesTemplate="{ data }">
        <Popover>
          <PopoverButton
            class="w-full rounded-md focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none group"
            ref="trigger"
            ><span class="flex items-center justify-end"
              >{{ data.data?.instances?.length }}
              <!-- hidden group-hover:inline-block group-focus-visible:inline-block -->
              <ChevronDownIcon
                :class="data.data.instances && data.data?.instances.length > 0 ? 'block' : 'hidden'"
                class="w-4 h-4 ml-0.5 text-indigo-600" /></span
          ></PopoverButton>
          <teleport to="body">
            <PopoverPanel ref="container" class="z-50 bg-white">
              <ul class="px-3 py-2 space-y-1 text-xs border border-gray-300 rounded-md shadow-md">
                <BaseTableInternalLink
                  v-for="instance in data.data.instances"
                  :key="instance.instanceId"
                  as="li"
                  resource="Instance"
                  :resourceId="instance.instanceId" />
              </ul>
            </PopoverPanel>
          </teleport>
        </Popover>
      </template>
      <template #titleTemplate>
        <div class="flex items-center">
          <BaseTableTitle @show-info="modalInfoIsOpen = true" :info="true" text="Businesses" />
          <div class="flex gap-4 ml-4 space-x-4">
            <BaseTooltip text="Create New Business">
              <BaseButton kind="primary" size="sm" @click="emit('create')" icon="PlusIcon">
                New
              </BaseButton>
            </BaseTooltip>
          </div>
        </div>
      </template>
      <template #restrictionsTemplate="{ data }">
        <div class="flex flex-wrap gap-2 text-xs">
          <span
            v-for="restrictionDataFilter in dxHeaderFilterRestrictionsDataSource"
            :key="restrictionDataFilter.value"
            class="px-2 py-0.5 bg-gray-100 rounded-lg"
            :class="{
              'bg-pink-50': restrictionDataFilter.text === 'Access Seo Tech',
              'bg-lime-50': restrictionDataFilter.text === 'Access Seo Tool',
              'bg-rose-50': restrictionDataFilter.text === 'Run Audit',
              'bg-yellow-50': restrictionDataFilter.text === 'Accessibility',
              'bg-red-50': restrictionDataFilter.text === 'Only Strategy',
              'bg-purple-50': restrictionDataFilter.text === 'Content Generation'
            }"
            v-show="data.data.permissions[restrictionDataFilter.value]"
            >{{ restrictionDataFilter.text }}
          </span>
        </div>
      </template>
      <DxColumnChooser :enabled="true" mode="select" :search="{ enabled: true }" :height="600" />
      <DxPaging :page-size="50" />
      <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
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
      @cancel="modalInfoIsOpen = false"
      :open="modalInfoIsOpen"
      title="Business Documentation"
      just-text
      isLarge>
      <template #default><BusinessInfo /></template>
    </BaseDialog>
  </div>
</template>
