<template>
  <div class="countdown-container clearfix">
    <div v-if="isEnd" class="item" v-for="(item,key,index) in leftTime.split(':')" :key="index">{{item}}</div>
    <div class="show-end" v-else>限时兑换已结束</div>
  </div>
</template>

<script>
  import moment from "moment";
  import { setInterval } from 'timers';
  export default {
    props: ['endTime'],
    data() {
      return {
        leftTime: '00:00:00:00'
      }
    },
    computed: {
      isEnd() {
        if (this.leftTime.length) {
          return true
        } else {
          return false
        }
      }
    },
    mounted() {
      let that = this
      let end = moment(that.endTime)
      that.calcTime(end)
      setInterval(() => {
        that.calcTime(end)
      }, 1000)
    },
    methods: {
      calcTime(end) {
        let that = this
        let now = moment()
        let times = parseInt(end.diff(now) / 1000)
        let leftTime = []
        if (times > 0) {
          leftTime[0] = Math.floor(times / (60 * 60 * 24));
          leftTime[1] = Math.floor(times / (60 * 60)) - (leftTime[0] * 24);
          leftTime[2] = Math.floor(times / 60) - (leftTime[0] * 24 * 60) - (leftTime[1] * 60);
          leftTime[3] = Math.floor(times) - (leftTime[0] * 24 * 60 * 60) - (leftTime[1] * 60 * 60) - (leftTime[2] * 60);
        }
        leftTime.map((item, index) => {
          if (item.toString().length < 2) {
            leftTime[index] = '0' + item.toString();
          }
        })

        that.leftTime = leftTime.join(':')
      }
    }
  }
</script>

<style scoped lang="scss">
  .countdown-container {
    height: 36px;

    .item {
      float: left;
      width: 44px;
      height: 36px;
      text-align: center;
      line-height: 38px;
      color: #fff;
      background: #333;
      margin-left: 14px;
      position: relative;
      border-radius: 5px;

      &:first-child {
        margin-left: 0;

        &::before {
          display: none;
        }
      }

      &::before {
        content: ':';
        color: #333;
        position: absolute;
        left: -14px;
        display: block;
        width: 14px;
        text-align: center;
        line-height: 36px;
        top: 0;
      }
    }

    .show-end {
      font-size: 24px;
      color: #666;
    }
  }
</style>