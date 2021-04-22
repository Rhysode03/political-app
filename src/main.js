import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from '.routes.js'
import store from './store/store.js'

=======
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
>>>>>>> master
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
