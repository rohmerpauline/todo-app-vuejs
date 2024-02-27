import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Clearly outline the scope and key requirements for development.',
        deadline: '2024-02-27'
      },
      {
        id: 2,
        title: 'Design a Home Page layout focusing on a visually appealing task summary.',
        deadline: '2024-02-27'
      },
      {
        id: 3,
        title: 'Develop a reusable component for adding tasks with priority settings.',
        deadline: '2024-02-27'
      },
      {
        id: 4,
        title: 'Update TaskItem component to visually represent task priorities.',
        deadline: '2024-02-27'
      },
      { id: 5, title: 'Set up Vuex for global state management of tasks.', deadline: '2024-02-27' },
      {
        id: 6,
        title: 'Add filtering options for tasks on the ToDoList page.',
        deadline: '2024-03-15'
      },
      {
        id: 7,
        title: 'Design CompletedTasks page layout for displaying completed tasks.',
        deadline: '2024-03-15'
      },
      { id: 8, title: 'Refine CSS styles for a responsive design.', deadline: '2024-03-15' },
      {
        id: 9,
        title: 'Experiment with Vue transition for subtle animations.',
        deadline: '2024-02-26'
      },
      {
        id: 10,
        title: 'Integrate local storage for persistent task data.',
        deadline: '2024-06-10'
      },
      {
        id: 11,
        title: 'Create comprehensive Readme documentation for the project.',
        deadline: '2024-05-12'
      },
      {
        id: 12,
        title: 'Conduct thorough testing of undo functionality in CompletedTasks.',
        deadline: '2024-03-01'
      }
    ],
    selectedFilter: ''
  }),
  getters: {
    outdated(state) {
      return state.tasks.filter((task) => new Date(task.deadline) < new Date())
    }
  }
})
