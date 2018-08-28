<template>
    <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
        <div class="statusBar" :style="{height:statusBarHeight}"></div>
        <div class="head-block" :style="{top:statusBarHeight}">
            <div class="user-info">
                {{userInfo.beanCount}}
                <img :src="userInfo.headImg" alt="" class="head-img">
            </div>
            <div class="my-order">我的订单</div>
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
            title: '商城',
            headHeight: 100
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
  height: px2rem(100px);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: px2rem(20px);
  padding-left: px2rem(25px);
  padding-right: px2rem(25px);
  .user-info {
    height: px2rem(60px);
    float: left;
    padding-left: px2rem(110px);
    position: relative;
    border-radius: px2rem(30px);
    overflow: hidden;
    padding-right: px2rem(20px);
    background: #f0f0f0;
    font-size: px2rem(30px);
    line-height: px2rem(65px);
    font-weight: bold;
    background-image: url("../assets/images/bean.png");
    background-size: auto px2rem(33px);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: px2rem(70px);
    .head-img {
      width: px2rem(60px);
      height: px2rem(60px);
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
  .my-order {
    float: right;
    font-size: px2rem(28px);
    line-height: px2rem(64px);
    height: px2rem(60px);
    background: url("../assets/images/icon_order.png") no-repeat;
    padding-left: px2rem(40px);
    background-size: px2rem(26px) auto;
    background-position-y: center;
  }
}
.view-block {
  padding: px2rem(25px);
}
</style>