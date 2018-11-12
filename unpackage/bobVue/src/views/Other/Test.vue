<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      测试跳转
    </template>
    <template slot="content">
      <iframe src="http://test.fmcat.top/jump/" frameborder="0" sandbox="allow-top-navigation allow-scripts"></iframe>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        back:null
      }
    },
    watch:{
      back(v){
        if (v) {
          console.log('sss');
        }
      }
    },
    beforeMount(){
      console.log(this);
      window.vue = this
    }
  }
</script>

<style lang="scss" scoped>

</style>