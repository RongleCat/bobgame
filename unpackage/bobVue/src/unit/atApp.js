let all = {
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
export default all
export const atApp = all.atApp