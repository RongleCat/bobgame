<template>
  <ThePage color="#f2f2f2" contentBg="#333">
    <template slot="headerContent">
      分享赚钱
    </template>
    <template slot="content">
      <div class="share-container">
        <div class="share-main-block">
          <div class="btn-help">
            <i class="iconfont icon-wenhao"></i>
            帮助
          </div>
          <template v-if="!diy">
            <div class="btn-screen" @click="showScreen = true">场景筛选</div>
            <div class="btn-QC"><i class="iconfont icon-erweima"></i></div>
          </template>
          <div class="img-box">
            <img @click="startShare" :src="diy?'/img/share_diy_main.jpg':'https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share_demo.jpg'" class="main-img">
            <div class="view-bottom-tip" v-if="diy">
              请上传您设计好的推广海报图片
            </div>
            <div class="view-bottom-tip" v-else-if="!atApp">
              <i class="iconfont icon-shang"></i>长按上图保存图片，或发送给朋友
            </div>
            <div class="view-bottom-tip" v-else>
              <i class="iconfont icon-shang"></i>点击上图开始分享
            </div>
          </div>
        </div>
        <div class="bottom-block">
          <div class="select-pic" v-if="!diy && !reDiy">
            <div class="item" :style="{backgroundImage:`url('/img/share_diy.jpg')`}" @click="diy = true">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_01.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_02.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_03.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_01.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_02.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_03.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_01.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_02.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
            <div class="item" :style="{backgroundImage:`url('https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/share/share_03.jpg')`}">
              <i class="iconfont icon-dagou"></i>
            </div>
          </div>
          <div class="diy-block" v-if="diy">
            <input type="file" name="diy" id="diy" ref="diy" class="upload-diy">
            <div class="one-line">
              <div class="item" @click="diy = false">返回</div>
              <div class="item" @click="uploadDiy">上传图片</div>
            </div>
            <div class="two-line">
              1.上传您设计好的推广海报图片，尺寸为<span>1136×640px</span><br>
              2.上传成功后即可生成自定义推广图。
            </div>
          </div>
        </div>
      </div>
      <van-popup v-model="showScreen" position="bottom" :close-on-click-overlay="false">
        <div class="screen-block">
          <div class="list-title">请选择应用场景
            <div class="btn-close" @click="showScreen = false"><i class="iconfont icon-fullclose"></i></div>
          </div>
          <div class="list-block">
            <div class="item">
              全部
            </div>
            <div class="item">
              出租车
            </div>
            <div class="item">
              宝妈
            </div>
            <div class="item">
              学生
            </div>
            <div class="item">
              老师
            </div>
            <div class="item">
              银行
            </div>
            <div class="item">
              办公室
            </div>
            <div class="item">
              骑车
            </div>
            <div class="item">
              出租车
            </div>
            <div class="item">
              宝妈
            </div>
            <div class="item">
              学生
            </div>
            <div class="item">
              老师
            </div>
            <div class="item">
              银行
            </div>
            <div class="item">
              办公室
            </div>
            <div class="item">
              骑车
            </div>
            <div class="item">
              出租车
            </div>
            <div class="item">
              宝妈
            </div>
            <div class="item">
              学生
            </div>
            <div class="item">
              老师
            </div>
            <div class="item">
              银行
            </div>
            <div class="item">
              办公室
            </div>
            <div class="item">
              骑车
            </div>
          </div>
        </div>
      </van-popup>
    </template>
  </ThePage>
</template>

<script>
  import { Toast, Popup } from "vant";
  export default {
    components: { 'van-popup': Popup },
    data() {
      return {
        atApp: false,
        diy: false,
        reDiy: false,
        showScreen: false
      }
    },
    methods: {
      uploadDiy() {
        this.$refs.diy.dispatchEvent(new MouseEvent('click'))
      },
      startShare() {
        let that = this
        if (that.atApp) {
          Toast('APP内分享')
        }
        return false
      }
    },
    mounted() {
      let that = this
      that.$atApp(() => {
        that.atApp = true
      })
    }
  }
