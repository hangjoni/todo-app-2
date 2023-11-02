vbase
<template>
  <div>
    <input type="text" v-model="filter" @keyup="updateFilter" placeholder="type here to filter" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update'])

const filter = ref('')

const updateFilter = () => {
  emit('updateFilter', filter.value)
}
</script>

<style lang="scss" scoped></style>
