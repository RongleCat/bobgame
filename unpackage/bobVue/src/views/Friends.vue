<template>
    <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
        <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}"></div>
        <div class="head-block" :style="{top:statusBarHeight}">
            <div class="input-block">
                <input v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入好友昵称" type="text" @focus="setFocus" @blur="setBlur" />
            </div>
        </div>
        <div class="view-block">
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
            <div class="test-block"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '好友',
            headHeight: 110,
            keyword: '',
            isFocus: false
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        },
        statusBarHeight() {
            return this.$store.state.statusBarHeight + 'rem'
        },
        setViewPaddingTop() {
            return this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
        },
        searchFocus() {
            return this.keyword.length
        }
    },
    methods: {
        setFocus() {
            this.isFocus = true
        },
        setBlur() {
            this.isFocus = false
        }
    },
    beforeCreate() {
        if (this.$atApp()) {
            window.plus.navigator.setStatusBarStyle('dark');
        }
    }
};
</script>

<style scoped lang="scss">
.head-block {
  height: px2rem(110px);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: #f2f2f2;
  padding: px2rem(25px) px2rem(20px);
  .input-block {
    text-align: center;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: px2rem(8px);
    overflow: hidden;
    input {
      border: 0;
      text-align: center;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("../assets/images/icon_sousuo.png");
      background-repeat: no-repeat;
      font-size: px2rem(28px);
      background-size: px2rem(36px) auto;
      background-position-y: center;
      background-position-x: px2rem(220px);
      &.focus {
        padding-left: px2rem(70px);
        text-align: left;
        background-position-x: px2rem(20px);
      }
    }
  }
}
.view-block {
  padding: px2rem(25px);
}
</style>