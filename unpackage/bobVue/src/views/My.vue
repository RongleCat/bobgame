<template>
  <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
    <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}"></div>
    <div class="header-block common-header" my :style="{top:statusBarHeight}">
      我的
    </div>
    <div class="view-block" my>
      <div class="head-container" :class="[`isvip-${vipLevel}`]" my>
        <div class="card-block">
          <img :src="headUrl" class="user-head" @click="go('mysettings')">
          <h3 class="user-name" @click="go('mysettings')">{{userInfo.nickname}}
            <div class="vip-label" :class="[`vip-${vipLevel}`]">{{vipName[vipLevel]}}</div>
          </h3>
          <div class="user-id" @click="go('mysettings')">ID:Wx_56598566</div>
          <div class="view-power" @click="go('mypower/1')">查看权益<i class="iconfont icon-you"></i></div>
          <div class="level-exp">
            已累计经验值：100000/100000
            <div class="tip-icon">
              <i class="iconfont icon-wenhaoshi"></i>
            </div>
            <div class="exp-bar">
              <div class="exp-bar-inside" :style="{'width':expValue+'%'}"></div>
            </div>
          </div>
          <div class="card-time" @click="go('mypower/0')">2018-12-21 到期</div>
        </div>
        <div class="my-data">
          <div class="item" @click="go('balance')">
            <div class="data-value">4833.25</div>
            <div class="data-name">余额</div>
          </div>
          <div class="item" @click="go('myinvitation')">
            <div class="tip-box">+1</div>
            <div class="data-value">1333</div>
            <div class="data-name">邀请的伙伴</div>
          </div>
          <div class="item" @click="go('incomenotes')">
            <div class="data-value">0</div>
            <div class="data-name">今日收益</div>
          </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" class="my-container">
          <swiperSlide>
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
          </swiperSlide>
          <swiperSlide>
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
          </swiperSlide>
          <swiperSlide>
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
          </swiperSlide>
          <div class="my-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="bottom-container">
        <div class="my-block icon icon-01 invite-friends">
          <h3 class="block-title">
            邀请好友
          </h3>
          <div class="btn btn-invite" @click="go('share')">立即邀请</div>
        </div>
        <div class="my-block icon icon-02 order-info" :class="[order?'hasorder':'']">
          <h3 class="block-title">
            订单详情
            <span class="view-more" v-if="order" @click="go('orderlist')">查看更多<i class="iconfont icon-you"></i></span>
          </h3>

          <div class="order-item" v-if="order">
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-08-15/5b73f07a78cf72.00191710.jpg">
            <div class="text-block">
              您已中得大奖<br><span>快去领奖吧！</span>
              <div class="btn btn-get" @click="order = !order">前去领奖</div>
            </div>
          </div>
          <div class="no-order" v-if="!order">
            您当前没有任何订单，快去逛逛商城吧
            <div class="btn btn-mall" @click="order = !order">去商城</div>
          </div>
        </div>
        <ul class="my-block nav-list">
          <li class="icon icon-03">
            <h3 class="block-title">
              创建自定义比赛
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-04" @click="go('sgin')">
            <h3 class="block-title">
              签到
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-05" @click="go('task')">
            <h3 class="block-title">
              任务
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-010" @click="go('rankinglist')">
            <h3 class="block-title">
              排行榜
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-06" @click="go('givebean')">
            <h3 class="block-title">
              会员代充
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-07" @click="go('school')">
            <h3 class="block-title">
              波波学院
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-08" @click="go('contactus')">
            <h3 class="block-title">
              联系我们
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
          <li class="icon icon-09" @click="go('mysettings')">
            <h3 class="block-title">
              个人设置
            </h3>
            <i class="iconfont icon-you"></i>
          </li>
        </ul>
        <div class="my-block btn-logout" @click="logout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我的",
      headHeight: 88,
      scrollTop: 0,
      expValue: 60,
      vipLevel: 0,
      swiperOption: {
        loop: true,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".my-pagination",
          clickable: true,
          bulletClass: "my-item",
          bulletActiveClass: "my-item-active"
        }
      },
      // getData:{
      //   img:'http://cdn.bobgame.cn//Uploads/Picture/2018-08-15/5b73f07a78cf72.00191710.jpg'
      // },
      getData: null,
      order: true,
      vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"]
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    statusBarHeight() {
      return this.$store.state.statusBarHeight + "rem";
    },
    setViewPaddingTop() {
      return this.$store.state.statusBarHeight + this.headHeight / 75 + "rem";
    },
    headUrl() {
      let url = this.$store.state.userInfo.head_icon;
      if (/http/g.test(url)) {
        return url;
      } else {
        return "http://cdn.bobgame.cn" + url;
      }
    },
    setHeadOpacity() {
      return this.scrollTop / 200;
    }
  },
  mounted() {},
  beforeCreate() {
    this.$atApp(() => {
      window.plus.navigator.setStatusBarStyle("dark");
    });
  },
  methods: {
    setScrollTop(o) {
      this.$atApp(() => {
        if (this.scrollTop >= 50) {
          window.plus.navigator.setStatusBarStyle("dark");
        } else {
          window.plus.navigator.setStatusBarStyle("light");
        }
      });
      this.scrollTop = o.scrollTop;
    },
    changeBtn() {
      if (this.getData) {
        this.getData = {
          img:
            "http://cdn.bobgame.cn//Uploads/Picture/2018-08-15/5b73f07a78cf72.00191710.jpg"
        };
      } else {
        this.getData = null;
      }
    },
    go(value) {
      this.$router.push("/my/" + value);
    },
    logout() {
      window.localStorage.clear();
      this.$router.replace("/home");
    }
  }
};
</script>

