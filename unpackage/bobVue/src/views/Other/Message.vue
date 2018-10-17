<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      通知
    </template>
    <template slot="content">
      <div class="msg-container">
        <MessageItem v-for="(item,index) in 10" :key="index" v-bind="msgList[0]"></MessageItem>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import MessageItem from "@/components/MessageItem.vue";
  export default {
    components: { MessageItem },
    data() {
      return {
        msgList: [{
          imgurl: 'http://www.bobgame.cn/Public/Mobile/bob2/img/notice.png',
          title: '系统通知',
          subtitle: '平台安全升级通知',
          time: '2018-09-28 17:36:54',
          content: '平台定于明天上午10:00——12:00进行平台服务器安全升级和功能优化，在服务器升级期间平台相关功能和游戏将暂停使用，升级完成后平台所有功能将全部恢复正常。'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .msg-container {
    padding: 25px;
  }
</style>