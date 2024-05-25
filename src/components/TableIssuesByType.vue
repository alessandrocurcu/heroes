<script setup lang="ts">
import { useProjectStore } from '@/stores/ProjectStore';
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
  DxItem
} from 'devextreme-vue/data-grid';
import useDxDataGrid from '@/composables/useDxDataGrid';
const ProjectStore = useProjectStore();
const props = defineProps({
  type: {
    type: String,
    required: true
  }
});

const dataSource = computed(() => {
  if (!ProjectStore.crawlIssuesByTypes) {
    return [];
  }
  return ProjectStore.crawlIssuesByTypes[props.type];
});

const { onContentReady } = useDxDataGrid();
const columns = computed(() => {
  return [
    {
      caption: 'ID',
      dataField: 'id',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      visible: false
    },
    {
      caption: 'Label',
      dataField: 'label',
      allowSorting: false,
      allowHeaderFiltering: false,
      allowFiltering: false,
      cellTemplate: 'labelTemplate'
    },
    {
      caption: 'URLs afflicted',
      dataField: 'urlsAfflicted',
      allowSorting: true,
      allowHeaderFiltering: false,
      allowFiltering: true,
      cellTemplate: 'totTemplate',
      sortIndex: 1,
      sortOrder: 'desc'
    }
  ];
});
</script>
<template>
  <DxDataGrid
    class="kl-dataGrid"
    key-expr="id"
    :data-source="dataSource"
    :columns="columns"
    :remoteOperations="true"
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
      <DxItem location="after" template="actionTemplate" />
    </DxToolbar>
    <template #titleTemplate>
      <div class="flex items-center">
        <BaseTableTitle :text="type" />
      </div>
    </template>
    <template #actionTemplate> </template>
    <template #labelTemplate="{ data }">
      <div
        class="inline"
        :class="{ 'text-red-600': data.data.alert, 'text-yellow-600': data.data.warn }">
        <div class="inline" v-if="data.data.alert">
          <BaseTooltip
            text="Un alto numero di questa Issue indica che l'Audit è bacato. Contattare Roberto Pellagatti.">
            <p class="inline-flex items-center gap-2">
              <span>{{ data.data.label }}</span>
              <BaseIcon class="w-4 h-4" name="ExclamationTriangleIconOutline" />
            </p>
          </BaseTooltip>
        </div>
        <div class="inline" v-else-if="data.data.warn">
          <BaseTooltip
            text="Questa Issue non è chiara e potrebbe essere fuorviante. Servono ulteriori indagini">
            <p class="inline-flex items-center gap-2">
              <span>{{ data.data.label }}</span>
              <BaseIcon class="w-4 h-4" name="ExclamationTriangleIconOutline" />
            </p>
          </BaseTooltip>
        </div>
        <p v-else>{{ data.data.label }}</p>
      </div>
    </template>
    <template #totTemplate="{ data }">
      <p :class="{ 'text-red-600': data.data.alert, 'text-yellow-600': data.data.warn }">
        {{ data.data.urlsAfflicted }}
      </p>
    </template>
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
</template>
