<template>
  <div>
    <h1>Task statuses</h1>
    <div class="task-status-list">
      <TaskStatusCard v-for="status in taskStatuses" :status="status" />
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import TaskStatusCard from '../molecules/TaskStatusCard.vue'

const taskStore = useTaskStore()

const taskStatuses = [
  { title: 'Due today', numberTasks: taskStore.dueToday.length, icon: 'clock', color: '#FEC247' },
  { title: 'To Do', numberTasks: taskStore.tasks.length, icon: 'list-check', color: '#5693F2' },
  { title: 'Completed', numberTasks: '0', icon: 'check', color: '#53C2C4' },
  {
    title: 'Overdue',
    numberTasks: taskStore.outdated.length,
    icon: 'exclamation',
    color: '#F26E56'
  }
]
</script>

<style scoped>
.task-status-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
}
</style>
