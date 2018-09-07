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
    mounted() {
        let that = this;
        that.$nextTick(() => {
            setTimeout(() => {
                that.$refs['vs'].refresh();
            }, 500);
        })
    },
    beforeCreate() {
        this.$atApp(()=>{
            window.plus.navigator.setStatusBarStyle('dark');
        })
    }
};
</script>

<style scoped lang="scss">
.head-block {
  height: 100px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  .user-info {
    height: 60px;
    float: left;
    padding-left: 110px;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    padding-right: 20px;
    background: #f0f0f0;
    font-size: 30px;
    line-height: 65px;
    font-weight: bold;
    background-image: url("../assets/images/bean.png");
    background-size: auto 33px;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 70px;
    .head-img {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
  .my-order {
    float: right;
    font-size: 28px;
    line-height: 64px;
    height: 60px;
    background: url("../assets/images/icon_order.png") no-repeat;
    padding-left: 40px;
    background-size: 26px auto;
    background-position-y: center;
  }
}
.view-block {
  padding: 25px;
}
</style>