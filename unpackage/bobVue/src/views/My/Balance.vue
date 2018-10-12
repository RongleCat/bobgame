<template>
  <ThePage color="#f2f2f2" @headerHeight="setHeaderHeight" contentBg="#f0f0f0">
    <template slot="headerContent">
      余额
    </template>
    <template slot="content">
      <div class="balance-main">
        <div class="head-card">
          <div class="one-line">
            <div class="item">
              <div class="value">44.4</div>
              <div class="name">当前余额</div>
            </div>
            <div class="btn-withdraw" @click="$router.push('/my/withdraw')">提现</div>
          </div>
          <div class="one-line">
            <div class="item">
              <div class="value">4</div>
              <div class="name">今日订单</div>
            </div>
            <div class="item">
              <div class="value">5686.2</div>
              <div class="name">累计流水</div>
            </div>
            <div class="item">
              <div class="value">1285</div>
              <div class="name">累计收益</div>
            </div>
          </div>
        </div>
        <div class="today-state">
          <div class="title">今日概况</div>
          <!-- <div class="content-box">
            <div class="item">
              <div class="value">99</div>
              <div class="name">今日流水</div>
            </div>
            <div class="item">
              <div class="value">14.8</div>
              <div class="name">今日收益</div>
            </div>
          </div> -->
          <div class="no-data" @click="$router.push('/my/share')">
            暂无收益，<span>去邀请好友</span>
          </div>
        </div>
        <div class="btn-more" @click="$router.push('/my/incomenotes')">更多明细</div>
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
    methods: {
      setHeaderHeight(value) {
        this.filterTop = value + 100 / 75 + "rem"
        this.topHeight = value
      }
    }
  }
</script>

<style scoped lang="scss">
  .balance-main {
    background-image: url('../../assets/images/my/balance.png'), linear-gradient(0, #fff 100%, #fff 0);
    background-size: 100% auto, 100% 380px;
    background-repeat: no-repeat, no-repeat;
    background-color: #f0f0f0;
    padding: 25px;
  }

  .head-card {
    width: 100%;
    height: 330px;
    margin-bottom: 50px;
    background: linear-gradient(135deg, #fceb5f, #ffe04e);
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 226, 64, .7);

    .one-line {
      height: 165px;
      position: relative;
      @include clearfix;

      .item {
        float: left;
        height: 100%;
        text-align: center;
        width: 33.33%;
        padding-top: 30px;

        .value {
          font-size: 50px;
          color: #333;
          line-height: 65px;
        }

        .name {
          font-size: 24px;
          color: #aba04a;
          line-height: 40px;
        }
      }

      .btn-withdraw {
        width: 160px;
        height: 60px;
        background: #fe6f49;
        color: #fff;
        font-size: 28px;
        text-align: center;
        line-height: 64px;
        position: absolute;
        right: 50px;
        top: 50px;
        border-radius: 30px;
        box-shadow: 0 2px 20px rgba(258, 28, 33, .3);
        @include tapColor;
      }
    }
  }

  .today-state {
    background: #fff;
    border-radius: 15px;
    padding: 30px;
    position: relative;

    .title {
      line-height: 1;
      color: #333;
      font-size: 34px;
      font-weight: bold;
    }

    .content-box {
      @include clearfix;

      .item {
        width: 50%;
        float: left;
        padding: 30px;
        text-align: center;
        line-height: 60px;
        padding-bottom: 0;

        .value {
          font-size: 50px;
          color: #333;
        }

        .name {
          font-size: 22px;
          color: #adadad;
        }
      }
    }

    &:before {
      content: '';
      display: block;
      width: 10px;
      height: 24px;
      position: absolute;
      background: #fde759;
      left: 0;
      top: 35px;
    }
  }

  .btn-more {
    width: 100%;
    height: 100px;
    background: #ffe535;
    color: #333;
    line-height: 104px;
    text-align: center;
    font-size: 30px;
    border-radius: 15px;
    margin-top: 25px;
    @include tapColor;
  }
</style>