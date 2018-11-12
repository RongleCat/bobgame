<template>
  <div id="app">
    <transition :name="'pop-bottom'">
      <TheTabber class="com-tabber" :style="{zIndex:tabberZIndex}" v-if="showTabber"></TheTabber>
    </transition>

    <transition :enter-active-class="enter" :leave-active-class="leave">
      <keep-alive>
        <router-view class="view-main" data-state="cache" v-if="!$route.meta.noCache" />
      </keep-alive>
    </transition>
    <transition :enter-active-class="cacheEnter" :leave-active-class="cacheLeave">
      <router-view class="view-main" data-state="nocache" v-if="$route.meta.noCache" />
    </transition>
    <!-- <transition :name="keepDirection">
      <router-view class="view-main" v-if="$route.meta.noCache" />
    </transition> -->
  </div>
</template>

<script>
  import TheTabber from "@/components/TheTabbar.vue";
  import unit from './unit/back.js';
  let allRouter = [
    'CreateMatch',
    'CustomList',
    'AddFrequency',
    'Stadium',
    'Rule',
    'Sports',
    'OfficialMatchNote',
    'MyMatchNote',
    'Match',
    'Share',
    'Lottery',
    'ContactUs',
    'CustomGame',
    'FriendInfomation',
    'FriendsDetail',
    'IncomeNotes',
    'WaitWithdraw',
    'Withdraw',
    'GoodDetail',
    'GoodSearch',
    'Rule',
    'SchoolDetails',
    'School',
    'Balance',
    'Address',
    'MySettings',
    'Login',
    'My',
    'Mall',
    'Friends',
    'Home',
    'Guide'
  ];

  export default {
    components: {
      TheTabber
    },
    data() {
      return {
        direction: 'slide-left',
        keepDirection: 'slide-left',
        showGuide: window.localStorage.showGuide,
        isCache: true,
        enter: 'animated fadeIn',
        leave: 'animated fadeOut',
        cacheEnter: 'animated fadeIn',
        cacheLeave: 'animated fadeOut',
      };
    },
    computed: {
      tabberZIndex() {
        return this.$store.state.tabberZIndex
      },
      hasPopOpen() {
        return this.$store.state.hasPopOpen
      },
      showTabber() {
        return this.$store.state.showTabber
      }
    },
    watch: {
      '$route': function (to, form) {
        let _before = allRouter.indexOf(to.name),
          _after = allRouter.indexOf(form.name);
        this.isCache = !to.meta.noCache
        if (_before < _after) {
          this.enter = 'animated fadeInRight';
          this.leave = 'animated fadeOutLeft';
          // if (to.meta.noCache) {
          //   this.cacheEnter = 'animated fadeInRight'
          //   this.cacheLeave = 'animated fadeOutRight'
          // } else {
          //   this.leave = 'animated fadeInLeft'
          //   this.cacheLeave = 'animated fadeOutLeft'
          // }
        }
        else {
          this.enter = 'animated fadeInLeft';
          this.leave = 'animated fadeOutRight';
          // if (to.meta.noCache) {
          //   this.leave = 'animated fadeOutRight';
          // } else {
          //   this.leave = 'animated fadeOutRight';
          // }
        }
      }
    },
    beforeCreate() {
      let that = this;
      that.$atApp(() => {
        this.$store.commit('setStatusBarHeight', window.plus.navigator.getStatusbarHeight() / window.rem)
        unit.bindBackKeyEvent(that)
      })
    }
  };
</script>

<style lang="scss">
  @import "./assets/scss/common.scss";
  @import "./assets/scss/transition.scss";
  @import "./assets/scss/cover.scss";

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    // width: 100%;
    max-width: 10rem;
    height: 100%;
  }
</style>