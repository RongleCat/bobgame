<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      排行榜
    </template>
    <template slot="content">
      <div class="rank-containe">
        <div class="rank-head">
          <div class="center-tip">
            两个黄鹂鸣翠柳，你连榜单都没有
          </div>
          <div class="top-nav">
            <div class="item active">总榜</div>
            <div class="item">周榜</div>
          </div>
        </div>
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
  .rank-head {
    width: 100%;
    height: 346px;
    background: url('../../assets/images/my/rank_bg.jpg') no-repeat top center;
    background-size: contain;
    position: relative;
    padding-top: 170px;
    .center-tip{
      font-size: 24px;
      color: #b4d6f9;
      padding-left: 55px;
      line-height: 48px;
    }

    .top-nav {
      width: 100%;
      height: 80px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(48, 90, 213, .2);
      @include clearfix;

      .item {
        width: 50%;
        height: 80px;
        float: left;
        color: #fff;
        text-align: center;
        line-height: 82px;
        font-size: 24px;

        &.active {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
</style>