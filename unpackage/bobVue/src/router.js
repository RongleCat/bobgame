import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import { atApp } from "./unit/atApp";

import mallRouter from './router/mall'
import friendsRouter from './router/friends'
import myRouter from './router/my'

import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Mall from './views/Mall.vue'
import My from './views/My.vue'
import Guide from './views/Other/Guide.vue'
import Login from './views/Other/Login.vue'


Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.showGuide) {
          next('/guide')
          window.localStorage.showGuide = 'end'
        } else if (!window.localStorage.token) {
          // console.log('未检测到');
          next('/login')
        } else {
          store.commit('setShowTabber', true)
          next()
        }
      }
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.token) {
          next('/login/my')
        } else {
          next()
        }
      }
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide,
      beforeEnter: (to, from, next) => {
        if (!window.localStorage.showGuide) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/login/:to',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    ...friendsRouter,
    ...mallRouter,
    ...myRouter
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

let startPage = ['Home', 'Friends', 'Mall', 'My']

router.beforeEach((to, from, next) => {
  if (startPage.indexOf(to.name) != -1) {
    store.commit('setShowTabber', true)
    atApp(() => {
      window.plus.navigator.setStatusBarStyle('dark');
    })
  } else {
    store.commit('setShowTabber', false)
  }
  next()
})


export default router