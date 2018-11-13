<template>
  <div class="one-level-full-page login-page" :class="{'page-two':showPhoneLogin}">
    <div class="btn-close" :style="{top:paddingTop}" @click="btnClose">
      <i class="iconfont" :class="[btnBackClass]"></i>
    </div>
    <div class="login-main">
      <div class="btn-block btn-weixin" @click="weixinLogin">
        <i class="iconfont icon-weixin"></i>
        微信登录
      </div>
      <div class="btn-block btn-phone" @click="enterPhoneLogin">
        <i class="iconfont icon-shouji"></i>
        手机登录
      </div>
      <!-- <div class="btn-block btn-phone" @click="weixinLogout">
                <i class="iconfont icon-weixin"></i>
                注销微信登录
            </div> -->
    </div>
    <div class="login-phone-page">
      <div class="input-block">
        <i class="iconfont icon-phone before-icon"></i>
        <i class="iconfont icon-cuo after-icon" @click="username = null"></i>
        <input type="text" placeholder="请输入您绑定的手机号/账号" v-model="username">
      </div>
      <div class="input-block">
        <i class="iconfont icon-password before-icon"></i>
        <i class="iconfont after-icon" :class="[passwordType?'icon-biyan':'icon-zhengyan']" @click="passwordType = !passwordType"></i>
        <input :type="passwordType?'password':'text'" placeholder="请输入您的密码" v-model="password">
      </div>
      <div class="btn-phone-login" :class="{'no-input':userInput}" @click="submitLogin">
        登录
      </div>
      <div class="error-tip" v-if="errorMsg">
        <i class="iconfont icon-cuo"></i>{{errorMsg}}
      </div>
    </div>
  </div>
</template>

<script>
  import unit from '@/unit/back.js'
  import md5 from '@/unit/md5.js'
  import { Base64 } from 'js-base64'
  import { Toast } from 'vant';
  import Moment from 'moment';
  export default {
    data() {
      return {
        btnClass: 'close',
        showPhoneLogin: false,
        errorMsg: '',
        username: 'ceshi002',
        password: '666666',
        passwordType: true,
        weixinLoginObj: null
      }
    },
    computed: {
      paddingTop() {
        return this.$store.state.statusBarHeight + 'rem'
      },
      btnBackClass() {
        return `icon-full${this.showPhoneLogin ? 'back' : 'close'}`
      },
      userInput() {
        return !(this.username && this.password)
      }
    },
    methods: {
      btnClose() {
        let that = this
        if (that.showPhoneLogin) {
          that.showPhoneLogin = false
        } else {
          that.$router.go(-1)
        }
      },
      backEvent() {
        if (window.that.showPhoneLogin) {
          window.that.showPhoneLogin = false
        } else {
          window.that.$router.go(-1)
        }
      },
      enterPhoneLogin() {
        let that = this
        this.showPhoneLogin = true
        that.$atApp(function () {
          window.plus.key.removeEventListener('backbutton', unit.dbTapQuit)
          window.plus.key.removeEventListener('backbutton', that.backEvent)
          window.plus.key.addEventListener('backbutton', that.backEvent, false)
          // unit.bindBackKeyEvent();
        })
      },
      submitLogin() {
        let that = this
        // this.errorMsg = '用户名密码错误';
        let userInfo = {
          account: that.username,
          password: that.password
        }
        Toast({ type: 'loading', message: '正在登陆...', duration: 0 })
        that.loginSubmit(that.encodeUserInfo(userInfo, 'account'))
      },
      weixinLogin() {
        let that = this
        Toast({ type: 'loading', message: '正在登陆...', duration: 0 })
        that.$atApp(() => {
          window.plus.oauth.getServices(services => {
            services.map((item) => {
              if (item.id === 'weixin') {
                item.login(() => {
                  item.getUserInfo(() => {
                    let { nickname, headimgurl, sex, unionid } = item.userInfo
                    that.loginSubmit(that.encodeUserInfo({ nickname: nickname.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, ""), headimgurl, sex, unionid }, 'wx'))
                  })
                }, err => {
                  console.log(err);
                })
              }
            })
          })
        })
      },
      weixinLogout() {
        let that = this
        that.$atApp(() => {
          window.plus.oauth.getServices(services => {
            services.map((item) => {
              if (item.id === 'weixin') {
                item.logout(() => {
                  console.log('退出');
                }, err => {
                  console.log(err);
                })
              }
            })
          })
        })
      },
      encodeUserInfo(info, type) {
        info.time = parseInt(Moment().valueOf() / 1000)
        let signArr = [];
        for (let i in info) {
          signArr.push(`${i}=${info[i]}`)
        }
        info.sign = md5(signArr.join('&') + 'BOBAPPLOGINKEY')
        return Base64.encode(JSON.stringify({ "data": Base64.encode(JSON.stringify(info)), "type": type }))
      },
      loginSubmit(data) {
        let that = this
        that.$http({
          url: '/BobLogin/BobLoginReceive',
          method: 'POST',
          data: {
            data
          }
        }).then(r => {
          if (r) {
            Toast.clear()
            let { head_icon, nickname, jifen } = r.info
            that.$store.commit('setUserInfo', { head_icon, nickname, jifen })
            window.localStorage.setItem('userBaseInfo', JSON.stringify({ head_icon, nickname, jifen }))
            window.localStorage.token = r.token
            this.$http.defaults.headers.get['Authorization'] = r.token
            that.$router.go(-1)
            // if (that.$route.params.to) {
            //   that.$router.replace('/' + that.$route.params.to)
            // } else {
            //   that.$router.go(-1)
            // }
          }
        })
      }
    },
    mounted() {
      window.that = this
    },
    beforeDestroy() {
      let that = this
      this.$store.commit('setShowTabber', true)
      this.$atApp(() => {
        window.plus.key.removeEventListener('backbutton', that.backEvent)
        window.plus.key.removeEventListener('backbutton', unit.dbTapQuit)
        unit.bindBackKeyEvent();
      })
      delete window.that
    }
  }
