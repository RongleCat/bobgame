<template>
  <transition :name="transition">
    <div class="pop-page" :style="{paddingTop:setViewPaddingTop}" ref="pop">
      <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}" v-if="hasHeader"></div>
      <div class="pop-header" :style="{top:statusBarHeight}" v-if="hasHeader">
        <button class="btn-back iconfont" :class="[btnClass]" @click="closePopView"></button>
        <div class="common-header">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="pop-content" v-on:closePop="closePopView">
        <slot name="content"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import unit from '../unit/back.js';
  export default {
    props: ['full', 'back', 'popType', 'btnType', 'header', 'close'],
    data() {
      return {
        headHeight: 88,
        offsetWidth: 0,
        pop: null,
        moveX: null,
        transitionNone: false
      }
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      },
      setViewPaddingTop() {
        return this.header === 'none' ? 0 : this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
      },
      btnClass() {
        return this.btnType === 'back' ? 'icon-zuo' : 'icon-close'
      },
      transition() {
        if (this.transitionNone) {
          return 'transitionNone'
        } else {
          return `pop-${this.popType ? this.popType : 'left'}`
        }
      },
      hasHeader() {
        return this.header === 'none' ? false : true
      }
    },
    watch: {
      close() {
        console.log(this.close);
        this.closePopView()
      }
    },
    methods: {
      move(e) {
        let that = this
        let width = that.offsetWidth
        let moveX = e.changedTouches[0].clientX
        that.moveX = moveX
        if (!that.transitionNone) {
          that.transitionNone = true
        }
        if (moveX > width) {
          that.$emit('closeView')
        } else if (moveX > 0) {
          that.pop.style.transform = `translateX(${moveX}px)`
        }
        this.pop.removeEventListener('touchend', that.moveEnd)
        this.pop.addEventListener('touchend', that.moveEnd, false)
      },
      moveEnd() {
        let that = this
        window.clearInterval(window.popTimer)
        if (that.moveX < 100) {
          let moveCount = that.moveX
          window.popTimer = setInterval(() => {
            moveCount -= 2
            if (moveCount > 0) {
              that.pop.style.transform = `translateX(${moveCount}px)`
            } else {
              that.pop.style.transform = ''
              that.transitionNone = false
              window.clearInterval(window.popTimer)
            }
          }, 1)
        } else {
          let moveCount = that.moveX
          window.popTimer = setInterval(() => {
            moveCount += 5
            if (moveCount <= that.offsetWidth) {
              that.pop.style.transform = `translateX(${moveCount}px)`
            } else {
              that.transitionNone = false
              window.clearInterval(window.popTimer)
              that.$emit('closeView')
            }
          }, 1)
        }
      },
      moveStart(e) {
        let that = this
        let startE = e.changedTouches[0]
        let startX = startE.clientX;
        that.pop.removeEventListener('touchmove', that.move)
        if (startX <= 50 && e.changedTouches.length === 1) {
          that.pop.addEventListener('touchmove', that.move, false)
        }
        that.pop.addEventListener('touchend', function () {
          that.pop.removeEventListener('touchmove', that.move)
        }, false)
      },
      closePopView() {
        let that = this;
        window.clearInterval(window.popTimer)
        if (this.full) {
          that.$emit('closeView')
        } else {
          that.transitionNone = true
          let moveCount = 0
          window.popTimer = setInterval(() => {
            moveCount += 8
            if (moveCount <= that.offsetWidth) {
              that.pop.style.transform = `translateX(${moveCount}px)`
            } else {
              that.transitionNone = false
              window.clearInterval(window.popTimer)
              that.$emit('closeView')
            }
          }, 1)
        }
      },
      backBtnClose() {
        if (window.that.full) {
          window.that.$emit('closeView')
        } else {
          window.that.closePopView()
        }
        return false
      }
    },
    mounted() {
      let that = this
      window.that = this
      that.pop = this.$refs.pop
      that.offsetWidth = that.pop.offsetWidth
      if (!that.full) {
        that.$store.commit('setTabberZIndex', 130)
      } else {
        that.$store.commit('setTabberZIndex', 90)
      }
      that.pop.removeEventListener('touchstart', that.moveStart)
      that.pop.addEventListener('touchstart', that.moveStart, false);
      that.$atApp(function () {
        window.plus.key.removeEventListener('backbutton', unit.dbTapQuit)
        window.plus.key.addEventListener('backbutton', that.backBtnClose, false)
        // unit.bindBackKeyEvent();
      })
    },
    beforeCreate() {
      let that = this
      that.$store.commit('setHaveOpenPopView', true)
    },
    beforeDestroy() {
      let that = this
      this.$store.commit('setTabberZIndex', 100)
      this.$atApp(() => {
        window.plus.key.removeEventListener('backbutton', that.backBtnClose)
        window.plus.key.removeEventListener('backbutton', unit.dbTapQuit)
        unit.bindBackKeyEvent();
      })
    }
  }
</script>

<style scoped lang="scss">
  .pop-page {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 120;

    .pop-header {
      height: 88px;
      background: #f2f2f2;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;

      .btn-back {
        width: 88px;
        height: 100%;
        position: absolute;
        background: transparent;
        border: 0;
        font-size: 48px;

        &.icon-close {

          &::after,
          &::before {
            position: absolute;
            top: 50%;
            left: 50%;
            content: "";
            width: 4px;
            height: 42px;
            border-radius: 5px;
            background: #333;
          }

          &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          &::before {
            transform: translate(-50%, -50%) rotate(45deg);
          }
        }

        &.icon-back {}
      }
    }

    .pop-content {
      -webkit-overflow-scrolling: touch;
      overflow-y: auto;
      min-height: 100%;
      max-height: 100%;
      height: 100%;
    }
  }
</style>