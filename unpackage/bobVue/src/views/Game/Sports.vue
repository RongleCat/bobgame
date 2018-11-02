<template>
  <ThePage color="#f2f2f2" contentBg="#0c053d">
    <template slot="headerContent">
      竞技场
      <Popup :maskClose="false" v-model="showResult">
        <div class="res-pop">
          <div class="btn-back" :style="{top:btnTop+'rem'}" @click="$router.push('/')"><i class="iconfont icon-zuo"></i>返回游戏列表</div>
          <div class="pop-main" :style="{top:popTop+'rem'}">
            <div class="top-title win"></div>
            <div class="pop-content">
              <div class="line-item been">
                金豆 <div class="right-block two">+<span>20000</span><br>场地租借费：20金豆</div>
              </div>
              <div class="line-item windot">
                胜点 <div class="right-block">+<span>5</span></div>
              </div>
              <div class="bottom-tip">今日还能在该游戏获得95金豆</div>
              <div class="user-info-box">
                <div class="item left">
                  <div class="head-box">
                    <img :src="myInfo.head">
                    <div class="level-box"><i class="iconfont" :class="[myInfo.sex?'icon-female':'icon-male']"></i>Lv{{myInfo.gameLevel}}</div>
                  </div>
                  <div class="user-name" :class="[myInfo.level?'':'no-icon']">{{myInfo.name | jiequ}}
                    <div class="vip-icon" :class="[`vip-${myInfo.level}`]" v-if="myInfo.level"></div>
                  </div>
                  <div class="bottom-line exp">
                    <div class="exp-bar">
                      <div class="bar-bg" :style="{width:'10%'}"></div>
                    </div>
                    经验：<span>+1000</span>
                  </div>
                </div>
                <div class="item right">
                  <div class="head-box">
                    <img :src="opponentInfo.head">
                    <div class="level-box"><i class="iconfont" :class="[opponentInfo.sex?'icon-female':'icon-male']"></i>Lv{{opponentInfo.gameLevel}}</div>
                  </div>
                  <div class="user-name" :class="[opponentInfo.level?'':'no-icon']">{{opponentInfo.name | jiequ}}
                    <div class="vip-icon" :class="[`vip-${opponentInfo.level}`]" v-if="opponentInfo.level"></div>
                  </div>
                  <div class="bottom-line add">
                    <div class="btn-addfriend"><i class="iconfont icon-add"></i>加好友</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-btn btn-one" @click="guanzhu">进入聊天页面</div>
            <div class="bottom-btn btn-two">重新匹配</div>
          </div>
        </div>
      </Popup>
    </template>
    <template slot="content">
      <div class="sports-container">
        <div class="head-block" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/jingji_bg.jpg')`}">
          <div class="tip-help" @click="showHelp = true"><i class="iconfont icon-info"></i>规则</div>
          <transition name="fade-in">
            <div class="rank-list" v-if="listOpen">
              <div class="list-main">
                <div class="item">
                  <div class="before-numbe">1</div>
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="rank-name">曹铁柱</div>
                  <div class="win-dot">胜点：2514521252</div>
                  <div class="can-get">可分52222金豆</div>
                </div>
                <div class="item">
                  <div class="before-numbe">2</div>
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="rank-name">曹铁柱曹铁柱</div>
                  <div class="win-dot">胜点：2514252</div>
                  <div class="can-get">可分52222金豆</div>
                </div>
                <div class="item">
                  <div class="before-numbe">3</div>
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="rank-name">曹铁柱曹铁柱曹铁柱</div>
                  <div class="win-dot">胜点：2514521</div>
                  <div class="can-get">可分52222金豆</div>
                </div>
              </div>
              <div class="btn-ctrl" @click="listOpen = false">
                <div class="main">收起榜单<i class="iconfont icon-you"></i></div>
              </div>
            </div>
            <div class="rank-list" v-else>
              <div class="btn-ctrl" @click="listOpen = true">
                <div class="main">展开榜单<i class="iconfont icon-zuo"></i></div>
              </div>
            </div>
          </transition>
        </div>
        <div class="sports-main">
          <div class="rule-block">
            <div class="now-windot">当前胜点：556568 <span>每日12:00-24:00开启</span> </div>
            <div class="tip-text-block"><i class="iconfont icon-info"></i>每场竞技场比赛胜利可以获得胜点，胜点每日清空！</div>
          </div>
          <div class="sports-item item-1" @click="$router.push('/game/matching')">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-2">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-3">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-4">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-5">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-6">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-7">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-8">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
          <div class="sports-item item-9">
            <div class="lease-text">场地租借费：2%</div>
            <div class="get-been">奖励：99999金豆</div>
            <div class="bottom-windot"><span>胜利胜点+1</span><span>入场费：1000金豆</span></div>
          </div>
        </div>
        <Help v-model="showHelp">
          <template slot="title">
            竞技场规则
          </template>
          <template slot="content">
            1、竞技场将按照固定时间段开启，开启后可进行游戏<br>
            2、竞技场是双人匹配对战，进入将消耗金豆，获胜将获得额外金豆奖励<br>
            3、竞技场匹配游戏为平台上已上线游戏，有新游戏上线将会加入匹配队列<br>
            4、竞技场胜利将会额外获得胜点，胜点每日清空<br>
            5、胜点每天获得前三的用户将会按照50%、30%、20%，分金豆池奖励<br>
            6、以作弊手段获取胜点将会取消获奖权利
          </template>
        </Help>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { Toast } from "vant";
  export default {
    data() {
      return {
        showHelp: false,
        listOpen: false,
        showResult: true,
        myInfo: {
          head: "https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg",
          gameLevel: 18,
          level: 1,
          name: "曹铁柱曹铁柱曹铁柱",
          sex: 0
        },
        opponentInfo: {
          head: "https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg",
          gameLevel: 20,
          level: 2,
          name: "曹铁柱曹铁柱曹铁柱",
          sex: 1
        }
      };
    },
    filters: {
      jiequ(v) {
        if (v.length <= 6) {
          return v
        } else {
          return v.substring(0, 4) + '...';
        }
      }
    },
    computed: {
      btnTop() {
        return this.$store.state.statusBarHeight + (88 + 25) / 75;
      },
      popTop() {
        return this.$store.state.statusBarHeight + (88 + 100) / 75;
      }
    },
    mounted() {
      Toast(this.statusBarHeight);
    },
    methods: {
      guanzhu() {
        Toast("关注");
        Toast(location.href);
        window.location.href =
          "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NzE4MTE1NA==&scene=110#wechat_redirect";
      }
    }
  };
