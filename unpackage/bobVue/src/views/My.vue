<template>
    <div class="view-page" :style="{paddingTop:0}">
        <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#fff',opacity:setHeadOpacity}"></div>
        <div class="header-block" :style="{opacity:setHeadOpacity,top:statusBarHeight}">
            <div class="head-img" :style="{backgroundImage:'url(' + userInfo.headImg + ')'}"></div>
            <div class="user-info">
                <div class="user-name">{{userInfo.userName}}</div>
                <div class="bean-block">{{userInfo.beanCount}}</div>
            </div>
        </div>
        <vue-scroll @handle-scroll="setScrollTop" class="view-block no-scroll" ref="vs">
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
            title: '我的',
            headHeight: 0,
            scrollTop: 0
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
        setHeadOpacity() {
            return this.scrollTop / 200
        }
    },
    beforeCreate() {
        this.$atApp(() => {
            window.plus.navigator.setStatusBarStyle('light');
        })
    },
    mounted() {
        let that = this;
        that.$nextTick(() => {
            setTimeout(() => {
                that.$refs['vs'].refresh();
            }, 500);
        })
    },
    methods: {
        setScrollTop(o) {
            this.$atApp(() => {
                if (this.scrollTop >= 50) {
                    window.plus.navigator.setStatusBarStyle('dark');
                } else {
                    window.plus.navigator.setStatusBarStyle('light');
                }
            })
            this.scrollTop = o.scrollTop
        }
    }
};
</script>

<style scoped lang="scss">
.view-block {
  background: #f5f5f5 url("../assets/images/bg_my.png") no-repeat center top;
  background-size: auto px2rem(435px);
}
.header-block {
  height: px2rem(136px);
  padding-left: px2rem(25px);
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  z-index: 10;
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
}
</style>