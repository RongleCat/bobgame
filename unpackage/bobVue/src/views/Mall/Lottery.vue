<template>
  <div>
    <ThePage>
      <template slot="headerContent">
        抽奖使我快乐
      </template>
      <template slot="content">
        <div class="lottery-container">
          <div class="lottery-main">
            <div class="level-block clearfix">
              <div class="level-bean">初级场<span>每局10000金豆</span></div>
              <div class="change-level" @click="changeLevel = true">更换奖池</div>
              <span class="pillar one"></span>
              <span class="pillar two"></span>
            </div>
            <div class="lottery-box" :class="[flashImg?'one':'two']">
              <div class="lottery-body">
                <div class="item" :class="[`item-${index}`,index===isActive?'active':'']" v-for="(item,index) in prizesList" :key="index">
                  <img :src="item.img" :alt="item.text">
                  {{item.text}}
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
              <button>中奖纪录</button>
              <button>抽奖规则</button>
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
        </div>
      </template>
    </ThePage>
    <Popup v-model="changeLevel">
      <div class="change-level-container">
        <div class="btn-close">
          <div class="btn-center"></div>
        </div>
        <div class="pop-title">选择奖池</div>
      </div>
    </Popup>
  </div>
</template>

<script>
  // import test from "./test";
  import { Popup } from 'vant';
  import ThePage from "@/components/ThePage";
  export default {
    components: { ThePage, Popup },
    data() {
      return {
        flashImg: true,
        index: -1,
        count: -1,
        timer: null,
        lock: false,
        select: null,
        changeLevel: false,
        prizesList: [
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-23/1529735455.png",
          text: "5金豆"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082836.png",
          text: "10金豆"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-27/1530082822.png",
          text: "100金豆"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-22/1529659184.png",
          text: "10000金豆"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-22/1529659399.png",
          text: "iPhone X 256G"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-08-30/1535609414.jpg",
          text: "韩版女生背包"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-08-14/1534224774.jpg",
          text: "触控头戴蓝牙耳机"
        },
        {
          img: "http://cdn.bobgame.cn//Uploads/Picture/2018-06-22/1529659952.png",
          text: "500金豆"
        }],
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
        ]
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
      }
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
    }
  };
</script>

<style scoped lang="scss">
  .lottery-container {
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

  .van-popup {
    border-radius: 15px;
    background: none;
  }

  .change-level-container {
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

      .btn-center {
        width: 48px;
        height: 48px;
        margin: 0 auto;
        margin-top: 26px;
        border-radius: 50%;
        border: 2px solid #fff;
        position: relative;
        &::after{
          content: '';
          width: 2px;
          height: 30px;
          background: #fff;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) rotate(-45deg);
        }
        &::before{
          content: '';
          width: 2px;
          height: 30px;
          background: #fff;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) rotate(45deg);
        }
      }
    }
  }
</style>