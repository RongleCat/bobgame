import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

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