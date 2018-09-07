<template>
    <div class="one-level-full-page guide-page">
        <div class="btn-skip" :style="{top:paddingTop}" @click="navToHome">跳过</div>
        <swiper :options="swiperOption" ref="mySwiper" class="guide-container">
            <!-- slides -->
            <swiper-slide class="item-01"></swiper-slide>
            <swiper-slide class="item-02"></swiper-slide>
            <swiper-slide class="item-03"></swiper-slide>
            <swiper-slide class="item-04">
                <div class="enter-home" @click="navToHome">
                    开始游戏
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        paddingTop() {
            return this.$store.state.statusBarHeight + 20 / 75 + 'rem'
        }
    },
    data() {
        return {
            swiperOption: {
                resistanceRatio: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'my-bullet-active'
                }
            }
        }
    },
    methods: {
        navToHome() {
            this.$router.replace('/')
        }
    },
    beforeCreate() {
        window.localStorage.setItem('showGuide', 'end')
        this.$atApp(() => {
            window.plus.navigator.setStatusBarStyle('dark');
        })
    },
    mounted(){
        console.log('sss');
    }
}
</script>

<style lang="scss">
.guide-container {
  width: 100%;
  height: 100%;
}
.guide-page {
  width: 100%;
  height: 100%;
  background: #fff;
  .btn-skip {
    position: absolute;
    right: 20px;
    border: 1px solid #aaa;
    /* no */
    color: #aaa;
    padding: 8px 30px;
    border-radius: 10px;
    z-index: 10;
    font-size: 24px;
  }
}
.swiper-slide {
  background-size: 100% auto;
  &.item-01 {
    background-image: url("../assets/images/guide/1.jpg");
  }
  &.item-02 {
    background-image: url("../assets/images/guide/2.jpg");
  }
  &.item-03 {
    background-image: url("../assets/images/guide/3.jpg");
  }
  &.item-04 {
    background-image: url("../assets/images/guide/4.jpg");
  }
}
.swiper-pagination {
  position: absolute;
  bottom: 100px !important;
  left: 0;
  right: 0;
  .my-bullet {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 20px;
    border-radius: 8px;
    background: #ccc;
    transition: all 0.2s;
    &.my-bullet-active {
      width: 50px;
      background: #09f;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
.enter-home {
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  line-height: 80px;
  border-radius: 20px;
  background: #09f;
  color: #fff;
  text-align: center;
  font-size: 28px;
  width: 300px;
}
</style>