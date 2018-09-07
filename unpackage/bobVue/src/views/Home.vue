<template>
    <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
        <div class="statusBar" :style="{height:statusBarHeight}"></div>
        <div class="header-block" :style="{top:statusBarHeight}">
            <div class="head-img" :style="{backgroundImage:'url(' + headUrl + ')'}"></div>
            <div class="user-info">
                <div class="user-name">{{userInfo.nickname}}</div>
                <div class="bean-block">{{userInfo.jifen}}</div>
            </div>
            <div class="message-icon" :class="{active:showMessageTip}" @click="toggleTip">消息</div>
        </div>
        <vue-scroll class="view-block" ref="vs">
            <div class="view-content">
                <div class="banner-container">
                    <swiper :options="swiperOption" ref="mySwiper" class="loop-container">
                        <template v-if="reqDone">
                            <swiperSlide v-for="item in homeDate['adv_lists']" :key="item.id">
                                <img :src="item.path|imgUrl" alt="">
                            </swiperSlide>
                        </template>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <!-- <div class="fore-block">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                </div> -->
                <div class="jingji-game-list">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                </div>
            </div>
        </vue-scroll>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: { swiper, swiperSlide },
    data() {
        return {
            title: '首页',
            showMessageTip: true,
            headHeight: 136,
            swiperOption: {
                loop: true
            },
            homeDate: null,
            reqDone: false
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        },
        headUrl() {
            let url = this.$store.state.userInfo.head_icon
            if (/http/g.test(url)) {
                return url
            } else {
                return 'http://cdn.bobgame.cn' + url
            }
        },
        statusBarHeight() {
            return this.$store.state.statusBarHeight + 'rem'
        },
        setViewPaddingTop() {
            return this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
        }
    },
    filters: {
        imgUrl(value) {
            if (!value) return ''
            return 'http://cdn.bobgame.cn' + value
        }
    },
    mounted() {
        let that = this;
        that.$nextTick(() => {
            setTimeout(() => {
                that.$refs['vs'].refresh();
            }, 500);
        })
    },
    beforeCreate() {
        let that = this;

        that.$atApp(() => {
            window.plus.navigator.setStatusBarStyle('dark');
        })

        if (that.reqDone) {
            return false
        }

        this.$http.get('http://ceshi2.bobgame.cn/app.php?s=/Index/index.html', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }).then(r => {
            console.log(r);
            if (r.data.code === 200) {
                that.homeDate = r.data.data
                that.reqDone = true
            } else if (r.data.code === -6) {
                window.localStorage.removeItem('token')
                that.$router.replace('/login/home')
            }
        })
    },
    methods: {
        toggleTip() {
            this.showMessageTip = !this.showMessageTip
            window.localStorage.removeItem('token')
        }
    }
};
</script>

<style scoped lang="scss">
.header-block {
  height: 136px;
  padding-left: 25px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  background: #fff;
  .head-img {
    width: 90px;
    height: 90px;
    background-size: 100% auto;
    border-radius: 50%;
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
  .user-info {
    position: absolute;
    left: 140px;
    top: 50%;
    transform: translateY(-50%);
    .user-name {
      color: #333;
      font-size: 26px;
      line-height: 32px;
      font-weight: bold;
      margin-bottom: 14px;
      text-align: left;
      padding-left: 7px;
    }
    .bean-block {
      height: 44px;
      background-color: #f5f5f5;
      border-radius: 22px;
      color: #333;
      background-image: url("../assets/images/bean.png");
      background-size: auto 33px;
      background-repeat: no-repeat;
      background-position-x: 7px;
      background-position-y: center;
      font-size: 30px;
      padding-left: 50px;
      padding-right: 20px;
      line-height: 48px;
      font-weight: bold;
    }
  }
  .message-icon {
    height: 136px;
    text-align: center;
    background: url("../assets/images/icon_message.png") no-repeat;
    background-size: 40px auto;
    background-position: center 24px;
    position: absolute;
    width: 120px;
    right: 0;
    top: 0;
    padding-top: 90px;
    line-height: 20px;
    font-size: 20px;
    &::after {
      width: 15px;
      height: 15px;
      border: 4px solid #fff;
      background: #ff3153;
      border-radius: 50%;
      content: "";
      display: block;
      position: absolute;
      right: 32px;
      top: 22px;
      opacity: 0;
    }
    &.active {
      &::after {
        opacity: 1;
      }
    }
    &:active {
      opacity: 0.5;
    }
  }
}
.view-content {
  padding: 25px;
}
.banner-container {
  overflow: hidden;
  width: 100%;
  height: 210px;
  margin-bottom: 40px;
//   border-radius: 10px;
  img{
      display: block;
  }
  .swiper-slide{
      border-radius: 10px;
      overflow: hidden;
  }
}
</style>