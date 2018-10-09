<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      我的权益
    </template>
    <template slot="content">
      <div class="power-container">
        <div class="main-block">
          <div class="top-card-box">
            <swiper :options="cardOption" ref="card" class="swiper-card">
              <swiperSlide v-for="(i,index) in 6" :key="i">
                <div class="card-item" :class="['card-'+index]">
                  <div class="label-vip" :class="['vip-'+index]">{{vipName[index]}}</div>
                </div>
              </swiperSlide>
              <div class="card-pagination" slot="pagination"></div>
            </swiper>
            <div class="my-level-box">
              <i class="iconfont icon-huangguan"></i>
              您当前的等级是：V0达人
              <p>月卡到期后，会员权益除了提现外都能保留。</p>
            </div>
          </div>
          <swiper :options="contentOption" ref="content" class="swiper-content">
            <swiperSlide>
              <div class="content-v0">
                
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="content-v1">
                <div class="month-power">
                  <div class="btn-getbeen">立即领取</div>
                </div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="content-v2">
                <div class="month-power">
                  <div class="btn-getbeen">立即领取</div>
                </div>
              </div>
            </swiperSlide>
          </swiper>
        </div>
        <div class="bottom-bar">
          <swiper :options="payOption" ref="pay" class="swiper-pay">
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
            </swiperSlide>
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
            </swiperSlide>
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/my_banner.png" alt="">
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  let cardInit = false,
    contentInit = false,
    payInit = false
  export default {
    data() {
      return {
        vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"],
        cardOption: {
          loop: false,
          spaceBetween: 28 / 75 * window.rem,
          centeredSlides: true,
          slidesPerView: 1.15,
          pagination: {
            el: ".card-pagination",
            clickable: true,
            bulletClass: "card-item",
            bulletActiveClass: "card-item-active"
          },
          on: {
            init() {
              setTimeout(() => {
                cardInit = true
              }, 100);
            },
            slideChange() {
              if (!cardInit) {
                return false
              }
              this.vue.contentSwiper.slideTo(this.activeIndex)
              this.vue.paySwiper.slideTo(this.activeIndex)
            }
          }
        },
        contentOption: {
          loop: false,
          spaceBetween: 10,
          autoHeight: true,
          on: {
            init() {
              setTimeout(() => {
                contentInit = true
              }, 100);
            },
            slideChange() {
              if (!contentInit) {
                return false
              }
              this.vue.cardSwiper.slideTo(this.activeIndex)
              this.vue.paySwiper.slideTo(this.activeIndex)
            }
          }
        },
        payOption: {
          loop: false,
          spaceBetween: 10,
          on: {
            init() {
              setTimeout(() => {
                payInit = true
              }, 100);
            },
            slideChange() {
              if (!payInit) {
                return false
              }
              this.vue.contentSwiper.slideTo(this.activeIndex)
              this.vue.cardSwiper.slideTo(this.activeIndex)
            }
          }
        }
      }
    },
    computed: {
      cardSwiper() {
        let that = this
        that.$refs.card.swiper.vue = that
        return that.$refs.card.swiper
      },
      contentSwiper() {
        let that = this
        that.$refs.content.swiper.vue = that
        return that.$refs.content.swiper
      },
      paySwiper() {
        let that = this
        that.$refs.pay.swiper.vue = that
        return that.$refs.pay.swiper
      }
    },
    mounted() {
      this.cardSwiper
      this.contentSwiper
      this.paySwiper
    }
  }
</script>

<style lang="scss" scoped>
  .power-container {
    width: 100%;
    height: 100%;
    padding-bottom: 120px;

    .top-card-box {
      background: #fff;
      padding-top: 45px;
      margin-bottom: 15px;

      .swiper-card {
        padding-bottom: 50px;
      }

      .my-level-box {
        line-height: 44px;
        padding-left: 70px;
        position: relative;
        font-size: 30px;
        padding-top: 25px;
        padding-bottom: 35px;

        .iconfont {
          position: absolute;
          font-size: 36px;
          left: 26px;
          top: 25px;
          line-height: 40px;
        }

        p {
          font-size: 24px;
          color: #adadad;
        }
      }
    }

    .main-block {
      height: 100%;
      width: 100%;
      overflow-y: auto;
    }

    .bottom-bar {
      height: 120px;
      position: fixed;
      width: 100%;
      bottom: 0;
    }

    .card-item {
      width: 650px;
      height: 300px;
      background-image: url('../../assets/images/my/card_4.png');
      background-size: 100% auto;
      position: relative;

      @for $i from 0 through 4 {
        &.card-#{$i} {
          background-image: url('../../assets/images/my/card_#{$i}.png');
        }
      }
    }

    .label-vip {
      height: 40px;
      background-position: left center;
      background-size: auto 100%;
      background-color: #333;
      color: #fff;
      padding-left: 50px;
      padding-right: 8px;
      line-height: 42px;
      font-size: 24px;
      position: absolute;
      border-radius: 5px;
      right: 30px;
      top: 30px;
    }

    .month-power {
      height: 150px;
      background: #fff url('../../assets/images/my/been_pack.jpg') no-repeat;
      background-size: auto 90px;
      background-position: 45px center;
      margin-bottom: 15px;
      padding-left: 175px;
    }
  }
</style>