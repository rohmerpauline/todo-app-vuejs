<template>
  <main>
    <AddTaskButton />
    <div class="done">
      <PageHeading title="Completed tasks" />
      <TaskListContainer v-if="sortedTask.length > 0">
        <TaskCard v-for="task in sortedTask" :key="task.id" :task="task" />
      </TaskListContainer>
      <NoTaskMessage v-else text="No completed tasks" />
    </div>
  </main>
</template>

<script setup>
import AddTaskButton from '@/components/atoms/AddTaskButton.vue'
import NoTaskMessage from '@/components/atoms/NoTaskMessage.vue'
import PageHeading from '@/components/atoms/PageHeading.vue'
import TaskCard from '@/components/molecules/TaskCard.vue'
import TaskListContainer from '@/components/templates/TaskListContainer.vue'
import { useTaskStore } from '@/stores/TaskStore'
import { ref, watch } from 'vue'
const taskStore = useTaskStore()
const sortedTask = ref()
sortedTask.value = taskStore.tasks.filter((task) => task.isDone)

taskStore.tasks.forEach((task) => {
  watch(
    () => task.isDone,
    () => {
      sortedTask.value = taskStore.tasks.filter((task) => task.isDone)
    }
  )
})
</script>

<style scoped></style>
