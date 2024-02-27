<template>
  <main>
    <AddTaskButton />
    <TaskStatusList />
    <OverdueTaskCardList />
  </main>
</template>

<script setup>
import AddTaskButton from '@/components/atoms/AddTaskButton.vue'
import OverdueTaskCardList from '@/components/organisms/OverdueTaskCardList.vue'
import TaskStatusList from '@/components/organisms/TaskStatusList.vue'
</script>

<style scoped></style>
