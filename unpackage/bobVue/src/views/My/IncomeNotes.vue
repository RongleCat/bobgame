<template>
  <ThePage color="#f2f2f2" @headerHeight="setHeaderHeight" contentBg="#f0f0f0">
    <template slot="headerContent">
      收益明细
      <div class="filter-bar" :style="{top:topHeight+'rem'}">
        <div class="filter-item" :class="[filterOpen?'active':'']" @click="filterOpen = !filterOpen">筛选<i class="iconfont icon-xiala"></i></div>
        <div class="filter-item" :class="[classOpen?'active':'']" @click="classOpen = !classOpen">全部<i class="iconfont icon-xiala"></i></div>
        <div class="filter-item btn-search" @click="showSearch = true">搜索</div>
        <div class="search-box" v-if="showSearch">
          <input v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入关键字" type="search" @focus="isFocus = true" @blur="isFocus = false" autofocus="true" ref="search" />
          <div class="btn-cancel" @click="closeSearch">取消</div>
        </div>
      </div>
    </template>
    <template slot="content">
      <transition name="fade-in">
        <div class="income-mask" v-if="filterOpen || classOpen"></div>
      </transition>
      <transition name="pop-top">
        <div class="filter-pop" v-if="filterOpen" :style="{top:filterTop}">
          <div class="time-line">
            <div class="item" v-for="(i,index) in 3" :key="index" @click="selectTimer === index?selectTimer = -1:selectTimer = index" :class="[index === selectTimer?'active':'']">
              {{i==1?'一':i==2?'二':'三'}}个月内
            </div>
          </div>
          <div class="time-label">选择时间段</div>
          <div class="time-line">
            <div class="item start-time" @click="startOpen">
              <!-- <template v-if=""></template> -->
              {{formatStart}}
            </div>
            <div class="item" @click="endOpen">
              {{formatEnd}}
            </div>
            <div class="item" :class="[timeBtnClass?'active':'']">
              确定
            </div>
          </div>
        </div>
      </transition>
      <transition name="pop-top">
        <div class="class-pop" v-if="classOpen" :style="{top:filterTop}">
          <div class="class-block">
            <div class="item" v-for="(item,index) in classItems" :class="[classSelect === index?'active':'']" :key="index" @click="classSelect === index?classSelect = -1:classSelect = index">
              <div class="icon" :class="[`icon-${index+1}`]"></div>
              {{item}}
            </div>
          </div>
        </div>
      </transition>
      <div class="income-container">
        <div class="notes-list">
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img class="img-head" src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                <div class="type-name">
                  高呼呼
                </div>
                <div class="type-tip">
                  <span class="n-text">充值99元</span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img class="img-head" src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                <div class="type-name">
                  高呼呼
                </div>
                <div class="type-tip">
                  <span class="n-text">充值99元</span><span class="tip-question" @click="vipTip = true">冻结 <i class="iconfont icon-wenhao"></i></span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/hb.png">
                <div class="type-name">
                  平台红包奖励
                </div>
                <div class="type-tip">
                  <span class="tip-question" @click="vipTip = true">冻结 <i class="iconfont icon-wenhao"></i></span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/jb.png">
                <div class="type-name one">
                  余额提现-处理中
                </div>
              </div>
              <div class="get-money">
                余额：<span>-14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/hb.png">
                <div class="type-name one">
                  比赛获胜奖励
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img class="img-head" src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                <div class="type-name">
                  高呼呼
                </div>
                <div class="type-tip">
                  <span class="n-text">充值99元</span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img class="img-head" src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1609112R1-17.jpg">
                <div class="type-name">
                  高呼呼
                </div>
                <div class="type-tip">
                  <span class="n-text">充值99元</span><span class="tip-question" @click="vipTip = true">冻结 <i class="iconfont icon-wenhao"></i></span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/hb.png">
                <div class="type-name">
                  平台红包奖励
                </div>
                <div class="type-tip">
                  <span class="tip-question" @click="vipTip = true">冻结 <i class="iconfont icon-wenhao"></i></span>
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/jb.png">
                <div class="type-name one">
                  余额提现-处理中
                </div>
              </div>
              <div class="get-money">
                余额：<span>-14.8</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="one-line">
              订单号：15648645884<span>2018-08-24 09:19:55</span>
            </div>
            <div class="tow-line">
              <div class="get-type">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/hb.png">
                <div class="type-name one">
                  比赛获胜奖励
                </div>
              </div>
              <div class="get-money">
                余额：<span class="add">+14.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VanPopup v-model="startPop" position="bottom" :close-on-click-overlay="false">
        <DatetimePicker v-model="startTime" type="date" :max-date="maxDate" title="选择开始时间" @cancel="startCancel" @confirm="startConfirm"></DatetimePicker>
      </VanPopup>
      <VanPopup v-model="endPop" position="bottom" :close-on-click-overlay="false">
        <DatetimePicker v-model="endTime" type="date" :min-date="minDate" :max-date="endMax" title="选择结束时间" @cancel="endCancel" @confirm="endConfirm"></DatetimePicker>
      </VanPopup>
      <VIPPopup v-model="vipTip"></VIPPopup>
    </template>
  </ThePage>
