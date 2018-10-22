<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      比赛场
    </template>
    <template slot="content">
      <div class="game-home-container">
        <div class="head-top">
          <div class="head-img" :style="{backgroundImage:'url(' + headUrl + ')'}"></div>
          <div class="user-info">
            <div class="user-name vip-5">{{userInfo.nickname}}</div>
            <div class="bean-block" @click="$router.push('/my/recharge')">{{userInfo.jifen}}
              <div class="iconfont icon-add"></div>
            </div>
            <div class="ticket-block">门票：10</div>
          </div>
        </div>
        <div class="top-bg-block">
          <div class="tip-help" @click="showHelp = true"><i class="iconfont icon-info"></i>规则</div>
          <div class="btn-item left">我的参赛记录</div>
          <div class="btn-item right">官方比赛纪录</div>
        </div>
        <div class="game-list">
          <div class="block-title">自定义比赛</div>
          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
          <div class="block-title">官方比赛</div>

          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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

          <div class="game-item">
            <div class="item-state">
              <div class="state-label open">进行中</div>
              <div class="end-time">9月5日 13：00结束</div>
              <div class="share-text">邀请好友<i class="iconfont icon-you"></i></div>
            </div>
            <div class="item-card">
              <div class="top-block">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="btn-join">立即报名</div>
                <div class="open-name">曹铁柱</div>
                <div class="game-info">创建的第15场比赛</div>
              </div>
              <div class="bottom-block">
                <div class="match-game">
                  <div class="one-line">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                    <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                  </div>
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
        </div>
        <Help v-model="showHelp">
          <template slot="title">
            比赛场规则
          </template>
          <template slot="content">
            1、比赛场将按照固定时间进行开放，开启后可进行游戏<br>
            2、比赛场每期将会更换不同奖励及游戏<br>
            3、比赛场入场需要消耗门票<br>
            4、比赛场如未达到最低报名人数，比赛取消将返回门票<br>
            5、比赛场获得奖品后，请到我的页面点击领奖
          </template>
        </Help>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        showHelp: false
      }
    },
    computed: {
      userInfo() {
        return this.$store.state.userInfo;
      },
      headUrl() {
        let url = this.$store.state.userInfo.head_icon;
        if (/http/g.test(url)) {
          return url;
        } else {
          return "http://cdn.bobgame.cn" + url;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-home-container {
    .head-top {
      height: 136px;
      padding-left: 25px;
      width: 100%;
      background: #070031;
      position: relative;

      .head-img {
        width: 90px;
        height: 90px;
        background-size: 100% auto;
        border-radius: 50%;
        position: absolute;
        left: 25px;
        top: 50%;
        transform: translateY(-50%);
      }

      .user-info {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding-top: 48px;
        width: 100%;
        padding-left: 140px;

        .user-name {
          color: #fff;
          font-size: 26px;
          line-height: 32px;
          font-weight: bold;
          margin-bottom: 14px;
          text-align: left;
          padding-left: 7px;
          padding-right: 32px;
          background-size: 24px auto;
          background-position: right center;
          position: absolute;
          top: 0;
          left: 140px;
          white-space: nowrap;
        }

        .bean-block {
          height: 44px;
          background-color: #39335a;
          border-radius: 22px;
          color: #fff;
          background-image: url("../../assets/images/bean.png");
          background-size: auto 33px;
          background-repeat: no-repeat;
          background-position-x: 7px;
          background-position-y: center;
          font-size: 30px;
          padding-left: 50px;
          padding-right: 20px;
          line-height: 48px;
          font-weight: bold;
          float: left;
          position: relative;
          padding-right: 48px;

          .iconfont {
            position: absolute;
            width: 36px;
            height: 36px;
            right: 4px;
            top: 4px;
            background: #adadad;
            color: #fff;
            border-radius: 50%;
            font-size: 24px;
            text-align: center;
            line-height: 36px;
          }
        }

        .ticket-block {
          position: absolute;
          bottom: 0;
          right: 25px;
          height: 44px;
          line-height: 46px;
          background-color: #39335a;
          border-radius: 22px;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
          padding: 0 15px;
        }
      }
    }

    .top-bg-block {
      width: 100%;
      height: 540px;
      background: #070031 url('../../assets/images/game/home_top_bg.png') no-repeat;
      background-size: 100% auto;
      color: #fff;
      position: relative;

      .tip-help {
        height: 60px;
        padding: 0 20px 0 16px;
        background: rgba(255, 255, 255, .2);
        font-size: 26px;
        border-radius: 30px 0 0 30px;
        line-height: 62px;
        position: absolute;
        right: 0;
        top: 40px;
        @include tapColor;

        .iconfont {
          font-size: 28px;
          margin-right: 14px;
        }
      }

      .btn-item {
        width: 50%;
        position: absolute;
        bottom: 15px;
        line-height: 82px;
        text-align: center;
        height: 80px;
        font-size: 26px;

        &.left {
          left: 0;

          &:after {
            display: block;
            content: '';
            width: 2px;
            height: 26px;
            background: rgba(255, 255, 255, .2);
            right: -1px;
            position: absolute;
            top: 27px;
          }
        }

        &.right {
          right: 0;
        }
      }
    }

    .block-title {
      font-size: 46px;
      color: #333;

      font-weight: bold;
    }

    .game-list {
      padding: 0 25px;

      .game-item {
        padding-bottom: 25px;

        .item-state {
          height: 70px;
          line-height: 72px;
          font-size: 30px;
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
    }
  }
</style>