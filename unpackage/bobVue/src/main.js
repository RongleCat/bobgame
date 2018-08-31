import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import ThePopView from './components/ThePopView.vue';

//全局注册组件
Vue.component('ThePopView',ThePopView)
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
            keepShow:false
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
        Vue.prototype.$atApp = function () {
            if (/html5plus/.test(navigator.userAgent.toLowerCase())) {
                return true
            }
            return false
        }
        if (this.atApp()) {
            Vue.prototype.$plus = window.plus
        }
    }
}

Vue.use(vueTools)

if (vueTools.atApp()) {
    if (window.plus) {
        plusReady();
    } else {
        document.addEventListener('plusready', plusReady, false);
    }
} else {
    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
}

//h5+执行
function plusReady() {
    //监听按钮
    let first = null;
    window.plus.key.addEventListener('backbutton', function () {
        let path = window.location.hash;
        // window.plus.nativeUI.toast(wvn);
        if (path === '#/') {
            if (!first) {
                first = new Date().getTime();
                window.plus.nativeUI.toast('再按一次退出应用');
                setTimeout(function () {
                    first = null;
                }, 1000);
            } else {
                if (new Date().getTime() - first < 1000) {
                    window.plus.runtime.quit();
                }
            }
        } else {
            history.go(-1)
        }
        return false
    }, false);

    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app')
}