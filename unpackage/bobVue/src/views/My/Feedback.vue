<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      意见反馈
    </template>
    <template slot="content">
      <div class="feedback-container">
        <div class="feedback-block">
          <div class="title">
            <label for="title">主题：</label>
            <input type="text" id="title" placeholder="请输入您的主题（50字以内）">
          </div>
          <div class="content">
            <div class="count"><span>000</span>/500</div>
            <textarea name="content">请输入您对我们平台的宝贵建议</textarea>
          </div>
        </div>

        <div class="feedback-block">
          <div class="top-title">留下您的联系方式，一经采纳有意外惊喜哦~</div>
          <div class="bottom-input">
            <input type="text" placeholder="手机号/邮箱/QQ号">
          </div>
        </div>
        <div class="btn-common">提交反馈</div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        count: '000/500'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .feedback-container {
    padding: 25px;

    .feedback-block {
      width: 100%;
      border-radius: 15px;
      margin-bottom: 20px;
      background: #fff;

      .title {
        width: 100%;
        height: 100px;
        position: relative;
        padding-left: 110px;
        @include oneB;

        label {
          line-height: 102px;
          font-size: 26px;
          padding-left: 30px;
          position: absolute;
          left: 0;
          top: 0;
        }

        input {
          display: block;
          padding-top: 8px;
          width: 100%;
          height: 100px;
          line-height: 28px;
          border: 0;
        }
      }

      .content {
        width: 100%;
        position: relative;
        padding-bottom: 50px;

        .count {
          font-size: 24px;
          color: #adadad;
          position: absolute;
          bottom: 20px;
          right: 30px;

          span {
            color: $fy;
          }
        }

        textarea {
          width: 100%;
          min-height: 250px;
          resize: none;
          border: 0;
          padding: 30px;
        }
      }

      .top-title {
        line-height: 62px;
        height: 60px;
        font-size: 24px;
        color: #999;
        padding-left: 30px;
        position: relative;
        @include oneB;

      }

      .bottom-input {
        border-radius: 0 0 15px 15px;
        overflow: hidden;

        input {
          display: block;
          padding-top: 8px;
          width: 100%;
          height: 100px;
          line-height: 28px;
          border: 0;
          padding-left: 30px;
        }
      }
    }
  }
</style>