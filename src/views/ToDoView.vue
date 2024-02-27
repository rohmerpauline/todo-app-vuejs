<template>
  <main>
    <AddTaskButton />
    <div>
      <PageHeading title="Tasks" />
      <TaskFilters v-model:filterOption="filterSelectedOption" />
      <TaskCardList v-model:filterOption="filterSelectedOption" />
    </div>
  </main>
</template>

<script setup>
import TaskFilters from '@/components/organisms/TaskFilters.vue'
import TaskCardList from '../components/organisms/TaskCardList.vue'
import { ref } from 'vue'
import AddTaskButton from '@/components/atoms/AddTaskButton.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
const filterSelectedOption = ref()
</script>

<style scoped></style>
