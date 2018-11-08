<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      自定义比赛列表
      <div class="bottom-create" v-if="gameList.length" @click="$router.push('/game/creatematch')">创建比赛</div>
    </template>
    <template slot="content">
      <div class="gamelist-container" :class="[gameList.length?'':'bg-fff']">
        <div class="list-empty" v-if="!gameList.length">
          <div class="no-data">
            <h3>您还没有创建比赛</h3>
            <p>快去创建游戏约战好友吧！</p>
            <div class="btn-create" @click="$router.push('/game/creatematch')">创建比赛</div>
          </div>
        </div>
        <div class="list-hasdata" v-else>
          <GameItem v-for="i in 10" :key="i" :isRelease="true" :personal="true" :state="i%4" @share="onshare" @edit="onedit" @joininfo="onjoinInfo" @cancel="oncancel" @viewresult="onviewResult" @delete="ondelete"></GameItem>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import GameItem from "@/components/GameItem.vue";
  import { Toast } from "vant";
  export default {
    components: {
      GameItem
    },
    data() {
      return {
        gameList: [1]
      }
    },
    computed: {
      stateParse() {
        if (this.state == 0) {
          return {
            stateClass: '',
            stateText: '未开始'
          }
        } else if (this.state == 1) {
          return {
            stateClass: 'open',
            stateText: '进行中'
          }
        } else {
          return {
            stateClass: '',
            stateText: '已结束'
          }
        }
      }
    },
    methods: {
      onshare(id) {
        Toast('分享:id=' + id);
      },
      onedit(id) {
        Toast('编辑:id=' + id);
      },
      ondelete(id) {
        Toast('删除:id=' + id);
      },
      onviewResult(id) {
        Toast('查看比赛结果:id=' + id);
      },
      oncancel(id) {
        Toast('取消:id=' + id);
      },
      onjoinInfo(id) {
        Toast('查看报名情况:id=' + id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gamelist-container {
    min-height: 100%;

    &.bg-fff {
      background: #fff;
    }

    .list-empty {
      padding-top: 260px;
      min-height: 100%;

      .no-data {
        line-height: 46px;

        h3 {
          font-size: 30px;
        }

        p {
          font-size: 22px;
          color: #a3a3a3;
        }

        .btn-create {
          width: 380px;
          height: 88px;
          line-height: 90px;
          text-align: center;
          border-radius: 44px;
          background: $by;
          display: inline-block;
          margin-top: 70px;
          @include tapColor;
        }
      }
    }

    .list-hasdata {
      padding: 25px;
      padding-bottom: 100px;
    }

  }

  .bottom-create {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #fe6f49;
    color: #fff;
    line-height: 102px;
    height: 100px;
    font-size: 30px;
    @include tapColor;
  }
</style>