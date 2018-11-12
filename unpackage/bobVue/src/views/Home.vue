<template>
  <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
    <div class="statusBar" :style="{height:statusBarHeight}"></div>
    <div class="header-block" home :style="{top:statusBarHeight}">
      <div class="head-img" :style="{backgroundImage:'url(' + headUrl + ')'}"></div>
      <div class="user-info">
        <div class="user-name vip-5">{{userInfo.nickname}}</div>
        <div class="bean-block" @click="$router.push('/my/recharge')">{{userInfo.jifen}}
          <div class="iconfont icon-add"></div>
        </div>
      </div>
      <div class="message-icon" :class="{active:showMessageTip}" @click="$router.push('/message')">消息</div>
      <div class="message-icon card-icon" :class="{active:showMessageTip}" @click="$router.push('/my/mypower/1')">会员卡</div>
      <div class="float-icon" @click="showRedActive = true"></div>
    </div>
    <div class="view-block" ref="scrollMain" v-scrollfix>
      <transition name="fade-in">
        <div class="skeleton-container" main v-if="!reqDone" :style="{top:statusBarHeight}">
          <div class="item-img-text h90 yuan">
            <div class="pic"></div>
            <div class="text">
              <div class="item w100 h30"></div>
              <div class="item w100 h30"></div>
            </div>
            <div class="text">
              <div class="item w100 h30"></div>
              <div class="item w100 h30"></div>
            </div>
            <div class="text y-center right">
            </div>
            <div class="text y-center right">
              <div class="item w60 h100"></div>
            </div>
            <div class="text y-center right">
              <div class="item w60 h100"></div>
            </div>
          </div>
          <div class="item-block h220">
            <div class="item"></div>
          </div>
          <div class="item-block h180">
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
          <div class="item-block h210">
            <div class="item"></div>
          </div>
        </div>
      </transition>
      <transition name="fade-in">
        <div class="content-container" v-if="reqDone">
          <div class="banner-container" home>
            <swiper :options="swiperOption" ref="mySwiper" class="loop-container">
              <swiperSlide v-for="item in homeData.adv_lists" :key="item.id">
                <img :src="item.path|imgUrl" alt="">
              </swiperSlide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>

          <div class="game-entrance">
            <div class="item" @click="$router.push('/game/sports')"></div>
            <div class="item" @click="$router.push('/game/match')"></div>
          </div>
          <div class="news-container" @click="$router.push('/news/100')">
            <div class="icon">公告</div>
            <div class="title">平台政策汇总</div>
            <div class="view">立即查看
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="block-title">竞技游戏</div>
          <div class="jingji-game-list">
            <div class="item" @click="getUserInfo" v-for="item in homeData.sportsGames" :key="item.id" :style="{'background-image':`url(${createImgUrl(item.cover,'bg')})`}">
              <div class="icon" :style="{'background-image':`url(${createImgUrl(item.icon,'icon')})`}"></div>
              <div class="title">{{item.game_name}}</div>
              <div class="description">{{item.introduction}}</div>
            </div>
          </div>

          <Popup v-model="sginView" :maskClose="false">
            <div class="sgin-box">
              <div class="sgin-day">
                <div class="item" :class="[item.status === -2?'patch':'',item.status === 1?'end':'']" v-for="(item,index) in homeData.signInfo" :key="index">
                  <div class="head">第{{index+1}}天</div>
                  <div class="pic"><img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png"></div>
                </div>
              </div>
              <div class="btn-sgin-comfirm" @click="sginView = false">确定</div>
            </div>
          </Popup>

          <Popup v-model="showGetBeen" :opacity="80">
            <div class="getbeen-pop" @click="showGetBeen = false">
              <div class="route-bg"></div>
              <div class="content">
                <div class="title">签到成功</div>
                <img src="../assets/images/been_more.png" class="goods-img">
                <div class="get-number">金豆 × 1</div>
              </div>
            </div>
          </Popup>

          <Popup v-model="showRedActive" :maskClose="false" :opacity="60">
            <div class="redactive-pop">
              <div class="content">
                <div class="text-rule">您将随机分配一款游戏跟对手匹配对战，对战结束后会根据您的输赢情况分配给你不同金额的现金红包奖励存入余额。</div>
              </div>
              <i class="iconfont icon-guanbi" @click="showRedActive = false"></i>
              <div class="btn-play" @click="openWeixin">立即匹配</div>
            </div>
          </Popup>

          <Popup :maskClose="false" v-model="showRedPack">
            <div class="redpack-pop">
              <div class="close-box" v-if="!redPackOpen">
                <div class="text-title">大红包</div>
                <div class="btn-open" @click="redPackOpen = true"></div>
                <div class="btn-close" @click="showRedPack = false"></div>
              </div>
              <div class="open-box" v-else>
                <div class="btn-close" @click="showRedPack = false"></div>
                <div class="money-text">0.58<span>元</span></div>
                <div class="center-tip"><img src="../assets/images/other/vip_text.png"></div>
                <div class="btn-tixian btn-border" @click="$router.push('/my/balance')">去提现</div>
                <div class="btn-fanbei btn-border" @click="$router.push('/my/mypower/1')">红包翻倍</div>
              </div>
            </div>
          </Popup>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapState } from "Vuex";
  // import { Toast } from "vant";
  export default {
    data() {
      return {
        title: "首页",
        showMessageTip: true,
        headHeight: 136,
        sginView: false,
        showGetBeen: false,
        showRedActive: false,
        showRedPack: false,
        redPackOpen: true,
        swiperOption: {
          loop: true,
          spaceBetween: 10
        },
        reqDone: false
      };
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
      },
      statusBarHeight() {
        return this.$store.state.statusBarHeight + "rem";
      },
      setViewPaddingTop() {
        return this.$store.state.statusBarHeight + this.headHeight / 75 + "rem";
      },
      ...mapState(["homeData"])
    },
    // mounted() {
    //   let that = this;
    //   setTimeout(() => {
    //     that.sginView = true
    //   }, 1000);
    // },
    beforeCreate() {
      let that = this;
      that.$atApp(() => {
        window.plus.navigator.setStatusBarStyle("dark");
      });

      if (that.$store.state.homeData) {
        setTimeout(() => {
          that.reqDone = true;
        }, 400);
        return false;
      }
      this.$http.get("/Index/index").then(r => {
        setTimeout(() => {
          that.reqDone = true;
          if (r.TodySign.singned) {
            that.sginView = that.showGetBeen = true;
          }
        }, 400);
        that.$store.commit("setHomeData", r);
      });

    },
    methods: {
      toggleTip() {
        this.showMessageTip = !this.showMessageTip;
      },
      createImgUrl(value, type) {
        if (!value && type === "icon") {
          return "http://cdn.bobgame.cn/Uploads/Picture/2018-09-03/5b8cffbd19ea4.png";
        } else if (!value && type === "bg") {
          return "http://cdn.bobgame.cn/Uploads/Picture/2018-09-03/5b8cffdd66fec.png";
        } else {
          return "http://cdn.bobgame.cn" + value;
        }
      },
      openWeixin() {
        this.$atApp(() => {
          window.plus.runtime.launchApplication({ action: "weixin://RnUbAwvEilb1rU9g9yBU" })
        })
      }
    }
  };
