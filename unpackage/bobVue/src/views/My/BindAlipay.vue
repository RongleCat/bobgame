<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      绑定支付宝账号
    </template>
    <template slot="content">
      <div class="bind-container">
        <div class="input-list">
          <div class="item">
            <label for="phone"><i class="iconfont icon-zhifubao"></i>支付宝账号</label>
            <input type="number" id="phone">
          </div>
          <div class="item">
            <label for="code"><i class="iconfont icon-zhanghu"></i>真实姓名</label>
            <input type="number" id="code">
          </div>
          <div class="item">
            <label for="password"><i class="iconfont icon-phone"></i>手机号码</label>
            <input type="password" id="password">
          </div>
        </div>
        <div class="btn-confirm">立即绑定</div>
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
  .bind-container {
    padding: 25px;
  }


  .input-list {
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 25px;

    .item {
      height: 100px;
      line-height: 100px;
      position: relative;
      padding-left: 240px;
      @include oneB;

      &:before {
        z-index: 200;
        left: 25px;
        right: 25px !important;
      }

      label {
        display: block;
        position: absolute;
        width: 240px;
        left: 0;
        top: 0;
        padding-left: 90px;
        font-size: 24px;
        color: #333;

        .iconfont {
          font-size: 48px;
          display: block;
          width: 100px;
          height: 100px;
          position: absolute;
          text-align: center;
          left: 0;
          top: 0;
          color: #666;

          &.icon-zhifubao {
            color: #00a0e9;
          }
        }
      }

      input {
        border: 0;
        height: 100%;
        line-height: 30px;
        width: 100%;
        font-size: 30px;
        display: block;
      }

      &.code {
        padding-right: 180px;

        span {
          bottom: 0;
          right: 0;
          display: block;
          width: 180px;
          height: 100px;
          font-size: 24px;
          color: $fy;
          line-height: 100px;
          text-align: center;
          @include tapMask;
          position: absolute;

          &:before {
            content: '';
            display: block;
            height: 50px;
            width: 1px;
            background: #f0f0f0;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      &:last-child:before {
        display: none;
      }
    }
  }

  .btn-confirm {
    width: 100%;
    height: 100px;
    background: $by;
    text-align: center;
    line-height: 100px;
    border-radius: 15px;
    font-size: 30px;
    @include tapColor;
  }
</style>