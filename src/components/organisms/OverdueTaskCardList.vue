<template>
  <div class="overdue-list">
    <h2><font-awesome-icon icon="exclamation" class="exclamation-icon" />Overdue tasks</h2>
    <TaskListContainer v-if="taskStore.outdated.length > 0">
      <TaskCard v-for="task in taskStore.outdated" :key="task.id" :task="task" />
    </TaskListContainer>
    <NoTaskMessage v-else text="No overdue tasks" />
  </div>
</template>

<script setup>
import TaskCard from '../molecules/TaskCard.vue'
import TaskListContainer from '../templates/TaskListContainer.vue'
import { useTaskStore } from '@/stores/TaskStore'
import NoTaskMessage from '../atoms/NoTaskMessage.vue'
const taskStore = useTaskStore()
</script>

<style scoped>
.overdue-list {
  margin-top: 20px;
}
.exclamation-icon {
  color: #f26e56;
  padding: 0 10px;
}

h2 {
  margin-bottom: 20px;
}

.no-overdue-message {
  text-align: center;
  font-size: 16px;
}
</style>
