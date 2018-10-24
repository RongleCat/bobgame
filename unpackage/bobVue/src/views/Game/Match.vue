<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      比赛场
    </template>
    <template slot="content">
      <div class="game-home-container">
        <div class="head-top">
          <div class="head-img" :style="{backgroundImage:'url(' + headUrl + ')'}"></div>
          <div class="user-info">
            <div class="user-name vip-5">{{userInfo.nickname}}</div>
            <div class="bean-block" @click="$router.push('/my/recharge')">{{userInfo.jifen}}
              <div class="iconfont icon-add"></div>
            </div>
            <div class="ticket-block">门票：10</div>
          </div>
        </div>
        <div class="top-bg-block">
          <div class="tip-help" @click="showHelp = true"><i class="iconfont icon-info"></i>规则</div>
          <div class="btn-item left" @click="$router.push('/game/mymatchnote')">我的参赛记录</div>
          <div class="btn-item right" @click="$router.push('/game/officialmatchnote')">官方比赛纪录</div>
        </div>
        <div class="game-list">
          <div class="block-title">自定义比赛</div>
          <GameItem :personal="true"></GameItem>
          <GameItem :personal="false"></GameItem>
          <GameItem :personal="true"></GameItem>
          <GameItem :personal="false"></GameItem>
          <div class="block-title">官方比赛</div>
          <GameItem :personal="true"></GameItem>
          <GameItem :personal="false"></GameItem>
          <GameItem :personal="true"></GameItem>
          <GameItem :personal="false"></GameItem>
        </div>
        <Help v-model="showHelp">
          <template slot="title">
            比赛场规则
          </template>
          <template slot="content">
            1、比赛场将按照固定时间进行开放，开启后可进行游戏<br>
            2、比赛场每期将会更换不同奖励及游戏<br>
            3、比赛场入场需要消耗门票<br>
            4、比赛场如未达到最低报名人数，比赛取消将返回门票<br>
            5、比赛场获得奖品后，请到我的页面点击领奖
          </template>
        </Help>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import GameItem from "@/components/GameItem.vue";
  export default {
    components: {
      GameItem
    },
    data() {
      return {
        showHelp: false
      }
    },
    computed: {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-home-container {
    .head-top {
      height: 136px;
      padding-left: 25px;
      width: 100%;
      background: #070031;
      position: relative;

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
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        padding-top: 48px;
        width: 100%;
        padding-left: 140px;

        .user-name {
          color: #fff;
          font-size: 26px;
          line-height: 32px;
          font-weight: bold;
          margin-bottom: 14px;
          text-align: left;
          padding-left: 7px;
          padding-right: 32px;
          background-size: 24px auto;
          background-position: right center;
          position: absolute;
          top: 0;
          left: 140px;
          white-space: nowrap;
        }

        .bean-block {
          height: 44px;
          background-color: #39335a;
          border-radius: 22px;
          color: #fff;
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
          position: relative;
          padding-right: 48px;

          .iconfont {
            position: absolute;
            width: 36px;
            height: 36px;
            right: 4px;
            top: 4px;
            background: #adadad;
            color: #fff;
            border-radius: 50%;
            font-size: 24px;
            text-align: center;
            line-height: 36px;
          }
        }

        .ticket-block {
          position: absolute;
          bottom: 0;
          right: 25px;
          height: 44px;
          line-height: 46px;
          background-color: #39335a;
          border-radius: 22px;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
          padding: 0 15px;
        }
      }
    }

    .top-bg-block {
      width: 100%;
      height: 540px;
      background: #070031 url('../../assets/images/game/home_top_bg.png') no-repeat;
      background-size: 100% auto;
      color: #fff;
      position: relative;

      .tip-help {
        height: 60px;
        padding: 0 20px 0 16px;
        background: rgba(255, 255, 255, .2);
        font-size: 26px;
        border-radius: 30px 0 0 30px;
        line-height: 62px;
        position: absolute;
        right: 0;
        top: 40px;
        @include tapColor;

        .iconfont {
          font-size: 28px;
          margin-right: 14px;
        }
      }

      .btn-item {
        width: 50%;
        position: absolute;
        bottom: 15px;
        line-height: 82px;
        text-align: center;
        height: 80px;
        font-size: 26px;

        &.left {
          left: 0;

          &:after {
            display: block;
            content: '';
            width: 2px;
            height: 26px;
            background: rgba(255, 255, 255, .2);
            right: -1px;
            position: absolute;
            top: 27px;
          }
        }

        &.right {
          right: 0;
        }
      }
    }

    .block-title {
      font-size: 46px;
      color: #333;

      font-weight: bold;
    }

    .game-list {
      padding: 0 25px;
    }
  }
</style>