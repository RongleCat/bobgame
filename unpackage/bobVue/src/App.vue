<template>
  <div id="app">
    <transition :name="'pop-bottom'">
      <TheTabber class="com-tabber" :style="{zIndex:tabberZIndex}" v-if="showTabber"></TheTabber>
    </transition>
    <transition :name="direction">
      <router-view class="view-main" />
    </transition>
  </div>
</template>

<script>
  import TheTabber from "@/components/TheTabbar.vue";
  import unit from './unit/back.js';
  let allRouter = [
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
    'Login', 'My',
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
      },
      showTabber() {
        return this.$store.state.showTabber
      }
    },
    watch: {
      '$route': function (to, form) {
        let _before = allRouter.indexOf(to.name),
          _after = allRouter.indexOf(form.name);
        if (_before < _after) {
          this.direction = 'fade-left';
        } else {
          this.direction = 'fade-right';
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