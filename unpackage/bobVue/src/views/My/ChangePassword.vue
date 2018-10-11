<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      修改密码
    </template>
    <template slot="content">
      <div class="bind-container">
        <div class="input-list">
          <div class="item">
            <label for="oldPassword"><i class="iconfont icon-password"></i>原密码</label>
            <input type="password" id="oldPassword" placeholder="请输入原密码">
          </div>
          <div class="item">
            <label for="newPassword"><i class="iconfont icon-password"></i>新密码</label>
            <input type="password" id="newPassword" placeholder="请输入新密码">
          </div>
        </div>
        <div class="btn-confirm">立即修改</div>
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
      padding-left: 200px;
      @include oneB;

      &:before {
        z-index: 200;
        left: 25px;
        right: 25px !important;
      }

      label {
        display: block;
        position: absolute;
        width: 200px;
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
        }
      }

      input {
        border: 0;
        height: 100%;
        line-height: 30px;
        width: 100%;
        font-size: 30px;
        display: block;
        text-align: right;
        padding-right: 25px;

        &::-webkit-input-placeholder {
          color: #adadad;
        }
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