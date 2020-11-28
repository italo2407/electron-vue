import Vue from 'vue'
import Router from 'vue-router'
import PageLogin from './views/PageLogin.vue'

Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'Login',
        component: PageLogin
      }
    ]
})

export default router