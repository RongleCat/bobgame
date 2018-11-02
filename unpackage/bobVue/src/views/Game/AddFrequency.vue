<template>
  <ThePage color="#f2f2f2" contentBg="#070031">
    <template slot="headerContent">
      增加比赛次数
    </template>
    <template slot="content">
      <div class="jiangbei-common">
        <img src="../../assets/images/game/jiangbei_big.png" class="jiangbei">
        <div class="jiangbei-main">
          <div class="common-title"><span>分享获得次数分享获得次数</span></div>
          <div class="text-center">在分享模块把该游戏成功分享给好友，游戏次数+1<br>
            （单场比赛只能增加一次）</div>
          <div class="common-title"><span>购买VIP获得次数</span></div>
          <div class="text-center">购买不同等级的VIP权益，会相应增加比赛次数</div>

          <div class="btn-bottom-box">
            <div class="item">分享该比赛</div>
            <div class="item" @click="$router.push('/my/mypower/0')">购买VIP</div>
            <div class="item" @click="$router.replace('/game/match?backUrl=/_1')">更多比赛</div>
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
    }
  }
</script>

<style lang="scss" scoped>
  .jiangbei-common {
    width: 100%;
    padding: 25px;
    padding-top: 185px;
    position: relative;
    background: url('../../assets/images/game/common_page_bg.png') no-repeat;
    background-position: center top;
    background-size: 640px auto;
    height: 100%;

    .jiangbei {
      height: 225px;
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 120;
    }

    .jiangbei-main {
      border-radius: 15px;
      background: #fff;
      padding: 25px;
      padding-top: 90px;
      padding-bottom: 60px;
      height: 100%;
      position: relative;

      .common-title {
        text-align: center;
        height: 70px;
        line-height: 72px;
        margin-bottom: 10px;

        >span {
          display: inline-block;
          height: 100%;
          position: relative;
          font-size: 32px;
          font-weight: bold;
          color: #070031;

          &::before {
            display: block;
            width: 14px;
            height: 14px;
            background: #070031;
            content: '';
            position: absolute;
            left: -35px;
            top: 28px;
            transform: rotate(45deg);
          }

          &::after {
            display: block;
            width: 14px;
            height: 14px;
            background: #070031;
            content: '';
            position: absolute;
            right: -35px;
            top: 28px;
            transform: rotate(45deg);
          }
        }
      }

      .text-center {
        font-size: 24px;
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
        color: #070031;
      }

      .btn-bottom-box {
        width: 500px;
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 110;

        .item {
          width: 100%;
          height: 80px;
          line-height: 82px;
          margin-bottom: 30px;
          text-align: center;
          border-radius: 40px;
          font-size: 30px;
          @include tapColor;

          &:first-child {
            background: $by;
          }

          &:nth-child(2) {
            background: #fe6f49;
            color: #fff;
          }

          &:last-child {
            background: #f0f0f0;
            color: #999;
          }
        }
      }
    }
  }
</style>