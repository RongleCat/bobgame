import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false


if (window.plus) {
  plusReady();
} else {
  document.addEventListener('plusready', plusReady, false);
}

function plusReady() {
  //监听按钮
  let first = null;
  plus.key.addEventListener('backbutton', function () {
    let wv = plus.webview.currentWebview();
    let path = window.location.hash;
    // plus.nativeUI.toast(wvn);
    if (path === '#/') {
      if (!first) {
        first = new Date().getTime();
        plus.nativeUI.toast('再按一次退出应用');
        setTimeout(function () {
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 1000) {
          plus.runtime.quit();
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