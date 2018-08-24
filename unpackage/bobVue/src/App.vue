<template>
  <div id="app">
    <TheTabber class="com-tabber"></TheTabber>
    <transition name="fade">
      <router-view class="view-main"/>
    </transition>
  </div>
</template>

<script>
import TheTabber from "@/components/TheTabbar.vue";

export default {
  components: {
    TheTabber
  },
  data() {
    return {
      key: "是是是"
    };
  },
  methods: {
    name() {}
  },
  mounted() {
    console.log(this.$atApp());
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
}
.com-tabber + .view-main {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: px2rem(100px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
