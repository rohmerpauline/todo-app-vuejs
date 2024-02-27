<script setup>
import TaskFilters from '@/components/organisms/TaskFilters.vue'
import TaskCardList from '../components/organisms/TaskCardList.vue'
import { ref } from 'vue'
const filterSelectedOption = ref()
</script>

<template>
  <div class="to-do">
    <h1>Tasks</h1>
    <TaskFilters v-model:filterOption="filterSelectedOption" />
    <TaskCardList v-model:filterOption="filterSelectedOption" />
  </div>
</template>

<style>
.to-do {
  margin: 20px 5%;
}

@media (min-width: 800px) {
  .to-do {
    margin: 20px 15%;
  }
}

@media (min-width: 1024px) {
  .to-do {
    margin: 20px 30%;
  }
}
</style>
