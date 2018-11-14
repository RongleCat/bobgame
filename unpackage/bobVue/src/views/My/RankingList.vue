<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      排行榜
    </template>
    <template slot="content">
      <div class="rank-container">
        <div class="rank-head">
          <div class="center-tip">
            两个黄鹂鸣翠柳，你连榜单都没有
          </div>
          <div class="top-nav">
            <div class="item" :class="[selectTab === 0?'active':'']" @click="selectTab = 0">总榜</div>
            <div class="item" :class="[selectTab === 1?'active':'']" @click="selectTab = 1">周榜</div>
          </div>
        </div>
        <div class="rank-list">
          <swiper :options="swiperOption" ref="taskSwiper" class="invite-loop">
            <swiperSlide class="slide-block one">
              <div class="rank-item" :class="[i<=3?`rank-${i}`:'']" v-for="i in 20" :key="i">
                <div class="rank-num" :data-rank="i"></div>
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="rank-name">曹铁柱铁柱磨成针ssssssssssssssssssss<span class="vip-0" :class="[`vip-${i%6}`]"></span></div>
                <div class="bean-block">222222222</div>
              </div>
            </swiperSlide>
            <swiperSlide class="slide-block two">
              <div class="rank-item" :class="[i<=3?`rank-${i}`:'']" v-for="i in 20" :key="i">
                <div class="rank-num" :data-rank="i"></div>
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                <div class="rank-name">曹铁柱铁柱磨成针ssssssssssssssssssss<span class="vip-0" :class="[`vip-${i%6}`]"></span></div>
                <div class="bean-block">222222222</div>
              </div>
            </swiperSlide>
          </swiper>
        </div>
        <div class="rank-foot">
          <div class="top-tip">
            <div class="my-rank">我的排名</div>
            距离上榜还差：951287金豆
          </div>
          <div class="rank-item">
            <div class="rank-num" :data-rank="10086"></div>
            <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
            <div class="rank-name">曹铁柱铁柱磨成针ssssssssssssssssssss<span class="vip-0"></span></div>
            <div class="bean-block">222222222</div>
          </div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        selectTab: 0,
        swiperOption: {
          loop: false,
          autoHeight: true,
          on: {
            slideChange() {
              this.vue.selectTab = this.activeIndex
            }
          }
        }
      }
    },
    computed: {
      swiper() {
        let that = this
        that.$refs.taskSwiper.swiper.vue = that
        return this.$refs.taskSwiper.swiper
      }
    },
    watch: {
      selectTab(newValue) {
        this.swiper.slideTo(newValue)
      }
    },
    mounted() {
      //调用自动计算
      this.swiper
    },
    activated() {
      this.$http.get('/Rank/index').then(r => {
        if (r) {
          console.log(r);
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .rank-container {
    position: relative;
    height: 100%;
    padding-top: 346px;
    padding-bottom: 180px;
  }

  .rank-foot {
    height: 170px;
    width: 100%;
    background: #fff;
    position: absolute;
    bottom: 0;

    .rank-item {
      bottom: -60px;
    }

    .top-tip {
      height: 60px;
      position: absolute;
      top: 0;
      width: 100%;
      line-height: 52px;
      text-align: right;
      padding-right: 25px;
      color: #adadad;

      .my-rank {
        width: 136px;
        text-align: center;
        color: #fff;
        line-height: 52px;
        height: 50px;
        background: #ff6736;
        position: absolute;
        top: 0;
        left: 20px;
        border-radius: 0 0 10px 10px;
      }
    }
  }

  .rank-head {
    width: 100%;
    height: 346px;
    background: url('../../assets/images/my/rank_bg.jpg') no-repeat top center;
    background-size: 100% auto;
    position: absolute;
    top: 0;
    padding-top: 170px;

    .center-tip {
      font-size: 24px;
      color: #b4d6f9;
      padding-left: 55px;
      line-height: 48px;
    }

    .top-nav {
      width: 100%;
      height: 80px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(48, 90, 213, .2);
      @include clearfix;

      .item {
        width: 50%;
        height: 80px;
        float: left;
        color: #fff;
        text-align: center;
        line-height: 82px;
        font-size: 24px;
        position: relative;

        &:after {
          content: '';
          display: block;
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #fff transparent;
          opacity: 0;
          // transition: opacity .2s;
        }

        &.active {
          font-size: 30px;
          font-weight: bold;

          &:after {
            opacity: 1;
          }
        }
      }
    }
  }

  .rank-list {
    height: 100%;
    width: 100%;
    overflow-y: auto;
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
    float: left;
  }

  .rank-item {
    width: 100%;
    height: 110px;
    background: #fff;
    position: relative;
    padding-left: 210px;
    @include oneB;

    &:last-child {
      &::before {
        display: none;
      }
    }

    .rank-num {
      width: 70px;
      height: 70px;
      text-align: center;
      line-height: 72px;
      position: absolute;
      top: 20px;
      left: 25px;

      &:after {
        content: attr(data-rank);
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 72px;
        font-size: 30px;
        font-weight: bold;
        color: #ff6736;
      }
    }

    @for $i from 1 through 3 {
      &.rank-#{$i} {
        .rank-num {
          background: url('../../assets/images/my/rank_#{$i}.png') no-repeat center;
          background-size: auto 40px;

          &:after {
            display: none;
          }
        }
      }
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      position: absolute;
      left: 120px;
      top: 20px;
    }

    .bean-block {
      position: absolute;
      right: 25px;
      top: 33px;
    }

    .rank-name {
      height: 110px;
      line-height: 112px;
      max-width: 280px;
      padding-right: 36px;
      position: relative;
      float: left;
      font-size: 24px;
      font-weight: bold;
      @include textof;

      span {
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
        top: 43px;
        background-size: 100%;
        border-radius: 5px;
      }
    }
  }
</style>