<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      我的参赛记录
    </template>
    <template slot="content">
      <div class="match-container">
        <GameItem :personal="true" :state="0"></GameItem>
        <GameItem :personal="false" :state="1"></GameItem>
        <GameItem :personal="true" :state="2"></GameItem>
        <GameItem :personal="false" :state="1"></GameItem>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import GameItem from "@/components/GameItem.vue";
  export default {
    components: {
      GameItem
    },
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .match-container {
    padding: 25px;

    .block-title {
      font-size: 46px;
      color: #333;
      font-weight: bold;
    }
  }
</style>