</script>

<style lang="scss" scoped>
  .share-container {
    height: 100%;
    overflow: hidden;
    position: relative;
    padding-bottom: 220px;

    .bottom-block {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 220px;
      background: #fff;
    }

    .select-pic {
      width: 100%;
      height: 100%;
      padding: 50px;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;

      .item {
        display: inline-block;
        width: 120px;
        height: 120px;
        background-size: 100%;
        margin-left: 30px;
        position: relative;
        background-repeat: no-repeat;
        border-radius: 15px;
        overflow: hidden;
        @include tapMask;

        .iconfont {
          display: block;
          position: absolute;
          width: 36px;
          height: 36px;
          background: #ff534b;
          color: #fff;
          font-size: 20px;
          line-height: 38px;
          text-align: center;
          border-radius: 50%;
          bottom: 6px;
          right: 6px;
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }

    .share-main-block {
      width: 100%;
      height: 100%;
      position: relative;

      .btn-help {
        height: 56px;
        font-size: 28px;
        color: #fff;
        position: absolute;
        right: 0;
        top: 70px;
        padding: 0 15px;
        line-height: 58px;
        background: #fe7436;
        border-radius: 30px 0 0 30px;
        @include tapColor;

        .iconfont {
          font-size: 32px;
          vertical-align: -2px;
        }
      }

      .view-bottom-tip {
        width: 100%;
        line-height: 70px;
        color: #fff;
      }
    }

    .btn-screen {
      width: 80px;
      height: 80px;
      bottom: 200px;
      right: 40px;
      border-radius: 50%;
      background: #fff;
      @include tapMask;
      position: absolute;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
      padding: 15px 10px;
      padding-left: 12px;
      line-height: 28px;
      letter-spacing: 4px;
    }

    .btn-QC {
      width: 80px;
      height: 80px;
      bottom: 80px;
      right: 40px;
      border-radius: 50%;
      background: #fff;
      @include tapMask;
      position: absolute;
      text-align: center;
      line-height: 83px;

      .iconfont {
        font-size: 48px;

      }
    }

    .img-box {
      height: 80%;
      max-height: 750px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .main-img {
        height: 100%;
        margin: 0 auto;
        display: block;
        border-radius: 15px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, .16);
      }

      .view-bottom-tip {
        white-space: nowrap;
        text-align: center;
        font-size: 24px;

        .iconfont {
          font-size: 28px;
          vertical-align: -2px;
        }
      }
    }

    .diy-block {
      width: 100%;
      height: 100%;
      padding: 25px;
      padding-bottom: 0;

      .one-line {
        @include clearfix;

        .item {
          width: 340px;
          margin-right: 20px;
          float: left;
          text-align: center;
          height: 70px;
          line-height: 74px;
          background: #f0f0f0;
          font-size: 28px;
          border-radius: 10px;
          overflow: hidden;
          color: #adadad;
          @include tapMask;

          &:last-child {
            margin-right: 0;
            background: $by;
            color: #333;
          }
        }
      }

      .two-line {
        font-size: 22px;
        color: #666;
        padding-top: 20px;
        line-height: 38px;

        span {
          color: $fy;
        }
      }
    }

    .upload-diy {
      display: none;
    }
  }

  .screen-block {
    background: #fff;
    border-radius: 30px 30px 0 0;
    padding-top: 100px;

    .list-title {
      line-height: 100px;
      font-size: 38px;
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      padding-left: 25px;

      .btn-close {
        right: 0;
        top: 0;
        width: 100px;
        height: 100px;
        text-align: center;
        @include tapMask;
        position: absolute;

        .iconfont {
          font-size: 40px;
        }
      }
    }

    .list-block {
      max-height: 384px;
      overflow-y: auto;
      padding-left: 25px;

      .item {
        width: 160px;
        height: 70px;
        background: #ededed;
        float: left;
        margin-right: 20px;
        margin-bottom: 26px;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
        border-radius: 10px;
        @include tapMask;

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
</style>