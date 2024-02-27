import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'Clearly outline the scope and key requirements for development.',
        deadline: '2024-02-27',
        isDone: false
      },
      {
        id: 2,
        title: 'Design a Home Page layout focusing on a visually appealing task summary.',
        deadline: '2024-02-27',
        isDone: false
      },
      {
        id: 3,
        title: 'Develop a reusable component for adding tasks with priority settings.',
        deadline: '2024-02-27',
        isDone: false
      },
      {
        id: 4,
        title: 'Update TaskItem component to visually represent task priorities.',
        deadline: '2024-02-27',
        isDone: false
      },
      {
        id: 5,
        title: 'Set up Vuex for global state management of tasks.',
        deadline: '2024-02-27',
        isDone: false
      },
      {
        id: 6,
        title: 'Add filtering options for tasks on the ToDoList page.',
        deadline: '2024-03-15',
        isDone: false
      },
      {
        id: 7,
        title: 'Design CompletedTasks page layout for displaying completed tasks.',
        deadline: '2024-03-15',
        isDone: false
      },
      {
        id: 8,
        title: 'Refine CSS styles for a responsive design.',
        deadline: '2024-03-15',
        isDone: false
      },
      {
        id: 9,
        title: 'Experiment with Vue transition for subtle animations.',
        deadline: '2024-02-26',
        isDone: false
      },
      {
        id: 10,
        title: 'Integrate local storage for persistent task data.',
        deadline: '2024-06-10',
        isDone: false
      },
      {
        id: 11,
        title: 'Create comprehensive Readme documentation for the project.',
        deadline: '2024-05-12',
        isDone: false
      },
      {
        id: 12,
        title: 'Conduct thorough testing of undo functionality in CompletedTasks.',
        deadline: '2024-03-01',
        isDone: false
      }
    ],
    selectedFilter: ''
  }),
  getters: {
    todo(state) {
      return state.tasks.filter((task) => !task.isDone)
    },
    dueToday(state) {
      return state.tasks.filter(
        (task) => new Date(task.deadline).toDateString() === new Date().toDateString()
      )
    },
    outdated(state) {
      const startOfToday = new Date()
      startOfToday.setHours(0, 0, 0, 0)
      return state.tasks.filter(
        (task) => new Date(task.deadline).getTime() < startOfToday && !task.isDone
      )
    },
    done(state) {
      return state.tasks.filter((task) => task.isDone)
    }
  },
  actions: {
    addTask(task) {
      const lastTask = this.tasks[this.tasks.length - 1]
      const newId = lastTask.id + 1
      const newTask = {
        ...task,
        id: newId,
        isDone: false
      }
      this.tasks.push(newTask)
    },
    modifyTask(modifiedTask) {
      const task = this.tasks.find((task) => task.id === modifiedTask.id)
      task.title = modifiedTask.title
      task.deadline = modifiedTask.deadline
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleIsDone(id) {
      const task = this.tasks.find((task) => task.id === id)
      task.isDone = !task.isDone
    }
  }
})
