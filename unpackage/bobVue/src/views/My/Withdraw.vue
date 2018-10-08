<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      提现
    </template>
    <template slot="content">
      <div class="withdraw-container">
        <div class="account-box" @click="hasAccount = !hasAccount">
          <div class="has-account" v-if="hasAccount">
            <i class="iconfont icon-zhifubao"></i>
            <div class="one-line">收款支付宝</div>
            <div class="two-line">2450****661@qq.com</div>
          </div>
          <div class="no-account" v-else>
            <div class="add-account">
              <i class="iconfont icon-add"></i>
              点击添加收款支付宝账号
            </div>
          </div>
        </div>

        <div class="withdraw-box">
          <div class="title">提现金额</div>
          <div class="withdraw-input">
            <span>¥</span><input type="number">
          </div>
          <div class="withdraw-bottom">
            <div class="now-balance">当前余额：6.48元</div>
            <div class="frozen-balance">(冻结：2.48元) <i class="iconfont icon-wenhao"></i></div>
          </div>

          <div class="all-withdraw">全部提现</div>
        </div>

        <div class="padding-container">
          <div class="btn-common btn-withdraw">提现</div>
          <div class="bottom-tip"><i class="iconfont icon-info"></i>提现将于24小时内转入您绑定的支付宝账号</div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        hasAccount: true
      }
    },
    mounted() {
      document.querySelector('title').innerText = '提现'
    }
  }
</script>

<style lang="scss" scoped>
  .withdraw-container {
    width: 100%;

    .account-box {
      width: 100%;
      height: 160px;
      background: #fff;
      padding: 30px 50px;

      .add-account {
        width: 100%;
        height: 100px;
        border-radius: 15px;
        border: 2px dashed #999;
        line-height: 102px;
        text-align: center;
        font-size: 30px;
        color: #adadad;
        overflow: hidden;
        @include tapMask;

        .iconfont {
          font-size: 36px;
          vertical-align: -3px;
        }
      }

      .has-account {
        width: 100%;
        height: 100px;
        position: relative;
        padding-left: 100px;
        line-height: 50px;

        .one-line {
          font-size: 28px;
          color: #333;
          height: 50px;
          padding-top: 2px;
        }

        .two-line {
          font-size: 24px;
          color: #999;
        }

        .iconfont {
          display: block;
          width: 80px;
          height: 100px;
          line-height: 102px;
          position: absolute;
          left: 0;
          top: 0;
          font-size: 80px;
          color: #00a0e9;
        }
      }
    }

    .withdraw-box {
      background: #fff;
      margin-top: 20px;
      padding: 0 50px;
      position: relative;

      .withdraw-input {
        width: 100%;
        height: 105px;
        line-height: 80px;
        font-size: 48px;
        position: relative;
        padding-left: 80px;

        span {
          display: block;
          width: 80px;
          height: 80px;
          position: absolute;
          left: 0;
          top: 0;
        }

        input {
          border: 0;
          line-height: 36px;
        }
      }

      .all-withdraw {
        @include tapMask;
        position: absolute;
        color: $fy;
        width: 190px;
        height: 70px;
        line-height: 72px;
        right: 0;
        bottom: 0;
        text-align: center;
      }

      .title {
        line-height: 75px;
        font-size: 24px;
        color: #333;
      }

      .withdraw-bottom {
        height: 70px;
        line-height: 72px;
        position: relative;
        @include oneT;
        @include clearfix;

        .now-balance {
          float: left;

          &+.frozen-balance {
            padding-left: 15px;
          }
        }

        .frozen-balance {
          float: left;
          color: #adadad;

          .iconfont {
            font-size: 28px;
            vertical-align: -3px;
          }
        }

      }
    }

    .padding-container {
      padding-top: 50px;

      .bottom-tip {
        line-height: 80px;
        text-align: center;
        font-size: 22px;
        color: #a3a3a3;

        .iconfont {
          font-size: 28px;
          vertical-align: -3px;
          padding-right: 5px;
        }
      }
    }
  }
</style>