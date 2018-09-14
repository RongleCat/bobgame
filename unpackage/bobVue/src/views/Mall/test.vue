<template>
  <div class="iv-lottery">
    <ul>
      <li class="row">
        <div :class="['col-4' , {active : activeClass[index]}]" v-for="(prize,index) in lis1" :key="index">
          <img :src="prize">
        </div>
      </li>
      <li class="row">
        <div :class="['col-4' , {active : activeClass[7]}]">
          <img :src="prizesList[7]">
        </div>
        <div class="col-4" @click="startLottery">
          <img :src="lotteryBtn.img">
        </div>
        <div :class="['col-4' , {active : activeClass[3]}]">
          <img :src="prizesList[3]">
        </div>
      </li>
      <li class="row">
        <div :class="['col-4' , {active : activeClass[6-index]}]" v-for="(prize,index) in lis2" :key="index">
          <img :src="prize">
        </div>
      </li>
    </ul>
  </div>
</template>



<script type="text/javascript">
  export default {
    name: 'swiper',
    data() {
      return {
        activeClass: [false, false, false, false, false, false, false, false],
        index: -1,
        count: 8,
        timer: null,
        times: 0,
        speedData: 100,
        lock: false,
        afterLotteryHandler: null
      };
    },
    props: {
      prizesList: {
        type: Array,
        default () {
          return [];
        }
      },
      lotteryBtn: {
        type: Object,
        default () {
          return {
            img: ''
          };
        }
      },
      beforeLottery: {
        type: Function,
        default () { throw new Error('you must define beforeLottery before draw a lottery '); }
      },
      afterLottery: {
        type: Function,
        // eslint-disable-next-line
        default () { console.warn('you can use afterLottery after rolling'); }
      },
      prize: {
        type: Number,
        default: 0
      },
      speed: {
        type: Number,
        default: 100
      },
      cycle: {
        type: Number,
        default: 20
      }
    },
    computed: {
      lis1() {
        return this.prizesList.slice(0, 3);
      },
      lis2() {
        return this.prizesList.slice(4, 7).reverse();
      }
    },
    created() {
      this.speedData = this.speed;
      this.afterLotteryHandler = this.afterLottery;
    },
    beforeDestroy() {
      this.afterLotteryHandler = () => {};
    },
    methods: {
      startLottery() {
        if (!this.lock) {
          let promise = () => {
            return new Promise((resolve, reject) => {
              this.lock = true;
              this.beforeLottery(resolve, reject);
            });
          };
          let start = async () => {
            try {
              await promise();
              this.roll();
            } catch (e) {
              e();
            }
          };
          start();
        }
      },
      _rollHandler() {
        var index = this.index;
        var count = this.count;
        for (let i = 0, len = this.activeClass.length; i < len; i++) {
          this.activeClass[i] = false;
        }
        index += 1;
        if (index > count - 1) {
          index = 0;
        }
        this.activeClass[index] = true;
        this.index = index;
        return false;
      },
      roll() {
        // eslint-disable-next-line
        this.activeClass = this.activeClass.map(item => item = false);
        this.times += 1;
        this._rollHandler();
        if (this.times > this.cycle + 10 && this.prize == this.index) {
          clearTimeout(this.timer);
          setTimeout(() => {
            this._showResult();
          }, 1000);
          this.lock = false;
          this.index = -1;
          this.count = 8;
          this.timer = null;
          this.speedData = this.speed;
          this.times = 0;
        } else {
          if (this.times < this.cycle) {
            this.speedData -= 2;
          } else {
            if (this.times > this.cycle + 10 && ((this.prize == 0 && this.index == 7) || this.prize == this.index + 1)) {
              this.speedData += 110;
            } else {
              this.speedData += 20;
            }
          }
          if (this.speedData < 40) {
            this.speedData = 40;
          }
          this.timer = setTimeout(() => {
            this.roll();
          }, this.speedData);
        }
        console.log('sss1');
        return false;
      },
      _showResult() {
        this.afterLotteryHandler();
      }
    }
  };
</script>

<style lang="scss" scoped>
  //base
  $phone:750;
  $url:'../../img/';
  $remBase:$phone/20;

  //font-size
  @function torem($size) {
    $remSize: $size / $remBase;
    @return $remSize * 1rem;
  }

  .iv-lottery {
    width: 100%;
    background-size: cover;

    ul {
      margin: 0 auto;
      width: 10rem;
      box-sizing: border-box;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0.831rem 0.768rem 0.768rem 0.768rem;
      position: relative;
      z-index: 1;

      li {
        overflow: hidden;
        position: relative;
      }

      li div {
        padding: torem(1.2);
        position: relative;

        &.active:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          background: rgba(255, 135, 46, 0.62);
        }
      }

      li div img {
        width: 100%;
        vertical-align: middle;
      }

    }

  }
</style>