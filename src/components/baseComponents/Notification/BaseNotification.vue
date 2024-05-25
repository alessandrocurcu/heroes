<template>
  <transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <div
      v-if="show"
      :class="{
        'bg-green-50': style === 'success',
        'bg-red-50': style === 'error',
        'bg-white': style === ''
      }"
      class="w-full max-w-sm overflow-hidden rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <BaseIcon
              aria-hidden="true"
              :class="{
                'text-green-400': style === 'success',
                'text-red-400': style === 'error'
              }"
              class="w-6 cursor-pointer"
              :name="style === 'success' ? 'CheckIcon' : 'XMarkIcon'" />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">{{ message }}</p>
            <p class="mt-1 text-sm text-gray-500">{{ cause }}</p>
          </div>
          <div class="flex flex-shrink-0 ml-4">
            <button
              type="button"
              @click="close"
              class="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Close</span>
              <BaseIcon aria-hidden="true" class="w-4 cursor-pointer" name="XMarkIcon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import BaseIcon from '../IconWrapper/BaseIcon.vue';
import { ref } from 'vue';
const emit = defineEmits(['close']);
const show = ref(true);
defineProps({
  message: {
    type: String,
    required: true
  },
  cause: {
    type: String,
    required: true
  },
  style: {
    type: String,
    default: 'success'
  },
  id: {
    type: String,
    required: true
  }
});

const close = () => {
  show.value = false;
  emit('close');
  // NotificationStore.remove(props.id);
};
</script>
