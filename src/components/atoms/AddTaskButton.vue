<template>
  <div class="add-task-button">
    <p v-if="isHovered">Add a task</p>
    <button
      type="button"
      @mouseenter="handleMouseOver"
      @mouseleave="handleMouseOut"
      @click="handleClick"
    >
      <font-awesome-icon icon="plus" class="status-icon" />
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const isHovered = ref(false)

const handleClick = () => {
  router.push('/create-task')
}

const handleMouseOver = () => {
  isHovered.value = true
}

const handleMouseOut = () => {
  isHovered.value = false
}
</script>

<style scoped>
.add-task-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
}

button {
  width: max-content;
  height: max-content;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100%;
}

.status-icon {
  width: 20px;
  height: 20px;
  padding: 10px;
  background-color: #f26e56;
  border-radius: 100%;
  color: white;
}
</style>
