<script setup lang="ts">
export interface TextAreaProps {
  label?: string;
  help?: string;
  name?: string;
  placeholder?: string;
}
defineOptions({ inheritAttrs: false });
const emit = defineEmits(['change']);
defineProps<TextAreaProps>();
const modelValue = defineModel<string>(); // ℹ️ 05-2023 - We have to define the type here otherwise eslint will throw an error of duplicated key
</script>
<template>
  <div>
    <label v-show="label" :for="name" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="flex items-center mt-1 space-x-2">
      <textarea
        v-bind="$attrs"
        :placeholder="placeholder"
        :id="name"
        :name="name"
        class="block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500 sm:text-sm bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500"
        v-model="modelValue"
        @change="($event: any) => emit('change', $event.target.value as HTMLTextAreaElement)"
        :aria-describedby="`${name}-description`">
      </textarea>
    </div>
    <p v-if="help" class="mt-2 text-xs text-gray-500" :id="`${name}-description`">
      {{ help }}
    </p>
  </div>
</template>
