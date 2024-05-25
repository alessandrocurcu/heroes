<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { computed } from 'vue';
export interface BadgeProps {
  label: string;
  color?: 'gray' | 'green' | 'yellow' | 'red' | 'primary' | 'pink';
  showXButton?: boolean;
}
const props = withDefaults(defineProps<BadgeProps>(), {
  label: '',
  color: 'gray',
  showXButton: false
});

const emit = defineEmits(['remove']);
const remove = () => {
  emit('remove');
};
const classColor = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-indigo-50 text-indigo-600 ring-indigo-500/10';
    case 'gray':
      return 'bg-gray-50 text-gray-800 ring-gray-700/10';
    case 'green':
      return 'bg-green-100 text-green-900 ring-green-900/10';
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800 ring-yellow-700/10';
    case 'red':
      return 'bg-red-50 text-red-600 ring-red-500/10';
    case 'pink':
      return 'bg-pink-50 text-pink-700 ring-pink-500/10';
    default:
      return '';
  }
});
const xIconButtonColor = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'hover:bg-indigo-500/20';
    case 'gray':
      return 'hover:bg-gray-500/20';
    case 'green':
      return 'hover:bg-green-500/20';
    case 'yellow':
      return 'hover:bg-yellow-500/20';
    case 'red':
      return 'hover:bg-red-500/20';
    default:
      return '';
  }
});
const xIconSVGColor = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'stroke-primary-600/50 group-hover:stroke-primary-600/75';
    case 'gray':
      return 'stroke-gray-600/50 group-hover:stroke-gray-600/75';
    case 'green':
      return 'stroke-green-600/50 group-hover:stroke-green-600/75';
    case 'yellow':
      return 'stroke-yellow-600/50 group-hover:stroke-yellow-600/75';
    case 'red':
      return 'stroke-red-600/50 group-hover:stroke-red-600/75';
    default:
      return '';
  }
});
</script>

<template>
  <div
    :class="[classColor]"
    class="whitespace-nowrap inline-flex items-center gap-x-0.5 rounded-xl px-3 py-1 text-xs font-light text-gray-600 ring-1 ring-inset">
    <span class="truncate">{{ props.label }}</span>
    <button
      v-if="showXButton"
      @click.stop="remove"
      type="button"
      :class="[xIconButtonColor]"
      class="group relative -mr-1 h-3.5 w-3.5 rounded-md">
      <span class="sr-only">Remove</span>
      <XMarkIcon :class="[xIconSVGColor]" class="h-3.5 w-3.5" />
      <span class="absolute -inset-1" />
    </button>
  </div>
</template>
