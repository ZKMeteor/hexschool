import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import { currency } from './methods/filters'

import $httpMessage from '@/methods/pushMessage'
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}
app.config.globalProperties.$httpMessage = $httpMessage
app.use(store)
app.use(router)
app.use(VueAxios, axios)
app.component('Loading', Loading)
app.mount('#app')