</template>

<script>
  import { DatetimePicker, Popup } from "vant";
  import VIPPopup from "@/components/VIPPopup.vue";
  import moment from "moment";

  export default {
    components: {
      VanPopup: Popup,
      DatetimePicker,
      VIPPopup
    },
    data() {
      return {
        topHeight: 0,
        filterOpen: false,
        keyword: "",
        isFocus: false,
        showSearch: false,
        filterTop: null,
        startPop: null,
        startTime: null,
        startDone: false,
        endPop: null,
        endTime: null,
        endDone: false,
        selectTimer: -1,
        endMax: new Date(),
        classOpen: false,
        classSelect: 0,
        classItems: ['全部收益', '玩家充值', '提现', '比赛奖励', '红包'],
        vipTip:false
      };
    },
    watch: {
      isFocus(newValue) {
        let that = this;
        if (newValue) {
          setTimeout(() => {
            that.$refs.search.focus();
          }, 200);
        }
      },
      filterOpen(newValue) {
        if (newValue) {
          this.classOpen = false
        }
      },
      classOpen(newValue) {
        if (newValue) {
          this.filterOpen = false
        }
      }
    },
    computed: {
      searchFocus() {
        return this.keyword.length;
      },
      formatStart() {
        if (this.startDone) {
          return moment(this.startTime).format('YYYY-MM-DD')
        } else {
          return '开始时间'
        }
      },
      formatEnd() {
        if (this.endDone) {
          return moment(this.endTime).format('YYYY-MM-DD')
        } else {
          return '结束时间'
        }
      },
      timeBtnClass() {
        return (this.endDone && this.startDone) || this.selectTimer != -1
      },
      minDate() {
        if (!this.startDone) {
          return moment('2008-01-01').toDate()
        } else {
          return this.startTime
        }
      },
      maxDate() {
        if (!this.endDone) {
          return moment(new Date()).toDate()
        } else {
          return this.endTime
        }
      }
    },
    methods: {
      setHeaderHeight(value) {
        this.filterTop = value + 100 / 75 + "rem"
        this.topHeight = value
      },
      closeSearch() {
        this.showSearch = false
        this.keyword = ""
      },
      startOpen() {
        this.startPop = true
        if (!this.startDone) {
          this.startTime = moment(new Date()).subtract(1, 'months').toDate()
        }
      },
      startCancel() {
        this.startTime = null
        this.startDone = false
        this.startPop = false
      },
      startConfirm() {
        this.startDone = true
        this.startPop = false
      },
      endOpen() {
        this.endPop = true
        if (!this.endDone) {
          this.endTime = new Date()
        }
      },
      endCancel() {
        this.endTime = null
        this.endDone = false
        this.endPop = false
      },
      endConfirm() {
        this.endDone = true
        this.endPop = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .income-container {
    width: 100%;
    position: relative;
    padding-top: 100px;
    background: #f0f0f0;
    min-height: 100%;
  }

  .filter-bar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
    height: 100px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #efefef;

    @include clearfix;

    .filter-item {
      height: 100px;
      width: 120px;
      float: left;
      text-align: center;
      padding-right: 15px;
      color: #999;
      font-size: 28px;
      position: relative;
      line-height: 104px;
      transition: color 0.2s;

      .iconfont {
        display: block;
        font-size: 12px;
        line-height: 12px;
        position: absolute;
        color: #999;
        top: 44px;
        right: 18px;
        transition: transform 0.2s;
      }

      &.active {
        color: $fy;

        .iconfont {
          transform: rotate(180deg);
        }
      }

      &.btn-search {
        float: right;

        &:before {
          display: block;
          position: absolute;
          content: "";
          width: 1px;
          height: 30px;
          background: #999;
          top: 35px;
          left: 0;
          transform: scaleX(0.5);
        }
      }
    }
  }

  .search-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 2px;
    background: #fff;
    padding: 14px 25px;
    padding-right: 145px;
    z-index: 0;

    input {
      border: 0;
      text-align: center;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("../../assets/images/icon_sousuo.png");
      background-repeat: no-repeat;
      font-size: 28px;
      line-height: 72px;
      background-size: 36px auto;
      background-position-y: center;
      background-position-x: 170px;
      background-color: #f0f0f0;
      border-radius: 10px;
      padding-left: 30px;

      &.focus {
        padding-left: 70px;
        text-align: left;
        padding-right: 20px;
        background-position-x: 20px;
      }
    }

    .btn-cancel {
      width: 145px;
      height: 100px;
      line-height: 104px;
      position: absolute;
      right: 0;
      top: 0;
      text-align: center;
      font-size: 28px;
      color: #999;
    }
  }

  .filter-pop {
    position: absolute;
    padding: 0 25px;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 51;
    background: #fff;

    .time-line {
      padding: 40px 0;
      @include clearfix;

      .item {
        padding: 0 35px;
        background: #f0f0f0;
        float: left;
        font-size: 24px;
        color: #999;
        line-height: 58px;
        height: 56px;
        margin-right: 20px;
        border-radius: 5px;
        position: relative;

        &.active {
          background: #ffe150;
          color: #333;
        }

        &.start-time {
          &:after {
            content: '';
            display: block;
            width: 8px;
            height: 1px;
            /* no */
            background: #adadad;
            position: absolute;
            right: -14px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }

    .time-label {
      font-size: 24px;
      line-height: 1;
    }
  }

  .income-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.2);
  }

  .class-pop {
    background: #fff;
    position: relative;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 51;
    padding: 40px 25px;
    padding-bottom: 0;

    .class-block {
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 40px;

      .item {
        display: inline-block;
        width: 100px;
        margin-right: 30px;
        text-align: center;
        line-height: 1;
        font-size: 24px;

        .icon {
          width: 100px;
          height: 100px;
          background: #f5f5f5;
          background-image: url('../../assets/images/icon/shouyi.png');
          background-repeat: no-repeat, repeat;
          background-size: 100px auto, 100px 100px;
          border-radius: 10px;
          margin-bottom: 20px;

          @for $i from 1 through 5 {
            &.icon-#{$i} {
              background-position-y: ($i - 1) * -100px;
            }
          }

        }

        &.active {
          .icon {
            background-image: url('../../assets/images/icon/shouyi_active.png');
            background-color: #333;
          }
        }

        &:last-child {
          margin: 0;
        }
      }
    }
  }

  .notes-list {
    background: #f0f0f0;

    .item {
      width: 100%;
      height: 190px;
      background: #fff;
      margin-bottom: 15px;

      .one-line {
        line-height: 80px;
        font-size: 24px;
        color: #adadad;
        padding-left: 64px;
        position: relative;
        padding-right: 25px;

        span {
          float: right;
        }

        &::before {
          display: block;
          content: '';
          width: 20px;
          height: 20px;
          background: #ffe04e;
          border-radius: 50%;
          position: absolute;
          left: 26px;
          top: 30px;
        }
      }

      .tow-line {
        @include clearfix;
        height: 70px;
        padding-left: 60px;

        .get-type {
          float: left;
          padding-left: 90px;
          position: relative;
          height: 70px;

          img {
            width: 70px;
            height: 70px;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            object-fit: contain;

            &.img-head {
              border-radius: 50%;
            }
          }

          .type-name {
            font-size: 28px;
            color: #333;
            line-height: 1;
            position: absolute;
            left: 90px;
            top: 0;
            white-space: nowrap;

            &.one {
              line-height: 70px;
            }
          }

          .type-tip {
            line-height: 1;
            font-size: 22px;
            color: #adadad;
            bottom: 0;
            left: 90px;
            position: absolute;
            white-space: nowrap;

            .tip-question {
              .iconfont {
                font-size: 24px;
                vertical-align: -1px;
              }
            }

            .n-text+.tip-question {
              padding-left: 20px;
            }
          }
        }

        .get-money {
          float: right;
          line-height: 70px;
          font-size: 28px;
          color: #adadad;
          padding-right: 25px;

          span {
            color: #333;

            &.add {
              color: #ff4463;
            }
          }
        }
      }
    }
  }
</style>