<template>
  <div @click="playVoice" :class="[isMe?'right':'left',playClass]" :style="{width:voiceWidth}">
    <span>{{timeLong}}</span>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    props: ['fileName', 'isMe', 'isLocal', 'time'],
    data() {
      return {
        playCtrl: null,
        playIndex: 0,
        playing: false,
        allTime:0
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
      voiceWidth(){
        return (parseInt(this.allTime/60000*320)+80)/75+'rem'
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
          window.playVoiceTimer = setInterval(() => {
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
          window.clearInterval(window.playVoiceTimer)
        }
      }
    },
    mounted() {
      // this.playIcon()
    },
    beforeDestroy() {
      let that = this
      clearInterval(window.playVoiceTimer)
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
  .audio-content.play_01 {
    background-position-y: -80px;
  }

  .audio-content.play_02 {
    background-position-y: -160px;
  }

  .audio-content.play_03 {
    background-position-y: -240px;
  }

  .audio-content.left {
    max-width: 400px;
    height: 80px;
    border-radius: 10px;
    background-color: #a0e759;
    position: relative;
    background-image: url('../assets/images/voice.png');
    background-repeat: no-repeat;
    background-size: 80px auto;

    span {
      color: #999999;
      line-height: 80px;
      position: absolute;
      right: 0;
      font-size: 24px;
      transform: translateX(150%);
    }
  }

  .audio-content.right {
    max-width: 400px;
    height: 80px;
    border-radius: 10px;
    background-color: #a0e759;
    position: relative;
    float: right;
    text-align: right;

    background-image: url('../assets/images/voice_filp.png');
    background-repeat: no-repeat;
    background-size: 80px auto;
    background-position-x: right;

    span {
      color: #999999;
      line-height: 80px;
      position: absolute;
      left: 0;
      font-size: 24px;
      transform: translateX(-150%);
    }
  }
</style>