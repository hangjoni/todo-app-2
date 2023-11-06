<template>
  <div class="app">
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import SideBar from './components/SideBar/SideBar.vue'
</script>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 12rem auto;
  overflow: hidden;
}
</style>
