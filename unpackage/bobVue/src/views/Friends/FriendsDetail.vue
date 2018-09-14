<template>
  <div>
    <ThePage>
      <template slot="headerContent">
        跟傻子聊天
      </template>
      <template slot="content">

        <div class="bg">
          好友页面
        </div>
      </template>
    </ThePage>
  </div>
</template>

<script>
  import ThePage from "@/components/ThePage";
  export default {
    components: { ThePage },
    data() {
      return {

      }
    },
    methods: {
      setPaddingTop(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg {
    width: 100%;
    height: 100%;
    background: #000;
  }
</style>