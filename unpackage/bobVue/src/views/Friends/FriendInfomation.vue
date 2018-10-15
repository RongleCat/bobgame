<template>
  <ThePage color="rgba(255,255,255,0)" contentBg="#fff" :noHead="true">
    <template slot="content">
      <div class="fcard-container">
        <div class="btn-back" :style="{top:statusBarHeight}" @click="$router.go(-1)"><i class="iconfont icon-zuo"></i></div>
        <div class="main-block">
          <div class="head-block">
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
          </div>
          <div class="base-info">
            <div class="line-one">
              曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span>
            </div>
            <div class="line-two">
              ID:Wx_0583215435
            </div>
          </div>
          <div class="info-title"><span class="bg-blue"></span>其他信息</div>
          <div class="info-content">
            <div class="info-item">金牛座</div>
            <div class="info-item">18岁</div>
            <div class="info-item">杭州</div>
          </div>
          <div class="info-title"><span></span>最近在玩</div>
          <div class="info-content">
            <div class="info-main">
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
              <div class="game-item">
                <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                疯狂兔子
              </div>
            </div>
          </div>
        </div>
        <div class="btn-addfriends btn-common"><i class="iconfont icon-add">加好友</i></div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      }
    },
    beforeCreate() {
      this.$atApp(() => {
        window.plus.navigator.setStatusBarStyle('light');
      })
    },
    beforeDestroy() {
      this.$atApp(() => {
        window.plus.navigator.setStatusBarStyle('dark');
      })
    }
  }
</script>

<style lang="scss" scoped>
  .fcard-container {
    background: url('../../assets/images/friends/card_bg.jpg') no-repeat top center;
    background-size: 100% auto;
    padding-top: 300px;
    min-height: 100%;
    position: relative;
    padding-bottom: 140px;

    .btn-addfriends {
      position: absolute;
      width: 700px;
      bottom: 25px;
      left: 25px;
    }
  }

  .main-block {
    background: #fff;
    border-radius: 20px;
    width: 100%;
    padding: 25px;
    position: relative;

    .head-block {
      width: 170px;
      height: 170px;
      border-radius: 50%;
      border: 6px solid rgba(255, 255, 255, .7);
      overflow: hidden;
      position: absolute;
      top: -60px;
      left: 30px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, .2);

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .base-info {
      padding-left: 220px;
      padding-bottom: 25px;

      .line-one {
        font-size: 34px;
        font-weight: bold;
        line-height: 52px;

        .iconfont {
          height: 34px;
          width: 34px;
          display: inline-block;
          background: #3bb3ff;
          color: #fff;
          font-size: 18px;
          line-height: 36px;
          text-align: center;
          border-radius: 50%;
          vertical-align: 6px;
          margin-left: 10px;

          &.woman {
            background: #fe3b6d;
          }
        }

        .vip-label {
          width: 34px;
          height: 34px;
          display: inline-block;
          background-size: contain;
          border-radius: 5px;
          vertical-align: -5px;
          margin-left: 10px;
        }
      }

      .line-two {
        line-height: 36px;
        color: #adadad;
        font-size: 24px;
      }
    }

    .info-title {
      font-size: 24px;
      color: #adadad;
      position: relative;
      line-height: 72px;
      height: 70px;
      padding-left: 55px;

      span {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 25px;
        left: 10px;
        background: #ffc835;
        border-radius: 50%;

        &.bg-blue {
          background: #01beee;
        }
      }
    }

    .info-content {
      padding-left: 55px;

      .info-main {
        width: 100%;
        white-space: nowrap;
        overflow-x: auto;
      }
    }

    .info-item {
      display: inline-block;
      padding: 0 8px;
      height: 34px;
      line-height: 34px;
      border: 1px solid #333;
      border-radius: 5px;
      margin-right: 10px;
    }

    .game-item {
      width: 100px;
      display: inline-block;
      padding-bottom: 20px;
      margin-right: 20px;
      font-size: 22px;
      text-align: center;
      line-height: 56px;

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        display: block;
        border-radius: 15px;
      }
    }
  }

  .btn-back {
    color: #fff;
    width: 100px;
    height: 100px;
    padding: 25px;
    position: fixed;
    left: 0;
    z-index: 100;

    .iconfont {
      display: block;
      width: 50px;
      height: 50px;
      background: rgba(48, 48, 48, .5);
      text-align: center;
      line-height: 50px;
      border-radius: 50%;
    }
  }
</style>