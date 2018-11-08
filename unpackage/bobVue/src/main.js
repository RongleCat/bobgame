import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import vuescroll from 'vuescroll';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import scrollFix from "./unit/scroll_fix";
// import Vconsole from 'vconsole';
// import 'vuescroll/dist/vuescroll.css';
import ThePopView from './components/ThePopView.vue';
import Popup from './components/Popup.vue';
import ThePage from './components/ThePage.vue';
import Help from './components/HelpPopup.vue';
import GamePop from './components/GamePop.vue';

import { swiperSlide } from "vue-awesome-swiper";
import swiper from "./components/fixSlide.js";

import "swiper/dist/css/swiper.css";

import { Lazyload, Toast } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);



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
Vue.component('Popup', Popup)
Vue.component('ThePage', ThePage)
Vue.component('Help', Help)
Vue.component('GamePop', GamePop)
Vue.component('swiperSlide', swiperSlide)
Vue.component('swiper', swiper)
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
  if (response.data.code == -1) {
    router.push('/login')
  } else if (response.data.code != 200) {
    Toast.fail(response.data.msg)
    return false
  } else {
    return response.data.data;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

Vue.use(vueTools)
Vue.use(VueClipboard)
Vue.use(VueAxios, axios)


//全局过滤器
Vue.filter('imgUrl', function (value, style) {
  if (!value) return ''
  if (style) {
    return 'http://cdn.bobgame.cn' + value + style
  } else {
    return 'http://cdn.bobgame.cn' + value
  }
})

Vue.filter('ossResize', function (value, size) {
  if (!value) return ''
  if (!size) return value
  return value + `?x-oss-process=image/format,jpg/auto-orient,1/interlace,1/resize,w_${size}/quality,q_90`
})


Vue.filter('toString', function (value) {
  if (!value) return ''
  return '' + value
})

Vue.directive('scrollfix', scrollFix)

Vue.mixin({
  methods:{
    calcSize(px) {
      return Math.ceil(px / 37.5 * window.rem)
    }
  }
})

if (vueTools.atApp()) {
  if (window.plus) {

    // let mainWebview = window.plus.webview.getLaunchWebview()
    // let baseURL = mainWebview.getURL().split('#')[0];
    let args = window.plus.runtime.arguments;
    if (args) {
      // mainWebview.loadURL('')
    }
    // window.plus.nativeUI.toast(mainWebview.getURL());

    plusReady();
  } else {
    document.addEventListener('plusready', plusReady, false);
  }
} else {
  plusReady()
}

// Vue.mixin({
//   mounted() {
//     if (this.$refs.scrollMain) {
//       console.log(this.$refs.scrollMain);
//       var ios = navigator.userAgent.indexOf('iphone');

//       if (ios == -1) {
//         var divEl = document.querySelector('.view-block')
//         iosTrouchFn(divEl);
//       }
//     }
//   }
// })

//h5+执行
function plusReady() {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
}