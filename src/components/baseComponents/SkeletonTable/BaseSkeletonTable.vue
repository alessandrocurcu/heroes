<script setup lang="ts">
defineProps({
  tableTitle: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div style="max-height: calc(100dvh - 52px)" class="overflow-hidden">
    <div class="border border-gray-200 shadow-sm animate-pulse">
      <!-- bg-gradient-to-r from-gray-100 -->
      <div class="h-[34px] bg-gray-50"></div>
      <div class="h-[34px] bg-gray-50 border-t border-gray-200"></div>
      <div
        v-for="index in 22"
        :key="index"
        class="h-[34px] bg-gray-100 border-t border-gray-200 py-2 pl-8 pr-24 flex justify-between">
        <div class="w-20 h-5 bg-gray-200 xl:w-[28rem]"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <!-- <div class="w-20 h-5 bg-gray-200 xl:w-28"></div>
        <div class="w-20 h-5 bg-gray-200 xl:w-28"></div> -->
      </div>
    </div>
  </div>
</template>
