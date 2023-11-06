<template>
  <div>
    <ToDoSummary :itemsList="_items" />
    <ToDoList
      :modelValue="_items"
      @toggle="toggleStatus"
      @delete="deleteItem"
      @edit="showModal(false, $event)"
    >
      <button @click="showModal(true)">New Item</button>
    </ToDoList>
    <Modal name="newEditItem" title="To Do Item">
      <ToDoItemForm v-model="_item"></ToDoItemForm>
    </Modal>
    <Modal name="deleteItem" title="Delete To-Do Item">
      <p>This action will delete the item: {{ _item.text }}</p>
    </Modal>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import ToDoList from './ToDoList.vue'
import ToDoItemForm from './ToDoItemForm.vue'
import ToDoSummary from './ToDoSummary.vue'
import todoService from '../../services/todo'

const $modals = inject('$modals')
const _item = ref(todoService.getDefault())
const _items = ref([])

function showModal(new_item = true, item = {}) {
  if (new_item) {
    _item.value = todoService.getDefault()
  } else {
    _item.value = todoService.makeCopy(item)
  }

  $modals.show('newEditItem').then(() => {
    if (new_item) {
      _items.value.push(_item.value)
    } else {
      let index = getIndex(item)
      if (index >= 0) {
        _items.value[index] = _item.value
      } else {
        alert('error updating the itme')
      }
    }
  })
}

function deleteItem(item) {
  $modals.show('deleteItem').then(() => {
    let index = getIndex(item)
    if (index >= 0) {
      _items.value.splice(index, 1)
    }
  })
}

function getIndex(item) {
  let index = _items.value.findIndex((it) => it.id == item.id)
  if (index == -1) {
    return false
  } else {
    return index
  }
}

function toggleStatus(item) {
  item.status = todoService.toggleStatus(item.status)
}
</script>

<style lang="scss" scoped></style>
