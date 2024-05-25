<script setup lang="ts">
import BaseIcon from '../IconWrapper';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
defineEmits(['close', 'after-leave', 'after-enter']);
defineProps({
  open: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <TransitionRoot
    as="template"
    :show="open"
    @after-leave="$emit('after-leave')"
    @after-enter="$emit('after-enter')">
    <Dialog as="div" class="relative z-40" @close="$emit('close')">
      <!-- metti inset-0  se vuoi l'overlay tutta pagina -->
      <div class="fixed" />
      <!-- metti inset-0  se vuoi l'overlay tutta pagina -->
      <div class="fixed overflow-hidden">
        <!-- metti inset-0  se vuoi l'overlay tutta pagina -->
        <div class="absolute overflow-hidden">
          <div class="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="w-screen max-w-3xl pointer-events-auto">
                <div class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">
                        {{ title }}
                      </DialogTitle>
                      <div class="flex items-center ml-3 h-7">
                        <button
                          type="button"
                          class="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="$emit('close')">
                          <span class="sr-only">Close panel</span>
                          <BaseIcon name="XMarkIcon" aria-hidden="true" class="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex-1 px-4 mt-6 sm:px-6">
                    <!-- Replace with your content -->
                    <slot> </slot>

                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
