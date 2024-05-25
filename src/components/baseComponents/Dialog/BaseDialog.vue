<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ref, useSlots } from 'vue';
import BaseButton from '../Button/BaseButton.vue';
export interface DialogProps {
  open: boolean;
  isLarge?: boolean;
  isMedium?: boolean;
  isLoading?: boolean;
  isLoadingDanger?: boolean;
  title?: string;
  isConfirmDisabled?: boolean;
  isDangerDisabled?: boolean;
  hasDanger?: boolean;
  confirmText?: string;
  dangerText?: string;
  justText?: boolean;
}
const okButtonRef = ref(null);
const slots: any = useSlots();
const emit = defineEmits(['cancel', 'confirm', 'after-leave', 'after-enter']);
withDefaults(defineProps<DialogProps>(), {
  open: false,
  isLarge: false,
  isMedium: false,
  isLoading: false,
  isLoadingDanger: false,
  title: '',
  isConfirmDisabled: false,
  isDangerDisabled: false,
  confirmText: 'Confirm',
  dangerText: 'Delete',
  hasDanger: false,
  justText: false
});

const areYouSure = ref(false);

const setAreYouSure = (value: boolean) => {
  areYouSure.value = value;
};
</script>
<template>
  <TransitionRoot
    as="template"
    :show="open"
    @after-leave="$emit('after-leave')"
    @after-enter="$emit('after-enter')">
    <Dialog
      as="div"
      class="relative z-10"
      @close="$emit('cancel', false), areYouSure ? setAreYouSure(false) : null">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>
      <div class="fixed inset-0 z-10">
        <div class="flex items-center justify-center min-h-full p-4">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              :class="isLarge ? 'w-[1280px] h-[80vh]' : 'sm:max-w-lg w-[800px] h-[300px]'"
              class="relative flex flex-col p-4 transition-all transform bg-white rounded-lg shadow-xl xl:p-8 sm:m-8 sm:p-6">
              <DialogTitle
                v-show="title"
                as="h3"
                class="flex justify-between px-1 text-xs font-light leading-6 tracking-wide text-gray-700 uppercase"
                >{{ title }}
                <BaseIcon
                  @click="$emit('cancel', false), areYouSure ? setAreYouSure(false) : null"
                  class="w-5 h-5 text-gray-500 rounded-md cursor-pointer"
                  name="XMarkIcon"></BaseIcon>
              </DialogTitle>
              <div class="flex-1 px-1 overflow-y-auto" :class="slots.default ? 'mt-8' : 'mt-0'">
                <slot> </slot>
              </div>
              <div
                v-if="!justText"
                :class="isLarge ? 'w-full md:w-[374px]' : 'w-full'"
                class="px-1 mt-8 ml-auto">
                <div v-if="areYouSure" class="relative">
                  <p class="absolute left-0 whitespace-nowrap -top-16">Are you sure?</p>
                  <div
                    class="grid items-center grid-flow-row-dense grid-cols-2 gap-3 sm:grid sm:grid-flow-row-dense sm:gap-3 sm:grid-cols-2">
                    <BaseButton kind="ghost" @click="setAreYouSure(false)">NO</BaseButton>
                    <BaseButton
                      kind="danger"
                      @click="emit('confirm'), areYouSure ? setAreYouSure(false) : null"
                      >YES</BaseButton
                    >
                  </div>
                </div>
                <div
                  v-else
                  class="grid items-center grid-flow-row-dense grid-cols-2 gap-3 sm:grid sm:grid-flow-row-dense sm:gap-3 sm:grid-cols-2">
                  <BaseButton
                    :kind="isLarge ? 'ghost' : 'tertiary'"
                    @click="emit('cancel'), areYouSure ? setAreYouSure(false) : null"
                    >Cancel
                  </BaseButton>
                  <BaseButton
                    v-if="hasDanger"
                    ref="okButtonRef"
                    kind="danger"
                    :disabled="isDangerDisabled || areYouSure"
                    :isLoading="isLoadingDanger || areYouSure"
                    @click="setAreYouSure(true)"
                    >{{ isLoading ? 'Loading...' : dangerText }}</BaseButton
                  >
                  <BaseButton
                    v-if="!hasDanger"
                    ref="okButtonRef"
                    kind="primary"
                    :disabled="isConfirmDisabled"
                    :isLoading="isLoading"
                    @click="emit('confirm'), areYouSure ? setAreYouSure(false) : null"
                    >{{ isLoading ? 'Loading...' : confirmText }}
                  </BaseButton>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
