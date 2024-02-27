import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import clickOutside from './directives/click-outside'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronDown,
  faClock,
  faCheck,
  faExclamation,
  faListCheck,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown, faListCheck, faClock, faCheck, faExclamation, faPlus)

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('click-outside', clickOutside)
app.use(router)
app.use(pinia)
app.mount('#app')
