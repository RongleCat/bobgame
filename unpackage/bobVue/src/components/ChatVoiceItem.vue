<template>
  <div @click="playVoice" :class="[isMe?'right':'left',playClass]" :style="{width:voiceWidth}">
    <span>{{timeLong}}</span>
    <i class="msg-tip" v-if="!isPlayDone"></i>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    props: ['fileName', 'isMe', 'isLocal', 'time', 'isPlayDone'],
    data() {
      return {
        playCtrl: null,
        playIndex: 0,
        playing: false,
        allTime: 0,
        fileBefore: ''
      }
    },
    computed: {
      timeLong() {
        let time = 0;
        let that = this;
        if (!that.isLocal) {
          that.allTime = time = parseInt(that.fileName.split('_')[1].split('.')[0])
        } else {
          that.allTime = time = that.time
        }
        return moment(time).format('s\'')
      },
      playClass() {
        return `play_0${this.playIndex}`
      },
      voiceWidth() {
        return (parseInt(this.allTime / 60000 * 320) + 80) / 75 + 'rem'
      }
    },
    methods: {
      playVoice() {
        let that = this
        if (that.isLocal) {
          that.playCtrl = window.plus.audio.createPlayer(`_doc/audio/${that.fileName}`);
          that.playStart()
        } else {
          var dtask = window.plus.downloader.createDownload(`https://fmcatmp3.oss-cn-hangzhou.aliyuncs.com/${that.fileName}`, { filename: `_doc/downAudio/${that.fileName}` }, function (d, status) {
            console.log(JSON.stringify(d));
            // 下载完成
            if (status == 200) {
              that.playCtrl = window.plus.audio.createPlayer(`_doc/downAudio/${that.fileName}`);
              that.playStart()
            }
          });
          dtask.start()
        }
      },
      playStart() {
        let that = this
        if (!that.playing) {
          that.playIcon()
          that.playing = true
          that.playCtrl.play(() => {
            that.playIcon(1)
            that.playing = false
          });
        }
      },
      playIcon(status) {
        let that = this
        if (!status) {
          window.plus.nativeUI.toast('开始播放');
          window.clearInterval(window.playVoiceTimer)
          window[that.fileBefore] = setInterval(() => {
            switch (that.playIndex) {
            case 0:
              that.playIndex = 1
              break;
            case 1:
              that.playIndex = 2
              break;
            case 2:
              that.playIndex = 3
              break;
            case 3:
              that.playIndex = 1
              break;
            default:
              break;
            }
          }, 300)
        } else {
          window.plus.nativeUI.toast('结束播放');
          that.playIndex = 0;
          window.clearInterval(window[that.fileBefore])
        }
      }
    },
    mounted() {
      // this.playIcon()
      this.fileBefore = this.fileName.split('.')[0]
    },
    beforeDestroy() {
      let that = this
      clearInterval(window[that.fileBefore])
      that.$atApp(() => {
        if (that.playCtrl) {
          that.playCtrl.stop()
          that.playCtrl = null
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .audio-content {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    @include tapColor;

    &.play_01 {
      background-position-y: -80px;
    }

    &.play_02 {
      background-position-y: -160px;
    }

    &.play_03 {
      background-position-y: -240px;
    }

    &.left {
      max-width: 400px;
      height: 80px;
      border-radius: 10px;
      background-color: #fff;
      position: relative;
      background-image: url('../assets/images/friends/voice.png');
      background-repeat: no-repeat;
      background-size: 80px auto;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, .05);

      .msg-tip {
        display: block;
        width: 13px;
        height: 13px;
        background: #e55350;
        border-radius: 50%;
        position: absolute;
        right: -25px;
        top: 0;
      }

      span {
        color: #999999;
        line-height: 110px;
        position: absolute;
        right: 0;
        font-size: 24px;
        transform: translateX(150%);
      }
    }

    &.right {
      max-width: 400px;
      height: 80px;
      border-radius: 10px;
      background-color: #a0e759;
      position: relative;
      float: right;
      text-align: right;
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, .05);

      background-image: url('../assets/images/friends/voice_filp.png');
      background-repeat: no-repeat;
      background-size: 80px auto;
      background-position-x: right;

      span {
        color: #999999;
        line-height: 110px;
        position: absolute;
        left: 0;
        font-size: 24px;
        transform: translateX(-150%);
      }
    }
  }
</style>