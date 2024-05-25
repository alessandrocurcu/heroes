<template>
  <div
    v-if="props.clickMode"
    class="inline-block"
    ref="trigger"
    aria-describedby="tooltip"
    @click="handleMouseClick"
    @mouseleave="handleMouseLeave">
    <slot />
  </div>
  <div
    v-else
    class="inline-block"
    ref="trigger"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <slot />
  </div>
  <teleport to="body">
    <div
      ref="container"
      id="tooltip"
      role="tooltip"
      :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      class="relative z-20 px-4 py-2 text-[10px] text-gray-900 transition-all bg-gray-100 border rounded-md shadow-xl border-gray-600">
      {{ props.text }}

      <div id="arrow" data-popper-arrow />
    </div>
  </teleport>
</template>

<script setup lang="ts">
// ℹ️ Docs popper.js https://popper.js.org/docs/v2/constructors/
// ℹ️ https://github.com/tailwindlabs/headlessui/discussions/425
// ℹ️ Guarda https://dev.to/mayashavin/build-an-accessible-tooltip-component-efficiently-with-css-and-vue-1p27
// TODO: si potrebbero passare delle props per definire l'offset del tooltip oppure il placement
// In questo modo si potrebbe sfruttare la componente per creare tooltip con placement diversi e offset diversi in base a dove devono essere usati

import { ref } from 'vue';
import { usePopper } from './usePopper';
export interface BaseTooltipProps {
  text: string;
  clickMode?: boolean;
}
const props = withDefaults(defineProps<BaseTooltipProps>(), {
  clickMode: false
});

const [trigger, container] = usePopper({
  placement: 'top',
  strategy: 'fixed',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 16]
      }
    }
  ]
});

const isOpen = ref(false);
const enterTimeout: any = ref();
const leaveTimeout: any = ref();

const handleMouseClick = () => {
  leaveTimeout.value && clearTimeout(leaveTimeout.value);
  isOpen.value = true;
};
const handleMouseEnter = () => {
  leaveTimeout.value && clearTimeout(leaveTimeout.value);
  enterTimeout.value = setTimeout(() => (isOpen.value = true), 150);
};
const handleMouseLeave = () => {
  if (!props.clickMode) enterTimeout.value && clearTimeout(enterTimeout.value);
  leaveTimeout.value = setTimeout(() => (isOpen.value = false), 150);
};
</script>

<style scoped>
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
  @apply border-r border-b border-gray-600;
}

#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: 4px;
}
</style>
