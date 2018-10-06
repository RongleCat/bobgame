<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      充值
    </template>
    <template slot="content">
      <div class="rec-container">
        <div class="top-block">
          <div class="head-block">
            <div class="head-img" :style="{backgroundImage:'url(' + headUrl + ')'}"></div>
            <div class="user-info">
              <div class="user-name">{{userInfo.nickname}}</div>
              <div class="bean-block" @click="$router.push('/my/recharge')">{{userInfo.jifen}}</div>
            </div>
            <div class="label-vip vip-0">玩家</div>
          </div>
          <div class="up-img v1"></div>
        </div>
        <div class="rec-list">
          <div class="item">
            <div class="name">充30元</div>
            <div class="bean-block">3450</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
          <div class="item">
            <div class="name">充69元</div>
            <div class="bean-block">7935</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
          <div class="item">
            <div class="name">充99元</div>
            <div class="bean-block">11385</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
          <div class="item">
            <div class="name">充198元</div>
            <div class="bean-block">22770</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
          <div class="item">
            <div class="name">充348元</div>
            <div class="bean-block">40020</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
          <div class="item">
            <div class="name">充648元</div>
            <div class="bean-block">74520</div>
            <div class="vip-add vip-0">+15%金豆</div>
          </div>
        </div>
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
      userInfo() {
        return this.$store.state.userInfo;
      },
      headUrl() {
        let url = this.$store.state.userInfo.head_icon;
        if (/http/g.test(url)) {
          return url;
        } else {
          return "http://cdn.bobgame.cn" + url;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rec-container {
    width: 100%;
    background: url('../../assets/images/my/r_bg.png') no-repeat center top;
    background-size: 100% auto;
    padding: 25px;

    .top-block {
      position: relative;
      height: 340px;
      background: #fff;
      border-radius: 15px;

      .up-img {
        width: 100%;
        height: 180px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: url('../../assets/images/my/demo.jpg') no-repeat;
        background-position: center top;
        background-size: 100% auto;
        border-radius: 0 0 10px 10px;
        overflow: hidden;

        &.v1 {
          background-position: center bottom;
        }
      }

      .head-block {
        position: relative;
        height: 160px;

        .label-vip {
          height: 40px;
          background-position: left center;
          background-size: auto 100%;
          background-color: #333;
          color: #fff;
          padding-left: 50px;
          padding-right: 8px;
          line-height: 42px;
          font-size: 24px;
          position: absolute;
          border-radius: 5px;
          right: 30px;
          bottom: 35px;
        }

        .head-img {
          width: 90px;
          height: 90px;
          background-size: 100% auto;
          border-radius: 50%;
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
        }

        .user-info {
          position: absolute;
          left: 140px;
          top: 50%;
          transform: translateY(-50%);
          padding-top: 48px;

          .user-name {
            color: #333;
            font-size: 26px;
            line-height: 32px;
            font-weight: bold;
            margin-bottom: 14px;
            text-align: left;
            padding-left: 7px;
            padding-right: 32px;
            background-size: 24px auto;
            background-position: right center;
            position: absolute;
            top: 0;
            left: 0;
            white-space: nowrap;
          }

          .bean-block {
            height: 44px;
            background-color: #f5f5f5;
            border-radius: 22px;
            color: #333;
            background-image: url("../../assets/images/bean.png");
            background-size: auto 33px;
            background-repeat: no-repeat;
            background-position-x: 7px;
            background-position-y: center;
            font-size: 30px;
            padding-left: 50px;
            padding-right: 20px;
            line-height: 48px;
            font-weight: bold;
            float: left;
            position: relative;

            .iconfont {
              position: absolute;
              width: 36px;
              height: 36px;
              right: 4px;
              top: 4px;
              background: #adadad;
              color: #fff;
              border-radius: 50%;
              font-size: 24px;
              text-align: center;
              line-height: 36px;
            }
          }
        }
      }
    }

    .rec-list {
      padding-top: 25px;
      @include clearfix;

      .item {
        float: left;
        width: 220px;
        margin-right: 20px;
        background: #fff;
        padding: 38px 0;
        border-radius: 10px;
        margin-bottom: 20px;
        text-align: center;

        .name {
          font-size: 30px;
          font-weight: bold;
          line-height: 50px;
        }

        .bean-block {
          height: 32px;
          background-color: #f5f5f5;
          border-radius: 22px;
          color: #333;
          background-image: url("../../assets/images/bean.png");
          background-size: auto 24px;
          background-repeat: no-repeat;
          background-position-x: 5px;
          background-position-y: center;
          font-size: 20px;
          padding-left: 40px;
          padding-right: 20px;
          line-height: 34px;
          font-weight: bold;
          display: inline-block;
          width: 120px;
          margin-top: 5px;
        }

        .vip-add {
          display: inline-block;
          height: 24px;
          overflow: hidden;
          background-size: auto 100%;
          border-radius: 3px;
          background-position: left center;
          background-color: #333;
          color: #fff;
          padding-left: 30px;
          padding-right: 10px;
          font-size: 16px;
          margin-top: 20px;
        }

        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
</style>