<script setup lang="ts">
import { useRouter, type RouteRecordName } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/20/solid';
export interface BreadcrumbItem {
  label: string;
  routeName: RouteRecordName;
}
export interface BreadcrumbProps {
  title?: string;
  items?: BreadcrumbItem[];
  action?: string;
  resource?: any;
}
defineProps<BreadcrumbProps>();
const router = useRouter();
const goTo = (item: BreadcrumbItem) => {
  router.go(-1);
};
const goBack = () => {
  router.go(-1);
};
</script>
<template>
  <div
    class="px-4 xl:px-8 flex items-center gap-4 h-[38px] border-y border-gray-200"
    :class="{ 'bg-red-50 border-red-200': title === 'Error' }">
    <div class="flex items-center">
      <nav>
        <div @click="goBack" class="flex items-center cursor-pointer">
          <ArrowLeftIcon class="w-4 h-4 mr-4" />
        </div>
      </nav>
      <p
        class="pl-4 pr-4 text-xs tracking-wider text-gray-500 uppercase border-l border-gray-200"
        v-for="item in items"
        :key="item.label">
        <router-link
          :to="{
            name: item.routeName
          }"
          class=""
          >{{ item.label }}</router-link
        >
      </p>
      <h3
        v-if="title"
        :class="{ 'pr-4': action }"
        class="pl-4 text-xs tracking-wider text-gray-500 uppercase border-l border-gray-200">
        <router-link
          v-if="resource"
          :to="{
            name: resource.name,
            params: { id: resource.slug }
          }"
          >{{ title }}</router-link
        >
        <span v-else>{{ title }}</span>
      </h3>
      <p
        class="pl-4 text-xs tracking-wider text-gray-500 uppercase border-l border-gray-200"
        v-if="action">
        {{ action }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>
