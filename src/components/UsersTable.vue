<script setup lang="ts">
import { computed, ref } from 'vue';
import type { User } from '@/models';
import useDxDataGrid from '@/composables/useDxDataGrid';
import { useClipboard } from '@vueuse/core';
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
  DxItem
} from 'devextreme-vue/data-grid';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/20/solid';
import useRestrictions from '@/composables/useRestrictions';
export interface UsersTableProps {
  users: User[];
  // internalType? si riferisce se la tabella è quella che sta sotto "Users" o se si trova internamente in altre pagine dell'app
  internalType?: string;
}
const props = defineProps<UsersTableProps>();
const dataGridUsers = ref(null as any);
const { onContentReady } = useDxDataGrid();
const emit = defineEmits(['create']);
const { dxHeaderFilterRestrictionsDataSource } = useRestrictions();

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
      cellTemplate: 'userTemplate',
      calculateDisplayValue: function (data: User): any {
        const { copy, copied } = useClipboard({ source: data.id });
        return { id: data.id, copy, copied };
      }
    },
    {
      caption: 'Business',
      dataField: 'business',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true,
      cellTemplate: 'businessTemplate',
      visible: props.internalType ? false : true
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
  ];
});
</script>
<template>
  <div>
    <DxDataGrid
      ref="dataGridUsers"
      class="kl-dataGrid"
      :data-source="users"
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
      :onContentReady="onContentReady">
      <DxToolbar>
        <DxItem location="before" template="titleTemplate" />
        <DxItem name="columnChooserButton" />
      </DxToolbar>
      <template #titleTemplate>
        <div class="flex items-center gap-4">
          <BaseTableTitle text="Users" />
          <div class="flex items-center">
            <BaseTooltip text="Create New User" v-if="!internalType">
              <BaseButton kind="primary" size="sm" @click="emit('create')" icon="PlusIcon">
                New
              </BaseButton>
            </BaseTooltip>
          </div>
        </div>
      </template>
      <template #userTemplate="{ data }">
        <div>
          <p
            @click="data.displayValue.copy()"
            class="inline-flex items-center gap-1 hover:bg-gray-100 py-1 px-1.5 cursor-pointer group rounded-md">
            <span>{{ data.displayValue.id }}</span>
            <span class="hidden group-hover:inline-block">
              <ClipboardDocumentCheckIcon
                v-show="data.displayValue.copied.value"
                class="w-4 h-4 text-green-500" />
              <ClipboardDocumentIcon
                v-show="!data.displayValue.copied.value"
                class="w-4 h-4 text-gray-700" />
            </span>
          </p>
          <BaseTableInternalLink
            as="p"
            resource="User"
            :resourceLabel="data.data.label"
            :resourceId="data.value" />
        </div>
      </template>
      <template #businessTemplate="{ data }">
        <BaseTableInternalLink as="div" resource="Business" :resourceId="data.value" />
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
      <DxPaging :page-size="props.internalType ? 5 : 50" />
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
  </div>
</template>
