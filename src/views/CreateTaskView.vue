<template>
  <main>
    <div class="create-task">
      <h1>Create a task</h1>
      <form @submit.prevent="handleSubmit">
        <input
          v-model="taskTitle"
          type="text"
          id="task-title"
          placeholder="Your task title"
          name="task-title"
        />
        <VueDatePicker
          v-model="selectedDate"
          placeholder="Your deadline (YYYY-MM-DD)"
          format="yyyy-MM-dd"
        />
        <button class="create-task-button" type="submit">Create a task</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VueDatePicker from '@vuepic/vue-datepicker'
import { useRoute } from 'vue-router'

const taskStore = useTaskStore()
const route = useRoute()

const taskFromId = taskStore.tasks.find((task) => task.id == Number(route.params.id))

const router = useRouter()
const taskTitle = ref(taskFromId?.title || '')
const selectedDate = ref(taskFromId?.deadline || null)

const handleSubmit = () => {
  if (taskTitle.value.length > 0 && selectedDate.value) {
    if (route.params.id) {
      console.log(route.params.id)
      taskStore.modifyTask({
        title: taskTitle.value,
        deadline: selectedDate.value,
        id: Number(route.params.id)
      })
    } else {
      taskStore.addTask({
        title: taskTitle.value,
        deadline: selectedDate.value
      })
    }

    router.push('/to-do')
  }
}
</script>

<style scoped>
form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

input {
  height: 30px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0px 5px 0px -3px rgba(0, 0, 0, 0.93);
}

::v-deep .dp__input {
  border-radius: 8px !important;
  border: 1px solid black !important;
  box-shadow: 0px 5px 0px -3px rgba(0, 0, 0, 0.93) !important;
}

form .dp__input {
  color: red !important;
}

.create-task-button {
  width: 200px;
  margin: auto;
  border: none;
  background-color: #f26e56;
  border-radius: 12px;
  font-size: 18px;
  padding: 10px 0;
  color: white;
  cursor: pointer;
}
</style>
