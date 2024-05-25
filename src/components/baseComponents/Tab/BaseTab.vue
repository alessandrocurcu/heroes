<template>
  <div v-show="selectedTab && props.title === selectedTab.title">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false
  }
});

const selectedTab: any = inject('selectedTab');
</script>
