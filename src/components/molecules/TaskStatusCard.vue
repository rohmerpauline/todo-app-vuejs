<template>
  <div class="task-status-card" :style="{ backgroundColor: status.color }">
    <font-awesome-icon :icon="status.icon" class="status-icon" />
    <div>
      <p class="status-title">{{ status.title }}</p>
      <p class="status-number-tasks">{{ status.numberTasks }} tasks</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  status: Object
})
</script>

<style scoped>
.task-status-card {
  padding: 20px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-bottom: 15px;
}

.status-icon {
  height: 22px;
  width: 22px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  padding: 15px;
  color: white;
  margin: auto;
}

.status-title {
  font-weight: 700;
}

.status-number-tasks {
  font-size: 0.8em;
  font-weight: 300;
}

@media screen and (min-width: 500px) {
  .task-status-card {
    width: calc(50% - 10px);
  }
}
</style>
