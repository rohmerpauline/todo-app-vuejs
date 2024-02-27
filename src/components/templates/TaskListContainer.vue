<template>
  <div class="task-list-container">
    <slot></slot>
  </div>
</template>

<script></script>

<style scoped>
.task-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}
</style>
