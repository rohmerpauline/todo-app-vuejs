<template>
  <Header />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/organisms/Header.vue'
</script>

<style scoped></style>
