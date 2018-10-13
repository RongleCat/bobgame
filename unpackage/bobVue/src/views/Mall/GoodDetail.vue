<template>
  <ThePage color="rgba(255,255,255,.5)" contentBg="#fff" :noHead="true">
    <!-- <template slot="headerContent">
      <div class="good-title">
        Apple iPhone XS Max (A2104) 64GB 金色 移动联通电信4G手机 双卡双待
      </div>
    </template> -->
    <template slot="content">
      <div class="detail-container">
        <div class="btn-back" :style="{top:statusBarHeight}" @click="$router.go(-1)"><i class="iconfont icon-zuo"></i></div>
        <div class="btn-duihuan btn-common">确定兑换</div>
        <div class="guding-block">
          <div class="cover-list" ref="cover">
            <swiper :options="coverOption" ref="pay" class="swiper-cover">
              <swiperSlide v-for="i in 12" :key="i">
                <img :data-src="`https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/detail/detail_${i}.jpg`">
              </swiperSlide>
            </swiper>
            <div class="cover-pagination"></div>
          </div>
          <div class="detail-info">
            <div class="title">Apple 苹果 iPhone X 全面屏手机 深空灰色 全网通 64GB 【原封国行正品】下单送全屏钢化膜+保护壳套装 加80元得无线充 苹果8 Plus低价抢购</div>
            <div class="miaoshu">USB车载充电器 万能手机车载充电器，几乎什么都能充。</div>
            <CountDown class="countdown" endTime="2018-10-18 12:00:00"></CountDown>
            <div class="bean-block">222222222</div>
            <div class="cut-price">￥10588.00</div>
          </div>
          <div class="address-box">
            <div class="line-one"><span class="name">收货人：吴先生</span>180****8858</div>
            <div class="line-two">浙江省杭州市滨江区建业路511号华业大厦2503室浙江省杭州市滨江区建业路511号华业大厦2503室浙江省杭州市滨江区建业路511号华业大厦2503室</div>
            <div class="btn-change">
              <div class="main"><i class="iconfont icon-edit"></i>更换</div>
            </div>
          </div>
          <div class="long-container">
            <div class="long-title">图文详情</div>
            <div class="content-block" ref="long">
              <img v-for="i in 20" :key="i" v-lazy="`https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/detail/detail_long_${i}.jpg`">
            </div>
          </div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import CountDown from "@/components/CountDown.vue";
  export default {
    components: {
      CountDown
    },
    data() {
      return {
        coverOption: {
          loop: true,
          spaceBetween: 0,
          preloadImages: false,
          pagination: {
            el: '.cover-pagination',
            clickable: true,
            bulletClass: "cover-item",
            bulletActiveClass: "cover-item-active"
          }
        }
      }
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      }
    },
    mounted() {
      let that = this
      let $root = that.$refs.cover
      if (window.IntersectionObserver) {
        let observer = new IntersectionObserver(this.enter, $root);

        $root.querySelectorAll('img').forEach((item) => {
          observer.observe(item);
        });
      } else {
        $root.querySelectorAll('img').forEach(item => {
          item.target.src = item.target.dataset.src
        })
      }
    },
    methods: {
      enter(arr) {
        arr.forEach(item => {
          if (item.isIntersecting) {
            item.target.src = item.target.dataset.src
          }
          console.log(item);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 100px;

    .btn-back {
      color: #fff;
      width: 100px;
      height: 100px;
      padding: 25px;
      position: fixed;
      left: 0;
      z-index: 100;

      .iconfont {
        display: block;
        width: 50px;
        height: 50px;
        background: rgba(48, 48, 48, .5);
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
      }
    }

    .btn-duihuan {
      position: fixed;
      bottom: 0;
      border-radius: 0;
      font-size: 30px;
    }

    .guding-block {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      background: #f0f0f0;
    }

    .cover-list {
      background: #fff;
      position: relative;

      img {
        width: 100vw;
        height: 100vw;
        object-fit: cover;
      }
    }

    img {
      max-width: 100%;
      display: block;
    }

    .detail-info {
      margin-top: 20px;
      min-height: 200px;
      background: #fff;
      padding-bottom: 25px;
      padding-top: 20px;
      padding-right: 270px;
      padding-left: 25px;
      position: relative;

      .title {
        font-size: 30px;
        line-height: 36px;
        padding-bottom: 25px;
      }

      .miaoshu {
        font-size: 24px;
        color: #adadad;
        line-height: 40px;

      }

      .countdown {
        position: absolute;
        top: 25px;
        right: 25px;
      }

      .bean-block {
        height: 44px;
        background-color: #f5f5f5;
        border-radius: 22px;
        color: #333;
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
        position: absolute;
        top: 85px;
        right: 25px;
        font-style: italic;
      }

      .cut-price {
        position: absolute;
        right: 25px;
        top: 145px;
        color: #adadad;
        display: block;
        font-size: 24px;
        line-height: 1;
        padding-right: 10px;

        &:before {
          display: block;
          content: '';
          position: absolute;
          background: #e93539;
          width: 100%;
          height: 1px;
          top: 10px;
          left: 0;
          right: 0;
        }
      }

    }

    .long-container {
      width: 100%;
      margin-top: 20px;
      background: #fff;

      img {
        min-height: 300px;
      }

      .long-title {
        font-size: 34px;
        line-height: 80px;
        height: 80px;
        position: relative;
        padding-left: 30px;

        &:before {
          display: block;
          content: '';
          width: 20px;
          height: 30px;
          background: #333;
          transform: skew(-10deg, 0);
          position: absolute;
          left: -8px;
          top: 25px;
        }
      }
    }

    .address-box {
      width: 100%;
      min-height: 150px;
      margin-top: 20px;
      background: #fff url('../../assets/images/my/bar_line.jpg') repeat-x center bottom;
      background-size: auto 10px;
      position: relative;
      padding: 0 25px;
      padding-top: 10px;
      padding-bottom: 25px;
      padding-right: 150px;

      .line-one {
        font-size: 24px;
        line-height: 55px;

        .name {
          padding-right: 54px;
          font-weight: bold;
        }
      }

      .line-two {
        font-size: 24px;
        line-height: 1.2;
        padding: 5px 0;
      }

      .btn-change {
        width: 140px;
        right: 0;
        top: 0;
        bottom: 10px;
        @include tapMask;
        position: absolute;

        .main {
          height: 30px;
          font-size: 24px;
          color: #adadad;
          line-height: 30px;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          text-align: center;
          transform: translateY(-50%);

          .iconfont {
            font-size: 30px;
            vertical-align: -3px;
          }
        }
      }
    }
  }
</style>