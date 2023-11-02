<template>
  <ToDoFilter @updateFilter="handleUpdateFilter" />
  <table>
    <!-- Title -->
    <thead>
      <tr>
        <th>Status</th>
        <th>Item</th>
        <th>
          <slot></slot>
        </th>
      </tr>
      <span>Item</span>
    </thead>
    <tbody>
      <tr v-for="item in _filtered_list" :key="item.id">
        <td @click="emitEvent('toggle', item)">
          <i class="fa-solid fa-2x fa-square" v-if="item.status == 'not_started'"></i>
          <i class="fa-solid fa-2x fa-square-minus" v-if="item.status == 'in_progress'"></i>
          <i class="fa-solid fa-2x fa-square-check" v-if="item.status == 'completed'"></i>
        </td>
        <td>{{ item.text }}</td>
        <td>
          <span @click="emitEvent('edit', item)">
            <i class="fa-solid fa-pen-to-square">Edit</i>
          </span>
          <span @click="emitEvent('delete', item)">
            <i class="fa-solid fa-trash-can">Delete</i>
          </span>
        </td>
      </tr>
      <tr v-if="_filtered_list.length == 0">
        <td><i class="fa-solid fa-square"></i></td>
        <td>The list is empty</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed, ref } from 'vue'
import ToDoFilter from './ToDoFilter.vue'

const filter = ref('')

const $props = defineProps({
  modelValue: { type: Array, default: () => [] }
})
const $emit = defineEmits(['edit', 'delete', 'toggle'])
const _filtered_list = computed(() => {
  if (filter.value) {
    return $props.modelValue.filter((item) => {
      return item.text.toUpperCase().includes(filter.value.toUpperCase())
    })
  } else {
    return $props.modelValue
  }
})

const handleUpdateFilter = (updatedFilterText) => {
  filter.value = updatedFilterText
}

const emitEvent = (event_name, payload) => {
  $emit(event_name, payload)
}
</script>

<style lang="scss" scoped></style>
