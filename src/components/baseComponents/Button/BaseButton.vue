<script setup lang="ts">
import { computed, useSlots } from 'vue';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  kind?: 'standard' | 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'none' | 'sm' | 'md' | 'lg';
  icon?: string;
  isLoading?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  kind: 'primary',
  size: 'md',
  icon: '',
  isLoading: false,
  disabled: false
});
defineOptions({ inheritAttrs: false });
const slots: any = useSlots();
const classKind = computed(() => {
  switch (props.kind) {
    case 'standard':
      return 'text-white bg-green-200 hover:enabled:bg-green-300 active:enabled:bg-green-700 focus:ring-green-300 border border-transparent shadow-sm';
    case 'primary':
      return 'text-white bg-indigo-600 hover:enabled:bg-indigo-700 active:enabled:bg-indigo-900 focus:ring-indigo-500 border border-transparent shadow-sm';
    case 'secondary':
      return 'bg-indigo-100 text-indigo-600 hover:enabled:bg-indigo-200 active:enabled:bg-indigo-400 focus:ring-indigo-500 border border-transparent shadow-sm';
    case 'tertiary':
      return 'text-gray-700 border border-gray-300 bg-white hover:enabled:bg-gray-50 active:enabled:bg-gray-200 focus:ring-indigo-500 shadow-sm';
    case 'ghost':
      return 'text-gray-700 border  bg-trasparent hover:enabled:bg-gray-50 active:enabled:bg-gray-200 focus:ring-indigo-500';
    case 'danger':
      return 'text-white bg-red-600 hover:enabled:bg-red-700 active:enabled:bg-red-900 focus:ring-red-500 border border-transparent shadow-sm';
    default:
      return '';
  }
});
const classSize = computed(() => {
  switch (props.size) {
    case 'none':
      return 'p-0 text-xs leading-tight';
    case 'sm':
      return `${slots.default ? 'px-3' : 'px-1'} py-1 text-xs leading-tight`;
    case 'md':
      return `${slots.default ? 'px-4' : 'px-2'} py-2 sm:text-sm text-base leading-tight`;
    case 'lg':
      return `${slots.default ? 'px-6' : 'px-3'} py-3 sm:text-lg text-xl leading-tight`;
    default:
      return `${slots.default ? 'px-4' : 'px-2'} py-2 sm:text-sm text-base leading-tight`;
  }
});

const classIsLoading = computed(() => {
  return props.isLoading ? 'cursor-not-allowed' : 'cursor-pointer';
});
const classIsDisabled = computed(() => {
  return props.disabled ? '!cursor-not-allowed' : 'cursor-pointer';
});
</script>
<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[classKind, classIsLoading, classIsDisabled, classSize]"
    :disabled="isLoading || disabled"
    class="inline-flex items-center justify-center font-medium transition duration-150 ease-in-out rounded-md disabled:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
    <div v-show="isLoading" role="status">
      <svg
        aria-hidden="true"
        class="-ms-1 animate-spin"
        :class="props.size === 'sm' ? 'w-3 h-3 me-1.5 mt-0.5' : 'w-5 h-5 me-3'"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
          class="opacity-25" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
          class="opacity-75" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
    <div class="truncate" :class="{ ' flex items-center': icon, 'gap-x-2': icon && slots.default }">
      <span class="truncate"><slot></slot></span>
      <BaseIcon
        v-if="icon"
        :class="{
          'w-5': size !== 'sm',
          'w-4': size === 'sm',
          'opacity-80': props.kind !== 'primary'
        }"
        :name="icon" />
    </div>
  </button>
</template>
