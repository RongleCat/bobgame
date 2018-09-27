<template>
  <Popup :maskClose="false" v-model="value">
    <div class="alert-container">
      <div class="pop-title" v-if="title">{{title}}</div>
      <div class="pop-content">
        <slot></slot>
      </div>
      <div class="btn-list" :class="[showCancel?'two':'']">
        <div class="item cancel" @click="$emit('input', false) && $emit('cancel')" v-if="showCancel">{{cencalText}}</div>
        <div class="item confirm" @click="$emit('confirm')">{{confirmText}}</div>
      </div>
    </div>
  </Popup>
</template>

<script>
  import Popup from './Popup.vue';
  export default {
    props: {
      value: Boolean,
      cencalText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确认'
      },
      showCancel: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      }
    },
    components: {
      Popup
    },
    data() {
      return {

      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .alert-container {
    width: 550px;
    border-radius: 15px;
    background: #fff;
    overflow: hidden;

    .btn-list {
      height: 80px;
      position: relative;
      @include clearfix;
      @include onePXlineTop;

      &.two {
        .item {
          width: 50%;

          &:last-child {
            position: relative;
            @include onePXlineLeft;
          }
        }
      }

      .item {
        width: 100%;
        float: left;
        text-align: center;
        line-height: 84px;
        height: 80px;
        font-size: 28px;
        color: #ccc;
        @include tapMask;

        &.confirm {
          color: $fy;
        }
      }
    }

    .pop-title {
      line-height: 104px;
      height: 100px;
      text-align: center;
      font-size: 28px;
      color: #333;
      position: relative;
    }

    .pop-content {
      padding: 25px;
      padding-top: 0;
    }
  }
</style>