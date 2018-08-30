<template>
    <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
        <div class="statusBar" :style="{height:statusBarHeight}"></div>
        <div class="header-block" :style="{top:statusBarHeight}">
            <div class="head-img" :style="{backgroundImage:'url(' + userInfo.headImg + ')'}"></div>
            <div class="user-info">
                <div class="user-name">{{userInfo.userName}}</div>
                <div class="bean-block">{{userInfo.beanCount}}</div>
            </div>
            <div class="message-icon" :class="{active:showMessageTip}" @click="toggleTip">消息</div>
        </div>
        <vue-scroll class="view-block" ref="vs">
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
        </vue-scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '首页',
            showMessageTip: true,
            headHeight: 136
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
    mounted() {
        let that = this;
        that.$nextTick(() => {
            setTimeout(() => {
                that.$refs['vs'].refresh();
            }, 500);
        })
    },
    beforeCreate() {
        if (this.$atApp()) {
            window.plus.navigator.setStatusBarStyle('dark');
        }
    },
    methods: {
        toggleTip() {
            this.showMessageTip = !this.showMessageTip
        }
    }
};
</script>

<style scoped lang="scss">
.header-block {
  height: px2rem(136px);
  padding-left: px2rem(25px);
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  .head-img {
    width: px2rem(90px);
    height: px2rem(90px);
    background-size: 100% auto;
    border-radius: 50%;
    position: absolute;
    left: px2rem(25px);
    top: 50%;
    transform: translateY(-50%);
  }
  .user-info {
    position: absolute;
    left: px2rem(140px);
    top: 50%;
    transform: translateY(-50%);
    .user-name {
      color: #333;
      font-size: px2rem(26px);
      line-height: px2rem(32px);
      font-weight: bold;
      margin-bottom: px2rem(14px);
      text-align: left;
      padding-left: px2rem(7px);
    }
    .bean-block {
      height: px2rem(44px);
      background-color: #f5f5f5;
      border-radius: px2rem(22px);
      color: #333;
      background-image: url("../assets/images/bean.png");
      background-size: auto px2rem(33px);
      background-repeat: no-repeat;
      background-position-x: px2rem(7px);
      background-position-y: center;
      font-size: px2rem(30px);
      padding-left: px2rem(50px);
      padding-right: px2rem(20px);
      line-height: px2rem(48px);
      font-weight: bold;
    }
  }
  .message-icon {
    height: px2rem(136px);
    text-align: center;
    background: url("../assets/images/icon_message.png") no-repeat;
    background-size: px2rem(40px) auto;
    background-position: center px2rem(24px);
    position: absolute;
    width: px2rem(120px);
    right: 0;
    top: 0;
    padding-top: px2rem(90px);
    line-height: px2rem(20px);
    font-size: px2rem(20px);
    &::after {
      width: px2rem(15px);
      height: px2rem(15px);
      border: px2rem(4px) solid #fff;
      background: #ff3153;
      border-radius: 50%;
      content: "";
      display: block;
      position: absolute;
      right: px2rem(32px);
      top: px2rem(22px);
      opacity: 0;
    }
    &.active {
      &::after {
        opacity: 1;
      }
    }
    &:active {
      opacity: 0.5;
    }
  }
}
.view-block {
  padding: px2rem(25px);
}
</style>