<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  TransitionRoot
} from '@headlessui/vue';
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
export interface ComboboxProps {
  items: Array<Record<string, string>> | Array<string>;
  label?: string;
  help?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  freeform?: boolean;
}
const props = withDefaults(defineProps<ComboboxProps>(), {
  items: () => [],
  modelValue: undefined,
  label: '',
  help: '',
  name: '',
  size: 'md',
  freeform: false
});
const modelValue = defineModel<string | number>(); // ℹ️ 05-2023 - We have to define the type here otherwise eslint will throw an error of duplicated key
const emit = defineEmits(['change']);
const query: any = ref('');

const toArrayOfObjects = computed(() => {
  return props.items.map((item: any) => {
    if (typeof item === 'string') {
      return { id: item, label: item };
    }
    return item;
  });
});

const filteredItems: any = computed(() =>
  query.value === ''
    ? toArrayOfObjects.value
    : toArrayOfObjects.value.filter((item: any) =>
        item.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
);

const classSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-1 text-xs';
    case 'md':
      return 'py-2 text-sm';
    default:
      return 'py-2 text-sm';
  }
});

watch(modelValue, () => {
  emit('change', modelValue.value);
});
</script>
<template>
  <div :class="size === 'sm' ? 'w-48' : 'w-72'">
    <Combobox v-model="modelValue">
      <ComboboxLabel class="block mb-1 text-sm text-gray-700" v-show="label">{{
        label
      }}</ComboboxLabel>
      <div class="relative border rounded-md border-slate-200">
        <div
          class="relative w-full overflow-hidden text-left bg-white rounded-lg cursor-default focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
          <ComboboxInput
            :aria-describedby="`${name}-description`"
            :class="[classSize]"
            class="w-full pl-3 pr-10 leading-5 text-gray-900 border-none focus:ring-0 bg-gray-50"
            :displayValue="(item: any) => (item ? item.label : '')"
            @change="query = $event.target.value" />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''">
          <ComboboxOptions
            :class="size === 'sm' ? 'text-xs' : 'text-base'"
            class="absolute z-10 w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              v-if="filteredItems.length === 0 && query !== ''"
              class="relative px-4 py-2 text-gray-700 cursor-default select-none">
              Nothing found.
            </div>

            <ComboboxOption
              v-for="item in filteredItems"
              as="div"
              :key="item.id"
              :value="item"
              v-slot="{ selected, active }">
              <slot name="option" :slot-props="{ selected, active, item }">
                <li
                  class="relative py-2 pl-10 pr-4 cursor-default select-none"
                  :class="{
                    'bg-indigo-600 text-white': active,
                    'text-gray-900': !active
                  }">
                  <span
                    class="block truncate"
                    :class="{
                      'font-medium': selected,
                      'font-normal': !selected
                    }">
                    {{ item.label }}
                  </span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                    :class="{ 'text-white': active, 'text-indigo-600': !active }">
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </slot>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
    <p v-show="help" class="mt-2 text-xs text-gray-500" :id="`${name}-description`">
      {{ help }}
    </p>
  </div>
</template>
