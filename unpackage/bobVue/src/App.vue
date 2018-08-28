<template>
    <div id="app">
        <TheTabber class="com-tabber"></TheTabber>
        <transition :name="'fade-'+direction">
            <router-view class="view-main" />
        </transition>
    </div>
</template>

<script>
import TheTabber from "@/components/TheTabbar.vue";
let allRouter = ['Home','Friends','Mall','My'];

export default {
    components: {
        TheTabber
    },
    data() {
        return {
            direction:'left'
        };
    },
    watch: {
        '$route': function (to, form) {
            let _before = allRouter.indexOf(to.name),_after = allRouter.indexOf(form.name);
            if (_before<_after) {
                this.direction = 'right';
            }else{
                this.direction = 'left';
            }
        }
    },
    beforeCreate(){
        let that = this;
        if (that.$atApp()) {
            this.$store.commit('setStatusBarHeight',window.plus.navigator.getStatusbarHeight() / 37.5)
        }
    }
};
</script>

<style lang="scss">
@import './assets/scss/common.scss';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.com-tabber {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.com-tabber + .view-main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: px2rem(100px);
}
.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active {
  transition: transform 0.2s;
}

.fade-left-enter {
  transform: translateX(100%);
}
.fade-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
}
.fade-right-enter {
  transform: translateX(-100%);
}
.fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}

.view-page {
//   overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  img {
    width: 100%;
  }
}
</style>
