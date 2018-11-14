<template>
  <ThePage color="#f2f2f2" contentBg="#161129" :showSkeleton="true" :loadDone="loadDone">
    <template slot="headerContent">
      签到
      <div class="sgin-bottom">
        <div class="item">
          <div class="main-text">2天</div>
          <div class="bottom-text">最低<br>100积分</div>
        </div>
        <div class="item no">
          <div class="main-text">3天</div>
          <div class="bottom-text">最低<br>100积分</div>
        </div>
        <div class="item no">
          <div class="main-text">10天</div>
          <div class="bottom-text">最低<br>100积分</div>
        </div>
        <div class="item no">
          <div class="main-text">20天</div>
          <div class="bottom-text">最低<br>100积分</div>
        </div>
        <div class="item no">
          <div class="main-text">30天</div>
          <div class="bottom-text">最低<br>100积分</div>
        </div>
      </div>
    </template>
    <template slot="gujia">
      <div class="item-block h300">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-block h600">
        <div class="item"></div>
      </div>
    </template>
    <template slot="content">
      <div class="sgin-container">
        <div class="sgin-head">
          <div class="center-tip">每月满签最高可获得：300金豆</div>
          <div class="sgin-end">本月已签到3天</div>
          <div class="bottom-tip">签到次数每月重置哦！</div>
        </div>
        <div class="sgin-month">
          <div class="item patch">
            <div class="star-ball"></div>
          </div>
          <div class="item end">
            <div class="star-ball"></div>
          </div>
          <div class="item ok">
            <div class="star-ball"></div>
            <span>可签</span>
          </div>
          <div class="item" v-for="i in parseInt(pageData.day)" :key="i">
            <div class="star-ball">{{i}}</div>
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
        pageData: null,
        loadDone: false
      }
    },
    activated() {
      let that = this
      document.querySelector('title').innerText = '签到'
      that.$http.get('/Bobsign/index').then(r => {
        console.log(r)

        if (r) {
          that.pageData = r
          that.loadDone = true
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sgin-container {
    color: #fff;
    padding-bottom: 220px;

    .sgin-head {
      height: 300px;
      width: 100%;
      background: url('../../assets/images/my/sgin_top.png') no-repeat top center;
      background-size: 100% auto;
      padding-top: 155px;
      position: relative;

      .center-tip {
        font-size: 20px;
        font-style: italic;
        height: 36px;
        line-height: 36px;
        margin-left: 230px;
        width: 365px;
        text-align: center;
      }

      .sgin-end {
        font-size: 34px;
        font-weight: bold;
        position: absolute;
        bottom: 0;
        left: 50px;
        line-height: 50px;
      }

      .bottom-tip {
        line-height: 50px;
        height: 50px;
        position: absolute;
        bottom: 0;
        right: 50px;
        color: #a7a6ab;
      }
    }

    .sgin-month {
      padding: 0 30px;
      padding-top: 30px;
      @include clearfix;

      .item {
        float: left;
        width: 115px;
        padding-top: 115px;
        position: relative;
        filter: grayscale(100%);

        .star-ball {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: url('../../assets/images/my/starball.png') no-repeat;
          background-size: auto 100%;
          color: #0d0e1f;
          text-align: center;
          line-height: 82px;
          font-size: 24px;
          font-weight: bold;
        }

        &.ok {
          filter: none;

          span {
            display: block;
            background: #ff4747;
            color: #551313;
            width: 56px;
            height: 26px;
            line-height: 30px;
            font-size: 20px;
            border-radius: 5px;
            text-align: center;
            position: absolute;
            top: 0;
            right: 0;

            &:after {
              position: absolute;
              bottom: -12px;
              left: 50%;
              transform: translateX(-50%);
              content: '';
              width: 0;
              height: 0;
              border-width: 7px;
              border-style: solid;
              border-color: #ff4747 transparent transparent transparent;
            }
          }
        }

        &.end {
          filter: none;

          .star-ball {
            background-position-x: -160px;
          }
        }

        &.patch {
          filter: none;

          .star-ball {
            background-position-x: -80px;
          }
        }
      }
    }
  }

  .sgin-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 210px;
    background: url('../../assets/images/my/sgin_bottom.png') no-repeat bottom center;
    background-size: 100% auto;
    padding: 0 15px;
    @include clearfix;

    .item {
      float: left;
      width: 144px;
      background: url('../../assets/images/my/big_starball.png') no-repeat top center;
      background-size: 112px;

      .main-text {
        line-height: 116px;
        height: 112px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        color: #333;
      }

      .bottom-text {
        line-height: 28px;
        color: #fff;
        font-size: 20px;
      }

      &.no {
        filter: grayscale(100%);
      }
    }
  }
</style>