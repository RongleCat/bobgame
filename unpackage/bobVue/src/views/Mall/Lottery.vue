<template>
  <div>
    <ThePage>
      <template slot="headerContent">
        抽奖使我快乐
      </template>
      <template slot="content">
        <transition name="fade-in">
          <div class="lottery-container" v-if="reqDone">
            <div class="lottery-main">
              <div class="level-block clearfix">
                <div class="level-bean" v-if="level === 1">
                  初级场<span>每局100金豆</span>
                </div>
                <div class="level-bean" v-if="level === 2">
                  中级场<span>每局1000金豆</span>
                </div>
                <div class="level-bean" v-if="level === 3">
                  高级场<span>每局10000金豆</span>
                </div>
                <div class="change-level" @click="changeLevel = true">更换奖池</div>
                <span class="pillar one"></span>
                <span class="pillar two"></span>
              </div>
              <div class="lottery-box" :class="[flashImg?'one':'two']">
                <div class="lottery-body">
                  <div class="item" :class="[`item-${index}`,index===isActive?'active':'']" v-for="(item,index) in prizesList[level]" :key="index">
                    <img :src="item.reward_pic | imgUrl" :alt="item.reward_name">
                    {{item.reward_name}}
                  </div>
                  <div class="item btn-start" @click="startLottery">立即<br>抽奖</div>
                </div>
              </div>
            </div>
            <div class="my-info">
              <div class="info-line">
                <div class="user-info">
                  <img :src="headUrl" alt="" class="head-img">
                  {{userInfo.nickname}}
                </div>
                <div class="bean-block">
                  {{userInfo.jifen}}
                </div>
              </div>
              <div class="pop-btn-line">
                <button @click="myGetNote = true">中奖纪录</button>
                <button @click="rulePop = true">抽奖规则</button>
              </div>
            </div>
            <div class="go-mall" :style="{'background-image':`url('http://ceshi2.bobgame.cn/Public/Mobile/bob2/img/convert.png')`}"></div>
            <div class="all-get-block">
              <div class="bg-block"></div>
              <div class="all-get-main">
                <div class="all-get-title">中奖纪录</div>
                <div class="all-get-list-container">
                  <div class="all-get-list">
                    <div class="item" v-for="(item,index) in getList" :key="index">
                      <img :src="item.head">
                      恭喜 {{item.userName}} 获得<span>{{item.goodsName}}</span>一个！
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <transition name="pop-top">
              <div class="global-message" v-if="globaMessage" :style="{top:setViewPaddingTop}">
                恭喜 你妈炸了 获得<span>多功能洗碗机</span>一个
              </div>
            </transition>
          </div>
        </transition>
      </template>
    </ThePage>
    <Popup v-model="changeLevel" :full="setViewPaddingTop" :opacity="50" :maskClose="false">
      <div class="change-level-container">
        <div class="btn-close" @click="changeLevel = false">
          <div class="btn-center"></div>
        </div>
        <div class="pop-title">选择奖池</div>
        <div class="level-line" :class="[`level-0${index}`]" @click="level = (+index)" v-for="(item,index) in prizesList" :key="index">
          <img :src="`/img/staticImg/lv${index}.png`" class="label">
          <p>每局{{index==1?'10':index == 2?'100':'1000'}}金豆</p>
          <div class="goods-loop-container">
            <div class="before-label">可中奖品</div>
            <div class="goods-list-box">
              <div class="item" v-for="(item,index) in prizesList[index]" :key="index">
                <img :src="item.reward_pic | imgUrl">
                <p>{{item.reward_name}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popup>
    <Popup :maskClose="false" v-model="myGetNote" :full="setViewPaddingTop">
      <div class="my-get-note">
        <div class="head-title"></div>
        <div class="btn-close" @click="myGetNote = false"><i class="iconfont icon-guanbi"></i></div>
        <ul class="get-list">
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
          <li>
            <img src="http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png">
            100金豆
            <span>2018-09-20 11:53</span>
          </li>
        </ul>
      </div>
    </Popup>
    <Popup v-model="rulePop" :full="setViewPaddingTop">
      <div class="rule-box">
        <div class="head-title"></div>
        <div class="btn-close" @click="rulePop = false"><i class="iconfont icon-guanbi"></i></div>
        <p>
          1、活动时间：2018.12.12-2018.12.12
          <br><br>
          2、活动规则：活动期间每个用户每日签到后有5次抽奖次数，免费次数用完后需要消耗积分进行抽奖，抽中实物大奖请联系客服进行领取
        </p>
      </div>
    </Popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        flashImg: true,
        index: -1,
        count: -1,
        timer: null,
        lock: false,
        select: null,
        changeLevel: false,
        reqDone: false,
        level: 1,
        myGetNote: false,
        rulePop: false,
        globaMessage: false,
        reqDone: false,
        prizesList: null,
        getList: [
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' },
          { head: 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqdFqbDwXYTBMS9HMkPdTcDuqEa8CQK1FEAXQ8dfNJltsnovkicVPciaZx0Kp1B7Lj2ib35YxJk0zYKw/132', goodsName: '多功能洗碗机', userName: '你妈炸了' }
        ],
        plugMainStyle: {
          position: 'absolute',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      };
    },
    computed: {
      isActive() {
        return this.count % 8;
      },
      userInfo() {
        return this.$store.state.userInfo;
      },
      headUrl() {
        let url = this.$store.state.userInfo.head_icon;
        if (/http/g.test(url)) {
          return url;
        } else {
          return "http://cdn.bobgame.cn" + url;
        }
      },
      setViewPaddingTop() {
        return this.$store.state.statusBarHeight + 88 / 75 + "rem";
      },
    },
    watch: {
      count(newCount) {
        let that = this
        let ring = parseInt(newCount / 8)
        let index = newCount % 8
        let all = 5 * 8 + that.select
        if (newCount === 5) {
          window.clearInterval(that.timer)
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 150)
        } else if (newCount === 10) {
          window.clearInterval(that.timer)
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 100)
        } else if (newCount === 15) {
          window.clearInterval(that.timer)
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 50)
        }
        if (all - 10 === newCount) {
          window.clearInterval(that.timer)
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 150)
        } else if (all - 5 === newCount) {
          window.clearInterval(that.timer)
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 400)
        }
        if (ring > 4 && index === that.select) {
          window.clearInterval(that.timer)
          that.flashCtrl();
          that.lock = false
          that.timer = null
          that.ring = -1
          setTimeout(() => {
            alert(`恭喜您获得${that.prizesList[that.select].text}`)
          }, 100);
        }
      },
      level() {
        this.changeLevel = false
      },
      // changeLevel(){
      //   let that = this
      //   setTimeout(() => {
      //     that.test = true
      //   }, 2000);
      // }
    },
    methods: {
      flashCtrl(state) {
        let that = this;
        if (state === "start") {
          window.lotteryFlash = window.setInterval(() => {
            if (that.flashImg) {
              that.flashImg = false;
            } else {
              that.flashImg = true;
            }
          }, 200);
        } else {
          window.clearInterval(window.lotteryFlash);
        }
      },
      startLottery() {
        let that = this

        if (!that.lock) {
          that.select = Math.floor(Math.random() * 8)
          that.lock = true
          that.count = -1;
          that.flashCtrl();
          that.flashCtrl("start");
          that.timer = window.setInterval(() => {
            that.count += 1
          }, 300)
        }
      }
    },
    mounted() {
      let that = this
      that.$http.get('http://ceshi2.bobgame.cn/app.php?s=/Boblottery/index').then(r => {
        that.prizesList = r.data.rewardInfo
        that.reqDone = true
      })
      setTimeout(() => {
        that.globaMessage = true
        setTimeout(() => {
          that.globaMessage = false
        }, 2000);
      }, 2000);
    }
  };
