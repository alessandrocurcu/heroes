<script setup lang="ts">
import { computed } from 'vue';
export interface MessageProps {
  kind: 'error' | 'warning' | 'info' | 'success';
}

const props = defineProps<MessageProps>();
const classKind = computed(() => {
  switch (props.kind) {
    case 'error':
      return 'text-white bg-red-500 border-red-500';
    case 'warning':
      return 'text-orange-700 bg-orange-50 border-orange-500';
    case 'info':
      return 'text-blue-700 bg-blue-50 border-blue-500';
    case 'success':
      return 'text-green-700 bg-green-50 border-green-500';
    default:
      return '';
  }
});
const textKind = computed(() => {
  switch (props.kind) {
    case 'error':
      return 'Be Warned';
    case 'warning':
      return 'Be Warned';
    case 'info':
      return 'Be Informed';
    case 'success':
      return 'Be Informed';
    default:
      return '';
  }
});
</script>
<template>
  <div :class="[classKind]" class="p-4 border-l-2" role="alert">
    <p class="text-[10px] uppercase">{{ textKind }}</p>
    <div class="mt-1 text-xs">
      <slot />
    </div>
  </div>
</template>
