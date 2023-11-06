<template>
  <div class="bg-sky-500">
    <h3>SideBar</h3>
    <RouterLink :to="{ name: 'landing' }" active-class="font-bold">Home</RouterLink>
    <div v-for="p in _projects" :key="p.id">
      <RouterLink :to="{ name: 'project', params: { id: p.id } }" active-class="font-bold">{{
        p.name
      }}</RouterLink>
    </div>
    {{ _projects }}
  </div>
</template>

<script setup>
import service from '../../services/todo.js'
import eventBus from '../../services/eventBus.js'
import { RouterLink } from 'vue-router'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const _projects = ref([])

updateProjects()

onMounted(() => {
  // set up a subscsription on eventBus on #updateProjects with a callback function
  eventBus.on('#updateProjects', updateProjects)
})

onBeforeUnmount(() => {
  // clean up
  eventBus.off('#updateProjects')
})

function updateProjects() {
  // get the updated Projects by calling the api, reactively update _projects so
  // SideBar would display the updated Projects
  let projects = service.loadProjectsManifest()
  _projects.value = projects.list
}
</script>

<style lang="scss" scoped></style>
