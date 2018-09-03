import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Friends from './views/Friends.vue'
import Mall from './views/Mall.vue'
import My from './views/My.vue'
import Guide from './views/Guide.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => {
                let showGuide = window.localStorage.showGuide
                console.log(showGuide);
                if (!showGuide) {
                    window.localStorage.showGuide = 'end'
                    next('/guide')
                }
                next()
                return 
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
            component: My
        },
        {
            path:'/guide',
            name:'Guide',
            component:Guide
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})