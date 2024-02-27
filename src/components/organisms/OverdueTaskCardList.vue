<template>
  <div>
    <h2><font-awesome-icon icon="exclamation" class="exclamation-icon" />Overdue tasks</h2>
    <div class="tasks-container">
      <TaskCard v-for="task in taskStore.outdated" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup>
import TaskCard from '../molecules/TaskCard.vue'
import { useTaskStore } from '@/stores/TaskStore'
const taskStore = useTaskStore()
</script>

<style scoped>
.exclamation-icon {
  color: #f26e56;
  padding: 0 10px;
}

.tasks-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