</script>

<style lang="scss">
  .lottery-container {
    position: relative;
    padding: 25px;
    padding-top: 390px;
    background-image: url("../../assets/images/choujiang/head.png"),
      url("../../assets/images/choujiang/bg.png");
    background-repeat: no-repeat, repeat;
    background-size: 100% auto, auto;
    background-position: 0 0, 0 0;
  }

  .lottery-main {
    padding-top: 110px;
    position: relative;

    .level-block {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 580px;
      height: 80px;
      background: #ff3e2d;
      border-radius: 15px;
      padding: 12px;
      padding-right: 0;

      >div {
        background: #7f3636;
        color: #fff;
        float: left;
        border-radius: 10px;
        height: 100%;
        font-size: 28px;
        font-weight: bold;
        line-height: 60px;
      }

      .level-bean {
        width: 330px;
        margin-right: 16px;
        padding-left: 14px;

        span {
          font-size: 22px;
          padding-left: 25px;
          vertical-align: 2.5px;
        }
      }

      .change-level {
        padding-left: 75px;
        width: 210px;
        background-image: url("../../assets/images/choujiang/select.png");
        background-repeat: no-repeat;
        background-size: 36px auto;
        background-position: 25px center;
        z-index: 10;
      }

      .pillar {
        display: inline-block;
        width: 18px;
        height: 30px;
        position: absolute;
        bottom: -30px;
        background: #fffee7;
        z-index: 10;

        &.one {
          left: 190px;
        }

        &.two {
          right: 190px;
        }
      }
    }
  }

  .lottery-box {
    width: 100%;
    height: 520px;
    background: #ff3e2d;
    border-radius: 36px;
    position: relative;
    z-index: 11;
    background-size: 100% auto;
    background-position: center;
    padding: 30px;
    margin-bottom: 35px;

    &.one {
      background-image: url("../../assets/images/choujiang/flash_01.png");
    }

    &.two {
      background-image: url("../../assets/images/choujiang/flash_02.png");
    }
  }

  .lottery-body {
    width: 100%;
    height: 100%;
    background: #7f3636;
    border-radius: 20px;
    position: relative;

    .item {
      width: 200px;
      height: 140px;
      border-radius: 15px;
      background: #fffee7;
      position: absolute;
      box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2) inset;
      color: #fe5f5f;
      text-align: center;
      padding-top: 10px;

      img {
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
      }

      &.active {
        background: #fce12a;
      }

      &.btn-start {
        left: 220px;
        top: 160px;
        background: #ff3e2d;
        color: #fff;
        font-size: 42px;
        font-weight: bold;
        text-align: center;
        line-height: 1.1;
        padding-top: 20px;
        @include tapColor;
      }

      &.item-0 {
        left: 10px;
        top: 10px;
      }

      &.item-1 {
        left: 220px;
        top: 10px;
      }

      &.item-2 {
        left: 430px;
        top: 10px;
      }

      &.item-3 {
        left: 430px;
        top: 160px;
      }

      &.item-4 {
        left: 430px;
        top: 310px;
      }

      &.item-5 {
        left: 220px;
        top: 310px;
      }

      &.item-6 {
        left: 10px;
        top: 310px;
      }

      &.item-7 {
        left: 10px;
        top: 160px;
      }
    }
  }

  .my-info {
    border-radius: 20px;
    border: 6px solid #ff3e2d;
    background: #fffee7;
    overflow: hidden;
    margin-bottom: 35px;

    .info-line {
      height: 70px;
      width: 100%;
      font-size: 30px;
      font-weight: bold;
      color: #333;
      line-height: 76px;
      position: relative;
      padding-left: 80px;

      img {
        position: absolute;
        top: 10px;
        left: 14px;
        border-radius: 50%;
        display: block;
        width: 50px;
        height: 50px;
      }
    }

    .pop-btn-line {
      border-top: 6px solid #ff3e2d;
      background: #ff3e2d;

      button {
        border: 0;
        height: 71px;
        background: #fffee7;
        width: 341px;
        font-size: 30px;
        color: #7f3636;
        @include tapColor;

        &:first-child {
          margin-right: 6px;
        }
      }
    }

    .bean-block {
      position: absolute;
      top: 13px;
      right: 14px;
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
  }

  .go-mall {
    width: 100%;
    height: 160px;
    border-radius: 20px;
    background-size: 100% auto;
    margin-bottom: 30px;
  }

  .all-get-block {
    width: 100%;
    padding: 10px 25px 85px 25px;
    position: relative;

    .bg-block {
      width: 100%;
      height: 20px;
      background: #ff3e2d;
      z-index: 10;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }

    .all-get-main {
      width: 100%;
      background: #fffee7;
      position: relative;
      z-index: 20;
      border-radius: 0 0 15px 15px;
      padding: 0 25px 25px 25px;
    }

    .all-get-title {
      width: 100%;
      font-size: 34px;
      color: #7f3636;
      text-align: center;
      height: 80px;
      line-height: 80px;

      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fe5f5f;
        top: 35px;
        right: 230px;
        border-radius: 50%;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        background: #fe5f5f;
        top: 35px;
        left: 230px;
        border-radius: 50%;
      }
    }
  }

  .all-get-list-container {
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 15px;
  }

  .all-get-list {
    .item {
      height: 100px;
      width: 100%;
      background-color: #f4ecd5;
      position: relative;
      line-height: 100px;
      padding-left: 105px;

      span {
        color: #7f3636;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        left: 25px;
        top: 20px;
      }

      &:nth-child(even) {
        background: #e5dbc0;
      }
    }
  }

  // .van-popup {
  //   border-radius: 15px;
  //   background: none;
  // }

  .change-level-container {
    padding: 0 25px;
    padding-bottom: 1px;
    width: 650px;
    background: #372954;
    border-radius: 15px;
    position: relative;

    .pop-title {
      font-size: 34px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 90px;
    }

    .btn-close {
      width: 90px;
      height: 90px;
      position: absolute;
      top: 0;
      right: 0;
      padding-top: 21px;

      .btn-center {
        width: 48px;
        height: 48px;
        margin: 0 auto;
        border-radius: 50%;
        border: 2px solid #fff;
        position: relative;

        &::after {
          content: '';
          width: 2px;
          height: 30px;
          background: #fff;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::before {
          content: '';
          width: 2px;
          height: 30px;
          background: #fff;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }

  .level-line {
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 25px;
    // height: 240px;
    background-repeat: no-repeat;
    background-size: 150px auto;
    background-position: right 20px;
    position: relative;

    >p {
      padding-left: 215px;
      color: #adadad;
      height: 66px;
      line-height: 84px;
      font-size: 24px;
    }

    img.label {
      position: absolute;
      width: 200px;
      height: 66px;
      top: 0;
      left: 0;
    }

    .goods-loop-container {
      height: 176px;
      position: relative;
      padding-left: 86px;
      padding-top: 25px;

      .before-label {
        color: #fff;
        width: 34px;
        height: 120px;
        text-align: center;
        line-height: 26px;
        padding: 10px 0;
        font-size: 22px;
        border-radius: 3px;
        position: absolute;
        left: 30px;
        top: 28px;
      }

      .goods-list-box {
        width: 100%;
        height: 145px;
        overflow-x: auto;
        white-space: nowrap;

        .item {
          display: inline-block;
          // width: 80px;
          margin-right: 15px;
          height: 120px;
          position: relative;
          text-align: center;
          padding-top: 3px;

          img {
            width: 80px;
            height: 80px;
            border: 1px solid #f0f0f0;
            object-fit: contain;
          }

          p {
            font-size: 18px;
            line-height: 1.2;
            position: absolute;
            top: 95px;
            width: 100%;
            white-space: normal;
            // @include textOverflow;
          }
        }
      }
    }


    &.level-01 {
      .before-label {
        background: #969ca3;
      }
    }

    &.level-02 {
      .before-label {
        background: #87a3b4;
      }

      background-image: url('../../assets/images/choujiang/menkan.png');
    }

    &.level-03 {
      .before-label {
        background: #be9b67;
      }

      background-image: url('../../assets/images/choujiang/menkan.png');
    }
  }

  .my-get-note {
    width: 580px;
    height: 680px;
    background: #fffee7;
    border-radius: 15px;
    position: relative;
    padding: 100px 30px 30px 30px;

    .head-title {
      width: 100%;
      height: 100px;
      background: url('../../assets/images/choujiang/pop_head_01.png');
      background-repeat: no-repeat;
      background-size: 330px auto;
      background-position: center top;
      position: absolute;
      top: -15px;
      left: 0;
    }

    .get-list {
      width: 100%;
      height: 100%;
      background: #f4ecd5;
      border-radius: 15px;
      overflow-y: auto;
      padding: 0 20px;

      li {
        height: 80px;
        line-height: 84px;
        position: relative;
        padding-left: 56px;
        font-size: 30px;
        color: #7f3636;
        @include onePXlineBottom;

        img {
          position: absolute;
          width: 40px;
          height: 40px;
          object-fit: contain;
          left: 0;
          top: 20px;
        }

        span {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 22px;
          color: #bfa193;
        }
      }
    }

    .btn-close {
      position: absolute;
      width: 100%;
      height: 160px;
      bottom: -160px;
      left: 0;
      color: #fff;
      text-align: center;

      .iconfont {
        font-size: 80px;
        line-height: 160px;
      }
    }
  }

  .rule-box {
    width: 580px;
    background: #fffee7;
    border-radius: 15px;
    position: relative;
    padding: 100px 30px 30px 30px;

    .head-title {
      width: 100%;
      height: 100px;
      background: url('../../assets/images/choujiang/pop_head_01.png');
      background-repeat: no-repeat;
      background-size: 330px auto;
      background-position: center top;
      position: absolute;
      top: -15px;
      left: 0;
    }

    .btn-close {
      position: absolute;
      width: 100%;
      height: 160px;
      bottom: -160px;
      left: 0;
      color: #fff;
      text-align: center;

      .iconfont {
        font-size: 80px;
        line-height: 160px;
      }
    }

    p {
      font-size: 26px;
      color: #7f3636;
      line-height: 40px;
    }
  }

  .global-message {
    position: fixed;
    background: #fffee7;
    width: 100%;
    left: 0;
    right: 0;
    height: 80px;
    line-height: 82px;
    text-align: center;
    font-size: 30px;
    z-index: 200;
    color: #333;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    span {
      color: #fe5f5f;
    }
  }
</style>