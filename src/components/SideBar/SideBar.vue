<template>
  <div class="bg-sky-500">{{ projects }}</div>
</template>

<script setup>
import service from '../../services/todo.js'
import { ref } from 'vue'

const projects = ref({})
projects.value = service.loadProjectsManifest()
</script>

<style lang="scss" scoped></style>
