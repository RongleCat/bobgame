<template>
  <div class="view-page" :style="{paddingTop:setViewPaddingTop}">
    <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}"></div>
    <div class="head-block" :style="{top:statusBarHeight}">
      <div class="input-block">
        <input v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入好友昵称" type="text" @focus="isFocus = true" @blur="isFocus = false" />
      </div>
    </div>
    <div class="btn-contacs btn-round" v-if="selectTab == 0" @click="selectTab = 1" :style="{top:btnTwoTop+'px'}"><i class="iconfont icon-wode"></i></div>
    <div class="btn-chat btn-round" @click="selectTab = 0" v-if="selectTab == 1" :style="{top:btnTwoTop+'px'}"><i class="iconfont icon-zixun"></i></div>
    <div class="btn-add btn-round" @click="$router.push('/friends/addfriend')" v-if="selectTab == 1" :style="{top:btnAddTop+'px'}"><i class="iconfont icon-add"></i></div>
    <transition name="fade-in">
      <div class="view-block" v-show="!load">
        <div class="friend-container">
          <swiper :options="friendOption" ref="friend">
            <swiperSlide>
              <div class="friend-list" v-if="chatList.length">
                <div class="item" @click="touchs1">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">{{'2018-10-13 12:09' | lastTime}}</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
              </div>
              <div class="no-data" v-else>
                <div class="title">您很久没和人聊天了</div>
                <div class="miaoshu">快去通讯录找好友聊天吧！</div>
                <div class="btn-link" @click="selectTab = 1">
                  打开通讯录
                </div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="friend-list" v-if="friendsList.length">
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">{{'2018-10-13 12:09' | lastTime}}</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-male"></i><span class="vip-label vip-0"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
                <div class="item">
                  <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                  <div class="name-line">曹铁柱<i class="iconfont icon-female woman"></i><span class="vip-label vip-1"></span><span class="time">5分钟前</span></div>
                  <div class="two-line">昨晚1.25倍看如懿，感觉对话有点魔性，切回来好多了25倍看如懿，感觉对话有点魔性，切回来好多了</div>
                </div>
              </div>
              <div class="no-data" v-else>
                <div class="title">您还没有好友哦</div>
                <div class="miaoshu">快去加几个好友一起玩游戏吧！</div>
                <div class="btn-link" @click="$router.push('/friends/addfriend')">
                  看看好友推荐
                </div>
              </div>
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import moment from "moment";
  // import { Toast } from "vant";
  moment.locale('en', {
    relativeTime: {
      future: "在%s",
      past: "%s前",
      s: "秒",
      m: "1分钟",
      mm: "%d分钟",
      h: "1小时",
      hh: "%d小时",
      d: "1天",
      dd: "%d天",
      M: "1个月",
      MM: "%d个月",
      y: "1年",
      yy: "%d年"
    }
  });

  import Chat from './Friends/Chat';

  export default {
    data() {
      return {
        title: '好友',
        headHeight: 110,
        keyword: '',
        isFocus: false,
        enterChatPage: false,
        direction: 'left',
        selectTab: 0,
        load: true,
        btnAddTop: 0,
        btnTwoTop: 0,
        friendOption: {
          resistanceRatio: 0,
          on: {
            slideChange() {
              this.vue.selectTab = this.activeIndex
            }
          }
        },
        chatList: [],
        friendsList: []
      }
    },
    components: {
      Chat
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
      },
      swiper() {
        let that = this
        that.$refs.friend.swiper.vue = that
        return this.$refs.friend.swiper
      }
    },
    watch: {
      selectTab(v) {
        this.swiper.slideTo(v)
      }
    },
    filters: {
      lastTime(value) {
        if (!value) {
          return ''
        }
        return moment(value).fromNow();
      }
    },
    mounted() {
      let that = this
      that.swiper
      setTimeout(() => {
        that.load = false
      }, 400);
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
        this.$router.push('/friends/detail/10')
      }
    },
    created() {
      this.btnTwoTop = document.body.offsetHeight - ((170 + 90) / 75 * window.rem)
      this.btnAddTop = document.body.offsetHeight - ((300 + 90) / 75 * window.rem)
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
    width: 100%;
    height: 100%;
    overflow: hidden;

    .friend-container {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }

  .friend-list {
    .item {
      padding: 20px 25px;
      position: relative;
      height: 130px;
      padding-left: 140px;
      @include tapMask;

      &:active {
        &:after {
          opacity: .05;
        }
      }

      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
        position: absolute;
        top: 20px;
        left: 25px;
      }

      .name-line {
        font-size: 30px;
        font-weight: bold;
        line-height: 50px;

        .iconfont {
          height: 30px;
          width: 30px;
          display: inline-block;
          background: #3bb3ff;
          color: #fff;
          font-size: 18px;
          line-height: 32px;
          text-align: center;
          border-radius: 50%;
          vertical-align: 4px;
          margin-left: 10px;

          &.woman {
            background: #fe3b6d;
          }
        }

        .vip-label {
          width: 30px;
          height: 30px;
          display: inline-block;
          background-size: contain;
          border-radius: 5px;
          vertical-align: -3px;
          margin-left: 10px;
        }

        .time {
          float: right;
          font-size: 20px;
          font-weight: normal;
          color: #adadad;
        }
      }

      .two-line {
        padding-top: 10px;
        font-size: 24px;
        line-height: 28px;
        @include textof;
        color: #ccc;
      }
    }
  }

  .btn-round {
    top: 170px;
    right: 45px;
    width: 100px;
    height: 100px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, .2);
    border-radius: 50%;
    background: #62c6ff;
    text-align: center;
    line-height: 102px;
    z-index: 10000000000;
    // @include tapColor;
    position: absolute;

    .iconfont {
      font-size: 48px;
      color: #fff;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    &.btn-chat {
      background: #61dc50;
    }

    &.btn-add {
      top: 300px;
      background: #ffcb40;
    }
  }

  .no-data {
    margin-top: 130px;

    .title {
      font-size: 30px;
      font-weight: bold;
    }

    .link {
      font-size: 24px;
      color: #adadad;
    }
  }

  .btn-link {
    width: 460px;
    height: 90px;
    line-height: 92px;
    background: $by;
    text-align: center;
    margin: 0 auto;
    margin-top: 80px;
    border-radius: 45px;
    @include tapColor;

    &.play {
      margin-top: 30px;
      background: #fe6f49;
      color: #fff;
    }
  }
</style>