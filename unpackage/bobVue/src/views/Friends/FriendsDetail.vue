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
          <vCircle v-model="currentRate" :rate="30" :speed="100" class="vue-circle" />
          <div class="btn-record">
            <i class="iconfont icon-yuyin"></i>
          </div>
          <div class="tip-text">
            长按开始录音
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
        <div class="chat-main" ref="chatBlock" @click="closeAllSlide">
          <div class="test">1</div>
          <div class="test">2</div>
          <div class="test">3</div>
          <div class="test">4</div>
          <div class="test">5</div>
          <div class="test">6</div>
          <div class="test">7</div>
          <div class="test">8</div>
          <div class="test">9</div>
          <div class="test">10</div>
          <div class="test">11</div>
          <div class="test">12</div>
          <div class="test">13</div>
          <div class="test">14</div>
          <div class="test">15</div>
          <div class="test">16</div>
          <div class="test">17</div>
          <div class="test">18</div>
          <div class="test">19</div>
          <div class="test">20</div>
          <div class="test">21</div>
          <div class="test">22</div>
          <div class="test">23</div>
          <div class="test">24</div>
          <div class="test">25</div>
          <div class="test">26</div>
          <div class="test">27</div>
          <div class="test">28</div>
          <div class="test">29</div>
          <div class="test">30</div>
          <div class="test">31</div>
          <div class="test">32</div>
          <div class="test">33</div>
          <div class="test">34</div>
          <div class="test">35</div>
          <div class="test">36</div>
          <div class="test">37</div>
          <div class="test">38</div>
          <div class="test">39</div>
          <div class="test">40</div>
          <div class="test">41</div>
          <div class="test">42</div>
          <div class="test">43</div>
          <div class="test">44</div>
          <div class="test">45</div>
          <div class="test">46</div>
          <div class="test">47</div>
          <div class="test">48</div>
          <div class="test">49</div>
          <div class="test">50</div>
          <div class="test">51</div>
          <div class="test">52</div>
          <div class="test">53</div>
          <div class="test">54</div>
          <div class="test">55</div>
          <div class="test">56</div>
          <div class="test">57</div>
          <div class="test">58</div>
          <div class="test">59</div>
          <div class="test">60</div>
          <div class="test">61</div>
          <div class="test">62</div>
          <div class="test">63</div>
          <div class="test">64</div>
          <div class="test">65</div>
          <div class="test">66</div>
          <div class="test">67</div>
          <div class="test">68</div>
          <div class="test">69</div>
          <div class="test">70</div>
          <div class="test">71</div>
          <div class="test">72</div>
          <div class="test">73</div>
          <div class="test">74</div>
          <div class="test">75</div>
          <div class="test">76</div>
          <div class="test">77</div>
          <div class="test">78</div>
          <div class="test">79</div>
          <div class="test">80</div>
          <div class="test">81</div>
          <div class="test">82</div>
          <div class="test">83</div>
          <div class="test">84</div>
          <div class="test">85</div>
          <div class="test">86</div>
          <div class="test">87</div>
          <div class="test">88</div>
          <div class="test">89</div>
          <div class="test">90</div>
          <div class="test">91</div>
          <div class="test">92</div>
          <div class="test">93</div>
          <div class="test">94</div>
          <div class="test">95</div>
          <div class="test">96</div>
          <div class="test">97</div>
          <div class="test">98</div>
          <div class="test">99</div>
          <div class="test">100</div>
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
  import { Circle } from 'vant';
  import ThePage from "@/components/ThePage";
  export default {
    components: { ThePage, vCircle: Circle },
    data() {
      return {
        luyin: null,
        audio: {},
        long: 0,
        recordTime: 0,
        chatInput: '点击输入内容',
        scrollValue: 0,
        recordOpen: false,
        faceOpen: false,
        gameOpen: false,
        currentRate: 0
      };
    },
    computed: {
      chatClass() {
        return this.chatInput === '点击输入内容' ? '' : 'not-empty'
      }
    },
    mounted() {

    },
    methods: {
      openSlide(type) {
        this.closeAllSlide()
        this[`${type}Open`] = true
        this.scrollBottom()
      },
      closeAllSlide() {
        let that = this
        let arr = ['record', 'face', 'game']
        arr.map(item => {
          that[`${item}Open`] = false
        })
      },
      setPaddingTop(value) {
        console.log(value);
      },
      startMic() {
        let that = this;
        let startTime = moment()
        that.$atApp(() => {
          let r = that.luyin = window.plus.audio.getRecorder();
          r.record({ filename: "_doc/audio/", format: 'amr' },
            function (r) {
              let allTime = moment().diff(startTime)
              that.recordTime = moment(allTime).format('s"SS')
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

                  res
                  let audioPlayer = window.plus.audio.createPlayer(r);
                  audioPlayer.play()
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
        // alert(JSON.stringify(r))
        r.stop();
      },
      chatFocus() {
        let that = this
        if (this.chatInput === '点击输入内容') {
          this.chatInput = ''
        }
        that.scrollBottom()
        that.closeAllSlide()
      },
      chatBlur() {
        if (this.chatInput === '') {
          this.chatInput = '点击输入内容'
        }
      },
      scrollBottom() {
        let that = this
        setTimeout(() => {
          that.$refs.chatBlock.scrollTop = 9999999999
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
      transition: bottom .2s;

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
          border: 2px solid #333;
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
      transition: bottom .2s;
    }

    .record-block {
      height: 270px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      // background: #fff;
      z-index: 10;
      transform: translateY(100%);
      transition: transform .2s;
    }

    .face-block {
      height: 270px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      // background: #fff;
      z-index: 10;
      transform: translateY(100%);
      transition: transform .2s;
    }

    .game-block {
      height: 260px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      // background: #fff;
      z-index: 10;
      transform: translateY(100%);
      transition: transform .2s;
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
    top: 36px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }

  .btn-record {
    width: 150px;
    height: 150px;
    padding: 2px;
    position: absolute;
    top: 36px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    z-index: 10;

    .iconfont {
      width: 100%;
      height: 100%;
      display: block;
      font-size: 96px;
      background: #82ed6d;
      border-radius: 50%;
      text-align: center;
      line-height: 145px;
    }
  }
  .tip-text{
    position: absolute;
    bottom: 34px;
    font-size: 24px;
    color: #333;
    text-align: center;
    width: 100%;
  }
</style>