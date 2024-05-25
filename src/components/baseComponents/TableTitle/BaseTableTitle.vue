<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  },
  info: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['show-info']);
</script>
<template>
  <h3 class="inline-flex items-center gap-4 text-xs tracking-wider text-gray-500 uppercase">
    {{ text }}
    <BaseIcon
      v-if="info"
      @click="() => emit('show-info')"
      class="w-5 h-5 mr-1 text-gray-500 rounded-md cursor-pointer hover:text-indigo-800"
      name="InformationCircleIconOutline" />
  </h3>
</template>
