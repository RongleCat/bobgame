<template>
    <div id="app">
        <TheTabber class="com-tabber" :style="{zIndex:tabberZIndex}"></TheTabber>
        <transition :name="'fade-'+direction">
            <router-view class="view-main" />
        </transition>
    </div>
</template>

<script>
import TheTabber from "@/components/TheTabbar.vue";
import unit from './unit/back.js';
let allRouter = ['Home', 'Friends', 'Mall', 'My'];

export default {
    components: {
        TheTabber
    },
    data() {
        return {
            direction: 'left',
            showGuide: window.localStorage.showGuide
        };
    },
    computed: {
        tabberZIndex() {
            return this.$store.state.tabberZIndex
        },
        hasPopOpen() {
            return this.$store.state.hasPopOpen
        }
    },
    watch: {
        '$route': function (to, form) {
            let _before = allRouter.indexOf(to.name), _after = allRouter.indexOf(form.name);
            if (_before < _after) {
                this.direction = 'right';
            } else {
                this.direction = 'left';
            }
        }
    },
    beforeCreate() {
        let that = this;
        that.$atApp(() => {
            this.$store.commit('setStatusBarHeight', window.plus.navigator.getStatusbarHeight() / 37.5)
            unit.bindBackKeyEvent(that)
        })
    }
};
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/transition.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
