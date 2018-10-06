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
      <div class="message-icon" :class="{active:showMessageTip}" @click="toggleTip">消息</div>
      <div class="message-icon card-icon" :class="{active:showMessageTip}" @click="toggleTip">月卡</div>
    </div>
    <div class="view-block">
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
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="news-container">
            <div class="icon">公告</div>
            <div class="title">平台政策汇总</div>
            <div class="view">立即查看
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="block-title">竞技游戏</div>
          <div class="jingji-game-list">
            <div class="item" v-for="item in homeData.sportsGames" :key="item.id" :style="{'background-image':`url(${createImgUrl(item.cover,'bg')})`}">
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

          <div class="float-icon"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import { mapState } from "Vuex";
  export default {
    components: { swiper, swiperSlide },
    data() {
      return {
        title: "首页",
        showMessageTip: true,
        headHeight: 136,
        sginView: false,
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
      ...mapState(['homeData'])
    },
    mounted() {
      let that = this;
      // console.log(that);
      setTimeout(() => {
        that.sginView = true
      }, 1000);
    },
    beforeCreate() {
      let that = this;
      that.$atApp(() => {
        window.plus.navigator.setStatusBarStyle('dark');
      })

      if (that.$store.state.homeData) {
        setTimeout(() => {
          that.reqDone = true
        }, 400);
        return false;
      }
      this.$http.get("/Index/index.html").then(r => {
        setTimeout(() => {
          that.reqDone = true
          // if (r.data.) {

          // }
        }, 400);
        that.$store.commit('setHomeData', r.data);
      });
    },
    methods: {
      toggleTip() {
        this.showMessageTip = !this.showMessageTip;
        window.localStorage.removeItem("token");
        this.$http.defaults.headers.get["Authorization"] = null;
      },
      createImgUrl(value, type) {
        if (!value && type === "icon") {
          return "http://cdn.bobgame.cn/Uploads/Picture/2018-09-03/5b8cffbd19ea4.png";
        } else if (!value && type === "bg") {
          return "http://cdn.bobgame.cn/Uploads/Picture/2018-09-03/5b8cffdd66fec.png";
        } else {
          return "http://cdn.bobgame.cn" + value;
        }
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
        background-image: url('../assets/images/home/icon_m.png');
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
    background: url('../assets/images/home/sign_bg.png') no-repeat;
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
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: .5;
            z-index: 10;
          }

          &:before {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 11;
            background: url('../assets/images/home/sgin_mask.png') no-repeat top center;
            background-size: 100% auto;
          }
        }

        &.patch {
          &:after {
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: .5;
            z-index: 10;
          }

          &:before {
            display: block;
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 11;
            background: url('../assets/images/home/sgin_mask.png') no-repeat bottom center;
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
      background: url('../assets/images/home/enter_01.png') no-repeat;
      background-size: 100% auto;
      float: left;

      &:last-child {
        float: right;
        background-image: url('../assets/images/home/enter_02.png');
      }
    }
  }

  .float-icon {
    width: 100px;
    height: 100px;
    background: url('../assets/images/home/float_icon.png') no-repeat;
    background-size: 100% auto;
    background-position: center;
    position: fixed;
    bottom: 300px;
    right: 25px;
    z-index: 150;
  }
</style>