<template>
  <p class="no-task-message">{{ text }}</p>
</template>

<script setup>
defineProps({
  text: String
})
</script>

<style scoped>
.no-task-message {
  text-align: center;
  font-size: 16px;
}
</style>
