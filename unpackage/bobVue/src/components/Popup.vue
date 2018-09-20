<template>
  <transition name="fade-in">
    <div class="bob-pop-container" :style="{'zIndex':countZIndex,'top':full}" v-if="value">
      <div class="bob-pop-mask" @click="closePop" :style="{'background':calcOpacity}" @scroll="stopScroll" ></div>
      <div class="bob-pop-main" :style="plugMainStyle?plugMainStyle:mainStyle">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      value: Boolean,
      full: {
        type: String,
        default: '0rem'
      },
      addZIndex: Number,
      plugMainStyle: Object,
      maskClose: {
        type: Boolean,
        default: true
      },
      opacity: {
        type: Number,
        default: 50
      }
    },
    data() {
      return {
        zIndex: 2100,
        mainStyle: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)'
        }
      }
    },
    computed: {
      countZIndex() {
        if (this.addZIndex) {
          return parseInt(this.addZIndex) + this.zIndex
        } else {
          return this.zIndex
        }
      },
      calcOpacity() {
        return `rgba(0,0,0,${this.opacity/100})`
      }
    },
    methods: {
      closePop() {
        if (this.maskClose) {
          this.$emit('input', false)
        } else {
          return false
        }
      },
      stopScroll($event){
        $event.stopPropagation();
      }
    }
  }
</script>

<style scoped lang="scss">
  .bob-pop-mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .bob-pop-container{
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    -webkit-overflow-scrolling: touch;
  }
</style>