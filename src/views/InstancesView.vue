<script setup lang="ts">
import InstancesTable from '@/components/InstancesTable.vue';
import { useInstanceStore } from '@/stores/InstanceStore';
const InstanceStore = useInstanceStore();
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="InstanceStore.instances"
      class="overflow-y-auto col-span-full kl-datagrid-padding-special">
      <InstancesTable :instances="InstanceStore.instances" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Instances" />
    </div>
  </div>
</template>
