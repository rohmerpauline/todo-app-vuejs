<template>
  <div class="task-card">
    <div class="tast-element">
      <CheckBox :id="task.id" :isDone="task.isDone" />
      <p>{{ task.title }}</p>
      <ThreeDotsMenu :id="task.id" />
    </div>
    <p class="task-deadline">{{ formatDate(task.deadline) }}</p>
  </div>
</template>

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

<style scoped>
.task-card {
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0px 5px 0px -3px rgba(0, 0, 0, 0.93);
  width: 100%;
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
