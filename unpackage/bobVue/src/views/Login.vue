<template>
    <div class="one-level-full-page login-page" :class="{'page-two':showPhoneLogin}">
        <div class="btn-close" :style="{top:paddingTop}" @click="btnClose">
            <i class="iconfont" :class="[btnBackClass]"></i>
        </div>
        <div class="login-main">
            <div class="btn-block btn-weixin">
                <i class="iconfont icon-weixin"></i>
                微信登录
            </div>
            <div class="btn-block btn-phone" @click="enterPhoneLogin">
                <i class="iconfont icon-shouji"></i>
                手机登录
            </div>
        </div>
        <div class="login-phone-page">
            <div class="input-block">
                <i class="iconfont icon-phone before-icon"></i>
                <i class="iconfont icon-cuo after-icon"></i>
                <input type="text" placeholder="请输入您绑定的手机号/账号" v-model="username">
            </div>
            <div class="input-block">
                <i class="iconfont icon-password before-icon"></i>
                <i class="iconfont icon-zhengyan after-icon"></i>
                <input type="text" placeholder="请输入您的密码" v-model="password">
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
import unit from '../unit/back.js'
export default {
    data() {
        return {
            btnClass: 'close',
            showPhoneLogin: false,
            errorMsg: '',
            username: null,
            password: null
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
            this.errorMsg = '用户名密码错误'
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
  height: px2rem(100px);
  line-height: px2rem(100px);
  font-size: px2rem(34px);
  border-radius: px2rem(10px);
  padding-left: px2rem(265px);
  position: relative;
  .iconfont {
    font-size: px2rem(48px);
    position: absolute;
    top: 50%;
    left: px2rem(205px);
    transform: translateY(-50%);
  }
  &.btn-weixin {
    background: #4cd470;
    color: #fff;
    margin-top: px2rem(130px);
    margin-bottom: px2rem(50px);
    //   transition: filter 0.2s;
    &:active {
      filter: brightness(0.9) contrast(100%);
    }
  }
  &.btn-phone {
    border: 1px solid #ccc;
    color: #333;
    &:active {
      background: #f0f0f0;
    }
  }
}

.btn-close {
  position: fixed;
  left: 0;
  width: px2rem(120px);
  height: px2rem(120px);
  line-height: px2rem(120px);
  text-align: center;
  color: #fff;
  z-index: 10;
  .iconfont {
    position: relative;
    z-index: 10;
  }
  &:after {
    display: block;
    width: px2rem(56px);
    height: px2rem(56px);
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
  background-image: url("../assets/images/login/login_bg.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding: px2rem(0px) px2rem(75px);
  padding-top: px2rem(860px);
  position: absolute;
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
  padding: px2rem(390px) px2rem(75px) 0 px2rem(75px);
}
.input-block {
  width: 100%;
  height: px2rem(100px);
  padding: 0 px2rem(56px);
  position: relative;
  input {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    font-size: px2rem(30px);
  }
  .iconfont {
    position: absolute;
    display: block;
    width: px2rem(100px);
    height: px2rem(100px);
    text-align: center;
    line-height: px2rem(100px);
    font-size: px2rem(42px);
    &.before-icon {
      left: px2rem(-30px);
      top: 0;
    }
    &.after-icon {
      right: px2rem(-30px);
      top: 0;
      color: #ccc;
    }
  }
  &:after {
    display: block;
    width: 100%;
    height: 1px;
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
  margin-top: px2rem(100px);
  height: px2rem(100px);
  width: 100%;
  background: #ffce39;
  color: #333;
  border-radius: px2rem(10px);
  text-align: center;
  font-size: px2rem(34px);
  line-height: px2rem(100px);
  &.no-input {
    background: rgba(255, 206, 57, 0.5);
    color: rgba(51, 51, 51, 0.5);
  }
}
.error-tip {
  position: absolute;
  line-height: px2rem(146px);
  padding-left: px2rem(55px);
  color: #f84d3b;
  top: px2rem(790px);
  left: 50%;
  transform: translateX(-50%);
  .iconfont {
    text-align: center;
    line-height: px2rem(34px);
    color: #fff;
    position: absolute;
    font-size: px2rem(24px);
    left: 0;
    background: #f84d3b;
    width: px2rem(34px);
    height: px2rem(34px);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>