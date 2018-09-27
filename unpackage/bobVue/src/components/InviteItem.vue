<template>
  <div class="invite-item">
    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
    <div class="one-line">
      <div class="info-one">
        高呼呼
        <span>邀请日期：2018-09-08</span>
      </div>
      <div class="info-two">
        ID:Wx_654682315
        <div class="vip-level" :class="[`vip-${vLevel}`]">{{vipName[vLevel]}}</div>
      </div>
    </div>
    <div class="two-line">
      <p>充值总计：<span>0元</span></p>
      <transition name="fade-in">
        <div v-if="showMore">
          <p>姓名：暂无</p>
          <p>手机：暂无</p>
        </div>
      </transition>
      <div class="view-more" :class="[showMore?'active':'']" @click="showMore = !showMore">更多资料<i class="iconfont icon-xiala"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vip'],
    data() {
      return {
        showMore: false,
        vipName: ['达人', '高手', '大师', '推广部长', '总代理', '联合创始人']
      }
    },
    computed: {
      vLevel() {
        return this.vip % 6
      }
    }
  }
</script>

<style scoped lang="scss">
  .invite-item {
    padding-left: 115px;
    padding-right: 25px;
    position: relative;
    background: #fff;
    @include onePXlineBottom;

    &:before {
      background-color: #f0f0f0;
    }


    img {
      width: 70px;
      height: 70px;
      position: absolute;
      top: 25px;
      left: 30px;
      border-radius: 50%;
    }

    .one-line {
      height: 130px;
      position: relative;
      padding-top: 28px;
      @include onePXlineBottom;

      &:before {
        background-color: #f0f0f0;
      }

      .info-one {
        font-size: 28px;
        line-height: 1;
        color: #333;
        padding-left: 5px;
        padding-bottom: 20px;
        @include clearfix;

        span {
          float: right;
          font-size: 24px;
          color: #adadad;
        }
      }

      .info-two {
        line-height: 1;
        font-size: 24px;
        color: #adadad;
        position: relative;

        .vip-level {
          padding-left: 40px;
          background-color: #333333;
          font-size: 18px;
          color: #fff;
          line-height: 34px;
          height: 30px;
          background-size: auto 100%;
          background-position: left top;
          border-radius: 6px;
          position: absolute;
          padding-right: 6px;
          top: 0;
          right: 0;
        }
      }
    }

    .two-line {
      padding: 10px 0;
      line-height: 50px;
      min-height: 70px;
      position: relative;

      p {
        font-size: 24px;
        color: #adadad;

        span {
          color: #ff6f43;
        }
      }

      .view-more {
        font-size: 22px;
        color: #999;
        position: absolute;
        right: 25px;
        bottom: 10px;
        padding-right: 28px;

        .iconfont {
          display: block;
          position: absolute;
          right: 0;
          top: 14px;
          width: 16px;
          height: 16px;
          font-size: 16px;
          line-height: 1;
          color: #ccc;
          transition: transform .2s;
        }

        &.active .iconfont {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>