<style lang="scss">
.view-block[my] {
  background-color: #f0f0f0;

  .btn {
    width: 180px;
    height: 60px;
    background: #ffce49;
    color: #333;
    border-radius: 30px;
    text-align: center;
    line-height: 62px;
    font-size: 26px;
    @include tapColor;
  }

  .icon {
    position: relative;

    @for $i from 1 through 10 {
      &.icon-0#{$i} {
        &::after {
          background-position-y: ($i - 1) * -64px;
        }
      }
    }

    &::after {
      display: block;
      position: absolute;
      top: 18px;
      left: 20px;
      content: "";
      width: 64px;
      height: 64px;
      background-image: url("../assets/images/my/icon_list.jpg");
      background-repeat: no-repeat;
      background-size: 64px auto;
    }
  }
}

.header-block[my] {
  height: 88px;
  position: absolute;
  left: 0;
  right: 0;
  background: #f2f2f2;
  z-index: 10;
  padding: 0;
  color: #333;
}

.head-container {
  background-repeat: no-repeat;
  background-size: 100% auto, 100% 650px;
  padding: 0 25px;
  padding-top: 40px;
  width: 100%;
  height: 650px;
  margin-bottom: 30px;
  background-image: url("../assets/images/my/vip_4.png"),
    linear-gradient(0, #fff 100%, #fff 0);

  @for $i from 0 through 4 {
    &.isvip-#{$i} {
      background-image: url("../assets/images/my/vip_#{$i}.png"),
        linear-gradient(0, #fff 100%, #fff 0);
    }
  }
}

.card-block {
  width: 100%;
  height: 300px;
  position: relative;

  .user-head {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    top: 30px;
    left: 30px;
    position: absolute;
  }

  .user-name {
    font-size: 30px;
    line-height: 1;
    font-weight: bold;
    color: #333;
    position: absolute;
    line-height: 35px;
    top: 35px;
    left: 120px;
    transform: translateY(-5px);

    .vip-label {
      display: inline-block;
      font-size: 16px;
      color: #fff;
      background-color: #333;
      height: 30px;
      padding-left: 40px;
      padding-right: 10px;
      line-height: 32px;
      background-size: auto 100%;
      vertical-align: 7px;
      border-radius: 5px;
    }
  }

  .user-id {
    font-size: 24px;
    color: #333;
    line-height: 1;
    position: absolute;
    top: 75px;
    left: 120px;
    line-height: 35px;
    opacity: 0.5;
  }

  .card-time {
    position: absolute;
    right: 30px;
    top: 70px;
    line-height: 34px;
    font-size: 24px;
    color: #333;
    opacity: 0.5;
  }

  .view-power {
    width: 160px;
    height: 56px;
    color: #fff;
    background: #333;
    position: absolute;
    bottom: 35px;
    right: 30px;
    border-radius: 30px;
    text-align: center;
    font-size: 22px;
    line-height: 56px;
    padding-left: 5px;
    @include tapColor;

    .iconfont {
      font-size: 24px;
      vertical-align: -1px;
    }
  }

  .level-exp {
    width: 310px;
    height: 56px;
    position: absolute;
    font-size: 20px;
    color: #333;
    left: 30px;
    bottom: 35px;

    .tip-icon {
      width: 56px;
      height: 56px;
      position: absolute;
      right: -70px;
      top: 30%;
      text-align: center;
      line-height: 56px;

      .iconfont {
        font-size: 28px;
        color: #333;
        opacity: 0.8;
      }
    }

    .exp-bar {
      width: 100%;
      height: 10px;
      position: absolute;
      bottom: 0;
      background: #bcbfc4;

      .exp-bar-inside {
        background: #333;
        height: 100%;
      }
    }
  }
}

.my-data {
  @include clearfix;

  .item {
    padding-top: 40px;
    width: 33.33%;
    height: 160px;
    float: left;
    text-align: center;
    position: relative;

    .tip-box {
      height: 30px;
      line-height: 32px;
      padding: 0 15px;
      color: #fff;
      background: #ff5948;
      border-radius: 3px;
      position: absolute;
      font-size: 18px;
      left: 160px;
      top: 20px;

      &:after {
        display: block;
        content: "";
        position: absolute;
        bottom: -6px;
        left: 8px;
        width: 0;
        height: 0;
        border-width: 0 0 6px 6px;
        border-style: solid;
        border-color: transparent transparent transparent #ff5948;
      }
    }

    .data-value {
      line-height: 50px;
      color: #333;
      font-size: 36px;
      font-weight: bold;
    }

    .data-name {
      line-height: 40px;
      color: #adadad;
    }
  }
}

.my-container {
  height: 150px;

  .swiper-slide {
    height: 120px;
  }

  .my-pagination {
    position: absolute;
    bottom: 10px !important;
    text-align: center;

    .my-item {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: #ccc;
      transition: all 0.2s;
      margin-left: 6px;

      &.my-item-active {
        background: #333;
        width: 30px;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }
}

.my-block {
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 30px;
  overflow: hidden;

  h3 {
    font-size: 32px;
    color: #333;
    line-height: 100px;
    padding-left: 95px;
    position: relative;
  }
}

.bottom-container {
  padding: 0 25px;

  .nav-list {
    li {
      width: 100%;
      height: 100px;

      .iconfont {
        font-size: 36px;
        color: #666;
        position: absolute;
        line-height: 100px;
        bottom: 0;
        right: 30px;
      }

      &:active {
        background: #fafafa;
      }

      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        /* no */
        position: absolute;
        bottom: 0;
        background: #f0f0f0;
        transform: scaleY(0.5);
      }

      &:last-child {
        &::before {
          display: none;
        }
      }
    }
  }
}

.btn-logout {
  height: 100px;
  line-height: 106px;
  font-size: 34px;
  color: #333;
  text-align: center;
  padding-left: 30px;
  font-weight: bold;
  background-image: url("../assets/images/my/exit.png");
  background-repeat: no-repeat;
  background-size: 28px auto;
  background-position: 260px center;

  &:active {
    background-color: #fafafa;
  }
}

.invite-friends {
  height: 210px;

  .btn-invite {
    position: absolute;
    top: 90px;
    right: 25px;
  }
}

.order-info {
  &.hasorder {
    h3:active {
      background-color: #fafafa;
    }
  }

  .view-more {
    position: absolute;
    font-weight: normal;
    line-height: 100px;
    top: 0;
    right: 25px;
    font-size: 22px;
    color: #999;

    .iconfont {
      font-size: 22px;
    }
  }

  .order-item {
    padding: 10px 25px 28px 150px;
    position: relative;

    img {
      width: 100px;
      height: 100px;
      border: 1px solid #e5e5e5;
      object-fit: cover;
      position: absolute;
      top: 10px;
      left: 28px;
    }

    .text-block {
      height: 100px;
      color: #333;
      font-size: 30px;
      padding-top: 18px;
      line-height: 32px;
      position: relative;

      span {
        color: #d0d0d0;
        font-size: 20px;
      }
    }

    .btn-get {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}

.no-order {
  font-size: 20px;
  color: #999;
  padding: 0 25px 28px 28px;
  position: relative;

  .btn-mall {
    position: absolute;
    right: 25px;
    bottom: 28px;
  }
}
</style>