<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      我的权益
    </template>
    <template slot="content">
      <div class="power-container" :style="{paddingBottom:bottomHeight+'px'}">
        <div class="main-block">
          <div class="main-bg">
            <div class="top-card-box">
              <swiper :options="cardOption" ref="card" class="swiper-card">
                <swiperSlide v-for="(i,index) in 6" :key="i">
                  <div class="card-item" :class="['card-'+index]">
                    <div class="label-vip" :class="['vip-'+index]">{{vipName[index]}}</div>
                    <div class="up-level-label" v-if="index === 2">直升V2送黄金会员卡</div>
                    <div class="up-level-label" v-else-if="index === 3">升级V3送铂金会员卡</div>
                    <div class="up-level-label" v-else-if="index === 4">升级V4送钻石会员卡</div>
                    <div class="up-level-label" v-else-if="index !== 0">剩余15天</div>
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
                  <div class="up-v1" @click="slideTo(1)"></div>
                  <div class="power-list-title">
                    V0达人权益
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v1">
                  <div class="month-power">
                    <div class="title">月卡权益</div>
                    <div class="content">您今日还可领取400金豆</div>
                    <div class="btn-getbeen state-ok">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V1高手权益
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v2">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得3000金豆<br>
                      每日可领取400金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V2大师权益
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v3">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得19800金豆<br>
                      每日可领取2700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V3推广部长权益
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v4">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得64800金豆<br>
                      每日可领取8700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V4总代理权益
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v5">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得64800金豆<br>
                      每日可领取8700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V4+联合创始人
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
            </swiper>
          </div>
        </div>
        <div class="bottom-bar">
          <swiper :options="payOption" ref="pay" class="swiper-pay">
            <swiperSlide>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low" v-if="vipLevel === 0">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>6</span><i>￥99</i></div>
                <div class="btn-up">直升V1高手</div>
              </div>
              <div class="up-low" v-else-if="vipLevel === 1">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>49</span><i>￥1000</i></div>
                <div class="btn-up">直升V2大师</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>49</span><i>￥1000</i></div>
                <div class="btn-up">直升V2大师</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low no-price">
                <div class="btn-up">联系客服升级</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low no-price">
                <div class="btn-up">联系客服升级</div>
              </div>
            </swiperSlide>
            <swiperSlide>
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
    payInit = false;
  export default {
    data() {
      return {
        bottomHeight: 0,
        vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"],
        cardOption: {
          loop: false,
          spaceBetween: (28 / 75) * window.rem,
          centeredSlides: true,
          slidesPerView: 1.15,
          resistanceRatio: 0,
          initialSlide: this.$route.params.vipLevel,
          pagination: {
            el: ".card-pagination",
            clickable: true,
            bulletClass: "card-item",
            bulletActiveClass: "card-item-active"
          },
          on: {
            init() {
              setTimeout(() => {
                cardInit = true;
              }, 100);
            },
            slideChange() {
              if (!cardInit) {
                return false;
              }
              this.vue.contentSwiper.slideTo(this.activeIndex);
              this.vue.paySwiper.slideTo(this.activeIndex);
            }
          }
        },
        contentOption: {
          loop: false,
          spaceBetween: 10,
          autoHeight: true,
          resistanceRatio: 0,
          initialSlide: this.$route.params.vipLevel,
          on: {
            init() {
              setTimeout(() => {
                contentInit = true;
              }, 100);
            },
            slideChange() {
              if (!contentInit) {
                return false;
              }
              this.vue.cardSwiper.slideTo(this.activeIndex);
              this.vue.paySwiper.slideTo(this.activeIndex);
            }
          }
        },
        payOption: {
          loop: false,
          spaceBetween: 10,
          resistanceRatio: 0,
          autoHeight: true,
          initialSlide: this.$route.params.vipLevel,
          on: {
            init() {
              setTimeout(() => {
                payInit = true;
                this.vue.bottomHeight = this.slides[this.realIndex].offsetHeight;
              }, 200);
            },
            slideChange() {
              if (!payInit) {
                return false;
              }
              this.vue.bottomHeight = this.slides[this.realIndex].offsetHeight;
              this.vue.contentSwiper.slideTo(this.activeIndex);
              this.vue.cardSwiper.slideTo(this.activeIndex);
            }
          }
        }
      };
    },
    computed: {
      cardSwiper() {
        let that = this;
        that.$refs.card.swiper.vue = that;
        return that.$refs.card.swiper;
      },
      contentSwiper() {
        let that = this;
        that.$refs.content.swiper.vue = that;
        return that.$refs.content.swiper;
      },
      paySwiper() {
        let that = this;
        that.$refs.pay.swiper.vue = that;
        return that.$refs.pay.swiper;
      },
      vipLevel() {
        return parseInt(this.$route.params.vipLevel)
      }
    },
    watch: {
      // bottomHeight(nv) {
      //   console.log(nv);
      // }
    },
    beforeDestroy() {
      cardInit = contentInit = payInit = false
    },
    mounted() {
      this.cardSwiper;
      this.contentSwiper;
      this.paySwiper;
    },
    methods: {
      slideTo(v) {
        this.cardSwiper.slideTo(v);
      }
    }
  };
