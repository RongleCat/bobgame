<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      查看比赛结果
    </template>
    <template slot="content">
      <div class="res-container">
        <div class="res-main">
          <div class="res-head">
            <span>序号</span>
            <span>昵称</span>
            <span>得分</span>
            <span>奖励</span>
          </div>
          <div class="res-body">
            <div class="line rank-1">
              <div class="number"></div>
              <div class="info">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                大傻子
              </div>
              <div class="fenshu" number="200000"></div>
              <div class="jiangli">30000金豆</div>
            </div>
            <div class="line rank-2">
              <div class="number"></div>
              <div class="info">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                二傻子</div>
              <div class="fenshu" number="150000"></div>
              <div class="jiangli">20000金豆</div>
            </div>
            <div class="line rank-3">
              <div class="number"></div>
              <div class="info">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                三傻子</div>
              <div class="fenshu" number="100000"></div>
              <div class="jiangli">10000金豆</div>
            </div>
            <div class="line me">
              <div class="number">我</div>
              <div class="info">
                <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
                曹铁柱</div>
              <div class="fenshu" number="10000"></div>
              <div class="jiangli">无</div>
            </div>
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
        showPop: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .res-container {
    width: 100%;
    background: $gb url('../../assets/images/game/common_bg.png') no-repeat;
    background-size: 100% auto;
    background-position: center top;
    padding: 25px;
    padding-top: 80px;
    height: 100%;

    .res-main {
      width: 100%;
      background: #fff;
      border-radius: 15px;
      overflow: hidden;

      .res-head {
        background: #f0f0f0;

        span {
          display: inline-block;
          height: 100px;
          line-height: 102px;
          font-size: 30px;
          font-weight: bold;
          text-align: center;

          &:nth-child(1) {
            width: 120px;
          }

          &:nth-child(2) {
            width: 190px;
          }

          &:nth-child(3) {
            width: 190px;
          }

          &:nth-child(4) {
            width: 200px;
          }
        }
      }

      .res-body {
        .line {
          @include clearfix;
          height: 100px;
          line-height: 102px;
          overflow: hidden;

          >div {
            float: left;
            height: 100%;
            font-size: 22px;

            &:nth-child(1) {
              width: 120px;
            }

            &:nth-child(2) {
              width: 190px;
            }

            &:nth-child(3) {
              width: 190px;
            }

            &:nth-child(4) {
              width: 200px;
            }
          }

          .number {
            text-align: center;
          }

          .info {
            position: relative;
            padding-left: 100px;
            @include textof;

            img {
              position: absolute;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              left: 20px;
              top: 20px;
            }
          }

          .fenshu {
            position: relative;

            &::after {
              background: $gb;
              content: attr(number);
              color: #fff;
              padding: 0 14px;
              height: 34px;
              line-height: 36px;
              border-radius: 5px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .jiangli {
            text-align: center;
          }

          @for $i from 1 through 3 {
            &.rank-#{$i} {
              .number {
                background: url('../../assets/images/my/rank_#{$i}.png') no-repeat center;
                background-size: auto 40px;
              }
            }
          }
        }
      }
    }
  }
</style>