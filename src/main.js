import Vue from 'vue'
import router from './router'
import App from './App.vue'
//import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})