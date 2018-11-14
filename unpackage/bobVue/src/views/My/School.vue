<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0" :showSkeleton="true" :loadDone="loadDone">
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
    <template slot="gujia">
      <div class="item-block h80">
        <div class="item"></div>
      </div>
      <div class="item-img-text h140" v-for="i in 10" :key="i">
        <div class="pic"></div>
        <div class="text">
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
        </div>
      </div>
    </template>
    <template slot="content">
      <div class="school-container">
        <swiper :options="swiperOption" ref="mySwiper" class="invite-loop">
          <swiperSlide class="slide-block" v-for="(j,jindex) in 3" :key="j">
            <div class="school-item" v-for="(i,index) in createList(jindex)" :key="index" @click="$router.push('/school/'+i.id)">
              <img :src="i.bgimg | imgUrl | ossResize(calcSize(200))">
              <div class="title">{{i.title}}</div>
              <div class="time">{{i.update_time | fTime}}</div>
            </div>
          </swiperSlide>
        </swiper>
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
        },
        loadDone: false,
        swiper: null,
        pageData: null
      }
    },
    computed: {
      searchFocus() {
        return this.keyword.length
      }
    },
    watch: {
      selectTab(newValue) {
        this.swiper.slideTo(newValue)
      }
    },
    activated() {
      let that = this
      that.$http.get('/Bobschool/index').then(r => {
        if (r) {
          that.pageData = r
          setTimeout(() => {
            that.loadDone = true
          }, 500);
          setTimeout(() => {
            that.swiper = that.$refs.mySwiper.swiper
            that.swiper.vue = that
          }, 500);
        }
      }).catch(err => {
        console.error(err)
      })
    },
    methods: {
      createList(index) {
        if (this.pageData) {
          return this.pageData[index].article
        } else {
          return []
        }
      }
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