<template>
  <div @click="playVoice">
    <i class="iconfont" :class="[`icon-yuyin${isMe?'you':'zuo'}`]"></i><span>{{timeLong}}</span>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    props: ['fileName', 'isMe', 'isLocal', 'time'],
    data() {
      return {
        playCtrl: null
      }
    },
    computed: {
      timeLong() {
        let time = 0;
        let that = this;
        if (!that.isLocal) {
          time = parseInt(that.fileName.split('_')[1].split('.')[0])
        } else {
          time = that.time
        }
        return moment(time).format('s\'')
      }
    },
    methods: {
      playVoice() {
        let that = this
        if (that.isLocal) {
          that.playCtrl = window.plus.audio.createPlayer(`_doc/audio/${that.fileName}`);
          that.playCtrl.play();
        } else {
          var dtask = window.plus.downloader.createDownload(`https://fmcatmp3.oss-cn-hangzhou.aliyuncs.com/${that.fileName}`, { filename: `_doc/downAudio/${that.fileName}` }, function (d, status) {
            console.log(JSON.stringify(d));
            // 下载完成
            if (status == 200) {
              that.playCtrl = window.plus.audio.createPlayer(`_doc/downAudio/${that.fileName}`);
              that.playCtrl.play();
            }
          });
          dtask.start()
        }
      }
    },
    beforeDestroy(){
      let that = this
      that.$atApp(()=>{
        if (that.playCtrl) {
          that.playCtrl.stop()
          that.playCtrl = null
        }
      })
    }
  }
</script>