<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      联系我们
    </template>
    <template slot="content">
      <div class="contact-container">
        <div class="head-box" :text="vText">
          <img src="../../assets/images/my/logo.jpg">
        </div>
        <div class="contact-list">
          <div class="item" v-clipboard:copy="QQ" v-clipboard:success="onQQCopy" v-clipboard:error="onError">
            <div class="item-main">
              <div class="text">客服QQ</div>
              <div class="right-value">3263227748</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" v-clipboard:copy="qun" v-clipboard:success="onQunCopy" v-clipboard:error="onError">
            <div class="item-main">
              <div class="text">官方玩家群</div>
              <div class="right-value">427925029</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" v-clipboard:copy="QQ" v-clipboard:success="onQQCopy" v-clipboard:error="onError">
            <div class="item-main">
              <div class="text">商务合作</div>
              <div class="right-value">3263227748</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" v-clipboard:copy="link" v-clipboard:success="onLinkCopy" v-clipboard:error="onError">
            <div class="item-main">
              <div class="text">官方网址</div>
              <div class="right-value">https://www.bobgame.cn</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="$router.push('/my/feedback')">
            <div class="item-main">
              <div class="text">意见反馈</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="$router.push('/my/rule')">
            <div class="item-main">
              <div class="text">用户协议</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-bottom-tip"><i class="iconfont icon-dingwei"></i>浙江
        神网游网络科技有限公司</div>
    </template>
  </ThePage>
</template>

<script>
  import { Toast } from "vant";
  export default {
    data() {
      return {
        vText: '波波游戏 v3.0',
        QQ: '3263227748',
        qun: '427925029',
        link: 'https://www.bobgame.cn'
      }
    },
    methods: {
      onQQCopy() {
        Toast('客服QQ已复制，请打开QQ添加客服')
      },
      onQunCopy() {
        Toast('官方玩家群号已复制，请打开QQ加入')
      },
      onLinkCopy() {
        Toast('官方网址已复制，可粘贴到浏览器地址栏')
      },
      onError() {
        Toast('复制失败，麻烦您手打一下~')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .contact-bottom-tip {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    line-height: 110px;
    color: #ccc;

    .iconfont {
      font-size: 28px;
      vertical-align: -3px;
    }
  }

  .contact-container {
    position: relative;
    z-index: 10;

    .head-box {
      width: 100%;
      height: 360px;
      background: #fcdd4b;
      padding-top: 74px;
      text-align: center;
      position: relative;

      &::after {
        display: block;
        content: attr(text);
        background: #feeea5;
        position: absolute;
        width: 200px;
        height: 44px;
        line-height: 48px;
        border-radius: 50px;
        top: 250px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 22px;
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 25px;
      }
    }
  }

  .contact-list {
    background: #fff;
    overflow: hidden;

    .item {
      height: 100px;
      width: 100%;
      position: relative;
      padding: 0 25px;
      @include tapMask;


      .item-main {
        height: 100%;
        position: relative;
        padding-right: 40px;

        @include clearfix;
        @include onePXlineBottom;
      }


      .text {
        font-size: 28px;
        color: #333;
        float: left;
        height: 100%;
        overflow: hidden;
        line-height: 104px;
        padding-left: 5px;
      }

      .right-value {
        float: right;
        height: 100%;
        line-height: 104px;
        overflow: hidden;
        font-size: 28px;
        // color: #ccc;
      }

      .iconfont.icon-you {
        font-size: 36px;
        color: #ccc;
        position: absolute;
        line-height: 100px;
        bottom: 0;
        right: 0;
      }

      .tip {
        position: absolute;
        background: #ff394e;
        color: #fff;
        font-size: 18px;
        line-height: 1;
        padding: 5px 8px;
        border-radius: 0 0 15px 0;
        left: 140px;
        top: 50%;
        transform: translateY(-50%);
      }

      &:last-child {
        .item-main:before {
          display: none;
        }
      }
    }
  }
</style>