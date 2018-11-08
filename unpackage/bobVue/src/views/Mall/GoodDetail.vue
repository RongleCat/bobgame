<template>
  <ThePage color="rgba(255,255,255,.5)" contentBg="#fff" :noHead="true" :showSkeleton="true" :loadDone="loadDone">
    <!-- <template slot="headerContent">
      <div class="good-title">
        Apple iPhone XS Max (A2104) 64GB 金色 移动联通电信4G手机 双卡双待
      </div>
    </template> -->
    <template slot="gujia">
      <div class="item-block h700">
        <div class="item"></div>
      </div>
      <div class="item-img-text h160">
        <div class="pic"></div>
        <div class="text">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="item-block h700">
        <div class="item"></div>
      </div>
    </template>
    <template slot="content">
      <div class="detail-container" v-if="loadDone">
        <div class="btn-back" :style="{top:statusBarHeight}" @click="$router.go(-1)"><i class="iconfont icon-zuo"></i></div>
        <div class="btn-duihuan btn-common">确定兑换</div>
        <div class="guding-block">
          <div class="cover-list" ref="cover">
            <swiper :options="coverOption" ref="pay" class="swiper-cover">
              <swiperSlide v-for="(i,index) in pageData.pics" :key="index">
                <img :src="i | imgUrl">
              </swiperSlide>
            </swiper>
            <div class="cover-pagination"></div>
          </div>
          <div class="detail-info" :class="[pageData.level != '0' && parseInt(pageData.pr.pro_end_time)?'hasvip':'',!parseInt(pageData.pr.pro_end_time)?'nocount':'']">
            <div class="title">{{pageData.pr.prname}}</div>
            <div class="miaoshu">{{pageData.pr.summary}}</div>
            <CountDown class="countdown" :endTime="parseInt(pageData.pr.pro_end_time)*1000" v-if="parseInt(pageData.pr.pro_end_time)"></CountDown>
            <div class="vip-price" v-if="pageData.level != '0'">V{{pageData.level}}享{{pageData.score}}折</div>
            <div class="bean-block">{{realPrice}}</div>
            <div class="cut-price">￥{{pageData.pr.jifen}}</div>
          </div>
          <div class="address-box" v-if="pageData.address">
            <div class="line-one"><span class="name">收货人：{{pageData.address.customer}}</span>{{pageData.address.phone}}</div>
            <div class="line-two">{{pageData.address.area+' '+pageData.address.detail}}</div>
            <div class="btn-change">
              <div class="main"><i class="iconfont icon-edit"></i>更换</div>
            </div>
          </div>
          <div class="address-box" v-else>
            <div class="no-address">
              您还没有添加地址
            </div>
            <div class="btn-change">
              <div class="main"><i class="iconfont icon-add"></i>去添加</div>
            </div>
          </div>
          <div class="long-container">
            <div class="long-title">图文详情</div>
            <div class="content-block" ref="long" v-html="fromatUrl(pageData.pr.descr)"></div>
          </div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import CountDown from "@/components/CountDown.vue"
  // import { Toast } from "vant";
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
          lazyLoading: true,
          autoplay: false,
          watchOverflow:true,
          pagination: {
            el: '.cover-pagination',
            clickable: true,
            bulletClass: "cover-item",
            bulletActiveClass: "cover-item-active"
          }
        },
        loadDone: false,
        pageData: null
      }
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      },
      realPrice() {
        let discount = parseInt(this.pageData.pr.discount)
        let jifen = parseInt(this.pageData.pr.jifen)
        let score = this.pageData.score
        if (discount == 0 || discount == 10) {
          discount = 100
        }
        // Toast(discount + ',' + jifen + ',' + score)
        return Math.ceil(jifen * ((discount * score) / 1000))
      }
    },
    mounted() {
      let that = this
      // console.log(that.$route);
      that.$http.get('/Bobshop/prdetail', {
        params: {
          id: that.$route.params.id
        }
      }).then(r => {
        console.log(r)
        that.pageData = r
        that.loadDone = true
        // Toast(navigator.userAgent.toLowerCase())

        // setTimeout(() => {
        //   let $root = that.$refs.cover
        //   if (window.IntersectionObserver) {
        //     let observer = new IntersectionObserver(that.enter, $root);
        //     $root.querySelectorAll('img').forEach((item) => {
        //       observer.observe(item);
        //     });
        //   } else {
        //     let imgs = $root.querySelectorAll('img')
        //     imgs.forEach(item => {
        //       item.src = item.getAttribute('data-src')
        //     })
        //   }
        // }, 200);


      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      enter(arr) {
        arr.forEach(item => {
          if (item.isIntersecting) {
            item.target.src = item.target.dataset.src
          }
        })
      },
      fromatUrl(html) {
        let _html = html
        _html.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
          _html = _html.replace(new RegExp(capture, 'g'), "http://cdn.bobgame.cn" + capture)
        });
        return _html
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

      .vip-price {
        // float: right;
        position: absolute;
        right: 25px;
        top: 85px;
        height: 30px;
        background: #333;
        color: #fff;
        font-size: 20px;
        background-image: url("../../assets/images/mall/vip_price.png");
        background-size: auto 22px;
        background-repeat: no-repeat;
        background-position-x: 7px;
        background-position-y: center;
        padding-left: 40px;
        padding-right: 10px;
        border-radius: 5px;
      }

      &.hasvip {
        padding-bottom: 100px;

        .bean-block {
          top: 135px;
        }

        .cut-price {
          top: 200px;
        }
      }

      &.nocount {
        .vip-price {
          top: 35px;
        }
      }

    }

    .long-container {
      width: 100%;
      margin-top: 20px;
      background: #fff;

      img {
        min-height: 300px;
        width: 100%;
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

      .no-address {
        height: 115px;
        font-size: 24px;
        line-height: 120px;
      }

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