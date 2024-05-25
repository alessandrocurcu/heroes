<script setup lang="ts">
import { ref } from 'vue';
import IssuesTable from '@/components/IssuesTable.vue';
import { useIssueStore } from '@/stores/IssueStore';
const IssueStore = useIssueStore();
const drawerIsOpen = ref(false);

const onShowPreview = (issue: any) => {
  drawerIsOpen.value = true;
  IssueStore.setSelectedIssue(issue);
};
</script>
<template>
  <div class="grid grid-cols-12">
    <div v-if="IssueStore.issues" class="overflow-y-auto kl-datagrid-padding-special col-span-full">
      <IssuesTable
        :issues="IssueStore.issues"
        :selected-issue="IssueStore.selectedIssue"
        @show-preview="onShowPreview" />
    </div>
    <div v-else class="col-span-full">
      <BaseSkeletonTable table-title="Properties" />
    </div>
    <BaseDrawer
      :open="drawerIsOpen"
      :title="IssueStore.selectedIssue?.id ?? ''"
      @close="drawerIsOpen = false"
      @after-leave="IssueStore.selectedIssue = undefined">
      <BaseTabs v-if="IssueStore.selectedIssue" class="mt-12">
        <BaseTab class="" title="Raw Data">
          <div>
            <json-viewer :value="IssueStore.selectedIssue"></json-viewer>
          </div>
        </BaseTab>
        <BaseTab class="" title="Info">
          <div class="mt-24 space-y-16"></div>
        </BaseTab>
      </BaseTabs>
    </BaseDrawer>
  </div>
</template>
