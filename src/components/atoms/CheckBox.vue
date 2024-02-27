<template>
  <div class="checkbox-container" @click="taskStore.toggleIsDone(id)">
    <input class="checkbox-input" type="checkbox" :name="id" :id="id" :checked="isDone" />
    <label :for="id" class="checkbox-mark"></label>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore'
const taskStore = useTaskStore()
defineProps({
  id: Number,
  isDone: Boolean
})
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.checkbox-container label {
  cursor: pointer;
  display: flex;
}

.checkbox-container input[type='checkbox'] {
  cursor: pointer;
  opacity: 0;
  position: absolute;
}

.checkbox-container label::before {
  content: '';
  width: 22px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
}

.checkbox-container input[type='checkbox']:checked + label::before {
  content: '\002714';
  background-color: #53c2c4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-sizing: border-box;
}
</style>
