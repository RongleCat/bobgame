<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      会员代充
    </template>
    <template slot="content">
      <div class="give-container">
        <div class="top-block">
          <img :src="user.head?user.head:'/img/default_head.png'" class="user-head">
          <div class="user-name-box" v-if="!user.name" @click="showSelectUser = true">选择代充玩家</div>
          <div class="user-name-box" v-else @click="showSelectUser = true">{{user.name}} <i class="iconfont icon-qiehuan"></i></div>
        </div>
        <div class="give-input-block">
          <div class="item money-input">
            <label for="money">代充金额：</label>
            <input type="number" v-model="money" id="money" class="big-font" placeholder="最低充值1元（请输入整数）">
          </div>
          <div class="item">
            <label for="">应付金额：</label>
            <div class="view-money" :class="[money?'hasMoney':'']">{{money?money+'元':'请在上栏填写充值金额'}}</div>
          </div>
          <div class="item">
            <label for="">支付方式：</label>
            <RadioGroup v-model="radio">
              <Radio name="1" class="radio-item"><i class="iconfont icon-zhifubao"></i>支付宝</Radio>
              <Radio name="2" class="radio-item"><i class="iconfont icon-weixinzhifu"></i>微信支付</Radio>
            </RadioGroup>
          </div>
        </div>
        <div class="btn-common">确认支付</div>
      </div>
      <Popup v-model="showSelectUser" :maskClose="false">
        <div class="select-list-container">
          <div class="list-title">选择代充玩家
            <div class="btn-close" @click="showSelectUser = false"><i class="iconfont icon-fullclose"></i></div>
          </div>

          <div class="list-main">
            <div class="user-group">
              <div class="group-title">
                A
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
            </div>
            <div class="user-group">
              <div class="group-title">
                A
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
            </div>
            <div class="user-group">
              <div class="group-title">
                A
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
            </div>
            <div class="user-group">
              <div class="group-title">
                A
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
              <div class="item">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                傻逼兮兮
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </template>
  </ThePage>
</template>

<script>
  import { RadioGroup, Radio } from 'vant';
  export default {
    components: { RadioGroup, Radio },
    data() {
      return {
        user: {
          head: 'https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
          name: '傻逼兮兮'
        },
        money: null,
        radio: '1',
        showSelectUser: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .give-container {
    padding: 25px;
    background: url('../../assets/images/my/give_bg.png') no-repeat top center;
    background-size: 100% auto;

    .top-block {
      width: 100%;
      text-align: center;
      padding-top: 40px;

      img {
        display: block;
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        margin-bottom: 30px;
      }

      .user-name-box {
        min-width: 248px;
        display: inline-block;
        height: 58px;
        line-height: 58px;
        color: #fff;
        font-size: 30px;
        background: rgba(255, 255, 255, .2);
        border-radius: 30px;
        max-width: 100%;
        padding: 0 20px;
        @include textof;

        .iconfont {
          font-size: 32px;
          vertical-align: -1px;
        }
      }
    }

    .give-input-block {
      width: 100%;
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      margin: 50px 0;

      .item {
        position: relative;
        padding: 0 25px;
        padding-left: 180px;
        min-height: 100px;
        @include oneB;

        &:last-child {
          &::before {
            display: none;
          }
        }

        label {
          display: block;
          position: absolute;
          width: 180px;
          text-align: center;
          height: 100px;
          left: 0;
          top: 0;
          line-height: 102px;
          font-size: 24px;
        }

        input {
          width: 100%;
          height: 100px;
          font-size: 48px;
          line-height: 48px;
          border: 0;
          text-align: right;

          &::-webkit-input-placeholder {
            font-size: 30px;
            color: #adadad;
          }
        }

        &:before {
          left: 25px;
          right: 25px;
        }

        &.money-input {
          padding-top: 40px;
        }
      }
    }

    .view-money {
      text-align: right;
      font-size: 30px;
      line-height: 102px;
      color: #adadad;

      &.hasMoney {
        color: #333;
      }
    }
  }

  .select-list-container {
    width: 600px;
    height: 60vh;
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    padding-top: 100px;

    .list-title {
      line-height: 100px;
      font-size: 38px;
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-left: 25px;

      .btn-close {
        right: 0;
        top: 0;
        width: 100px;
        height: 100px;
        text-align: center;
        @include tapMask;
        position: absolute;

        .iconfont {
          font-size: 40px;
        }
      }
    }

    .list-main {
      overflow-y: auto;
      height: 100%;

      .user-group {
        .group-title {
          height: 34px;
          font-size: 24px;
          background: #f0f0f0;
          padding-left: 40px;
          line-height: 34px;
          position: relative;
          @include oneB;

          &:before {
            background: #e5e5e5;
          }
        }

        .item {
          position: relative;
          min-height: 100px;
          line-height: 102px;
          padding-left: 110px;
          @include oneB;
          @include tapMask;

          &:before {
            background: #e5e5e5;
          }

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: block;
            position: absolute;
            left: 20px;
            top: 20px;
          }
        }
      }
    }
  }
</style>