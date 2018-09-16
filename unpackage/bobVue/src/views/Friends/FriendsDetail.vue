<template>
  <ThePage color="#fff">
    <template slot="headerContent">
      <div class="head-name">
        <div class="name">傻子</div>
        <div class="status">当前在线</div>
      </div>
    </template>
    <template slot="content">
      <div class="chat-container" :class="[recordOpen?'open-record':'',faceOpen?'open-face':'',gameOpen?'open-game':'']">
        <div class="record-block">
          <div class="btn-record" @touchstart="startMic" @touchend="stopMic">
            <transition name="fade-in">
              <vCircle v-model="currentRate" :rate="circleValue" :speed="100" class="vue-circle" v-if="currentTime" />
            </transition>
            <i class="iconfont icon-yuyin" :style="{backgroundColor:recordBtnColor}"></i>
          </div>
          <div class="tip-text">
            {{tipText}}
          </div>
        </div>
        <div class="face-block">
          表情
        </div>
        <div class="game-block">
          游戏
        </div>
        <div class="chat-input">
          <div class="icon icon-01" @click="openSlide('record')"><i class="iconfont icon-yuyinzuo"></i></div>
          <textarea v-model="chatInput" @focus="chatFocus" @blur="chatBlur" :class="[chatClass]"></textarea>
          <div class="icon icon-02" @click="openSlide('game')"><i class="iconfont icon-gamepad"></i></div>
          <div class="icon icon-03" @click="openSlide('face')"><i class="iconfont icon-xiaolian"></i></div>
        </div>
        <!-- <div class="friend-info">
          <div class="btn-add"></div>
        </div> -->
        <div class="chat-main" ref="chatBlock" @click="closeAllSlide">
          <div class="chat-center-line">
            <div class="center-main">2018-09-16 20:32</div>
          </div>
          <div class="chat-line">
            <div class="battle-info-block">
              <div class="battle-head-block">
                <img :src="friendInfo.headimg">
                <img src="http://bobgame.cn/Uploads/Picture/2018-06-30/5b374f918199d.png">
              </div>
              <div class="top-block">
                <h3>一起聊天玩游戏吧~</h3>
                <h4>我们都爱玩的游戏</h4>
              </div>
              <div class="bottom-block">
                <div class="game-item">
                  <img src="http://bobgame.cn/Uploads/Picture/2018-09-12/5b98b0612b4e9.png">
                </div>
                <div class="game-item">
                  <img src="http://bobgame.cn/Uploads/Picture/2018-08-27/5b84002384301.jpg">
                </div>
                <div class="game-item">
                  <img src="http://bobgame.cn/Uploads/Picture/2018-08-22/5b7d267a247a5.png">
                </div>
              </div>
            </div>
          </div>
          <div class="chat-center-line">
            <div class="center-main">临时对话保留24小时，成为好友永久保留对话。</div>
          </div>
          <div class="chat-line">
            <div class="chat-item-left">
              <div class="head">
                <img :src="friendInfo.headimg" alt="">
              </div>
              <div class="text-content">
                哈喽~
              </div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-left">
              <div class="head">
                <img :src="friendInfo.headimg" alt="">
              </div>
              <div class="text-content">
                《守望先锋》官微宣布中国队在2018《守望先锋》世界杯泰国曼谷站的小组赛中，以小组第一的战绩顺利晋级八强，并将与另外七支晋级队伍一同登上2018暴雪嘉年华的舞台，争夺最终的冠军。
              </div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-right">
              <div class="head">
                <img src="http://bobgame.cn/Uploads/Picture/2018-06-30/5b374f918199d.png" alt="">
              </div>
              <div class="text-content">
                哈喽~
              </div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-left">
              <div class="head">
                <img :src="friendInfo.headimg" alt="">
              </div>
              <div class="text-content">
                哈喽~
              </div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-left">
              <div class="head">
                <img :src="friendInfo.headimg" alt="">
              </div>
              <div class="audio-content"><i class="iconfont icon-yuyinzuo"></i><span>50"</span></div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-right">
              <div class="head">
                <img src="http://bobgame.cn/Uploads/Picture/2018-06-30/5b374f918199d.png" alt="">
              </div>
              <div class="audio-content"><i class="iconfont icon-yuyinyou"></i><span>20"</span></div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-right">
              <div class="head">
                <img src="http://bobgame.cn/Uploads/Picture/2018-06-30/5b374f918199d.png" alt="">
              </div>
              <div class="text-content">
                《守望先锋》官微宣布中国队在2018《守望先锋》世界杯泰国曼谷站的小组赛中，以小组第一的战绩顺利晋级八强，并将与另外七支晋级队伍一同登上2018暴雪嘉年华的舞台，争夺最终的冠军。
              </div>
            </div>
          </div>
          <div class="chat-line">
            <div class="chat-item-left">
              <div class="head">
                <img :src="friendInfo.headimg" alt="">
              </div>
              <div class="game-content">
                <div class="game-title"></div>
                <div class="btn-status"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 好友页面
          <button class="btn-mic" @click="startMic">开始录音</button>
          <button class="btn-mic" @click="stopMic">停止录音</button>
          <div class="audio">
            <audio :src="audio" @canplay="playing"></audio>
            <span v-if="audio">{{recordTime}}</span>
          </div> -->
      </div>
    </template>
  </ThePage>
