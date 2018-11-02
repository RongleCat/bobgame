<template>
  <Popup :maskClose="false" v-model="value">
    <div class="game-pop-container">
      <img src="../assets/images/game/jiangbei.png" class="jiangbei">
      <div class="pop-main">
        <div class="title">
          <span>
            <slot name="title"></slot>
          </span>
        </div>
        <div class="subtitle">
          <slot name="subtitle"></slot>
        </div>
        <div class="pop-content">
          <slot name="content"></slot>
        </div>
        <div class="btn-box" :class="[btnType]">
          <slot name="btn"></slot>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script>
  export default {
    props: ['value', 'btnType'],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-pop-container {
    width: 600px;
    padding-top: 140px;
    background: url('../assets/images/game/game_popbg.png') no-repeat;
    background-size: 500px auto;
    background-position: center 50px;

    .jiangbei {
      height: 180px;
      position: absolute;
      top: 0;
      left: 235px;
    }

    .pop-main {
      width: 100%;
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      // padding: 30px;
      padding-bottom: 30px;
      padding-top: 60px;

      .title {
        text-align: center;

        span {
          display: inline-block;
          height: 48px;
          line-height: 50px;
          font-size: 32px;
          font-weight: bold;
          position: relative;

          &::after {
            display: block;
            width: 48px;
            height: 48px;
            position: absolute;
            right: -48px;
            top: 0;
            content: '';
            background: url('../assets/images/game/maizi.png') no-repeat;
            background-size: auto 48px;
            background-position: top right;
          }

          &::before {
            position: absolute;
            left: -48px;
            top: 0;
            display: block;
            width: 48px;
            height: 48px;
            content: '';
            background: url('../assets/images/game/maizi.png') no-repeat;
            background-size: auto 48px;
          }
        }
      }

      .subtitle {
        height: 38px;
        line-height: 40px;
        text-align: center;
        color: #999;
        font-size: 22px;
      }

      
    }
  }
</style>