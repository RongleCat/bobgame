<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      赛场003
      <div class="bottom-ranklist" :class="[rankListOpen?'':'close']">
        <div class="title" @click="rankListOpen = !rankListOpen"><span>距离第三还差5468465分</span>每5s刷新一次<div class="open-label">展开榜单<i class="iconfont icon-xia" :class="[rankListOpen?'':'route']"></i></div>
        </div>
        <div class="rank-item rank-1">
          <div class="one-line">
            <div class="userinfo">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
              <span>曹铁柱曹铁柱</span>
              <div class="vip-icon" :class="['vip-0']"></div>
            </div>
            <div class="mycount">总分：5248732132</div>
          </div>
          <div class="two-line">
            <div class="get-label">得分</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
          </div>
        </div>
        <div class="rank-item rank-2">
          <div class="one-line">
            <div class="userinfo">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
              <span>曹铁柱曹铁柱</span>
              <div class="vip-icon" :class="['vip-0']"></div>
            </div>
            <div class="mycount">总分：5248732132</div>
          </div>
          <div class="two-line">
            <div class="get-label">得分</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
          </div>
        </div>
        <div class="rank-item rank-3">
          <div class="one-line">
            <div class="userinfo">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
              <span>曹铁柱曹铁柱</span>
              <div class="vip-icon" :class="['vip-0']"></div>
            </div>
            <div class="mycount">总分：5248732132</div>
          </div>
          <div class="two-line">
            <div class="get-label">得分</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
            <div class="item"><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">2554821</div>
          </div>
        </div>
      </div>
      <transition name="fade-in">
        <div class="rank-mask" v-if="rankListOpen" @click="rankListOpen = false"></div>
      </transition>
    </template>
    <template slot="content">
      <div class="stadium-container">
        <div class="stadium-info">
          <div class="one-line">
            <span>距离结束</span>
            <CountDown endTime="2018-11-02 12:00:00"></CountDown>
            <div class="join-info">已报名：<span>5</span>/10</div>
          </div>
          <div class="two-line">
            <div class="myinfo">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
              <span>曹铁柱曹铁柱</span>
              <div class="vip-icon" :class="['vip-0']"></div>
            </div>
            <div class="mycount">总分：5248732132</div>
          </div>
        </div>
        <div class="game-item">
          <div class="game-info">
            <div class="one-line">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="game-head">
              <div class="game-title">熊猫大侠</div>
              <div class="game-top"><span>TOP</span>最高得分：2687875</div>
            </div>
            <div class="two-line" @click="$router.push('/game/addfrequency/100')">
              剩余正式开始次数：<span>5</span>/10
              <i class="iconfont icon-add"></i>
            </div>
          </div>
          <div class="btn-game btn-before">赛前练习</div>
          <div class="btn-game btn-start">正式开始</div>
        </div>
        <div class="game-item">
          <div class="game-info">
            <div class="one-line">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="game-head">
              <div class="game-title">熊猫大侠</div>
              <div class="game-top"><span>TOP</span>最高得分：2687875</div>
            </div>
            <div class="two-line" @click="$router.push('/game/addfrequency/100')">
              剩余正式开始次数：<span>5</span>/10
              <i class="iconfont icon-add"></i>
            </div>
          </div>
          <div class="btn-game btn-before">赛前练习</div>
          <div class="btn-game btn-start">正式开始</div>
        </div>
        <div class="game-item">
          <div class="game-info">
            <div class="one-line">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="game-head">
              <div class="game-title">熊猫大侠</div>
              <div class="game-top"><span>TOP</span>最高得分：2687875</div>
            </div>
            <div class="two-line" @click="$router.push('/game/addfrequency/100')">
              剩余正式开始次数：<span>5</span>/10
              <i class="iconfont icon-add"></i>
            </div>
          </div>
          <div class="btn-game btn-before">赛前练习</div>
          <div class="btn-game btn-start">正式开始</div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import CountDown from '@/components/CountDown';

  export default {
    components: {
      CountDown
    },
    data() {
      return {
        rankListOpen: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stadium-container {
    width: 100%;
    background: $gb url('../../assets/images/game/common_bg.png') no-repeat;
    background-size: 100% auto;
    background-position: center top;
    padding: 25px;
    padding-top: 80px;
    min-height: 100%;

    .stadium-info {
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 40px;

      .one-line {
        height: 80px;
        line-height: 82px;
        position: relative;
        padding: 0 25px;
        @include oneB;

        >span {
          font-size: 30px;
          padding-right: 10px;
        }

        &:before {
          left: 25px;
          right: 25px;
        }

        .countdown-container {
          display: inline-block;
          vertical-align: -8px;
        }

        .join-info {
          float: right;
          font-size: 20px;

          span {
            color: #fe6f49;
          }
        }
      }

      .two-line {
        height: 110px;
        width: 100%;
        padding: 0 25px;
        position: relative;
        padding-left: 110px;
        font-size: 30px;
        line-height: 112px;

        .myinfo {
          span {
            display: inline-block;
            max-width: 300px;
            @include textof;
          }

          .vip-icon {
            width: 30px;
            height: 30px;
            display: inline-block;
            background-size: 100%;
            border-radius: 3px;
            margin-left: 5px;
            position: absolute;
            top: 39px;
          }

          img {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 25px;
            left: 25px;
            border-radius: 50%;
          }
        }

        .mycount {
          position: absolute;
          top: 35px;
          right: 25px;
          font-size: 22px;
          height: 40px;
          line-height: 42px;
          color: #fff;
          padding: 0 15px;
          background: #fe6f49;
          border-radius: 5px;
        }
      }
    }

    .game-item {
      padding-right: 240px;
      height: 220px;
      overflow: hidden;
      position: relative;
      margin-bottom: 40px;

      .game-info {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: #fff;
        padding: 25px;

        .one-line {
          position: relative;
          padding-left: 130px;

          img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            box-shadow: 0 0 0 4px #dbdbdb;
            position: absolute;
            top: 4px;
            left: 4px;
          }

          .game-title {
            line-height: 44px;
            font-size: 30px;
          }

          .game-top {
            line-height: 50px;
            font-size: 24px;
            position: relative;
            padding-left: 50px;

            span {
              display: inline-block;
              position: absolute;
              top: 12px;
              left: 0;
              height: 24px;
              padding: 0 5px;
              line-height: 26px;
              font-size: 16px;
              background: #fe6f49;
              color: #fff;
              border-radius: 3px;
              vertical-align: 1px;
            }
          }
        }

        .two-line {
          width: 410px;
          position: absolute;
          bottom: 25px;
          left: 25px;
          background: #f0f0f0;
          height: 46px;
          line-height: 48px;
          border-radius: 5px;
          text-align: center;
          font-size: 28px;

          .iconfont {
            display: block;
            width: 32px;
            height: 32px;
            text-align: center;
            font-size: 20px;
            position: absolute;
            right: 0;
            top: 0;
            background: #333;
            color: #fff;
            line-height: 32px;
            border-radius: 50%;
            top: 8px;
            right: 8px;
          }
        }
      }

      .btn-game {
        width: 220px;
        height: 100px;
        position: absolute;
        border-radius: 15px;
        right: 0;
        text-align: center;
        line-height: 102px;
        font-size: 30px;
        @include tapColor;

        &.btn-before {
          background: $by;
          top: 0;
        }

        &.btn-start {
          background: #fe6f49;
          bottom: 0;
          color: #fff;
        }
      }
    }
  }

  .bottom-ranklist {
    width: 100%;
    background: #fff;
    height: 710px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .3s;
    padding: 0 25px;
    z-index: 100;

    &.close {
      transform: translateY(610px);
    }

    .title {
      text-align: left;
      font-size: 22px;
      line-height: 104px;
      height: 100px;
      overflow: hidden;
      // padding: 0 25px;
      color: #817f89;

      span {
        display: inline-block;
        padding: 0 12px;
        height: 40px;
        line-height: 42px;
        background: $by;
        margin-right: 15px;
        border-radius: 5px;
        color: #333;
        // vertical-align: -1px;
      }

      .open-label {
        float: right;
        line-height: 100px;

        .iconfont {
          font-size: 20px;
          padding: 0 5px;
          display: inline-block;
          vertical-align: 2px;

          &.route {
            transform: rotate(180deg);
          }
        }
      }
    }

    .rank-item {
      border-radius: 15px;
      overflow: hidden;
      width: 100%;
      margin-bottom: 20px;

      .one-line {
        background-color: #f0f0f0;
        height: 100px;
        position: relative;
        line-height: 102px;
        background-size: auto 40px;
        background-repeat: no-repeat;
        background-position: 25px center;

        .userinfo {
          height: 100%;
          padding-left: 165px;
          text-align: left;

          span {
            display: inline-block;
            max-width: 250px;
            @include textof;
          }

          .vip-icon {
            width: 30px;
            height: 30px;
            display: inline-block;
            background-size: 100%;
            border-radius: 3px;
            margin-left: 5px;
            position: absolute;
            top: 35px;
          }

          img {
            width: 60px;
            height: 60px;
            position: absolute;
            top: 20px;
            left: 80px;
            border-radius: 50%;
          }
        }

        .mycount {
          position: absolute;
          top: 30px;
          right: 25px;
          font-size: 22px;
          height: 40px;
          line-height: 42px;
          color: #fff;
          padding: 0 15px;
          background: #fe6f49;
          border-radius: 5px;
        }
      }

      .two-line {
        height: 80px;
        width: 100%;
        border-radius: 0 0 15px 15px;
        border: 1px solid #e5e5e5;
        border-top: 0;
        position: relative;
        padding-left: 90px;
        @include clearfix;

        .get-label {
          width: 28px;
          padding: 4px 0;
          padding-top: 6px;
          text-align: center;
          background: #333;
          color: #fff;
          line-height: 22px;
          font-size: 18px;
          border-radius: 3px;
          position: absolute;
          top: 50%;
          left: 26px;
          transform: translateY(-50%);
        }

        .item {
          float: left;
          height: 100%;
          line-height: 82px;
          position: relative;
          padding-left: 55px;
          padding-right: 30px;

          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            left: 0;
          }
        }
      }

      @for $i from 1 through 3 {
        &.rank-#{$i} {
          .one-line {
            background-image: url('../../assets/images/my/rank_#{$i}.png');
          }
        }
      }
    }
  }

  .rank-mask {
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 90;
  }
</style>