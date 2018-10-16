<template>
  <Popup :maskClose="false" v-model="value">
    <div class="help-pop-container">
      <div class="list-title">
        <slot name="title"></slot>
      </div>
      <div class="help-content">
        <slot name="content"></slot>
      </div>
      <div class="btn-bottom btn-common" @click="$emit('input',false)">我知道了</div>
    </div>
  </Popup>
</template>

<script>
  export default {
    props: {
      value: Boolean
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .help-pop-container {
    width: 600px;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;

    .list-title {
      font-size: 40px;
      font-weight: bold;
      line-height: 120px;
      padding-left: 40px;
    }

    .help-content {
      padding: 0 40px;
      max-height: 500px;
      overflow-y: auto;
      font-size: 26px;
      line-height: 40px;
    }

    .btn-bottom {
      margin-top: 40px;
      width: 100%;
      border-radius: 0;
    }
  }
</style>