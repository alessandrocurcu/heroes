<script setup lang="ts">
import { useInstanceStore } from '@/stores/InstanceStore'
import { isNil } from 'ramda'
import { onMounted } from 'vue'

onMounted(async () => {
  const InstanceStore = useInstanceStore()
  if (isNil(InstanceStore.instances) && !InstanceStore.isLoadingInstances) {
    await InstanceStore.getInstancesAndProjects()
  }
})
</script>
<template>
  <main class="flex gap-8 p-4 xl:p-8">
    <div>HomeView</div>
  </main>
</template>
