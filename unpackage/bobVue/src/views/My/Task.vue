<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      任务
    </template>
    <template slot="content">
      <div class="task-container">
        <div class="top-card">
          <div class="card-main">
            <div class="today-activity">今日活跃度：<img src="../../assets/images/my/active_icon.png"> 1000</div>
            <div class="top-tip">每周日24时重置周奖励 <i class="iconfont icon-wenhaoshi"></i></div>
            <div class="today-progress">
              <div class="item get-icon icon-1">30</div>
              <div class="item get-icon icon-2">50</div>
              <div class="item get-icon icon-3">80</div>
              <div class="item get-icon icon-4">100</div>
              <div class="today-bg"></div>
            </div>
            <div class="card-bottom">
              <div class="week-activity">周活跃度：<img src="../../assets/images/my/active_icon.png"> 1000</div>
              <div class="right-get">
                <div class="item">
                  <div class="get-icon icon-5"></div>
                  500<br>可领取
                </div>
                <div class="item">
                  <div class="get-icon icon-6"></div>
                  600<br>可领取
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-tab">
          <div class="tab-nav">
            <div class="item" :class="[selectTab === 0?'active':'']" @click="selectTab = 0">
              日常任务
              <!-- <span>2</span> -->
            </div>
            <div class="item" :class="[selectTab === 1?'active':'']" @click="selectTab = 1">
              成长任务
              <span>4</span>
            </div>
          </div>
          <swiper :options="swiperOption" ref="taskSwiper" class="invite-loop">
            <swiperSlide class="slide-block one">
              <div class="item" v-for="i in 4" :key="i">
                <div class="one-line">每日充值</div>
                <div class="two-line">
                  <div class="get-item">
                    <img src="../../assets/images/my/jindou.png">金豆 × 100
                  </div>
                  <div class="get-item">
                    <img src="../../assets/images/my/active_icon.png">活跃度 × 100
                  </div>
                </div>
                <div class="complete-box">
                  <span>0</span> / 1
                  <div class="btn-complete done">
                    做任务
                  </div>
                </div>
              </div>
            </swiperSlide>
            <swiperSlide class="slide-block two">
              <div class="item" v-for="i in 8" :key="i">
                <div class="one-line">每日充值</div>
                <div class="two-line">
                  <div class="get-item">
                    <img src="../../assets/images/my/jindou.png">金豆 × 100
                  </div>
                  <div class="get-item">
                    <img src="../../assets/images/my/active_icon.png">活跃度 × 100
                  </div>
                </div>
                <div class="complete-box">
                  <span>0</span> / 1
                  <div class="btn-complete ok">
                    做任务
                  </div>
                </div>
              </div>
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: { swiper, swiperSlide },
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
    }
  }
</script>

<style lang="scss" scoped>
  .top-card {
    width: 100%;
    padding: 25px;
    background: #fff;

    .card-main {
      width: 100%;
      height: 310px;
      background: linear-gradient(to right, #97c8eb, #a1bde2);
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      padding: 20px;
      padding-top: 125px;

      .today-activity {
        font-size: 22px;
        color: #fff;
        line-height: 64px;
        height: 60px;
        padding-left: 20px;
        position: absolute;
        top: 0;
        left: 0;

        img {
          width: 20px;
          height: 20px;
          vertical-align: -3px
        }
      }

      .today-progress {
        width: 100%;
        height: 16px;
        border-radius: 16px;
        position: relative;
        background: #afd0ec;

        .today-bg {
          width: 80%;
          height: 100%;
          background: linear-gradient(180deg, #fff071, #f6c641);
          border-radius: 16px;
        }

        .item {
          position: absolute;
          text-align: center;
          color: #fff;
          padding-top: 75px;
          font-size: 22px;
          top: -35px;

          &.icon-1 {
            left: 22%;
          }

          &.icon-2 {
            left: 42%;
          }

          &.icon-3 {
            left: 72%;
          }

          &.icon-4 {
            left: 92%;
          }
        }
      }

      .top-tip {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 64px;
        height: 60px;
        padding-right: 20px;
        color: #cee1f3;

        .iconfont {
          font-size: 24px;
          vertical-align: -1px;
        }
      }

      .card-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 80px;
        width: 100%;
        background: rgba(0, 0, 0, .1);
        @include clearfix;

        .week-activity {
          font-size: 22px;
          color: #c5d8e8;
          line-height: 82px;
          height: 80px;
          padding-left: 20px;
          float: left;

          img {
            width: 20px;
            height: 20px;
            vertical-align: -3px
          }
        }

        .right-get {
          float: right;
          @include clearfix;

          .item {
            width: 160px;
            float: left;
            padding-left: 75px;
            height: 80px;
            position: relative;
            line-height: 28px;
            color: #c8d5e6;
            padding-top: 14px;
            font-size: 22px;

            .get-icon {
              width: 62px;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }

  .today-progress {
    width: 100px;
  }

  .get-icon {
    width: 62px;
    background-image: url('../../assets/images/my/task_pack.png');
    background-repeat: no-repeat;
    background-size: auto 69px;

    @for $i from 1 through 6 {
      &.icon-#{$i} {
        background-position-x: -62px * ($i - 1)
      }
    }
  }

  .bottom-tab {
    margin-top: 20px;
  }

  .tab-nav {
    height: 80px;
    width: 100%;
    background: #fff;
    position: relative;
    @include clearfix;
    @include onePXlineBottom;

    &:before {
      background-color: #f0f0f0;
    }

    .item {
      width: 50%;
      float: left;
      text-align: center;
      position: relative;
      line-height: 80px;
      font-size: 24px;
      font-weight: bold;
      color: #333;

      &:after {
        content: '';
        display: block;
        width: 50px;
        height: 4px;
        background: #ffe035;
        bottom: -1px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        opacity: 0;
      }

      span {
        position: absolute;
        background: #f66;
        text-align: center;
        color: #fff;
        display: block;
        line-height: 28px;
        height: 24px;
        width: 24px;
        top: 22px;
        left: 240px;
        font-size: 16px;
        font-weight: normal;
        border-radius: 50%;
      }

      &.active:after {
        opacity: 1;
      }
    }
  }

  .slide-block {
    width: 100%;
    background: #fff;

    .item {
      width: 100%;
      height: 150px;
      padding-left: 25px;
      padding-top: 25px;
      position: relative;
      padding-right: 170px;

      &:last-child {
        &:before {
          display: none;
        }
      }

      @include onePXlineBottom;

      &:before {
        background-color: #f0f0f0;
      }

      .complete-box {
        width: 120px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 25px;
        height: 100%;
        line-height: 75px;

        span {
          color: #ccc;
        }

        .btn-complete {
          width: 100%;
          height: 56px;
          bottom: 30px;
          line-height: 58px;
          left: 0;
          position: absolute;
          border-radius: 30px;

          &.no {
            @include tapColor;
            background: $by;
            color: #333;
          }

          &.ok {
            @include tapColor;
            background: #ff4758;
            color: #fff;
          }

          &.done {
            background: #f0f0f0;
            color: #ccc;
          }
        }
      }

      .one-line {
        font-size: 30px;
        color: #333;
        line-height: 50px;
      }

      .two-line {
        @include clearfix;

        .get-item {
          float: left;
          font-size: 20px;
          margin-right: 30px;
          line-height: 70px;

          img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-right: 5px;
            vertical-align: -3px;
          }
        }
      }
    }
  }
</style>