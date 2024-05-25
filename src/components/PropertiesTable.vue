<script setup lang="ts">
import { computed, ref } from 'vue';

import useDxDataGrid from '@/composables/useDxDataGrid';
import { usePropertyStore } from '@/stores/PropertyStore';
import { useInstanceStore } from '@/stores/InstanceStore';
import { useClipboard } from '@vueuse/core';
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/20/solid';
import PropertiesInfo from '@/components/PropertiesInfo.vue';
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
export interface PropertiesTableProps {
  properties: any;
}
defineProps<PropertiesTableProps>();

const emit = defineEmits(['show-preview', 'open-seo-tech']);
const PropertyStore = usePropertyStore();
const InstanceStore = useInstanceStore();
const { onContentReady } = useDxDataGrid();

const columns = computed(() => {
  return [
    {
      caption: 'Id',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      visible: true
    },
    {
      caption: 'Property Id',
      dataField: 'propertyId',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: true,
      cellTemplate: 'propertyIdTemplate',
      calculateDisplayValue: function (data: any): any {
        const { copy, copied } = useClipboard({ source: data.propertyId });
        return { id: data.propertyId, copy, copied };
      }
    },
    {
      caption: 'Name',
      dataField: 'name',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true
    },
    {
      caption: 'Topic',
      dataField: 'topic',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true
    },
    {
      caption: 'Type',
      dataField: 'type',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: true
    },
    {
      caption: 'Description',
      dataField: 'description',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: false,
      visible: false,
      cssClass: 'dx-datagrid-custom-wrap-column',
      width: '300'
    },
    {
      caption: 'Is in Seojs3.js',
      dataField: 'seojs3',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true,
      visible: false
      // selectedFilterOperation: '=',
      // filterValue: true,
    },
    {
      caption: 'NameFile',
      dataField: 'nameFile',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true,
      visible: true
    },
    {
      caption: 'Old Path',
      dataField: 'oldPath',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: false
    },
    {
      caption: 'Notes',
      dataField: 'note',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      visible: false,
      cssClass: 'dx-datagrid-custom-wrap-column',
      width: '300'
    }
  ];
});

const confirmDialog = ref(false);
const confirmDialogEditorsActions = ref(false);
const modalInfoIsOpen = ref(false);
</script>
<template>
  <div>
    <DxDataGrid
      class="kl-dataGrid"
      :data-source="properties"
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
        <DxItem location="before" template="titleTemplate" />
        <DxItem name="columnChooserButton" />
        <DxItem location="after" template="actionTemplate" />
        <DxItem name="searchPanel" />
      </DxToolbar>
      <template #titleTemplate>
        <div class="flex items-center">
          <BaseTableTitle @show-info="modalInfoIsOpen = true" :info="true" text="Properties" />
        </div>
      </template>
      <template #actionTemplate>
        <div class="flex items-center space-x-4">
          <div class="inline-flex items-center">
            <BaseButton
              kind="tertiary"
              size="sm"
              :is-loading="PropertyStore.isLoadingProperties || InstanceStore.isLoadingInstances"
              @click="confirmDialog = true">
              Publish Properties
            </BaseButton>
          </div>
          <div class="inline-flex items-center">
            <BaseButton
              kind="tertiary"
              size="sm"
              :is-loading="PropertyStore.isLoadingProperties || InstanceStore.isLoadingInstances"
              @click="confirmDialogEditorsActions = true">
              Publish Editors Actions
            </BaseButton>
          </div>
        </div>
      </template>
      <template #propertyIdTemplate="{ data }">
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
        </div>
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
  </div>
  <BaseDialog
    :open="confirmDialog"
    title="Publish Properties"
    confirmText="Publish"
    :isConfirmDisabled="false"
    :isLoading="PropertyStore.isLoadingProperties"
    @cancel="confirmDialog = false"
    @confirm="PropertyStore.uploadProperties">
    Are you sure?
  </BaseDialog>
  <BaseDialog
    :open="confirmDialogEditorsActions"
    title="Publish Editors Actions"
    confirmText="Publish"
    :isConfirmDisabled="false"
    :isLoading="PropertyStore.isLoadingProperties"
    @cancel="confirmDialogEditorsActions = false"
    @confirm="PropertyStore.uploadEditorsActions">
    Are you sure?
  </BaseDialog>
  <BaseDialog
    @cancel="modalInfoIsOpen = false"
    :open="modalInfoIsOpen"
    title="Properties Documentation"
    just-text
    isLarge>
    <template #default><PropertiesInfo /></template>
  </BaseDialog>
</template>