</template>

<script>
  import uploader from "../../unit/oss.js";
  import moment from "moment";
  import { Circle } from "vant";
  import ThePage from "@/components/ThePage";
  export default {
    components: { ThePage, vCircle: Circle },
    data() {
      return {
        luyin: null,
        audio: {},
        long: 0,
        chatInput: "点击输入内容",
        scrollValue: 0,
        recordOpen: false,
        faceOpen: false,
        gameOpen: false,
        currentRate: 0,
        currentTime: 0,
        currentPlayer: null,
        recordBtnColor: '#ccc',
        tipText: '长按开始录音',
        friendInfo: {
          headimg: 'http://bobgame.cn/Uploads/Picture/2018-08-13/5b711405a3680.jpg',
          name: '大宝贝儿',
          sex: 0,
          star: '金牛座',
          city: '浙江杭州'
        }
      };
    },
    computed: {
      chatClass() {
        return this.chatInput === "点击输入内容" ? "" : "not-empty";
      },
      circleValue() {
        if (this.currentTime === 0) {
          return false
        }
        return parseInt((this.currentTime / 1000 / 60) * 100)
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
      }
    },
    mounted() {},
    methods: {
      openSlide(type) {
        this.closeAllSlide();
        this[`${type}Open`] = true;
        this.scrollBottom();
      },
      closeAllSlide() {
        let that = this;
        let arr = ["record", "face", "game"];
        arr.map(item => {
          that[`${item}Open`] = false;
        });
      },
      setPaddingTop(value) {
        console.log(value);
      },
      startMic() {
        let that = this;
        let startTime = moment();
        that.recordBtnColor = '#82ed6d'
        that.tipText = '松开发送，上滑取消'
        that.currentTime = moment().diff(startTime)
        window.recordTimer = setInterval(() => {
          that.currentTime = moment().diff(startTime)
        }, 200)
        that.$atApp(() => {
          let r = (that.luyin = window.plus.audio.getRecorder());
          r.record({ filename: "_doc/audio/", format: "amr" },
            function (r) {
              let allTime = moment().diff(startTime);
              uploader(r, allTime)
                .then(res => {
                  // that.audio = res
                  // var dtask = window.plus.downloader.createDownload(res.url, { filename: `_doc/downAudio/${res.filename}` }, function (d, status) {
                  //   console.log(JSON.stringify(d));
                  //   // 下载完成
                  //   if (status == 200) {
                  //     // alert("Download success: " + d.filename);

                  //   } else {
                  //     // alert("Download failed: " + status);
                  //   }
                  // });
                  // dtask.start()

                  res;
                  that.currentPlayer = window.plus.audio.createPlayer(r);
                  that.currentPlayer.play();
                })
                .catch(err => {
                  console.log(err);
                });
            },
            function (e) {
              alert("Audio record failed: " + e.message);
            }
          );
          // window.plus.uploader.enumerate( arr=>{
          //   console.log(JSON.stringify(arr));
          // });
        });
      },
      stopMic() {
        let r = this.luyin;
        window.clearInterval(window.recordTimer);
        // alert(JSON.stringify(r))
        this.recordBtnColor = '#ccc'
        this.tipText = '长按开始录音'
        this.currentTime = 0
        this.$atApp(() => {
          r.stop();
        })

      },
      chatFocus() {
        let that = this;
        if (this.chatInput === "点击输入内容") {
          this.chatInput = "";
        }
        that.scrollBottom();
        that.closeAllSlide();
      },
      chatBlur() {
        if (this.chatInput === "") {
          this.chatInput = "点击输入内容";
        }
      },
      scrollBottom() {
        let that = this;
        setTimeout(() => {
          that.$refs.chatBlock.scrollTop = 9999999999;
        }, 200);

        // window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
        // let allScroll = that.$refs.chatBlock.scrollHeight - that.$refs.chatBlock.clientHeight
        // let count = 0
        // let a = setInterval(() => {
        //   count += 100
        //   that.$refs.chatBlock.scrollTop = count
        //   if (count >= allScroll) {
        //     clearInterval(a)
        //   }
        // },16)
      }
    },
    beforeDestroy() {
      let that = this
      that.$atApp(() => {
        that.currentPlayer.stop();
        that.currentPlayer = null
      })
    }
  };
