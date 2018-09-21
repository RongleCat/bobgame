<template>
    <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
        <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}"></div>
        <div class="head-block" :style="{top:statusBarHeight}">
            <div class="input-block">
                <input v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入好友昵称" type="text" @focus="isFocus = true" @blur="isFocus = false" />
            </div>
        </div>
        <div class="view-block">
            <div class="test-block" @click="touchs1"></div>
            <swiper :options="swiperOption" ref="mySwiper" class="guide-container">
                <!-- slides -->
                <swiper-slide></swiper-slide>
                <swiper-slide></swiper-slide>
                <swiper-slide></swiper-slide>
                <swiper-slide>
                    <div class="enter-home">
                        开始游戏
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <ThePopView v-if="enterChatPage" v-on:closeView="touchs1" btnType="back">
            <template slot='header'>我是头部</template>
            <template slot='content'>
                <Chat friendName="大宝贝儿"></Chat>
            </template>
        </ThePopView>
    </div>
</template>

<script>
import Chat from './Friends/Chat';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            title: '好友',
            headHeight: 110,
            keyword: '',
            isFocus: false,
            enterChatPage: false,
            direction: 'left',
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
    components: {
        Chat,
        swiper,
        swiperSlide
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        },
        statusBarHeight() {
            return this.$store.state.statusBarHeight + 'rem'
        },
        setViewPaddingTop() {
            return this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
        },
        searchFocus() {
            return this.keyword.length
        }
    },
    mounted() {
    },
    methods: {
        setFocus() {
            this.isFocus = true
        },
        setBlur() {
            this.isFocus = false
        },
        touchs1() {
            // this.enterChatPage = !this.enterChatPage;
            this.$router.push('/friends/10')
        }
    },
    beforeCreate() {
        this.$atApp(() => {
            window.plus.navigator.setStatusBarStyle('dark');
        })
    }
};
</script>

<style scoped lang="scss">
.head-block {
  height: 110px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: #f2f2f2;
  padding: 25px 20px;
  .input-block {
    text-align: center;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    input {
      border: 0;
      text-align: center;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("../assets/images/icon_sousuo.png");
      background-repeat: no-repeat;
      font-size: 28px;
      background-size: 36px auto;
      background-position-y: center;
      background-position-x: 220px;
      &.focus {
        padding-left: 70px;
        text-align: left;
        background-position-x: 20px;
      }
    }
  }
}
.view-block {
  padding: 25px;
}
.guide-container{
    height: 600px;;
}
</style>