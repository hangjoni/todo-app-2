<template>
  <div class="landing">
    <h3>This is the home page</h3>
    <button class="bg-pink-200" @click="showCreateProjectModal">Create new project</button>
    <Modal name="create-new-project" title="Create a new project">
      <input v-model="newProjectName" placeholder="Enter project name" />
    </Modal>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import Modal from '../plugins/modals/Modal.vue'
import service from '../services/todo.js'

const newProjectName = ref('')

const $modals = inject('$modals')

const showCreateProjectModal = () => {
  $modals.show('create-new-project').then(() => {
    service.createToDoProject(newProjectName.value)
  })
}
</script>

<style scoped>
.landing {
  overflow: hidden;
}
</style>
