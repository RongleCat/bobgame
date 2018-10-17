<template>
  <div class="msg-item" @click="contentShow = !contentShow">
    <div class="title">
      <img :src="imgurl" class="before-icon" />
      {{title}}
      <span class="time">{{time}}</span>
    </div>
    <div class="sub-title">{{subtitle}}</div>
    <transition name="fade-in">
      <div class="content" v-show="contentShow">
        {{content}}
      </div>
    </transition>
    <i class="iconfont icon-xia" :class="[contentShow?'open':'']"></i>
  </div>
</template>

<script>
  export default {
    props: ['imgurl', 'title', 'time', 'subtitle', 'content'],
    data() {
      return {
        contentShow: false
      }
    },
    watch: {
      contentShow(v) {
        if (v) {
          this.$emit('closeAll')
        }
      }
    },
    mounted() {
      console.log(this.imgurl);
    }
  }
</script>

<style lang="scss" scoped>
  .msg-item {
    background: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
    position: relative;

    .title {
      height: 100px;
      padding-left: 100px;
      line-height: 102px;
      font-size: 30px;
      font-weight: bold;
      padding-right: 20px;

      span {
        float: right;
        font-size: 20px;
        color: #adadad;
        font-weight: normal;
      }

      img {
        width: 60px;
        height: 60px;
        position: absolute;
        left: 20px;
        top: 20px;
      }
    }

    .content {
      padding-left: 20px;
      padding-bottom: 20px;
      padding-right: 40px;
      font-size: 28px;
      line-height: 1.5;
      overflow: hidden;
    }

    .sub-title {
      padding: 0 20px;
      height: 100px;
      line-height: 102px;
      font-size: 28px;
    }

    .iconfont {
      position: absolute;
      display: block;
      height: 100px;
      line-height: 102px;
      right: 20px;
      bottom: 0;
      font-size: 24px;
      color: #adadad;
      transition: all .2s;

      &.open {
        transform: rotate(180deg);
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>