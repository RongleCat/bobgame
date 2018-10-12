<template>
  <ThePage color="#f2f2f2" contentBg="#fff">
    <template slot="headerContent">
      等待提现
    </template>
    <template slot="content">
      <div class="wait-container">
        <div class="no-data">
          <div class="title">余额正赶往您的支付宝</div>
          <div class="link" @click="go('/my/incomenotes')">瞧瞧进度<i class="iconfont icon-you"></i></div>
        </div>
        <div class="btn-link" @click="go('/my/share')">
          邀请好友赚更多收益
        </div>
        <div class="btn-link play" @click="go('/')">
          开把小游戏等钱入账
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
    methods: {
      go(url) {
        this.$router.replace(url)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wait-container {
    padding-top: 130px;
    line-height: 60px;

    .no-data {
      .title {
        font-size: 30px;
        font-weight: bold;
      }

      .link {
        font-size: 24px;
        color: #adadad;
      }
    }

    .btn-link {
      width: 460px;
      height: 90px;
      line-height: 92px;
      background: $by;
      text-align: center;
      margin: 0 auto;
      margin-top: 130px;
      border-radius: 45px;
      @include tapColor;

      &.play {
        margin-top: 30px;
        background: #fe6f49;
        color: #fff;
      }
    }
  }
</style>