<template>
  <ThePage :noHead="true" color="rgba(255,255,255,0)">
    <template slot="content">
      <div class="matchimg-container">
        <div class="match-text" v-if="!matchEnd">正在匹配对手和游戏<br><span>{{time}}s</span></div>
        <div class="match-text" v-else>匹配成功<br><span>3s</span></div>
        <template v-if="!matchEnd">
          <div class="btn-cancel" @click="$router.go(-1)">取消</div>
          <div class="myhead-block">
            <div class="ring-one"></div>
            <div class="ring-two"></div>
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg" :style="{boxShadow:`0 0 0 0.1333rem ${levelColor[myInfo.level]}`}">
          </div>
        </template>
        <div class="match-end" v-else>
          <div class="info-box my">
            <img :src="myInfo.head" :style="{boxShadow:`0 0 0 0.1333rem ${levelColor[myInfo.level]}`}">
            <div class="user-name" :class="[myInfo.level?'':'no-icon']">{{myInfo.name | jiequ}}
              <div class="vip-icon" :class="[`vip-${myInfo.level}`]" v-if="myInfo.level"></div>
            </div>
            <div class="level-box"><i class="iconfont" :class="[myInfo.sex?'icon-female':'icon-male']"></i>Lv{{myInfo.gameLevel}}</div>
          </div>
          <div class="info-box opponent">
            <img :src="opponentInfo.head" :style="{boxShadow:`0 0 0 0.1333rem ${levelColor[opponentInfo.level]}`}">
            <div class="user-name" :class="[opponentInfo.level?'':'no-icon']">
              {{opponentInfo.name | jiequ}}
              <div class="vip-icon" :class="[`vip-${opponentInfo.level}`]" v-if="opponentInfo.level"></div>
            </div>
            <div class="level-box"><i class="iconfont" :class="[opponentInfo.sex?'icon-female':'icon-male']"></i>Lv{{opponentInfo.gameLevel}}</div>
          </div>
          <div class="match-content">
            <div class="match-title">对战游戏</div>
            <div class="match-game">
              <img src="http://ceshi2.bobgame.cn/Uploads/Picture/2018-06-27/5b3369fb157ac.png">
              <div class="game-name">飞翔吧足球</div>
            </div>
            <div class="get-info">
              <div class="get-label">获胜奖励</div>
              2000金豆<span>10胜点</span>
            </div>
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
        matchEnd: false,
        levelColor: ['#999', '#ff6c2d', '#b48774', '#fa9e2d', '#fe2d42', '#fe2d42'],
        myInfo: {
          head: 'https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
          gameLevel: 18,
          level: 1,
          name: '曹铁柱',
          sex: 0
        },
        opponentInfo: {
          head: 'https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg',
          gameLevel: 20,
          level: 2,
          name: '曹铁柱曹铁柱曹铁柱',
          sex: 1
        },
        time: 0
      }
    },
    filters: {
      jiequ(v) {
        if (v.length <= 6) {
          return v
        } else {
          return v.substring(0, 6) + '...';
        }
      }
    },
    watch: {
      time(v) {
        if (v === 3) {
          this.matchEnd = true
        } else if (v === 5) {
          this.$router.replace('/friends/detail/10')
          window.clearInterval(window.matchTimer);
        }
      }
    },
    mounted() {
      let that = this
      window.matchTimer = setInterval(() => {
        that.time++
      }, 1000)
    },
    beforeCreate() {
      this.$atApp(() => {
        window.plus.navigator.setStatusBarStyle('light');
      })
    },
    beforeDestroy() {
      this.$atApp(() => {
        window.plus.navigator.setStatusBarStyle('dark');
      })
    }
  }
</script>

<style lang="scss" scoped>
  .matchimg-container {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/game/matching_bg.png'), linear-gradient(to bottom, #46243f 50%, #1f172c 50%, #1f172c 100%);
    background-repeat: no-repeat, no-repeat;
    background-size: 100% auto, auto 100%;
    background-position: center, center;
    position: relative;

    .match-text {
      color: #fff;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      position: absolute;
      top: 10%;
      width: 100%;

      span {
        font-size: 20px;
        font-weight: normal;
        opacity: .7;
      }
    }

    .btn-cancel {
      color: #1f162c;
      background: rgba(255, 255, 255, .8);
      width: 140px;
      height: 70px;
      line-height: 72px;
      text-align: center;
      border-radius: 35px;
      font-size: 28px;
      position: absolute;
      left: 305px;
      bottom: 20%;
      @include tapColor;
    }

    .myhead-block {
      width: 250px;
      height: 250px;
      overflow: hidden;
      position: absolute;
      top: 35%;
      left: 250px;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 50px;
        left: 50px;
      }

      .ring-one {
        width: 250px;
        height: 250px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 10px solid transparent;
        border-top-color: #ba55d3;
        border-radius: 50%;
        opacity: .5;
        animation: rotation 1.5s linear infinite;
      }

      .ring-two {
        width: 210px;
        height: 210px;
        position: absolute;
        top: 20px;
        left: 20px;
        border: 10px solid transparent;
        border-bottom-color: #ba55d3;
        border-radius: 50%;
        animation: rotation-flip 1.5s linear infinite;
      }
    }

    .match-end {
      width: 550px;
      position: absolute;
      left: 100px;
      top: 20%;
      padding-top: 75px;

      .info-box {
        width: 230px;
        position: absolute;
        top: 0;

        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: block;
          margin: 0 auto;
          margin-bottom: 75px;
        }

        .user-name {
          padding-top: 10px;
          line-height: 64px;
          font-size: 28px;
          max-width: 100%;
          position: absolute;
          left: 50%;
          top: 160px;
          white-space: nowrap;

          transform: translateX(-50%);

          .vip-icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-size: 100% auto;
            // position: absolute;
            // top: 24px;
            // right: 0;
            border-radius: 5px;
          }

          &.no-icon {
            padding-right: 0;
          }
        }

        .level-box {
          width: 100px;
          height: 30px;
          margin: 0 auto;
          background: #333;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          padding-left: 30px;
          color: #fff;
          line-height: 32px;
          text-align: center;
          font-size: 20px;

          .iconfont {
            display: block;
            width: 30px;
            height: 30px;
            position: absolute;
            left: 0;
            top: 0;
            color: #fff;
            border-radius: 50%;
            font-size: 18px;
            line-height: 32px;
            text-align: center;

            &.icon-male {
              background: #3bb3ff;
            }

            &.icon-female {
              background: #fe3b6d;
            }
          }
        }

        &.my {
          left: 40px;
        }

        &.opponent {
          right: 40px;
        }
      }

      .match-content {
        width: 100%;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        padding-top: 180px;
        text-align: center;

        .get-info {
          background: #f0f0f0;
          height: 100px;
          line-height: 102px;
          position: relative;
          padding-left: 170px;
          font-size: 22px;
          text-align: left;

          span {
            padding-left: 30px;
          }

          .get-label {
            position: absolute;
            background: #333;
            color: #fff;
            height: 34px;
            line-height: 36px;
            padding: 0 10px;
            border-radius: 5px;
            left: 30px;
            top: 33px;
          }
        }

        .match-title {
          line-height: 70px;
          text-align: center;
          color: #88819b;
          font-size: 22px;
        }

        img {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          box-shadow: 0 0 0 10px #f0f0f0;
        }

        .game-name {
          color: #110337;
          line-height: 60px;
          font-size: 28px;
          padding-bottom: 30px;
        }
      }
    }
  }
</style>