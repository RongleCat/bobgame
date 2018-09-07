import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Mall from './views/Mall.vue'
import My from './views/My.vue'
import Guide from './views/Guide.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
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
                } else if(!window.localStorage.token){
                    next('/login/home')
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
            component: Login,
            beforeEnter(to, from, next) {
                store.commit('setShowTabber', false)
                next()
            }
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})