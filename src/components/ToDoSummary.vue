<template>
  <section class="flex flex-col md:flex-row md:px-12">
    <div v-for="cat in itemsSummary" :key="cat.id" class="flex-1 px-8 py-2">
      <h3 class="text-lg">{{ cat.label }}</h3>
      <h1 class="text-xl">{{ cat.count }}</h1>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import todoService from '../services/todo'

const props = defineProps(['itemsList'])

const itemsSummary = computed(() => {
  let res = todoService.getStatusList().map((status) => {
    status['count'] = 0
    return status
  })
  for (let item of props.itemsList) {
    res.map((status) => {
      if (status.id === item.status) {
        status.count += 1
      }
      return status
    })
  }
  return res
})
</script>

<style lang="scss" scoped></style>
