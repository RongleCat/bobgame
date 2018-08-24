import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Mall from './views/Mall.vue'
import My from './views/My.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/friends',
      name: 'friends',
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
      component: My
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
