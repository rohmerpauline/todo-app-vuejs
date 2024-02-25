# todo-app-vuejs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Overview:

The brief for this project has been created using ChatGPT, as a self-imposed challenge to elevate my skills in Vue.js development.

Create a straightforward To-Do app with Vue.js 3 and Vuex for global state management. The app will feature multiple pages for organized task management.

## Pages/Tabs:

### Home Page (Dashboard):

- Display a summary of tasks, including the total number of tasks, completed tasks, and pending tasks.
- Show a list of the most important tasks or highlight overdue tasks.

### To-Do List Page:

- Display a list of tasks with their names and status (completed/pending).
- Implement functionality to add new tasks.
- Allow users to mark tasks as completed, delete them, or mark them as high-priority.
- Include a simple filter for viewing completed, pending, or high-priority tasks.

### Completed Tasks Page:

- Show a list of completed tasks.
- Include an option to undo the completion of a task and move it back to the To-Do list.

## State Management (Vuex):

### Modules:

- Create a Vuex module for managing tasks.

## Routing (Vue Router):

### Define Routes:

- Set up routes for each page (Home, ToDoList, CompletedTasks).
  Styling:

## Class-Based Styling with Vue:

- Utilize Vue's built-in class-based styling within each component.
- Optionally, use a CSS pre-processor like Sass for enhanced styling.

## Persistence:

### Local Storage:

- Implement local storage for task persistence.
