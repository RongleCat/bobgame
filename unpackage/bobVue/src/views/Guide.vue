<template>
    <div class="one-level-full-page guide-page">
        <div class="btn-skip" :style="{top:paddingTop}" @click="navToHome">跳过</div>
        <swiper :options="swiperOption" ref="mySwiper" class="guide-container">
            <!-- slides -->
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <swiper-slide></swiper-slide>
            <swiper-slide>
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
            this.$router.push('/')
        }
    },
    beforeCreate() {
        this.$atApp(() => {
            window.plus.navigator.setStatusBarStyle('dark');
        })
    }
}
</script>

<style lang="scss">
.guide-container {
  width: 100%;
  height: 100%;
}
.guide-page {
  background: #fff;
  .btn-skip {
    position: absolute;
    right: px2rem(20px);
    border: 1px solid #aaa;
    color: #aaa;
    padding: px2rem(8px) px2rem(30px);
    border-radius: px2rem(10px);
    z-index: 10;
    font-size: px2rem(24px);
  }
}
.swiper-slide {
  background-size: 100% auto;
  &:nth-child(1) {
    background-image: url("../assets/images/guide/1.jpg");
  }
  &:nth-child(2) {
    background-image: url("../assets/images/guide/2.jpg");
  }
  &:nth-child(3) {
    background-image: url("../assets/images/guide/3.jpg");
  }
  &:nth-child(4) {
    background-image: url("../assets/images/guide/4.jpg");
  }
}
.swiper-pagination{
    position: absolute;
    bottom: px2rem(100px)!important;
    .my-bullet{
        display: inline-block;
        width: px2rem(16px);
        height: px2rem(16px);
        margin-left: px2rem(20px);
        border-radius: px2rem(8px);
        background: #ccc;
        transition: all .2s;
        &.my-bullet-active{
            width: px2rem(50px);
            background: #09f;
        }
        &:first-child{
            margin-left: 0;
        }
    }
}
.enter-home{
    position: absolute;
    bottom: px2rem(180px);
    left: 50%;
    transform: translateX(-50%);
    line-height: px2rem(80px);
    border-radius: px2rem(20px);
    background: #09f;
    color: #fff;
    text-align: center;
    font-size: px2rem(28px);
    width: px2rem(300px);
}
</style>