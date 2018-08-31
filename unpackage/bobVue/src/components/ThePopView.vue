<template>
    <transition :name="`pop-${popType?popType:'left'}`">
        <div class="pop-page" :style="{paddingTop:setViewPaddingTop}" ref="pop">
            <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:'#f2f2f2'}"></div>
            <div class="pop-header" :style="{top:statusBarHeight}">
                <button class="btn-back iconfont" :class="[btnClass]" @click="$emit('closeView')"></button>
                <slot name="header"></slot>
            </div>
            <div class="pop-content">
                <slot name="content"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['full', 'back', 'popType', 'btnType'],
    data() {
        return {
            headHeight: 88,
            offsetWidth:0,
            pop:null
        }
    },
    computed: {
        statusBarHeight() {
            return this.$store.state.statusBarHeight + 'rem'
        },
        setViewPaddingTop() {
            return this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
        },
        btnClass() {
            return this.btnType === 'back' ? 'icon-fanhui1' : 'icon-close'
        }
    },
    methods: {
        move(e) {
            let that = this
            let width = that.offsetWidth
            // console.log(this.$refs);
            let moveX = e.changedTouches[0].clientX;
            console.log(moveX);
            if (moveX > width) {
                this.$emit('closeView')
            } else if (moveX > 0) {
                that.pop.style.transform = `translateX(${moveX}px)`
            }
        }
    },
    mounted() {
        let that = this
        that.pop = this.$refs.pop
        that.offsetWidth = that.pop.offsetWidth
        if (!that.full) {
            that.$store.commit('setTabberZIndex', 130)
        } else {
            that.$store.commit('setTabberZIndex', 90)
        }
        that.pop.addEventListener('touchstart', function (e) {
            let startE = e.changedTouches[0]
            let startX = startE.clientX;
            console.log(e);
            if (startX <= 50 && e.changedTouches.length === 1) {
                console.log('注册移动事件');
                this.addEventListener('touchmove', that.move, false)
            }
            this.addEventListener('touchend', function () {
                this.removeEventListener('touchmove', that.move)
            }, false)
        }, false);
    },
    beforeCreate() {
        this.$store.commit('setHaveOpenPopView', true)
    },
    beforeDestroy() {
        this.$store.commit('setTabberZIndex', 100)
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
  background: #000;
  z-index: 120;
  .pop-header {
    height: px2rem(88px);
    background: #f2f2f2;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    .btn-back {
      width: px2rem(88px);
      height: 100%;
      position: relative;
      background: transparent;
      border: 0;
      font-size: px2rem(48px);
      &.icon-close {
        &::after,
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          content: "";
          width: px2rem(4px);
          height: px2rem(42px);
          border-radius: px2rem(5px);
          background: #333;
        }
        &::after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
        &::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
      &.icon-back {
      }
    }
  }
  .pop-content {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    min-height: 100%;
    max-height: 100%;
  }
}
</style>