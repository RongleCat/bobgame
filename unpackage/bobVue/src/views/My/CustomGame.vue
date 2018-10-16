<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      创建"专属"比赛
      <div class="btn-bottom btn-common" @click="$router.push('/my/contactus')">联系客服开启权益</div>
    </template>
    <template slot="content">
      <div class="diy-container">
        <img :src="`https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/diy_${i}.jpg`" v-for="i in 3" :key="i">
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .diy-container {
    position: relative;

    img {
      display: block;
      width: 100%;
    }


  }

  .btn-bottom {
    border-radius: 0;
    background: #fe6f4a;
    color: #fff;
    letter-spacing: 3px;
    position: fixed;
    bottom: 0;
  }
</style>