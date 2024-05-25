<script setup lang="ts">
import PropertiesTable from '@/components/PropertiesTable.vue';
import { usePropertyStore } from '@/stores/PropertyStore';
const PropertyStore = usePropertyStore();
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="PropertyStore.properties"
      class="overflow-y-auto kl-datagrid-padding-special col-span-full">
      <PropertiesTable :properties="PropertyStore.properties" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Properties" />
    </div>
  </div>
</template>
