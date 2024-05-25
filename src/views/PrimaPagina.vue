<script setup lang="ts">
// import { useRouter } from 'vue-router';
import { ref } from 'vue';
// const router = useRouter();
const prova = ref('');
</script>
<template>
  <!-- <div class="grid h-screen place-items-center">
    <div>
      <div class="mb-2 text-center">
        {{ prova }}
      </div>
      <div class="p-8 bg-gray-100 shadow-md w-80 shadow-gray-300/60">
        <div class="space-y-6">
          <BaseTextInput
            v-model="prova"
            label="Text Box Label"
            name="test"
            placeholder=""
            type="text" />
        </div>
        <BaseButton kind="primary" class="w-full mt-12">Bottone Prova </BaseButton>
      </div>
    </div>
  </div> -->
  <div class="grid h-screen place-items-center">
    <div class="border border-gray-500 h-[600px] rounded-lg p-4">
      <div class="grid grid-cols-3 gap-4">
        <div
          class="px-4 py-8 text-center border border-gray-200 rounded-md cursor-pointer bg-gray-50 hover:shadow-md">
          Travel
        </div>
        <div
          class="px-4 py-8 text-center border border-gray-200 rounded-md cursor-pointer bg-gray-50 hover:shadow-md">
          Businness
        </div>
      </div>
    </div>
  </div>
</template>
