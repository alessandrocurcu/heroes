<script setup lang="ts">
defineOptions({ inheritAttrs: false });
const modelValue = defineModel<boolean>();
export interface InputProps {
  checked?: boolean;
  label?: string;
  help?: string;
  name?: string;
  value?: string;
  placeholder?: string;
}

withDefaults(defineProps<InputProps>(), {
  modelValue: undefined,
  checked: undefined,
  value: '',
  label: '',
  help: '',
  name: '',
  placeholder: ''
});
const emit = defineEmits(['change']);

const onChanges = (e: any) => {
  emit('change', (e.target as HTMLInputElement).checked);
};
</script>
<template>
  <div class="relative flex items-start">
    <div class="relative flex items-start">
      <div class="flex items-center h-5 cursor-pointer">
        <input
          v-bind="$attrs"
          :id="name"
          :aria-describedby="`${name}-description`"
          :name="name"
          type="checkbox"
          :checked="modelValue"
          v-model="modelValue"
          @change="onChanges($event)"
          class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-500" />
      </div>
      <div class="ml-3 text-sm">
        <label :for="name" class="text-sm text-gray-700">{{ label }}</label>
        <p v-if="help" :id="`${name}-description`" class="text-xs text-gray-500">
          {{ help }}
        </p>
      </div>
    </div>
  </div>
</template>
