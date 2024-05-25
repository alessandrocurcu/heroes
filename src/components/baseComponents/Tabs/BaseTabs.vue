<script setup lang="ts">
import { useSlots, ref, provide, computed } from 'vue';
const slots: any = useSlots();
const tabList = computed(() => {
  return slots.default().map((_tab: any) => ({
    title: _tab.props.title,
    disabled: _tab.props.disabled,
    badge: _tab.props.badge
  }));
});
const selectedTab = ref(tabList.value[0]);
const selectTab = (tab: string) => {
  selectedTab.value = tab;
};
provide('selectedTab', selectedTab);
</script>
<template>
  <div>
    <nav class="flex space-x-4 border-b border-gray-200" aria-label="Tabs">
      <span
        v-for="tab in tabList"
        :key="tab"
        class="cursor-pointer"
        @click="selectTab(tab)"
        :class="[
          selectedTab && tab && selectedTab.title === tab.title
            ? 'text-indigo-700 border-b-2 border-indigo-500'
            : 'text-gray-500 hover:text-gray-700',
          'px-6 py-3 text-sm min-w-[100px] text-center',
          tab && tab.disabled
            ? 'cursor-not-allowed opacity-40 pointer-events-none'
            : 'cursor-pointer'
        ]"
        :aria-current="selectedTab === tab ? 'page' : undefined"
        >{{ tab ? tab.title : 'error' }}</span
      >
    </nav>
    <slot></slot>
  </div>
</template>
