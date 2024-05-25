<script setup lang="ts">
export interface ToggleProps {
  disabled?: boolean;
  label?: string;
  help?: string;
  labelPosition?: 'horizontal' | 'vertical';
}

import { Switch, SwitchGroup, SwitchLabel, SwitchDescription } from '@headlessui/vue';

withDefaults(defineProps<ToggleProps>(), {
  modelValue: undefined,
  checked: undefined,
  labelPosition: 'vertical',
  value: '',
  label: '',
  help: '',
  name: '',
  placeholder: ''
});
const modelValue = defineModel<boolean>();
</script>

<template>
  <div>
    <SwitchGroup>
      <div class="flex items-center">
        <Switch
          :disabled="disabled"
          v-model="modelValue"
          :class="modelValue ? 'bg-green-500' : 'bg-gray-400'"
          class="relative inline-flex w-12 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-500">
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            :class="modelValue ? 'translate-x-6' : 'translate-x-0.5'"
            class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow-lg pointer-events-none ring-0" />
        </Switch>
        <SwitchLabel v-if="label" class="block ml-2 text-xs font-medium text-gray-700">{{
          label
        }}</SwitchLabel>
        <SwitchDescription v-if="help" class="ml-2">
          <BaseInfoBox :text="help" />
        </SwitchDescription>
      </div>
    </SwitchGroup>
  </div>
</template>
