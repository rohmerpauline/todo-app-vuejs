<template>
  <header>
    <nav>
      <RouterLink to="/dashboard">Home</RouterLink>
      <RouterLink to="/to-do">To Do</RouterLink>
      <RouterLink to="/done">Done</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 3px solid black;
}

nav {
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: black;
  letter-spacing: 1.2px;
  padding: 3px 10px;
  border: 1px solid transparent;
}

nav a.router-link-exact-active,
nav a:hover {
  border: 2px solid black;
  border-radius: 12px;
}
</style>
