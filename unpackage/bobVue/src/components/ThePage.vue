<template>
  <div class="page-main" :style="{paddingTop:setViewPaddingTop}">
    <div class="statusBar" :style="{height:statusBarHeight,backgroundColor:color?color:'#f2f2f2'}"></div>
    <template v-if="!noHead">
      <div class="pop-header" :style="{top:statusBarHeight,backgroundColor:color?color:'#f2f2f2'}" v-if="!diy">
        <button class="btn-back iconfont" :class="[btnClass]" @click="btnBackEvent"></button>
        <div class="common-header">
          <slot name="headerContent"></slot>
        </div>
      </div>
      <slot v-else name="header"></slot>
    </template>
    <div class="view-block" :style="{backgroundColor:contentBg?contentBg:'#fff'}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['btnType', 'diy', 'color', 'contentBg', 'noHead'],
    data() {
      return {
        headHeight: 88
      }
    },
    computed: {
      btnClass() {
        return this.btnType === 'close' ? 'icon-close' : 'icon-zuo'
      },
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      },
      setViewPaddingTop() {
        if (this.noHead) {
          return '0rem'
        } else {
          return this.$store.state.statusBarHeight + this.headHeight / 75 + 'rem'
        }

      }
    },
    mounted() {
      this.$emit('headerHeight', this.$store.state.statusBarHeight + this.headHeight / 75)
      // console.log(this.color)
      // this.$emit('setPaddingTop', parseInt(this.statusBarHeight) + 88 / 75 + 'rem')
    },
    methods: {
      btnBackEvent() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .pop-header {
    height: 88px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 210;

    .btn-back {
      width: 88px;
      height: 100%;
      position: absolute;
      background: transparent;
      border: 0;
      font-size: 36px;

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
    }
  }

  .page-main {
    width: 100%;
    height: 100%;
  }
</style>