</script>

<style scoped lang="scss">
  .login-page {
    background-color: #fff;
    position: relative;
    width: 100%;
    height: 100%;

    &.page-two {
      .login-main {
        transform: translateX(-100%);
      }

      .login-phone-page {
        transform: translateX(0);
      }
    }
  }

  .btn-block {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 34px;
    border-radius: 10px;
    padding-left: 265px;
    position: relative;

    .iconfont {
      font-size: 48px;
      position: absolute;
      top: 50%;
      left: 205px;
      transform: translateY(-50%);
    }

    &.btn-weixin {
      background: #4cd470;
      color: #fff;
      margin-top: 130px;
      margin-bottom: 50px;
      @include tapColor;
    }

    &.btn-phone {
      border: 1px solid #ccc;
      /* no */
      color: #333;

      &:active {
        background: #f0f0f0;
      }
    }
  }

  .btn-close {
    position: fixed;
    left: 0;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    color: #fff;
    z-index: 10;

    .iconfont {
      position: relative;
      z-index: 10;
    }

    &:after {
      display: block;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      content: "";
      background: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .login-main {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/images/login/login_bg.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding: 0px 75px;
    padding-top: 860px;
    position: absolute;
    overflow-y: scroll;
    top: 0;
    left: 0;
    transform: translateX(0);
    transition: transform 0.4s;
  }

  .login-phone-page {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    transition: transform 0.4s;
    padding: 390px 75px 0 75px;
  }

  .input-block {
    width: 100%;
    height: 100px;
    padding: 0 56px;
    position: relative;

    input {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      font-size: 30px;
    }

    .iconfont {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 42px;

      &.before-icon {
        left: -30px;
        top: 0;
      }

      &.after-icon {
        right: -30px;
        top: 0;
        color: #ccc;
      }
    }

    &:after {
      display: block;
      width: 100%;
      height: 1px;
      /* no */
      content: "";
      background: #e6e6e6;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transform: scaleY(0.5);
    }
  }

  .btn-phone-login {
    margin-top: 100px;
    height: 100px;
    width: 100%;
    background: #ffce39;
    color: #333;
    border-radius: 10px;
    text-align: center;
    font-size: 34px;
    line-height: 100px;

    &.no-input {
      background: rgba(255, 206, 57, 0.5);
      color: rgba(51, 51, 51, 0.5);
    }
  }

  .error-tip {
    position: absolute;
    line-height: 146px;
    padding-left: 55px;
    color: #f84d3b;
    top: 790px;
    left: 50%;
    transform: translateX(-50%);

    .iconfont {
      text-align: center;
      line-height: 34px;
      color: #fff;
      position: absolute;
      font-size: 24px;
      left: 0;
      background: #f84d3b;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>