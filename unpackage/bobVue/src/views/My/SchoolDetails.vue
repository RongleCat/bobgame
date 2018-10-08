<template>
  <ThePage color="#f2f2f2" contentBg="#fff">
    <template slot="headerContent">
      {{id}}
    </template>
    <template slot="content">
      <div class="detail-container">
        <div class="head-box">
          <div class="title">索尼今年将不举办PSX：除了《对马之魂》《梦》 无更多新游戏内容值得展示</div>
          <div class="time">2018-09-29 08:37:25</div>
        </div>
        <div class="content-box">
          <p>
            往年索尼的PSX（PlayStation Experience）都会在12月份举办，今年却发生了例外，临近年底索尼对此一直毫无声息，现在索尼高管Shawn Layden在官方博客里宣布，尽管知道让很多粉丝失望，但索尼今年不办PSX了。因为今年除了《人生尽头》和《梦》，没有能够展示的新游戏内容，所以直接选择了不办。
          </p>
          <p><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/gamersky_01small_02_2018929834229.jpg"></p>
          <p>值得注意的是，索尼还有《对马之魂》、《死亡搁浅》、《最后生还者2》等新作，不过可能是这些游戏暂时也没有能够在PSX上可以展示的内容。如果索尼今年参加巴黎游戏周的话，那么玩家们仍有机会在年底之前了解更多即将到来的第一方游戏。</p>
          <p><img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/gamersky_02small_04_2018929834849.jpg"></p>
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
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-container {
    padding: 30px 25px;
    overflow: hidden;
    .head-box {
      position: relative;
      // padding-bottom: 20px;
      @include oneB;

      .title {
        font-size: 40px;
        line-height: 50px;
        padding-bottom: 10px;
      }

      .time {
        font-size: 24px;
        color: #adadad;
        line-height: 60px;
      }
    }

    .content-box {
      padding: 20px 0;
      font-size: 28px;

      p {
        text-indent: 2em;
        padding-bottom: 10px;

        img {
          max-width: 100%;
          margin-top: 10px;
          transform: translateX(-2em);
        }
      }
    }
  }
</style>