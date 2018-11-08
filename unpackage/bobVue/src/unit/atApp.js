let all = {
  atApp() {
    if (/html5plus/.test(navigator.userAgent.toLowerCase())) {
      return true
    }
    return false
  },
  isIos() {
    if (/iphone/.test(navigator.userAgent.toLowerCase())) {
      return true
    }
    return false
  },
  isWeixin() {
    if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
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
export const isIos = all.isIos
export const isWeixin = all.isWeixin