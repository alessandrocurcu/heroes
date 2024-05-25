<script setup lang="ts">
import { computed } from 'vue';

export interface RadioItem {
  id: string;
  label: string;
}

export interface BaseRadioGroupProps {
  disabled?: boolean;
  label?: string;
  error?: string;
  name?: string;
  warning?: string;
  help?: string;
  items: Array<RadioItem>;
}

const props = defineProps<BaseRadioGroupProps>();
const selectedItem = defineModel<RadioItem>();
const emit = defineEmits(['change', 'update:modelValue']);

const classIsDisabled = computed(() => {
  return props.disabled
    ? 'cursor-not-allowed opacity-70 text-gray-700 focus:ring-gray-700'
    : 'cursor-pointer focus:ring-indigo-600 text-indigo-600';
});
const classIsDisabledLabel = computed(() => {
  return props.disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer';
});

const isSelected = (item: RadioItem) => {
  return selectedItem.value?.id === item.id;
};

const selectItem = (item: RadioItem) => {
  selectedItem.value = item;
  emit('change', item);
};
</script>

<template>
  <div>
    <label v-show="label" :for="name" class="block text-sm text-gray-700">
      {{ label }}
    </label>
    <p class="mb-2 text-xs text-gray-500" v-if="help">{{ help }}</p>
    <div class="flex flex-col mt-1 sm:flex-row" :class="classIsDisabled">
      <!-- measurements from Carbon Style, but they appear a little off -->
      <div v-for="item in items" :key="item.id" class="flex items-center mb-2 sm:mr-4">
        <input
          :id="item.id"
          :name="name"
          type="radio"
          :disabled="disabled"
          :class="classIsDisabled"
          class="w-5 h-5 mr-2 border-gray-300"
          :aria-describedby="`${selectedItem}-description`"
          :checked="isSelected(item)"
          @change="selectItem(item)" />
        <label :for="item.id" class="text-xs text-gray-700" :class="classIsDisabledLabel">{{
          item.label
        }}</label>
      </div>
    </div>
    <label v-show="error" class="block mb-2 text-xs text-red-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="inline-block w-4 h-4">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      {{ error }}
    </label>
    <label v-show="warning" class="block mb-2 text-xs text-yellow-700">
      <svg
        class="inline-block w-4 h-4 fill-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        stroke="currentColor">
        <path
          d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
      </svg>
      {{ warning }}
    </label>
  </div>
</template>
