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
              <div class="change-level">更换奖池</div>
              <span class="pillar one"></span>
              <span class="pillar two"></span>
            </div>
            <div class="lottery-block" :class="[flashImg?'one':'two']">
              <div class="lottery-body">
                <!-- <test :prizesList="prizesList" :lotteryBtn="lotteryBtn" :beforeLottery="beforeLottery" :afterLottery="afterLottery"></test> -->
                <div class="item" :class="[`item-${index}`,index===isActive?'active':'']" v-for="(item,index) in prizesList" :key="index">
                  <img :src="item.img" :alt="item.text">
                  {{item.text}}
                </div>
                <div class="item btn-start" @click="startLottery">立即<br>抽奖</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ThePage>
  </div>
</template>

<script>
  // import test from "./test";
  import ThePage from "@/components/ThePage";
  export default {
    components: { ThePage },
    data() {
      return {
        flashImg: true,
        index: -1,
        count: -1,
        timer: null,
        lock: false,
        select: null,
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
        }]
      };
    },
    computed: {
      isActive() {
        return this.count % 8;
      }
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
        }else if (all - 5 === newCount) {
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

  .lottery-block {
    width: 100%;
    height: 520px;
    background: #ff3e2d;
    border-radius: 36px;
    position: relative;
    z-index: 11;
    background-size: 100% auto;
    background-position: center;
    padding: 30px;

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
</style>