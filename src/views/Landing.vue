<template>
  <div class="landing">
    <h3>This is the home page</h3>
    <button class="bg-pink-200" @click="showCreateProjectModal">Create new project</button>
    <Modal name="create-new-project" title="Create a new project"> </Modal>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import Modal from '../plugins/modals/Modal.vue'

const $modals = inject('$modals')

const showCreateProjectModal = () => {
  $modals.show('create-new-project')
}
</script>

<style scoped>
.landing {
  overflow: hidden;
}
</style>
