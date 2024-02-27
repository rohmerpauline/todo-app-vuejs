<script setup>
import TaskFilters from '@/components/organisms/TaskFilters.vue'
import TaskCardList from '../components/organisms/TaskCardList.vue'
import { ref } from 'vue'
const filterSelectedOption = ref()
</script>

<template>
  <main>
    <div>
      <h1>Tasks</h1>
      <TaskFilters v-model:filterOption="filterSelectedOption" />
      <TaskCardList v-model:filterOption="filterSelectedOption" />
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 20px 5%;
}

@media (min-width: 800px) {
  main {
    margin: 20px 15%;
  }
}

@media (min-width: 1024px) {
  main {
    margin: 20px 30%;
  }
}
</style>
