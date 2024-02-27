<template>
  <div>
    <PageHeading title="Task statuses" />
    <TaskListContainer>
      <TaskStatusCard v-for="status in taskStatuses" :status="status" />
    </TaskListContainer>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import PageHeading from '../atoms/PageHeading.vue'
import TaskStatusCard from '../molecules/TaskStatusCard.vue'
import TaskListContainer from '../templates/TaskListContainer.vue'

const taskStore = useTaskStore()

const taskStatuses = [
  { title: 'Due today', numberTasks: taskStore.dueToday.length, icon: 'clock', color: '#FEC247' },
  { title: 'To Do', numberTasks: taskStore.todo.length, icon: 'list-check', color: '#5693F2' },
  { title: 'Completed', numberTasks: taskStore.done.length, icon: 'check', color: '#53C2C4' },
  {
    title: 'Overdue',
    numberTasks: taskStore.outdated.length,
    icon: 'exclamation',
    color: '#F26E56'
  }
]
</script>

<style scoped></style>
