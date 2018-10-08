<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      波波学院
      <div class="top-tab-nav">
        <div class="item" :class="[selectTab === 0?'active':'']" @click="selectTab = 0">
          新人学院
        </div>
        <div class="item" :class="[selectTab === 1?'active':'']" @click="selectTab = 1">
          高手进阶
        </div>
        <div class="item" :class="[selectTab === 2?'active':'']" @click="selectTab = 2">
          风采展示
        </div>
      </div>
    </template>
    <template slot="content">
      <div class="school-container">
        <swiper :options="swiperOption" ref="mySwiper" class="invite-loop">
          <swiperSlide class="slide-block one">
            <div class="school-item" v-for="i in 10" :key="i" @click="$router.push('/my/school/'+i)">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/news_01.jpg">
              <div class="title">新人手册学习指导</div>
              <div class="time">2018-09-29</div>
            </div>
          </swiperSlide>
          <swiperSlide class="slide-block two">
            <div class="school-item" v-for="i in 10" :key="i" @click="$router.push('/my/school/'+i)">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/news_01.jpg">
              <div class="title">新人手册学习指导</div>
              <div class="time">2018-09-29</div>
            </div>
          </swiperSlide>
          <swiperSlide class="slide-block three">
            <div class="school-item" v-for="i in 10" :key="i" @click="$router.push('/my/school/'+i)">
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/news_01.jpg">
              <div class="title">新人手册学习指导</div>
              <div class="time">2018-09-29</div>
            </div>
          </swiperSlide>
        </swiper>
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
      searchFocus() {
        return this.keyword.length
      },
      swiper() {
        let that = this
        that.$refs.mySwiper.swiper.vue = that
        return this.$refs.mySwiper.swiper
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
  .school-container {
    padding-top: 80px;
  }

  .top-tab-nav {
    position: absolute;
    top: 88px;
    left: 0;
    height: 80px;
    width: 100%;
    background: #fff;
    @include clearfix;
    @include oneB;

    .item {
      width: 33.33%;
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
        padding: 0 10px;
        background: #f0f0f0;
        color: #333;
        display: block;
        line-height: 34px;
        height: 30px;
        top: 22px;
        left: 230px;
        font-size: 18px;
        font-weight: normal;
        border-radius: 5px;
      }

      &.active:after {
        opacity: 1;
      }
    }
  }

  .school-item {
    width: 100%;
    height: 140px;
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
    padding-top: 20px;
    line-height: 55px;
    padding-left: 225px;
    position: relative;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      height: 100%;
      position: absolute;
      display: block;
      left: 0;
      top: 0;
    }

    .title {
      font-size: 34px;
      font-weight: bold;
      color: #333;
    }

    .time {
      font-size: 24px;
      color: #adadad;
    }
  }

  .slide-block {
    padding: 25px 25px;
  }
</style>