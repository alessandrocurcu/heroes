<script setup lang="ts">
import { computed, ref } from 'vue';
import useDxDataGrid from '@/composables/useDxDataGrid';
import { useIssueStore } from '@/stores/IssueStore';
import IssueInfo from '@/components/IssueInfo.vue';
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
export interface IssuesTableProps {
  issues: any;
  selectedIssue?: any;
}
defineProps<IssuesTableProps>();
const issueInfoIsOpen = ref(false);
const IssueStore = useIssueStore();
const { onContentReady } = useDxDataGrid();
const issueGrid = ref<any>(null);
const columns = computed(() => {
  return [
    {
      caption: 'Id',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true
    },
    {
      caption: 'Level',
      dataField: 'level',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true
    },
    {
      caption: 'Label',
      dataField: 'label',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true
    },
    {
      caption: 'Type',
      dataField: 'type',
      allowSorting: false,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: true,
      calculateCellValue: function (data: any): any {
        switch (data.type) {
          case 0:
            return 'Error';
          case 1:
            return 'Warning';
          case 2:
            return 'Notice';
          case 4:
            return 'Accessibility Error';
          case 5:
            return 'Accessibility Warning';
          case 6:
            return 'Accessibility Notice';
          case 7:
            return 'Accessibility Info';
          case 9:
            return 'Info';
          case 10:
            return 'Internal Info';
          default:
            return '';
        }
      }
    },
    {
      caption: 'Seo Tech',
      dataField: 'schema',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: true,
      cellTemplate: 'schemaTemplate',
      calculateCellValue: function (data: any): string {
        return data?.schema.toString() ?? '';
      },
      headerFilter: {
        dataSource: function (data: any) {
          data.dataSource.postProcess = function () {
            return [
              {
                text: 'A1',
                value: 'A1'
              },
              {
                text: 'A2',
                value: 'A2'
              },
              {
                text: 'A3',
                value: 'A3'
              },
              {
                text: 'A4',
                value: 'A4'
              },
              {
                text: 'A5',
                value: 'A5'
              },
              {
                text: 'A6',
                value: 'A6'
              },
              {
                text: 'A7',
                value: 'A7'
              },
              {
                text: 'A8',
                value: 'A8'
              },
              {
                text: 'C1',
                value: 'C1'
              },
              {
                text: 'C2',
                value: 'C2'
              },
              {
                text: 'B',
                value: 'B'
              },
              {
                text: 'D',
                value: 'D'
              },
              {
                text: 'AUTO',
                value: 'AUTO'
              }
            ];
          };
        }
      },
      calculateFilterExpression: function (this: any, filterValue: any) {
        return [this.calculateCellValue, 'contains', filterValue];
      }
    },
    {
      caption: 'Short Description',
      dataField: 'shortDescription',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true
    },
    {
      caption: 'How to fix',
      dataField: 'howtofix',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: false,
      cssClass: 'dx-datagrid-custom-wrap-column',
      width: '400'
    }
  ];
});
const confirmDialog = ref(false);
</script>
<template>
  <div>
    <DxDataGrid
      class="kl-dataGrid"
      :data-source="issues"
      ref="issueGrid"
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
      <DxToolbar>
        <DxItem name="columnChooserButton" />
        <DxItem location="before" template="titleTemplate" />
        <DxItem location="after" template="actionTemplate" />
        <DxItem name="searchPanel" />
      </DxToolbar>
      <template #titleTemplate>
        <div class="flex items-center">
          <BaseTableTitle @show-info="issueInfoIsOpen = true" :info="true" text="Issues" />
        </div>
      </template>
      <template #actionTemplate>
        <div class="flex items-center space-x-4">
          <div class="inline-flex items-center">
            <BaseButton
              kind="tertiary"
              size="sm"
              :is-loading="IssueStore.isLoadingIssues"
              @click="confirmDialog = true">
              Publish Issues
            </BaseButton>
          </div>
        </div>
      </template>
      <template #schemaTemplate="{ data }">
        {{ data.value }}
      </template>
      <DxColumnChooser :enabled="true" mode="select" :search="{ enabled: true }" :height="600" />
      <DxPaging :page-size="50" />
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
      :open="confirmDialog"
      title="Publish Issues"
      confirmText="Publish"
      :isConfirmDisabled="IssueStore.isLoadingIssues"
      :isLoading="IssueStore.isLoadingIssues"
      @cancel="confirmDialog = false"
      @confirm="IssueStore.uploadIssues">
      Are you sure?
    </BaseDialog>
    <BaseDialog
      @cancel="issueInfoIsOpen = false"
      :open="issueInfoIsOpen"
      title="Instances Documentation"
      just-text
      isLarge>
      <template #default><IssueInfo /></template>
    </BaseDialog>
  </div>
</template>