</script>

<style lang="scss" scoped>
  $o:#fe6f49;

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
        color: #333;

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
      position: relative;
      z-index: 10;
      background: #fff;

      .main-bg {
        background: #f0f0f0;
      }
    }

    .bottom-bar {
      height: 120px;
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #fff;
    }

    .card-item {
      width: 650px;
      height: 300px;
      background-image: url("../../assets/images/my/card_4.png");
      background-size: 100% auto;
      position: relative;
      border-radius: 15px;
      overflow: hidden;

      @for $i from 0 through 4 {
        &.card-#{$i} {
          background-image: url("../../assets/images/my/card_#{$i}.png");
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

    .up-level-label {
      height: 50px;
      padding: 0 20px;
      background: #333;
      color: #fff;
      line-height: 52px;
      position: absolute;
      bottom: 40px;
      right: 30px;
      border-radius: 15px 0 15px 0;
      overflow: hidden;
    }

    .month-power {
      height: 150px;
      background: #fff url("../../assets/images/my/been_pack.jpg") no-repeat;
      background-size: auto 90px;
      background-position: 45px center;
      margin-bottom: 15px;
      position: relative;
      padding-top: 30px;
      padding-left: 175px;

      .title {
        line-height: 44px;
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
      }

      .content {
        font-size: 22px;
        color: #adadad;
        line-height: 34px;
      }

      &.no-mycard {
        padding-top: 20px;

        .title {
          margin-bottom: 0;
        }
      }

      .btn-getbeen {
        border: 1px solid #ccc;
        color: #ccc;
        height: 60px;
        line-height: 60px;
        width: 160px;
        text-align: center;
        border-radius: 30px;
        position: absolute;
        top: 45px;
        right: 35px;

        &.state-ok {
          border: 1px solid $o;
          color: $o;

          &:active {
            background: #ffe6df;
          }
        }
      }
    }

    .power-list-title {
      line-height: 155px;
      font-size: 34px;
      font-weight: bold;
      padding-left: 35px;
      height: 150px;
      position: relative;
      background: #fff;
      color: #333;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 24px;
        background: #333;
        position: absolute;
        top: 63px;
        left: 0;
      }
    }

    .power-list {
      background: #fff;

      .item {
        position: relative;
        padding-left: 160px;
        padding-right: 60px;
        padding-bottom: 50px;
        min-height: 90px;

        .icon {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 20px;
          background: #efc68e;
          top: 0;
          left: 35px;
        }

        .title {
          font-size: 26px;
          line-height: 1;

          label {
            display: inline-block;
            height: 30px;
            padding: 0 10px;
            background: #333;
            color: #fff;
            font-size: 20px;
            line-height: 32px;
            vertical-align: 2px;
            border-radius: 5px;
            margin-left: 10px;
          }
        }

        .content {
          font-size: 22px;
          line-height: 28px;
          padding-top: 25px;
          color: #adadad;
        }
      }
    }

    .content-v0 {
      width: 100%;
      padding: 25px;
      background: #fff;

      .up-v1 {
        width: 100%;
        height: 180px;
        background: url("../../assets/images/my/up_v1.jpg") no-repeat;
        background-size: 100%;
      }
    }

    .up-low {
      height: 120px;
      position: relative;
      padding: 20px;
      padding-left: 350px;
      background: #fff;
      @include oneT;

      .top-label {
        font-size: 24px;
        color: #fff;
        background: $o;
        height: 40px;
        line-height: 42px;
        font-weight: bold;
        padding: 0 12px;
        position: absolute;
        top: 0;
        left: 25px;
        z-index: 1000;
        border-radius: 0 0 10px 10px;
      }

      .price {
        color: $o;
        font-size: 20px;
        position: absolute;
        bottom: 20px;
        left: 20px;

        span {
          font-size: 36px;
        }

        i {
          font-style: normal;
          color: #cccccc;
          text-decoration: line-through;
          padding-left: 15px;
        }
      }

      .btn-up {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 32px;
        color: #fff;
        background: #333;
        line-height: 80px;
        border-radius: 15px;
        @include tapColor;
      }

      &.no-price {
        padding-left: 20px;
      }
    }
  }
</style>