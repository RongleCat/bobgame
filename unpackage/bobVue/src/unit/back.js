import router from '../router'
let first = null
let oneLevel = ['#/friends', '#/mall', '#/my']

export default {
    bindBackKeyEvent() {
        //监听返回按钮
        window.plus.key.addEventListener('backbutton', this.dbTapQuit, false);
    },
    dbTapQuit() {
        let path = window.location.hash;
        if (path === '#/') {
            if (!first) {
                first = new Date().getTime();
                window.plus.nativeUI.toast('再按一次退出应用');
                setTimeout(() => {
                    first = null;
                }, 1000);
            } else {
                if (new Date().getTime() - first < 1000) {
                    window.plus.runtime.quit();
                }
            }
        } else {
            if (oneLevel.indexOf(path) !== -1) {
                router.replace('/')
            } else {
                history.go(-1)
            }
        }
        return false
    }
}