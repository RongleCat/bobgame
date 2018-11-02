<template>
  <div class="game-item">
    <div class="item-state" v-if="state == 0">
      <div class="state-label" :class="[stateParse.stateClass]">{{stateParse.stateText}}</div>
      <div class="end-time">9月5日 13：00结束</div>
      <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
    </div>
    <div class="item-state" v-else>
      <div class="state-label" :class="[stateParse.stateClass]">{{stateParse.stateText}}</div>
      <div class="end-time">9月5日 13：00结束</div>
    </div>
    <div class="item-card">
      <div class="top-block" v-if="personal">
        <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
        <div class="btn-join" @click="$router.push('/game/stadium/100')" v-if="state == 0">立即报名</div>
        <div class="btn-join" @click="$router.push('/game/stadium/100')" v-else-if="state == 1">开始比赛</div>
        <div class="btn-join" @click="$router.push('/game/viewresults/100')" v-else>查看结果</div>
        <div class="open-name">曹铁柱</div>
        <div class="game-info">创建的第15场比赛</div>
      </div>
      <div class="top-block official" v-else>
        <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="gameicon-1">
        <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="gameicon-2">
        <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" class="gameicon-3">
        <div class="btn-join" @click="$router.push('/game/stadium/100')" v-if="state == 0">立即报名</div>
        <div class="btn-join" @click="$router.push('/game/stadium/100')" v-else-if="state == 1">开始比赛</div>
        <div class="btn-join" @click="$router.push('/game/viewresults/100')" v-else>查看结果</div>
      </div>
      <div class="bottom-block">
        <div class="match-game" v-if="personal">
          <div class="one-line">
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
          </div>
          <div class="two-line">比赛游戏</div>
        </div>
        <div class="match-game official" v-else>
          <div class="one-line">003</div>
          <div class="two-line">比赛游戏</div>
        </div>
        <div class="ticket">
          <div class="one-line">
            100张门票
          </div>
          <div class="two-line">报名费用</div>
        </div>
        <div class="bonus">
          <div class="one-line">
            当前奖金：<span>232325元</span>
          </div>
          <div class="two-line">参与人数越多奖金越高</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      personal: {
        type: Boolean,
        default: false
      },
      state: {
        type: Number,
        default: 1
      }
    },
    computed: {
      stateParse() {
        if (this.state == 0) {
          return {
            stateClass: '',
            stateText: '未开始'
          }
        } else if (this.state == 1) {
          return {
            stateClass: 'open',
            stateText: '进行中'
          }
        } else {
          return {
            stateClass: '',
            stateText: '已结束'
          }
        }
      }
    },
    data() {
      return {

      }
    },
    mounted() {
      // console.log(this.state);
    }
  }
</script>

<style lang="scss" scoped>
  .game-item {
    padding-bottom: 25px;

    .item-state {
      height: 70px;
      line-height: 72px;
      font-size: 24px;
      font-weight: bold;
      padding-left: 95px;
      position: relative;
      overflow: hidden;

      .state-label {
        background: #333;
        padding: 0 10px;
        border-radius: 5px;
        float: left;
        color: #fff;
        font-size: 18px;
        height: 30px;
        line-height: 32px;
        display: block;
        position: absolute;
        top: 20px;
        left: 0;

        &.open {
          background: #fe6f49;
        }
      }

      .end-time {
        float: left;
      }

      .share-text {
        float: right;
        font-size: 24px;
        font-weight: normal;

        .iconfont {
          font-size: 24px;
        }
      }
    }

    .item-card {
      height: 300px;
      border-radius: 15px;
      overflow: hidden;
      width: 100%;
      box-shadow: 0 4px 20px rgba(100, 100, 100, .14);

      .top-block {
        height: 180px;
        background: linear-gradient(to right, #a35fd9, #9465d3);
        position: relative;
        padding-left: 150px;
        padding-top: 50px;

        img {
          width: 100px;
          height: 100px;
          border: 5px solid rgba(255, 255, 255, .5);
          position: absolute;
          left: 30px;
          top: 40px;
          border-radius: 50%;
        }

        .open-name {
          color: #fff;
          font-size: 30px;
          font-weight: bold;
          line-height: 1;
          padding-bottom: 20px;
        }

        .game-info {
          color: #fff;
          opacity: .5;
          font-size: 24px;
          line-height: 1;
        }

        .btn-join {
          position: absolute;
          right: 25px;
          top: 55px;
          height: 70px;
          color: #fff;
          line-height: 72px;
          width: 180px;
          border-radius: 35px;
          background: #292c55;
          text-align: center;
          box-shadow: 0 4px 20px rgba(41, 44, 85, .5);
          @include tapColor;
        }

        &.official {
          img {
            width: 80px;
            height: 80px;
            border-width: 0;
            top: 65px;
            box-shadow: 0 0 0 4px rgba(255, 255, 255, .5);

            &.gameicon-2 {
              left: 86px;
            }

            &.gameicon-3 {
              left: 146px;
            }
          }

          .btn-join {
            top: 70px;
          }

          &:after {
            font-size: 22px;
            color: #fff;
            opacity: .5;
            line-height: 60px;
            padding-left: 24px;
            position: absolute;
            display: block;
            content: '比赛游戏';
            top: 0;
            left: 0;
          }
        }
      }

      .bottom-block {
        height: 120px;
        background: #fff;
        @include clearfix;

        .match-game {
          position: relative;
          height: 100%;
          float: left;
          width: 160px;

          .one-line {
            img {
              top: 15px;
              width: 50px;
              height: 50px;
              position: absolute;
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, .5);
              left: 55px;

              &:first-child {
                left: 20px;
              }

              &:last-child {
                left: 88px;
              }
            }
          }

          &.official {
            padding-top: 15px;
            text-align: center;

            .one-line {
              font-size: 30px;
              font-weight: bold;
              line-height: 52px;
              height: 50px;
            }

            .two-line {
              width: 90px;
              height: 30px;
              line-height: 32px;
              font-size: 18px;
              color: #fff;
              background: #333;
              border-radius: 5px;
              left: 35px;
              white-space: nowrap;
            }
          }
        }

        .ticket {
          width: 170px;
          float: left;
          position: relative;
          height: 100%;
          padding-top: 15px;
          text-align: center;

          .one-line {
            font-size: 30px;
            font-weight: bold;
            line-height: 52px;
            height: 50px;
          }
        }

        .bonus {
          width: 350px;
          float: right;
          padding-top: 15px;
          text-align: right;
          padding-right: 25px;
          position: relative;
          height: 100%;

          .one-line {
            font-size: 30px;
            font-weight: bold;
            line-height: 52px;
            height: 50px;

            span {
              color: #ff4545;
            }
          }

          .two-line {
            text-align: right;
            padding-right: 25px;
          }
        }


        .two-line {
          position: absolute;
          width: 100%;
          font-size: 22px;
          color: #adadad;
          bottom: 20px;
          left: 0;
          text-align: center;
          line-height: 26px;
        }
      }
    }
  }
</style>