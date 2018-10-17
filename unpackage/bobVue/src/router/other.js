import Guide from '../views/Other/Guide.vue'
import Login from '../views/Other/Login.vue'
import Message from '../views/Other/Message.vue'
import School from "../views/My/School.vue";
import SchoolDetails from "../views/My/SchoolDetails.vue";

export default [
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
  {
    path: '/message',
    name: 'Message',
    component: Message
  }, //波波学院
  {
    path: '/school',
    name: 'School',
    component: School
  },
  //波波学院详情
  {
    path: '/school/:id',
    name: 'SchoolDetails',
    component: SchoolDetails
  },
  //新闻详情详情
  {
    path: '/news/:id',
    name: 'SchoolDetails',
    component: SchoolDetails
  }
]