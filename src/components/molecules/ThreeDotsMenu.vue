<template>
  <div v-click-outside="closeTaskModify" class="three-dots-container">
    <div class="three-dots" @click="toggleTaskModify">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="task-modify" v-if="showTaskModify">
      <p @click="taskStore.deleteTask(id)">Delete</p>
      <p @click="handleOnModify">Modify</p>
    </div>
  </div>
</template>

<script setup>
const { id } = defineProps(['id'])
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const taskStore = useTaskStore()
const showTaskModify = ref(false)
const router = useRouter()

const handleOnModify = () => {
  router.push({
    name: 'create-task',
    params: {
      id: id
    }
  })
}

const toggleTaskModify = () => {
  showTaskModify.value = !showTaskModify.value
}

const closeTaskModify = () => {
  showTaskModify.value = false
}
</script>

<style scoped>
.three-dots-container {
  position: relative;
}

.three-dots {
  display: flex;
  gap: 3px;
  cursor: pointer;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: black;
}

.task-modify {
  border: 1px solid black;
  position: absolute;
  background-color: white;
  right: 0px;
  top: 10px;
  border-radius: 5px;
  width: 120px;
  text-align: center;
  z-index: 4;
}

.task-modify p {
  padding: 2px 0;
}

.task-modify p:hover {
  font-weight: 500;
  cursor: pointer;
}
</style>
