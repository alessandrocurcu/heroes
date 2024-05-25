<script setup lang="ts">
export interface TextInputProps {
  label?: string;
  help?: string;
  name?: string;
  description?: string;
  placeholder?: string;
  type?: string;
}
defineOptions({ inheritAttrs: false });
const emit = defineEmits(['change']);
withDefaults(defineProps<TextInputProps>(), {
  type: 'text'
});
const modelValue = defineModel<string | number>(); // ℹ️ 05-2023 - We have to define the type here otherwise eslint will throw an error of duplicated key
</script>
<template>
  <div class="flex-auto">
    <label
      v-show="label"
      :for="name"
      class="block text-sm text-gray-700"
      :class="{ 'flex items-center gap-2': description }">
      {{ label }}
    </label>
    <div class="flex items-center mt-1 space-x-2">
      <input
        v-bind="$attrs"
        :type="type"
        ref="inputRef"
        :placeholder="placeholder"
        :id="name"
        :name="name"
        class="block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500 sm:text-sm bg-gray-50 disabled:cursor-not-allowed disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400"
        v-model="modelValue"
        @change="($event: any) => emit('change', $event.target.value as HTMLInputElement)"
        :aria-describedby="`${name}-description`" />
      <slot name="default"> </slot>
    </div>
    <p v-if="help" class="mt-2 text-xs text-gray-500" :id="`${name}-description`">
      {{ help }}
    </p>
  </div>
</template>
