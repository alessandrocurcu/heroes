<script setup lang="ts">
import UsersTable from '@/components/UsersTable.vue';
import { useUserStore } from '@/stores/UserStore';
import useResources from '@/composables/useResources';
import { useRouter } from 'vue-router';
const UserStore = useUserStore();
const router = useRouter();
useResources(UserStore.users);

const onCreate = () => {
  router.push({
    name: `UserNew`
  });
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div v-if="UserStore.users" class="overflow-y-auto kl-datagrid-padding-special col-span-full">
      <UsersTable :users="UserStore.users" @create="onCreate" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Users" />
    </div>
  </div>
</template>
