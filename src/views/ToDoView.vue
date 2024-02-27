<script setup>
import TaskFilters from '@/components/organisms/TaskFilters.vue'
import TaskCardList from '../components/organisms/TaskCardList.vue'
import { ref } from 'vue'
import AddTaskButton from '@/components/atoms/AddTaskButton.vue'
const filterSelectedOption = ref()
</script>

<template>
  <main>
    <AddTaskButton />
    <div>
      <h1>Tasks</h1>
      <TaskFilters v-model:filterOption="filterSelectedOption" />
      <TaskCardList v-model:filterOption="filterSelectedOption" />
    </div>
  </main>
</template>

<style scoped></style>
