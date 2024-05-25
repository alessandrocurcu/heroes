<script setup lang="ts">
import BusinessesTable from '@/components/BusinessesTable.vue';
import { useBusinessStore } from '@/stores/BusinessStore';
import useResources from '@/composables/useResources';
import { useRouter } from 'vue-router';
const BusinessStore = useBusinessStore();
useResources(BusinessStore.businesses);
const router = useRouter();
const onCreate = () => {
  router.push({
    name: `BusinessNew`
  });
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div
      v-if="BusinessStore.businesses"
      class="overflow-y-auto kl-datagrid-padding-special col-span-full">
      <BusinessesTable :businesses="BusinessStore.businesses" @create="onCreate" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Businesses" />
    </div>
  </div>
</template>
