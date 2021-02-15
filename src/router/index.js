import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/PageLogin.vue'
import POS from '../views/PagePOS.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/pos',
        name: 'POS',
        component: POS
      }
    ]
})

export default router