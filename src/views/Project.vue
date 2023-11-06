<template>
  <div>
    {{ props.id }}
    {{ _items }}
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
import { ref, inject, watch, onMounted } from 'vue'
import ToDoList from '../components/ToDo/ToDoList.vue'
import ToDoItemForm from '../components/ToDo/ToDoItemForm.vue'
import ToDoSummary from '../components/ToDo/ToDoSummary.vue'
import todoService from '../services/todo'

const $modals = inject('$modals')
const _item = ref(todoService.getDefault())
const _items = ref([])

const props = defineProps(['id'])

onMounted(loadProject)

watch(() => props.id, loadProject)

function loadProject() {
  _items.value = todoService.loadProject(props.id)
}

function saveProject() {
  todoService.saveProject(props.id, _items.value)
}

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
    saveProject()
  })
}

function deleteItem(item) {
  $modals.show('deleteItem').then(() => {
    let index = getIndex(item)
    if (index >= 0) {
      _items.value.splice(index, 1)
    }
  })
  saveProject()
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
  saveProject()
}
</script>

<style lang="scss" scoped></style>
