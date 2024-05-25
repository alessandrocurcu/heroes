<script setup lang="ts">
import { computed } from 'vue';
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
const { onContentReady } = useDxDataGrid();
const emit = defineEmits(['show-preview', 'create', 'open-project-audit', 'clean-cache']);

defineProps({
  domains: {
    type: Object,
    required: true
  },
  selectedProject: {
    type: Object,
    required: false
  }
});

const columns = computed(() => {
  return [
    {
      caption: 'Id',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      dataType: 'string'
    },
    {
      caption: 'Lang',
      dataField: 'lang',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true
    },
    {
      caption: 'Country',
      dataField: 'country',
      allowSorting: true,
      allowHeaderFiltering: true,
      allowFiltering: true
    },
    {
      caption: 'Domain',
      dataField: 'domainListed',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false
    }
  ];
});
</script>
<template>
  <div>
    <DxDataGrid
      class="kl-dataGrid"
      ref="dataGridDomains"
      :data-source="domains"
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
      :onContentReady="onContentReady">
      <DxToolbar>
        <DxItem location="before" template="titleTemplate" />
        <DxItem name="columnChooserButton" />
      </DxToolbar>
      <template #titleTemplate>
        <div class="flex items-center">
          <BaseTableTitle text="Domains" />
        </div>
      </template>
      <DxColumnChooser :enabled="true" mode="select" :search="{ enabled: true }" :height="600" />
      <DxPaging :page-size="10" />
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
