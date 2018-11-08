<template>
  <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
    <div class="statusBar" :style="{height:statusBarHeight}"></div>
    <div class="head-block" mall :style="{top:statusBarHeight}">
      <div class="user-info" @click="$router.push('/my/recharge')">
        {{userInfo.jifen}}
        <img :src="headUrl" alt="" class="head-img">
        <div class="iconfont icon-add"></div>
      </div>
      <div class="my-order" @click="$router.push('/my/orderlist')">我的订单</div>
    </div>
    <div class="view-block" ref="scrollMain" v-scrollfix>
      <transition name="fade-in">
        <div class="skeleton-container" v-if="!reqDone" :style="{top:statusBarHeight}">
          <div class="item-img-text h70">
            <div class="pic"></div>
            <div class="text y-center">
              <div class="item h80 w50"></div>
            </div>
            <div class="text right y-center">
              <div class="item h80 w50"></div>
            </div>
          </div>
          <div class="item-block h320">
            <div class="item"></div>
          </div>
          <div class="item-block h160">
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="item-img-text h180">
            <div class="pic"></div>
            <div class="text">
              <div class="item w60"></div>
              <div class="item w40"></div>
              <div class="item w90"></div>
            </div>
          </div>
          <div class="item-img-text h180">
            <div class="pic"></div>
            <div class="text">
              <div class="item w50"></div>
              <div class="item w80"></div>
              <div class="item w60"></div>
            </div>
          </div>
          <div class="item-img-text h180">
            <div class="pic"></div>
            <div class="text">
              <div class="item w80"></div>
              <div class="item w60"></div>
              <div class="item w90"></div>
            </div>
          </div>
          <div class="item-block h320">
            <div class="item"></div>
          </div>
        </div>
      </transition>
      <transition name="fade-in">
        <div class="content-container" v-if="reqDone">
          <!-- 轮播图 -->
          <div class="banner-container" mall>
            <swiper :options="swiperOption" ref="mySwiper" class="mall-loop">
              <swiperSlide v-for="(item,key,index) in mallData.swipper" :key="index">
                <img v-lazy="createUrl(item.rollpic)" alt="">
              </swiperSlide>
              <div class="swiper-pagination mall-page" slot="pagination"></div>
            </swiper>
          </div>
          <!-- 抽奖页面 -->

          <div class="lottery-block">
            <div class="item" @click="$router.push('/mall/lottery')" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/mall_btn_0.png')`}"></div>
            <div class="item" @click="$router.push('/mall/goodsearch/0_all')" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/mall_btn_1.png')`}"></div>
          </div>
          <!-- 限时兑换 -->
          <template v-if="mallData.timelimit.length">
            <div class="block-title">限时兑换</div>
            <div class="time-get-list">
              <div class="item" v-for="(item,index) in mallData.timelimit" :key="index" @click="$router.push('/mall/gooddetail/'+item.id)">
                <img :src="item.img | imgUrl | ossResize(calcSize(180))">
                <div class="title">{{item.prname}}</div>
                <div class="bean-block">{{item.jifen}}</div>
                <CountDown :endTime="item.pro_end_time | dateFormat" @end="window.location.reload()"></CountDown>
                <div class="left-count">剩余 {{item.initstore}}/{{item.store}}</div>
              </div>
            </div>
          </template>

          <!-- 商品分类 -->
          <MallGoodsGroup v-for="(item,index) in mallData.NoSpSaleProduct" :key="index" v-bind="item"></MallGoodsGroup>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
  import CountDown from '@/components/CountDown';
  import MallGoodsGroup from '@/components/MallGoodsGroup';
  import { mapState } from "Vuex";
  // import { Toast } from "vant";
  export default {
    components: { CountDown, MallGoodsGroup },
    data() {
      return {
        title: "商城",
        headHeight: 100,
        // enterLotteryPage: false,
        swiperOption: {
          loop: true,
          watchOverflow: true,
          spaceBetween: 10,
          pagination: {
            el: '.mall-page',
            clickable: true,
            bulletClass: 'mall-pagination',
            bulletActiveClass: 'mall-pagination-active'
          }
        },
        reqDone: false,
        timeList: [{
          title: 'Apple 苹果 iPhone X 全面屏手机深空灰色 全网通 64GB 【原封国行正品】下单送全屏钢化膜+保护壳套装 加80元得无线充 苹果8 Plus低价抢购',
          price: 999999,
          endTime: '2018-10-17 10:09:00',
          count: 50,
          left: 45,
          img: 'http://cdn.bobgame.cn//Uploads/Picture/2018-08-14/5b724956036686.19917269.jpg',
          show: true
        }, {
          title: '微星（MSI）GeForce GTX 1060 GAMING X 6G 1594-1809MHZ GDDR5 192BIT PCI-E 3.0 旗舰红龙 吃鸡显卡',
          price: 999999,
          endTime: '2018-11-20 15:00:00',
          count: 50,
          left: 45,
          img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t18442/74/2071557420/119185/e4e3d236/5ae3f0e5N46bba1d8.jpg',
          show: true
        }, {
          title: '酷冷至尊(CoolerMaster)额定500W MWE500机箱电源(80PLUS铜牌/DCtoDC架构/日系固态电容/静音/台式机电源)',
          price: 999999,
          endTime: '2018-09-20 10:00:00',
          count: 50,
          left: 45,
          img: 'https://img14.360buyimg.com/n1/s450x450_jfs/t5611/82/7427724363/219214/dd6676db/59704e4fN68089350.jpg',
          show: true
        }]
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
      ...mapState(['mallData'])
    },
    // beforeCreate(){},
    mounted() {
      let that = this
      if (that.$store.state.mallData) {
        setTimeout(() => {
          that.reqDone = true
        }, 400);
        return false;
      }
      that.$http.get('/Bobshop/index.html').then(r => {
        setTimeout(() => {
          that.reqDone = true
        }, 400)

        console.log(r);
        that.$store.commit('setMallData', r);
      })
    },
    filters: {
      dateFormat(v) {
        if (!v) {
          return ''
        }
        return new Date(parseInt(v) * 1000)
      }
    },
    beforeCreate() {
      this.$atApp(() => {
        window.plus.navigator.setStatusBarStyle("dark");
        // let web = window.plus.webview.getLaunchWebview();
      });
    },
    methods: {
      closeView() {
        this.enterLotteryPage = false
      },
      createUrl(url) {
        return `http://cdn.bobgame.cn${url}`
      },
      // hideItem(_index) {
      //   this.timeList[_index].show = false;
      // }
    }
  };
</script>

<style lang="scss">
  .head-block[mall] {
    height: 100px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;

    .user-info {
      height: 60px;
      float: left;
      padding-left: 110px;
      position: relative;
      border-radius: 30px;
      overflow: hidden;
      padding-right: 20px;
      background: #f0f0f0;
      font-size: 30px;
      line-height: 65px;
      font-weight: bold;
      background-image: url("../assets/images/bean.png");
      background-size: auto 33px;
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: 70px;

      padding-right: 64px;

      .head-img {
        width: 60px;
        height: 60px;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50%;
      }

      .iconfont {
        position: absolute;
        width: 52px;
        height: 52px;
        right: 4px;
        top: 4px;
        background: #adadad;
        color: #fff;
        border-radius: 50%;
        font-size: 24px;
        text-align: center;
        line-height: 52px;
      }
    }

    .my-order {
      float: right;
      font-size: 28px;
      line-height: 64px;
      height: 60px;
      background: url("../assets/images/icon_order.png") no-repeat;
      padding-left: 40px;
      background-size: 26px auto;
      background-position-y: center;
    }
  }

  .mall-container {
    padding: 25px;
    width: 100%;
  }

  .mall-loop {
    overflow: hidden;
    width: 100%;
    height: 320px;

    //   border-radius: 10px;
    img {
      border-radius: 15px;
      display: block;
    }

    .swiper-slide {
      border-radius: 15px;
      overflow: hidden;
      width: 100%;
    }
  }

  .banner-container[mall] {
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .mall-page {
    text-align: center;
    bottom: 10px;

    .mall-pagination {
      display: inline-block;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #333;
      opacity: .5;
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }

      &.mall-pagination-active {
        opacity: 1;
      }
    }
  }

  .lottery-block {
    width: 100%;
    height: 160px;
    margin-bottom: 20px;
    @include clearfix;

    .item {
      width: 340px;
      height: 160px;
      border-radius: 15px;
      overflow: hidden;
      background: url('../assets/images/mall/btn_cj.png') no-repeat;
      background-size: 100% auto;

      &:first-child {
        float: left;
      }

      &:last-child {
        float: right;
      }
    }
  }

  .block-title {
    font-size: 46px;
    color: #333;
    line-height: 80px;
    font-weight: bold;
  }

  .time-get-list {
    margin-bottom: 10px;

    >.item {
      height: 230px;
      width: 100%;
      position: relative;
      padding-left: 200px;
      padding-top: 38px;

      img {
        width: 180px;
        height: 180px;
        display: block;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 25px;
      }

      .title {
        font-size: 24px;
        color: #333;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 20px;
        line-height: 30px;
      }

      .bean-block {
        display: inline-block;
        height: 36px;
        background-color: #f5f5f5;
        border-radius: 5px;
        color: #333;
        background-image: url("../assets/images/bean.png");
        background-size: auto 24px;
        background-repeat: no-repeat;
        background-position-x: 7px;
        background-position-y: center;
        font-size: 24px;
        padding-left: 40px;
        padding-right: 10px;
        line-height: 38px;
        font-weight: bold;
        margin-bottom: 24px;
      }

      .left-count {
        padding: 0 12px;
        color: #ff9f74;
        background: #ffebd0;
        height: 30px;
        line-height: 32px;
        border-radius: 5px;
        position: absolute;
        right: 0;
        bottom: 50px;
      }

      &::after {
        content: "";
        width: 100%;
        height: 1px;
        /* no */
        background: #e5e5e5;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transform: scaleY(0.5);
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  .skeleton-container {
    position: fixed !important;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 100px !important;
  }
</style>