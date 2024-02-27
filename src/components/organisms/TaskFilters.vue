<script setup>
import { onMounted, ref } from 'vue'

const selectedOption = defineModel('filterOption')
const selectOptions = ['Closest Deadline First', 'Farthest Deadline First']
const showDropDown = ref(false)

const updateSelectedOption = (option) => {
  selectedOption.value = option
  showDropDown.value = false
}

const toggleDropDown = () => {
  showDropDown.value = !showDropDown.value
}

onMounted(() => {
  if (!selectedOption.value) {
    selectedOption.value = selectOptions[0]
  }
})
</script>

<template>
  <div class="task-filters">
    <p>Filter by</p>
    <div class="select-container">
      <div class="select-element" @click="toggleDropDown">
        <span>{{ selectedOption }}</span>
        <font-awesome-icon icon="chevron-down" class="chevron-icon" />
      </div>
      <div class="drop-down-content" v-if="showDropDown">
        <div v-for="option in selectOptions" @click="updateSelectedOption(option)">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-filters {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: auto;
}

.select-container {
  position: relative;
}

.select-element {
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: minmax(0, 1fr) max-content;
  justify-content: space-between;
  align-items: center;
  padding: 2px 8px;
  cursor: pointer;
}

.select-element span {
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chevron-icon {
  vertical-align: middle;
  height: 10px;
  width: 10px;
}

.drop-down-content {
  position: absolute;
  top: 35px;
  background-color: white;
  z-index: 300;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}

.drop-down-content div {
  padding: 5px 8px;
}

.select-element,
.drop-down-content div:hover {
  background-color: #5693f2;
  color: white;
}

.task-filters,
.drop-down-content {
  width: 150px;
}

@media (min-width: 500px) {
  .task-filters,
  .drop-down-content {
    width: 250px;
  }
}
</style>
