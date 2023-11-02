<template>
  <div v-for="cat in itemsSummary" :key="cat.id">
    <div>
      <h3>{{ cat.label }}</h3>
      <h1>{{ cat.count }}</h1>
    </div>
  </div>
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
