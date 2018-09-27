<template>
  <ThePage color="#f2f2f2" @headerHeight="setHeaderHeight" contentBg="#ffffff">
    <template slot="headerContent">
      邀请的伙伴
    </template>
    <template slot="content">
      <div class="invite-container">
        <div class="input-block" @click="$refs.input.focus()">
          <input ref="input" v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入好友昵称" type="text" @focus="isFocus = true" @blur="isFocus = false" />
        </div>
        <div class="tab-nav">
          <div class="item" :class="[selectTab === 0?'active':'']" @click="selectTab = 0">
            有充值
            <!-- <span>2</span> -->
          </div>
          <div class="item" :class="[selectTab === 1?'active':'']" @click="selectTab = 1">
            未充值
            <span>45896</span>
          </div>
        </div>
        <div class="bottom-tip"><i class="iconfont icon-info"></i>邀请的伙伴只有在充值99元后您才能获得收益哦！</div>
        <div class="content-block">
          <swiper :options="swiperOption" ref="mySwiper" class="invite-loop">
            <swiperSlide class="slide-block one">
              <div class="no-data">
                您邀请的好友暂无人充值哦
                <p>快去联系好友充值赚取收益吧</p>
              </div>
            </swiperSlide>
            <swiperSlide class="slide-block two">
              <InviteItem v-for="(i,index) in 10" :key="index" :vip="index"></InviteItem>
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import InviteItem from "@/components/InviteItem.vue";
  export default {
    components: { swiper, swiperSlide, InviteItem },
    data() {
      return {
        keyword: '',
        isFocus: false,
        selectTab: 0,
        swiperOption: {
          loop: false,
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
    methods: {
      setHeaderHeight(value) {
        this.filterTop = value + 100 / 75 + "rem"
        this.topHeight = value
      },
      setFocus() {
        this.isFocus = true
      },
      setBlur() {
        this.isFocus = false
      }
    },
    mounted() {
      console.log(this.swiper);
    }
  }
</script>

<style scoped lang="scss">
  .invite-container {
    width: 100%;
    position: relative;
    padding-top: 170px;
    height: 100%;
    overflow: hidden;

    .tab-nav {
      position: absolute;
      top: 90px;
      left: 0;
      height: 80px;
      width: 100%;
      background: #fff;
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

    .content-block {
      position: absolute;
      top: 170px;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }

    .input-block {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      width: 100%;
      height: 90px;
      padding: 20px 25px;
      padding-top: 0;
      overflow: hidden;
      background: #f0f0f0;

      input {
        border: 0;
        text-align: center;
        display: block;
        width: 100%;
        height: 100%;
        background-image: url("../../assets/images/icon_sousuo.png");
        background-repeat: no-repeat;
        font-size: 28px;
        background-size: 36px auto;
        background-position-y: center;
        background-position-x: 220px;
        background-color: #fff;
        border-radius: 10px;

        &.focus {
          padding-left: 70px;
          text-align: left;
          background-position-x: 20px;
        }
      }
    }
  }

  .invite-loop {
    height: 100%;

    .slide-block {
      min-height: 100%;
      overflow-y: auto;
      padding: 0;
      padding-bottom: 270px;
      position: relative;
    }
  }

  .bottom-tip {
    line-height: 100px;
    text-align: center;
    font-size: 22px;
    color: #a3a3a3;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    .iconfont {
      font-size: 36px;
      padding-right: 10px;
      vertical-align: -7px;
      color: #bbb;
    }

    &+.content-block {
      bottom: 100px;
    }
  }
  .no-data{
    margin-top: 200px;
    font-size: 30px;
    color: #333;
    p{
      font-size: 22px;
      color: #a3a3a3;
      line-height: 50px;
    }
  }
</style>