</script>

<style lang="scss" scoped>
  $color: ((color: #7f726f),
  (color: #89273f),
  (color: #55abe6),
  (color: #c6814d),
  (color: #89273f),
  (color: #22676d),
  (color: #342876),
  (color: #4f166d),
  (color: #11054a));

  .sports-container {
    .head-block {
      width: 100%;
      position: relative;
      height: 520px;
      background-size: 100% auto;
      background-repeat: no-repeat;

      .tip-help {
        height: 60px;
        padding: 0 20px 0 16px;
        background: #393461;
        font-size: 26px;
        border-radius: 30px 0 0 30px;
        line-height: 62px;
        position: absolute;
        right: 0;
        top: 40px;
        color: #fff;
        @include tapColor;

        .iconfont {
          font-size: 28px;
          margin-right: 14px;
        }
      }

      .rank-list {
        position: absolute;
        top: 145px;
        right: 0;
        background: #393461;
        @include clearfix;
        color: #fff;
        border-radius: 15px 0 0 15px;
        box-shadow: 0 8px 20px rgba(6, 1, 43, 0.7);

        .list-main {
          float: left;
          padding: 4px 0;
          padding-right: 20px;

          .item {
            padding-left: 130px;
            position: relative;
            height: 74px;
            line-height: 74px;
            @include clearfix;
            font-size: 20px;

            .before-numbe {
              position: absolute;
              line-height: 74px;
              left: 0;
              width: 60px;
              height: 74px;
              font-weight: bold;
              font-size: 28px;
              text-align: center;
            }

            img {
              position: absolute;
              width: 50px;
              height: 50px;
              left: 60px;
              top: 12px;
              border-radius: 50%;
            }

            >div {
              float: left;
            }

            .rank-name {
              width: 150px;
              @include textof;
            }

            .win-dot {
              width: 170px;
              @include textof;
            }

            .can-get {
              width: 170px;
              color: #ffc835;
            }
          }
        }

        .btn-ctrl {
          float: left;
          position: relative;
          height: 230px;
          width: 60px;

          .main {
            width: 60px;
            font-size: 22px;
            line-height: 28px;
            padding: 0 15px;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }

    .sports-main {
      padding: 25px;

      .rule-block {
        background: url("../../assets/images/game/windot.png") no-repeat;
        background-size: 24px auto;
        background-position: 0 24px;
        padding-top: 15px;
        line-height: 44px;
        color: #fff;
        padding-bottom: 35px;

        .now-windot {
          padding-left: 40px;
          font-size: 24px;
          font-weight: bold;

          span {
            float: right;
            font-weight: normal;
            font-size: 20px;
          }
        }

        .tip-text-block {
          font-size: 22px;
          color: #fff;
          opacity: 0.5;

          .iconfont {
            font-size: 24px;
            vertical-align: -1px;
            padding-right: 18px;
          }
        }
      }

      .sports-item {
        width: 100%;
        height: 240px;
        background-image: url("../../assets/images/game/sports_bg.png");
        background-size: 100% auto;
        margin-bottom: 30px;
        position: relative;
        @include tapMask;
        border-radius: 10px;
        overflow: hidden;

        .lease-text {
          text-align: right;
          padding-right: 20px;
          line-height: 84px;
          font-size: 22px;
        }

        .bottom-windot {
          height: 78px;
          line-height: 68px;
          padding-right: 20px;
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;

          span {
            display: inline-block;
            width: 165px;
            text-align: left;

            &:last-child {
              text-align: right;
              width: 220px;
            }
          }
        }

        .get-been {
          font-size: 28px;
          font-weight: bold;
          height: 60px;
          line-height: 66px;
          padding-left: 450px;
          text-shadow: 1px 1px 1px #fff, -1px -1px 1px #fff, -1px 1px 1px #fff,
            1px -1px 1px #fff;
        }

        @for $i from 1 through length($color) {
          $item: nth($color, $i);

          &.item-#{$i} {
            color: map-get($item, color);
            background-position-y: ($i - 1) * -250px;
          }
        }
      }
    }
  }

  .res-pop {
    width: 100vw;
    height: 100vh;
    position: relative;

    .btn-back {
      position: absolute;
      left: 25px;
      background: rgba(255, 255, 255, 0.5);
      color: #fff;
      padding: 0 20px;
      line-height: 60px;
      height: 60px;
      border-radius: 28px;
      font-size: 24px;
      @include tapColor;

      .iconfont {
        font-size: 24px;
      }
    }

    .pop-main {
      position: absolute;
      // top: 50%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      padding-top: 58px;

      .top-title {
        width: 638px;
        height: 146px;
        background-size: 100% auto;
        background-position: top center;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        &.win {
          background-image: url("../../assets/images/game/result_poptitle_1.png");
        }

        &.lose {
          background-image: url("../../assets/images/game/result_poptitle_2.png");
        }

        &.ping {
          background-image: url("../../assets/images/game/result_poptitle_3.png");
        }
      }

      .pop-content {
        background: #fff;
        border-radius: 15px;
        padding: 50px;
        padding-top: 115px;
        width: 550px;
        margin-bottom: 55px;

        .line-item {
          color: #8c969c;
          text-align: left;
          height: 88px;
          line-height: 90px;
          border-bottom: 1px dashed #e5e5e5;
          background-size: 40px auto;
          background-position: 7px center;
          background-repeat: no-repeat;
          padding-left: 60px;
          overflow: hidden;

          .right-block {
            float: right;
            text-align: right;
            font-size: 20px;

            span {
              font-size: 28px;
              font-weight: bold;
              color: #333;
              padding-left: 3px;
            }

            &.two {
              line-height: 30px;
              padding: 12px 0;
            }
          }

          &.been {
            background-image: url("../../assets/images/game/been.png");
          }

          &.windot {
            background-image: url("../../assets/images/game/windot.png");
          }
        }

        .bottom-tip {
          color: #8c969c;
          font-size: 20px;
          line-height: 60px;
        }

        .user-info-box {
          @include clearfix;
          padding: 0 25px;
          color: #333;
          padding-top: 10px;

          .item {
            width: 180px;
            position: relative;

            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              margin-bottom: 56px;
            }

            &:first-child {
              float: left;
            }

            &:last-child {
              float: right;
            }

            .user-name {
              padding-top: 10px;
              line-height: 56px;
              font-size: 28px;
              max-width: 100%;
              position: absolute;
              left: 50%;
              top: 110px;
              white-space: nowrap;

              transform: translateX(-50%);

              .vip-icon {
                display: inline-block;
                width: 30px;
                height: 30px;
                background-size: 100% auto;
                vertical-align: -4px;
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
              position: absolute;
              top: 85px;
              left: 40px;
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

            .bottom-line {
              height: 44px;

              &.exp {
                position: relative;
                line-height: 1;
                font-size: 20px;
                padding-top: 24px;

                .exp-bar {
                  width: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 12px;
                  border-radius: 5px;
                  overflow: hidden;
                  background: #f0f0f0;

                  .bar-bg {
                    height: 100%;
                    background-image: linear-gradient(to bottom, #fff071, #fdd64a);
                  }
                }
              }

              &.add {
                line-height: 46px;
                width: 120px;
                background: #fe6f49;
                font-size: 20px;
                color: #fff;
                margin: 0 auto;
                border-radius: 22px;
                @include tapColor;

                .iconfont {
                  font-size: 24px;
                  vertical-align: -2px;
                }
              }
            }
          }
        }
      }

      .bottom-btn {
        width: 450px;
        height: 88px;
        line-height: 90px;
        font-size: 30px;
        text-align: center;
        border-radius: 44px;
        margin: 0 auto;
        margin-bottom: 24px;
        @include tapColor;

        &.btn-one {
          color: #333;
          background: $by;
        }

        &.btn-two {
          background: rgba(48, 48, 48, .7);
          color: #fff;
        }
      }
    }
  }
</style>