<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/20/solid';
import { kebabCase } from 'change-case';
import { computed } from 'vue';
export interface TableInternalLinkProps {
  resource: string;
  resourceId: string;
  resourceLabel?: string;
  as?: string;
  underlined?: boolean;
}
const props = withDefaults(defineProps<TableInternalLinkProps>(), {
  as: 'li'
});
const paramsId = computed(() => {
  if (props.resourceLabel && props.resource === 'User') {
    return kebabCase(props.resourceId);
  }
  return props.resourceLabel ? kebabCase(props.resourceLabel ?? '') : props.resourceId;
});
</script>
<template>
  <component :is="as" class="hover:bg-indigo-50 py-1 px-1.5 cursor-pointer rounded-md">
    <router-link
      v-if="paramsId"
      custom
      :to="{
        name: resource,
        params: {
          id: paramsId
        }
      }"
      v-slot="{ navigate }">
      <span
        :class="
          props.as === 'p' || props.as === 'div' || props.as === 'li' ? 'flex' : 'inline-flex'
        "
        class="items-center"
        @click="navigate">
        <span :class="{ underline: props.underlined }">{{
          resourceLabel ? resourceLabel : resourceId
        }}</span>
        <ArrowRightIcon class="w-3.5 h-3.5 ml-2 text-indigo-600" />
      </span>
    </router-link>
  </component>
</template>
