<template>
  <div>
    <div>
      <h3>Description</h3>
      <input type="text" v-model.string="_item.text" @blur="emitUpdate()" />
    </div>
    <div>
      <h3>Status</h3>
      <select id="">
        <option v-for="status in todoService.getStatusList()" :key="status.id" :value="status.id">
          {{ status.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import todoService from '../services/todo'

const $props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const $emit = defineEmits(['update:modelValue'])
const _item = ref({})

_item.value = { ...$props.modelValue }

function emitUpdate() {
  $emit('update:modelValue', _item.value)
}
</script>

<style lang="scss" scoped></style>
