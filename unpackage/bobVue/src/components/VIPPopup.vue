<template>
  <Popup :value="value" @input="popCtrl" :maskClose="false">
    <div class="vippop-container">
      <i class="iconfont icon-guanbi" @click="$emit('input', false)"></i>
      <div class="card-block" :class="['card-'+level]">
        <div class="label-vip" :class="['vip-'+level]">{{vipName[level]}}</div>
      </div>
      <div class="main-block">
        <div class="main-title" v-if="!state">您需要先成为会员才能提现</div>
        <div class="main-title" v-else>您需要先续费会员卡才能提现</div>
        <div class="power-list">
          <div class="item">
            <div class="icon"></div>
            <div class="title">邀请收益</div>
            <div class="content">成功邀请一个会员得￥14.8</div>
          </div>
          <div class="item">
            <div class="icon"></div>
            <div class="title">金豆赠送</div>
            <div class="content">得19800金豆，可用于抽奖、兑换、对战。</div>
          </div>
          <div class="item">
            <div class="icon"></div>
            <div class="title">等级晋升</div>
            <div class="content">邀请的会员达到一定数量，奖励更丰厚。</div>
          </div>
        </div>
        <div class="btn-block">
          <div class="item" v-if="!state">成为会员</div>
          <div class="item" v-else>立即续费</div>
          <div class="item" @click="$router.push('/my/mypower/'+level)">查看更多权益</div>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      state: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {
        vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"]
      }
    },
    methods: {
      popCtrl(v) {
        this.$emit('input', v)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    top: 30px;
  }

  .vippop-container {
    position: relative;
    padding-top: 115px;
    width: 600px;

    .iconfont {
      width: 100px;
      height: 100px;
      display: block;
      position: absolute;
      right: -50px;
      top: 0;
      color: #fff;
      text-align: center;
      font-size: 48px;
    }

    .card-block {
      width: 500px;
      position: absolute;
      height: 230px;
      top: 0;
      left: 50px;
      overflow: hidden;
      border-radius: 15px;
      background-size: 100% auto;

      @for $i from 0 through 4 {
        &.card-#{$i} {
          background-image: url("../assets/images/my/card_#{$i}.png");
        }
      }
    }

    .main-block {
      background: #fff;
      border-radius: 15px;
      width: 100%;
      padding: 120px 40px 50px 40px;

      .main-title {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        line-height: 92px;
        height: 90px;
        position: relative;

        &:after {
          display: block;
          content: '';
          width: 50px;
          height: 5px;
          background: #ffe640;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .power-list {
        padding: 0 10px;

        .item {
          margin-top: 40px;
          position: relative;
          padding-left: 95px;

          .icon {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 70px;
            height: 70px;
            background: #333;
            border-radius: 50%;
          }

          .title {
            line-height: 34px;
            font-size: 26px;
            font-weight: bold;
          }

          .content {
            padding-top: 5px;
            font-size: 22px;
            color: #adadad;
          }
        }
      }

      .btn-block {
        width: 100%;
        height: 80px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        .item {
          width: 250px;
          height: 80px;
          border-radius: 40px;
          background: #333;
          color: #fff;
          font-size: 30px;
          line-height: 82px;
          text-align: center;
          @include tapColor;

          &:last-child {
            background: #fe6f49;
          }
        }
      }
    }
  }
</style>