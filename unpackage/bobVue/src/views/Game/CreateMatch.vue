<template>
  <ThePage color="#f2f2f2" contentBg="#070031">
    <template slot="headerContent">
      创建自定义比赛
      <div class="bottom-create" @click="$router.push('/game/creatematch')">确认创建</div>
    </template>
    <template slot="content">
      <div class="jiangbei-common">
        <img src="../../assets/images/game/jiangbei_big.png" class="jiangbei">
        <div class="jiangbei-main">
          <div class="common-title"><span>比赛开始设置</span>
            <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
          </div>
          <div class="title-bottom-tip">未达到比赛报名人数，比赛自动取消，已报名金额退还</div>

          <div class="common-title"><span>选择比赛时间</span></div>
          <div class="item-content">
            <div class="center-line"></div>
            <div class="btn-item item" :class="[startDone?'border':'color']" @click="startOpen">{{formatStart}}</div>
            <div class="btn-item item" :class="[endDone?'border':'color']" @click="endOpen">{{formatEnd}}</div>
          </div>

          <div class="common-title"><span>最低报名人数</span>
            <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
          </div>
          <div class="item-content">
            <div class="btn-item item" :class="[minJoin!=-1?'border':'color']" @click="showMinJoin = true">{{minJoinText}}</div>
          </div>

          <div class="common-title"><span>选择比赛游戏</span>
            <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
          </div>
          <div class="title-bottom-tip">一个比赛可以选择2-3款参赛游戏，排名取总分</div>
          <div class="item-content">
            <div class="btn-item color item">点击选择</div>
          </div>

          <div class="common-title"><span>选择比赛入场门票</span>
            <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
          </div>
          <div class="title-bottom-tip">单张参赛门票需消耗100金豆</div>
          <div class="item-content">
            <div class="btn-item item" :class="[joinBeen?'border':'color']" @click="showSelectBeen = true">{{beenText}}</div>
          </div>

          <div class="common-title"><span>选择奖励类型</span>
            <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
          </div>
          <div class="item-content">
            <div class="btn-item item" :class="[giveType?'border':'color']" @click="showSelectGive = true">{{giveTypeText}}</div>
          </div>

          <template v-if="giveType == 0">
            <div class="common-title"><span>选择奖金比例</span>
              <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
            </div>
            <div class="title-bottom-tip">可选比例不能超过80%，比赛结束将按照比例下发。</div>
            <div class="list-content">
              <div class="line">
                <div class="line-label item">第一名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
              <div class="line">
                <div class="line-label item">第二名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
              <div class="line">
                <div class="line-label item">第三名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
              <div class="line">
                <div class="line-label item">您将获得：</div>
                <div class="btn-item border no-active item">10%</div>
              </div>
            </div>
          </template>
          <template v-else-if="giveType == 1">
            <div class="common-title"><span>选择实物奖品</span>
              <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
            </div>
            <div class="title-bottom-tip">创建比赛后将扣除相应商品金豆</div>
            <div class="list-content">
              <div class="line">
                <div class="line-label item">第一名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
              <div class="line">
                <div class="line-label item">第二名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
              <div class="line">
                <div class="line-label item">第三名：</div>
                <div class="btn-item color item">点击选择</div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="common-title"><span>选择自定义奖品</span>
              <div class="tip-icon"><i class="iconfont icon-wenhaoshi"></i></div>
            </div>
            <div class="title-bottom-tip">输入奖品名称且上传相应图片，奖品需自主发放</div>
            <div class="list-content">
              <div class="line two">
                <div class="line-label item">第一名：</div>
                <div class="btn-item color item">奖品名称</div>
                <div class="btn-item color item">详情图片</div>
              </div>
              <div class="line two">
                <div class="line-label item">第二名：</div>
                <div class="btn-item color item">奖品名称</div>
                <div class="btn-item color item">详情图片</div>
              </div>
              <div class="line two">
                <div class="line-label item">第三名：</div>
                <div class="btn-item color item">奖品名称</div>
                <div class="btn-item color item">详情图片</div>
              </div>
            </div>
          </template>
        </div>
        <div class="bottom-help">
          <div class="title">说明</div>
          <div class="content">
            <p>专属比赛是BOB游戏平台提供给用户的专属游戏系统，用户可以使用该系统自行创建比赛，邀请好友参赛，使用该系统需有以下注意事项。</p>
            <p>1、如专属比赛正常结束，平台方需扣除门票总金额的20%作为维护费用，其余额度将发放给中奖用户及比赛创建者。</p>
            <p>2、如选择实物奖品作为奖励，中奖用户确定领取后，平台方将自主发货给中奖用户。</p>
            <p>3、如选择自定义比赛奖品，比赛创建者需自行提供的自定义比赛奖品，且需真实有效。</p>
            <p>4、比赛未成功举办，门票将会退还到用户的可提现金额，用户可自主提现到支付宝。</p>
            <p>5、自行创建的专属比赛只有使用专属的邀请链接或二维码邀请的用户可见。</p>
          </div>
        </div>

        <!-- 选择比赛时间 -->
        <van-popup v-model="startPop" position="bottom" :close-on-click-overlay="false">
          <DatetimePicker v-model="startTime" type="datetime" :min-date="new Date()" title="选择开始时间" @cancel="startCancel" @confirm="startConfirm"></DatetimePicker>
        </van-popup>
        <van-popup v-model="endPop" position="bottom" :close-on-click-overlay="false">
          <DatetimePicker v-model="endTime" type="datetime" :min-date="minDate" :max-date="maxDate" title="选择结束时间" @cancel="endCancel" @confirm="endConfirm"></DatetimePicker>
        </van-popup>
        <!-- 选择最低报名人数 -->
        <van-popup v-model="showMinJoin" position="bottom" :close-on-click-overlay="false">
          <van-picker :columns="minJoinColumns" show-toolbar title="选择最低报名人数" @confirm="onMinJoinConfirm" @cancel="showMinJoin = false"></van-picker>
        </van-popup>
        <!-- 选择比赛入场门票 -->
        <van-popup v-model="showSelectBeen" position="bottom" :close-on-click-overlay="false">
          <van-picker :columns="joinBeenColumns" show-toolbar title="选择比赛入场门票" @confirm="onBeenConfirm" @cancel="showSelectBeen = false"></van-picker>
        </van-popup>
        <!-- 选择奖励类型 -->
        <van-popup v-model="showSelectGive" position="bottom" :close-on-click-overlay="false">
          <van-picker :columns="giveColumns" show-toolbar title="选择奖励类型" @confirm="onGiveConfirm" @cancel="showSelectGive = false"></van-picker>
        </van-popup>

        <GamePop v-model="selectGame" btnType="two">
          <template slot="title">

          </template>
          <template slot="content">
            <div class="content-alert">

            </div>
          </template>
          <template slot="btn">
            <div class="item">取消</div>
            <div class="item">确定</div>
          </template>
        </GamePop>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { Popup, Picker, DatetimePicker, Toast } from 'vant';
  import moment from "moment";

  // let beenNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50]
  export default {
    components: {
      'van-popup': Popup,
      'van-picker': Picker,
      DatetimePicker
    },
    data() {
      return {
        //开始结束时间
        startPop: null,
        startTime: null,
        startDone: false,
        endPop: null,
        endTime: null,
        endDone: false,
        endMax: new Date(),
        //最低报名人数
        showMinJoin: false,
        minJoin: -1,
        minJoinColumns: ['10人', '20人', '30人', '40人', '50人', '60人', '70人', '80人', '90人', '100人'],
        //选择比赛游戏
        selectGame: false,
        //比赛门票
        showSelectBeen: false,
        joinBeen: 0,
        joinBeenColumns: [
        {
          values: ['免费参加', '100金豆', '200金豆', '300金豆', '400金豆', '500金豆', '600金豆', '700金豆', '800金豆', '900金豆', '1000金豆', '2000金豆', '3000金豆', '4000金豆', '5000金豆'],
          defaultIndex: 0
        }],
        //奖励类型
        showSelectGive: false,
        giveType: 0,
        giveColumns: [{
          values: ['奖金比例', '实物奖品', '自定义奖品'],
          defaultIndex: 0
        }]
      }
    },
    computed: {
      minJoinText() {
        if (this.minJoin < 0) {
          return '点击选择'
        } else {
          return this.minJoinColumns[this.minJoin]
        }
      },
      beenText() {
        return this.joinBeenColumns[0].values[this.joinBeen]
      },
      giveTypeText() {
        return this.giveColumns[0].values[this.giveType]
      },
      formatStart() {
        if (this.startDone) {
          return moment(this.startTime).format('YYYY-MM-DD HH:mm')
        } else {
          return '开始时间'
        }
      },
      formatEnd() {
        if (this.endDone) {
          return moment(this.endTime).format('YYYY-MM-DD HH:mm')
        } else {
          return '结束时间'
        }
      },
      minDate() {
        return this.startTime
      },
      maxDate() {
        return moment(this.startTime).add(7, 'days').toDate()
      }
    },
    methods: {
      onMinJoinConfirm(value, index) {
        this.minJoin = index
        this.showMinJoin = false
      },
      onBeenConfirm(value, index) {
        this.joinBeen = index[0]
        this.showSelectBeen = false
      },
      onGiveConfirm(value, index) {
        this.giveType = index[0]
        this.showSelectGive = false
      },

      startOpen() {
        this.startPop = true
        if (!this.startDone) {
          this.startTime = new Date()
        }
      },
      startCancel() {
        // this.startTime = null
        // this.startDone = false
        this.startPop = false
      },
      startConfirm() {
        this.startDone = true
        this.startPop = false
      },
      endOpen() {
        if (!this.startDone) {
          Toast('请先选择开始时间')
          return false
        }
        this.endPop = true
        if (!this.endDone) {
          this.endTime = new Date()
        }
      },
      endCancel() {
        // this.endTime = null
        // this.endDone = false
        this.endPop = false
      },
      endConfirm() {
        this.endDone = true
        this.endPop = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .jiangbei-common {
    width: 100%;
    padding: 25px;
    padding-top: 185px;
    position: relative;
    background: url('../../assets/images/game/common_page_bg.png') no-repeat;
    background-position: center top;
    background-size: 640px auto;
    padding-bottom: 125px;

    .jiangbei {
      height: 225px;
      position: absolute;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 120;
    }

    .jiangbei-main {
      border-radius: 15px;
      background: #fff;
      padding: 75px;
      padding-top: 90px;
      padding-bottom: 60px;
      position: relative;

      .common-title {
        text-align: center;
        height: 70px;
        line-height: 72px;
        margin-bottom: 10px;
        position: relative;

        .tip-icon {
          width: 70px;
          height: 70px;
          position: absolute;
          right: -25px;
          top: 0;

          i {
            color: #070031;
            font-size: 32px;
          }
        }

        >span {
          display: inline-block;
          height: 100%;
          position: relative;
          font-size: 32px;
          font-weight: bold;
          color: #070031;

          &::before {
            display: block;
            width: 14px;
            height: 14px;
            background: #070031;
            content: '';
            position: absolute;
            left: -35px;
            top: 28px;
            transform: rotate(45deg);
          }

          &::after {
            display: block;
            width: 14px;
            height: 14px;
            background: #070031;
            content: '';
            position: absolute;
            right: -35px;
            top: 28px;
            transform: rotate(45deg);
          }
        }
      }

      .title-bottom-tip {
        text-align: center;
        line-height: 1;
        font-size: 22px;
        color: #a4a3ac;
        margin-bottom: 30px;
      }

      .item-content {
        display: flex;
        margin-bottom: 50px;
        position: relative;

        .center-line {
          display: block;
          width: 30px;
          height: 4px;
          background: #ccc;
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 38px;
        }
      }

      .list-content {
        .line {
          display: flex;
          margin-bottom: 30px;

          &.two {
            .item {
              margin-right: 30px;

              &:before {
                display: none;
              }

              &:last-child {
                margin-right: 0;
              }
            }

            .line-label {
              flex: .6;
            }
          }

          .line-label {
            flex: .5;
            text-align: left;
            font-weight: bold;
          }
        }
      }

      .item {
        height: 80px;
        line-height: 82px;
        border-radius: 40px;
        text-align: center;
        font-size: 28px;
        color: #070031;
      }

      .color {
        background: $by;
        @include tapColor;
      }

      .border {
        border: 1px solid #ccc;
        @include tapMask;
        overflow: hidden;

        &.no-active {
          &:after {
            display: none;
          }
        }
      }

      .btn-item {
        flex: 1;
        margin-right: 50px;
        position: relative;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .bottom-help {
      margin-top: 25px;
      width: 100%;
      background: #39335a;
      color: #fff;
      padding: 25px;
      border-radius: 15px;

      .title {
        font-size: 32px;
        font-weight: bold;
        line-height: 66px;
        text-align: center;
      }

      .content {
        font-size: 22px;
        line-height: 30px;
        padding-top: 20px;

        p {
          padding-bottom: 10px;
        }
      }
    }
  }

  .bottom-create {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #fe6f49;
    color: #fff;
    line-height: 102px;
    height: 100px;
    font-size: 30px;
    @include tapColor;
  }
</style>