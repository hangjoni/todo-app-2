<template>
  <div>
    <MainHeader />
    <ToDoProject />
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainHeader from './components/ToDo/MainHeader.vue'
import ToDoProject from './components/ToDo/ToDoProject.vue'
</script>

<style lang="scss" scoped></style>