</script>

<style scoped lang="scss">
  button {
    width: 200px;
    height: 100px;
  }

  .head-name {
    padding-top: 17px;

    .name {
      font-size: 28px;
      line-height: 28px;
      color: #333;
    }

    .status {
      padding-top: 8px;
      font-size: 18px;
      line-height: 18px;
      color: #999;
    }
  }

  .chat-container {
    background: #f5f5f5;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .chat-input {
      height: 100px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      padding: 14px 180px 14px 100px;
      transition: bottom 0.2s;

      textarea {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #f5f5f5;
        border: 0;
        resize: none;
        font-size: 28px;
        color: #ccc;
        padding: 16px 30px;
        line-height: 40px;

        &.not-empty {
          color: #333;
        }
      }

      .icon {
        position: absolute;
        width: 100px;
        height: 100px;

        bottom: 0;

        .iconfont {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          border-radius: 50%;
          text-align: center;
          line-height: 58px;
          font-weight: bold;
          border: 2px solid #666;
          color: #666;
        }

        &.icon-01 {
          left: 0;
        }

        &.icon-02 {
          padding-left: 10px;
          right: 90px;
          width: 80px;

          .iconfont {
            background: #fbcb38;
            vertical-align: 3px;
            border-color: #fbcb38;
            color: #fff;
            font-size: 36px;
            line-height: 52px;
          }
        }

        &.icon-03 {
          padding-right: 10px;
          right: 0;
          width: 90px;
        }
      }
    }

    .chat-main {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 100px;
      // background: #f5f5f5;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      transition: bottom 0.2s;
      padding-top: 40px;
    }

    .record-block {
      height: 270px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateY(100%);
      transition: transform 0.2s;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
    }

    .face-block {
      height: 270px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateY(100%);
      transition: transform 0.2s;
    }

    .game-block {
      height: 260px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10;
      transform: translateY(100%);
      transition: transform 0.2s;
    }

    &.open-record {
      .record-block {
        transform: translateY(0);
      }

      .chat-main {
        bottom: 370px;
      }

      .chat-input {
        bottom: 270px;
      }
    }

    &.open-face {
      .face-block {
        transform: translateY(0);
      }

      .chat-main {
        bottom: 370px;
      }

      .chat-input {
        bottom: 270px;
      }
    }

    &.open-game {
      .game-block {
        transform: translateY(0);
      }

      .chat-main {
        bottom: 360px;
      }

      .chat-input {
        bottom: 260px;
      }
    }
  }

  .vue-circle {
    width: 150px !important;
    height: 150px !important;
    z-index: 20;
  }

  .btn-record {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 36px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    z-index: 10;

    .iconfont {
      width: 146px;
      height: 146px;
      display: block;
      font-size: 96px;
      border-radius: 50%;
      text-align: center;
      line-height: 156px;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: all .2s;
    }
  }

  .tip-text {
    position: absolute;
    bottom: 34px;
    font-size: 24px;
    color: #333;
    text-align: center;
    width: 100%;
  }

  .chat-center-line {
    height: 40px;
    text-align: center;
    margin-bottom: 30px;

    .center-main {
      display: inline-block;
      padding: 0 12px;
      background: #d8dbdf;
      color: #fff;
      height: 40px;
      border-radius: 5px;
      font-size: 18px;
      line-height: 44px;
    }
  }

  .chat-line {
    width: 100%;
    margin-bottom: 30px;
  }

  .battle-info-block {
    width: 500px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    padding-top: 70px;
    position: relative;
    margin-bottom: 30px;

    .battle-head-block {
      width: 100%;
      height: 140px;
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      >img {
        display: inline-block;
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 50%;

        &:first-child {
          margin-right: 40px;
        }
      }
    }

    .top-block {
      height: 200px;
      width: 100%;
      background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
      border-radius: 10px 10px 0 0;
      color: #fff;
      text-align: center;
      padding-top: 100px;

      h3 {
        font-size: 30px;
        padding: 0;
        margin: 0;
        line-height: 30px;
        padding-bottom: 20px;
      }

      h4 {
        font-size: 24px;
        line-height: 24px;
        opacity: .5;
        padding: 0;
        margin: 0;
      }
    }

    .bottom-block {
      width: 100%;
      height: 175px;
      padding: 20px 25px 25px 25px;
      background: #fff;

      .game-item {
        width: 130px;
        height: 130px;
        display: inline-block;
        margin-left: 30px;

        &:first-child {
          margin-left: 0;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .chat-item-left {
    padding-left: 120px;
    position: relative;
    @include clearfix;
    min-height: 80px;

    .head {
      position: absolute;
      left: 25px;
      top: 0;
      border-radius: 50%;
      overflow: hidden;

      img {
        display: block;
        width: 80px;
        height: 80px;
      }
    }

    .text-content {
      padding: 20px 30px;
      background: #fff;
      max-width: 500px;
      float: left;
      font-size: 28px;
      line-height: 40px;
      min-height: 80px;
      border-radius: 10px;
    }

    .audio-content {
      max-width: 400px;
      height: 80px;
      border-radius: 10px;
      background: #82ed6d;
      padding-left: 20px;
      position: relative;

      .iconfont {
        color: #357628;
        line-height: 90px;
        font-size: 42px;
      }

      span {
        color: #999999;
        line-height: 80px;
        position: absolute;
        right: 0;
        font-size: 24px;
        transform: translateX(150%);
      }
    }
  }

  .chat-item-right {
    padding-right: 120px;
    position: relative;
    @include clearfix;
    min-height: 80px;

    .head {
      position: absolute;
      right: 25px;
      top: 0;
      border-radius: 50%;
      overflow: hidden;

      img {
        display: block;
        width: 80px;
        height: 80px;
      }
    }

    .text-content {
      padding: 20px 30px;
      background: #fff;
      max-width: 500px;
      float: right;
      font-size: 28px;
      line-height: 40px;
      min-height: 80px;
      border-radius: 10px;
    }

    .audio-content {
      max-width: 400px;
      width: 30%;
      height: 80px;
      border-radius: 10px;
      background: #82ed6d;
      padding-right: 20px;
      position: relative;
      float: right;
      text-align: right;

      .iconfont {
        color: #357628;
        line-height: 90px;
        font-size: 42px;
      }

      span {
        color: #999999;
        line-height: 80px;
        position: absolute;
        left: 0;
        font-size: 24px;
        transform: translateX(-150%);
      }
    }
  }
</style>