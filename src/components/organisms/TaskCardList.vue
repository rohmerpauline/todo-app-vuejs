<template>
  <div class="task-card-list">
    <TaskCard v-for="task in sortedTask" :key="task.id" :task="task" />
  </div>
</template>

<script setup>
import TaskCard from '../molecules/TaskCard.vue'
import { ref, watch } from 'vue'
import { useTaskStore } from '../../stores/TaskStore'
const taskStore = useTaskStore()
const sortedTask = ref()
const selectedOption = defineModel('filterOption')

const sortTasksByOption = (tasks, option) => {
  const filteredTasks = tasks.filter((task) => !task.isDone)

  if (option === 'Closest Deadline First') {
    return filteredTasks.slice().sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
  } else if (option === 'Farthest Deadline First') {
    return filteredTasks.slice().sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
  } else {
    return tasks
  }
}

watch([() => taskStore.tasks, () => selectedOption.value], ([newTasks, newOption]) => {
  sortedTask.value = sortTasksByOption(newTasks, newOption)
})

taskStore.tasks.forEach((task) => {
  watch(
    () => task.isDone,
    () => {
      sortedTask.value = sortTasksByOption(taskStore.tasks, selectedOption.value)
    }
  )
})
</script>

<style scoped>
.task-card-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0;
}
</style>