</script>

<style lang="scss">
  .header-block[home] {
    height: 136px;
    padding-left: 25px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background: #fff;

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
      left: 140px;
      top: 50%;
      transform: translateY(-50%);
      padding-top: 48px;

      .user-name {
        color: #333;
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
        left: 0;
        white-space: nowrap;
      }

      .bean-block {
        height: 44px;
        background-color: #f5f5f5;
        border-radius: 22px;
        color: #333;
        background-image: url("../assets/images/bean.png");
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
    }

    .message-icon {
      height: 136px;
      text-align: center;
      background: url("../assets/images/home/icon_message.png") no-repeat;
      background-size: 40px auto;
      background-position: center 24px;
      position: absolute;
      width: 120px;
      right: 0;
      top: 0;
      padding-top: 90px;
      line-height: 20px;
      font-size: 20px;

      &::after {
        width: 15px;
        height: 15px;
        border: 4px solid #fff;
        background: #ff3153;
        border-radius: 50%;
        content: "";
        display: block;
        position: absolute;
        right: 32px;
        top: 22px;
        opacity: 0;
      }

      &.active {
        &::after {
          opacity: 1;
        }
      }

      &:active {
        opacity: 0.5;
      }

      &.card-icon {
        right: 120px;
        background-image: url("../assets/images/home/icon_m.png");
      }
    }
  }

  .loop-container {
    overflow: hidden;
    width: 100%;
    height: 210px;

    //   border-radius: 10px;
    img {
      display: block;
    }

    .swiper-slide {
      border-radius: 10px;
      overflow: hidden;
    }
  }

  .jingji-game-list {
    width: 100%;

    .item {
      width: 100%;
      height: 210px;
      background-size: cover;
      margin-bottom: 25px;
      position: relative;
      border-radius: 15px;
      overflow: hidden;

      .icon {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.7);
        position: absolute;
        top: 50%;
        left: 45px;
        transform: translateY(-50%);
        background-size: 100% auto;
      }

      .title {
        border-radius: 27px;
        padding: 0 20px;
        line-height: 54px;
        font-size: 28px;
        background: #292c55;
        color: #fff;
        box-shadow: 0 4px 10px rgba(41, 44, 85, 0.28);
        position: absolute;
        top: 50px;
        right: 45px;
      }

      .description {
        color: #fff;
        font-size: 20px;
        line-height: 38px;
        position: absolute;
        top: 130px;
        right: 45px;
        max-width: 410px;
      }
    }
  }

  .news-container {
    height: 70px;
    line-height: 70px;
    font-size: 24px;
    color: #333;
    position: relative;
    margin-bottom: 20px;
    padding-left: 110px;
    padding-right: 30px;

    .icon {
      font-size: 18px;
      border-radius: 3px;
      width: 50px;
      height: 26px;
      text-align: center;
      line-height: 30px;
      color: #fff;
      background: #333;
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
    }

    .title {
      float: left;
    }

    .view {
      float: right;
      color: #adadad;

      .iconfont {
        color: #ccc;
      }
    }

    &::after {
      content: "";
      width: 640px;
      height: 1px;
      /* no */
      background: #e5e5e5;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleY(0.5);
    }
  }

  .block-title {
    font-size: 46px;
    color: #333;
    line-height: 110px;
    font-weight: bold;
  }

  .banner-container[home] {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 25px;
  }

  .sgin-box {
    width: 650px;
    height: 800px;
    background: url("../assets/images/home/sign_bg.png") no-repeat;
    background-size: 100%;
    padding: 0 40px;
    padding-top: 265px;

    .sgin-day {
      @include clearfix;

      .item {
        width: 120px;
        margin-right: 30px;
        margin-bottom: 38px;
        height: 140px;
        float: left;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        position: relative;

        .head {
          width: 100%;
          height: 40px;
          line-height: 44px;
          background: #fd2442;
          color: #fff;
          font-size: 22px;
        }

        .pic {
          width: 100%;
          height: 100px;
          padding-top: 15px;
          background: #fff;
        }

        img {
          width: 70px;
          height: 70px;
          object-fit: contain;
        }

        &.end {
          &:after {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: 0.5;
            z-index: 10;
          }

          &:before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 11;
            background: url("../assets/images/home/sgin_mask.png") no-repeat top center;
            background-size: 100% auto;
          }
        }

        &.patch {
          &:after {
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: 0.5;
            z-index: 10;
          }

          &:before {
            display: block;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 11;
            background: url("../assets/images/home/sgin_mask.png") no-repeat bottom center;
            background-size: 100% auto;
          }
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .btn-sgin-comfirm {
      width: 300px;
      height: 80px;
      background: #fed149;
      color: #333;
      line-height: 84px;
      text-align: center;
      font-size: 32px;
      border-radius: 40px;
      position: absolute;
      bottom: 46px;
      left: 50%;
      transform: translateX(-50%);
      @include tapColor;
    }
  }

  .game-entrance {
    width: 100%;
    height: 180px;
    margin-bottom: 20px;
    @include clearfix;

    .item {
      width: 340px;
      height: 100%;
      background: url("../assets/images/home/enter_01.png") no-repeat;
      background-size: 100% auto;
      float: left;

      &:last-child {
        float: right;
        background-image: url("../assets/images/home/enter_02.png");
      }
    }
  }

  .float-icon {
    width: 100px;
    height: 100px;
    background: url("../assets/images/home/float_icon.png") no-repeat;
    background-size: 100% auto;
    background-position: center;
    position: fixed;
    bottom: 300px;
    right: 25px;
    z-index: 150;
  }

  .getbeen-pop {
    width: 600px;
    height: 600px;

    .route-bg {
      width: 100%;
      height: 100%;
      background: url("../assets/images/get_bg.png") no-repeat center;
      background-size: 100% auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      animation: rotation 3s linear infinite;
    }

    .content {
      width: 100%;
      height: 100%;
      z-index: 15;
      position: relative;
      color: #fff;
      text-align: center;
      line-height: 80px;
      font-size: 48px;
      font-weight: bold;

      .goods-img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 300px;
        object-fit: cover;
        transform: translate(-50%, -50%);
      }

      .get-number {
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
  }

  .redactive-pop {
    width: 660px;
    height: 680px;
    background: url("../assets/images/home/red_active.png") no-repeat center top;
    background-size: 100% auto;
    position: relative;

    .content {
      padding: 320px 170px 0 200px;
      color: #fff;
      font-size: 24px;
      line-height: 34px;
    }

    .iconfont {
      position: absolute;
      display: block;
      width: 60px;
      height: 60px;
      line-height: 62px;
      text-align: center;
      color: #fff;
      font-size: 48px;
      right: 0;
      top: 0;
    }

    .btn-play {
      width: 350px;
      height: 80px;
      position: absolute;
      bottom: 40px;
      left: 165px;
      background: #3de6ff;
      text-align: center;
      line-height: 82px;
      border-radius: 40px;
      font-size: 30px;
      @include tapColor;
    }
  }

  .redpack-pop {
    width: 600px;
    height: 700px;

    .close-box {
      width: 100%;
      height: 100%;
      background: url("../assets/images/other/red_close.png") no-repeat;
      background-size: 100% auto;
      padding: 390px 0 0 207px;

      .btn-close {
        width: 80px;
        height: 80px;
        position: absolute;
        right: 0;
        top: 0;
      }

      .btn-open {
        width: 186px;
        height: 186px;
        background: url("../assets/images/other/btn_open.png") no-repeat;
        background-size: 100% auto;
        @include tapColor;
      }

      .text-title {
        position: absolute;
        top: 150px;
        text-align: center;
        width: 100%;
        left: 0;
        font-size: 64px;
        color: #f8d24f;
      }
    }

    .open-box {
      width: 100%;
      height: 100%;
      background: url("../assets/images/other/red_open.png") no-repeat;
      background-size: 100% auto;
      text-align: center;
      padding-top: 160px;
      position: relative;

      .btn-close {
        width: 80px;
        height: 80px;
        position: absolute;
        right: 90px;
        top: 20px;
      }

      .money-text {
        font-size: 100px;
        color: #ea594c;
        line-height: 1;

        span {
          font-size: 24px;
        }
      }

      .center-tip {
        padding-top: 40px;

        img {
          height: 50px;
          width: auto;
        }
      }

      .btn-border {
        width: 240px;
        height: 80px;
        border-radius: 40px;
        position: absolute;
        bottom: 60px;
        line-height: 82px;
        background: #fff5e6;
        box-shadow: 0 6px 0 #fdc1af;
        font-size: 30px;
        @include tapColor;

        &.btn-tixian {
          left: 40px;
          color: #b38456;
        }

        &.btn-fanbei {
          right: 40px;
          color: #e35244;
          background: #f9d455;
          box-shadow: 0 6px 0 #f7a741;
        }
      }
    }
  }

  .skeleton-container[main] {
    position: fixed !important;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 100px !important;
  }
</style>