<template>
  <main>
    <AddTaskButton />
    <div class="done">
      <h1>This is an done page</h1>
    </div>
  </main>
</template>

<script setup>
import AddTaskButton from '@/components/atoms/AddTaskButton.vue'
</script>

<style>
@media (min-width: 1024px) {
  .done {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
