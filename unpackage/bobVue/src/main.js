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

// const vConsole = new Vconsole();
// console.log(vConsole);
//开发初始化操作
// window.localStorage.setItem('showGuide','end')
window.localStorage.removeItem('token')
window.localStorage.removeItem('showGuide')


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

//判断是否在H5+app环境
let vueTools = {
    atApp() {
        if (/html5plus/.test(navigator.userAgent.toLowerCase())) {
            return true
        }
        return false
    },
    install(Vue) {
        Vue.prototype.$atApp = function (callback) {
            if (/html5plus/.test(navigator.userAgent.toLowerCase())) {
                if (callback) {
                    callback();
                } else {
                    return true
                }
            }
            return false
        }
        if (this.atApp()) {
            Vue.prototype.$plus = window.plus
        }
    }
}

Vue.use(vueTools)
Vue.use(VueAxios, axios)

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