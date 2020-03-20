import Vue from 'vue'
import VueRouter from 'vue-router'
import application from '../application'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home')
  },
  {
    path: '/list1',
    name: 'List',
    component: () => import('../views/list/list')
  },
  {
    path: '/list2-2-1',
    name: 'ListDetail',
    component: () => import('../views/list/listDetail')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/auth/auth')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import('../views/layout/error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (application.authorize.canAccess(to.path)) {
    next()
  } else {
    next('/404')
  }
})

export default router
