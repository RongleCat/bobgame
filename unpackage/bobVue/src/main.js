import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import vuescroll from 'vuescroll';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Vconsole from 'vconsole';
import 'vuescroll/dist/vuescroll.css';
import ThePopView from './components/ThePopView.vue';

//判断是否在H5+app环境
import vueTools from "./unit/atApp";


// const vConsole = new Vconsole();
// console.log(vConsole);
//开发初始化操作
// window.localStorage.setItem('showGuide','end')
// window.localStorage.removeItem('token')
// window.localStorage.removeItem('showGuide')

//全局注册组件
Vue.component('ThePopView', ThePopView)
//页面滚动插件配置
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      mode: 'slide',
      detectResize: true,
      pullRefresh: false
    },
    scrollPanel: {
      scrollingX: false
    },
    rail: {
      size: 5 / 75 + 'rem'
    },
    bar: {
      showDelay: 200,
      background: '#a6a6a6',
      keepShow: false
    }
  }
});

//应用快速点击，消除300
FastClick.attach(document.body);

Vue.config.productionTip = false



//请求默认配置及拦截
axios.defaults.baseURL = 'http://ceshi2.bobgame.cn/app.php?s='
axios.defaults.headers.get['Authorization'] = window.localStorage.getItem('token');

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (!window.localStorage.getItem('token')) {
    router.push('/login')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code != 200) {
    router.push('/login')
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.use(vueTools)
Vue.use(VueAxios, axios)

//全局过滤器
Vue.filter('imgUrl', function (value) {
  if (!value) return ''
  return 'http://cdn.bobgame.cn' + value
})
Vue.filter('toString', function (value) {
  if (!value) return ''
  return '' + value
})

if (vueTools.atApp()) {
  if (window.plus) {
    plusReady();
  } else {
    document.addEventListener('plusready', plusReady, false);
  }
} else {
  plusReady()
}

//h5+执行
function plusReady() {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}