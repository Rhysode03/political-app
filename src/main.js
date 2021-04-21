import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from '.routes.js'
import store from './store/store.js'

Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
