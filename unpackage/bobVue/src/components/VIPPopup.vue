<template>
  <Popup :value="value" @input="popCtrl" :maskClose="false">
    <div class="vippop-container">
      <i class="iconfont icon-guanbi" @click="$emit('input', false)"></i>
      <div class="card-block" :class="['card-'+(level?level:1)]">
        <div class="label-vip" :class="['vip-'+(level?level:1)]">{{vipName[level?level:1]}}</div>
      </div>
      <div class="main-block">
        <div class="main-title" v-if="!level">您需要先成为会员才能提现</div>
        <div class="main-title" v-else>您需要先续费会员卡才能提现</div>
        <div class="power-list" :class="['v'+level]">
          <template v-if="level == 1 || !level">
            <div class="item">
              <div class="icon icon-0"></div>
              <div class="title">25%分享奖金</div>
              <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-1"></div>
              <div class="title">8%复充奖金</div>
              <div class="content">直接获取邀请的玩家首次充值之后的每次充值8%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-2"></div>
              <div class="title">15%充值增益</div>
              <div class="content">免费获得充值对应金豆数额之外15%的金豆数量增益</div>
            </div>
          </template>
          <template v-if="level == 2">
            <div class="item">
              <div class="icon icon-0"></div>
              <div class="title">30%分享奖金</div>
              <div class="content">邀请其他玩家进入平台消费，拿首次充值金额30%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-1"></div>
              <div class="title">12%复充奖金</div>
              <div class="content">直接获取邀请的玩家首次充值之后的每次充值12%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-2"></div>
              <div class="title">6%间接分享奖金</div>
              <div class="content">直接获得自己邀请玩家再邀请的玩家每次充值6%现金奖励</div>
            </div>
          </template>
          <template v-if="level == 3">
            <div class="item">
              <div class="icon icon-0"></div>
              <div class="title">35%分享奖金</div>
              <div class="content">邀请其他玩家进入平台消费，拿首次充值金额35%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-1"></div>
              <div class="title">12%团队奖金</div>
              <div class="content">直接获取自己全部下级充值金额12%的现金奖励（直推从复充开始计算）</div>
            </div>
            <div class="item">
              <div class="icon icon-2"></div>
              <div class="title">6%直接团队奖金</div>
              <div class="content">直接获得自己邀请玩家每次复充金额6%的现金奖励</div>
            </div>
          </template>
          <template v-if="level == 4 || level == 5">
            <div class="item">
              <div class="icon icon-0"></div>
              <div class="title">40%分享奖金</div>
              <div class="content">邀请其他玩家进入平台消费，拿首次充值金额40%现金奖励</div>
            </div>
            <div class="item">
              <div class="icon icon-1"></div>
              <div class="title">14%团队奖金</div>
              <div class="content">直接获取自己全部下级充值金额14%的现金奖励（直推从复充开始计算）</div>
            </div>
            <div class="item">
              <div class="icon icon-2"></div>
              <div class="title">7%直接团队奖金</div>
              <div class="content">直接获得自己邀请玩家每次复充金额7%的现金奖励</div>
            </div>
          </template>
        </div>
        <div class="btn-block">
          <div class="item" v-if="!level">成为会员</div>
          <div class="item" v-else>立即续费</div>
          <!-- <div class="item" @click="$router.push('/my/mypower/'+level)">查看更多权益</div> -->
        </div>
      </div>
    </div>
  </Popup>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      state: {
        type: Boolean,
        default: false
      },
      level: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {
        vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"]
      }
    },
    methods: {
      popCtrl(v) {
        this.$emit('input', v)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .label-vip {
    height: 40px;
    background-position: left center;
    background-size: auto 100%;
    background-color: #333;
    color: #fff;
    padding-left: 50px;
    padding-right: 8px;
    line-height: 42px;
    font-size: 24px;
    position: absolute;
    border-radius: 5px;
    right: 30px;
    top: 30px;
  }

  .vippop-container {
    position: relative;
    padding-top: 115px;
    width: 600px;

    .iconfont {
      width: 100px;
      height: 100px;
      display: block;
      position: absolute;
      right: -50px;
      top: 0;
      color: #fff;
      text-align: center;
      font-size: 48px;
    }

    .card-block {
      width: 500px;
      position: absolute;
      height: 230px;
      top: 0;
      left: 50px;
      overflow: hidden;
      border-radius: 15px;
      background-size: 100% auto;
      background-image: url("../assets/images/my/card_4.png");

      @for $i from 0 through 4 {
        &.card-#{$i} {
          background-image: url("../assets/images/my/card_#{$i}.png");
        }
      }
    }

    .main-block {
      background: #fff;
      border-radius: 15px;
      width: 100%;
      padding: 120px 40px 50px 40px;

      .main-title {
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        line-height: 92px;
        height: 90px;
        position: relative;

        &:after {
          display: block;
          content: '';
          width: 50px;
          height: 5px;
          background: #ffe640;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .power-list {
        padding: 0 10px;

        .item {
          margin-top: 40px;
          position: relative;
          padding-left: 95px;

          .icon {
            position: absolute;
            left: -2px;
            top: -2px;
            width: 80px;
            height: 80px;
            background-size: 80px auto;
            background-image: url('../assets/images/my/pwoer_icon_v4.png');
            background-repeat: no-repeat;

            @for $i from 0 through 20 {
              &.icon-#{$i} {
                background-position-y: $i * -80px
              }
            }
          }

          .title {
            line-height: 34px;
            font-size: 26px;
            font-weight: bold;
          }

          .content {
            padding-top: 5px;
            font-size: 22px;
            color: #adadad;
          }
        }

        @for $i from 0 through 4 {
          &.v#{$i} {
            .icon {
              background-image:url('../assets/images/my/pwoer_icon_v#{$i}.png');
            }
          }
        }
      }

      .btn-block {
        width: 100%;
        height: 80px;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;

        .item {
          width: 100%;
          height: 80px;
          border-radius: 40px;
          background: #333;
          color: #fff;
          font-size: 30px;
          line-height: 82px;
          text-align: center;
          @include tapColor;
        }
      }
    }
  }
</style>