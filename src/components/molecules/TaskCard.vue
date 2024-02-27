<script setup>
import CheckBox from '../atoms/CheckBox.vue'
import ThreeDotsMenu from './ThreeDotsMenu.vue'

defineProps({
  task: Object
})

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(new Date(dateString))
  return formattedDate
}
</script>

<template>
  <div class="task-card">
    <div class="tast-element">
      <CheckBox :id="task.taskId" />
      <p>{{ task.title }}</p>
      <ThreeDotsMenu />
    </div>
    <p class="task-deadline">{{ formatDate(task.deadline) }}</p>
  </div>
</template>

<style scoped>
.task-card {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 15px;
}

.tast-element {
  display: grid;
  grid-template-columns: max-content auto max-content;
  gap: 15px;
  align-items: center;
}

.task-deadline {
  display: flex;
  justify-content: flex-end;
  font-size: 11px;
  font-weight: 300;
}
</style>
