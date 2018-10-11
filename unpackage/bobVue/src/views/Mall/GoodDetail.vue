<template>
  <ThePage color="rgba(255,255,255,.5)" contentBg="#f0f0f0" :noHead="true">
    <!-- <template slot="headerContent">
      <div class="good-title">
        Apple iPhone XS Max (A2104) 64GB 金色 移动联通电信4G手机 双卡双待
      </div>
    </template> -->
    <template slot="content">
      <div class="detail-container">
        <div class="cover-list">
          <swiper :options="coverOption" ref="pay" class="swiper-pay">
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/good_01.jpg">
            </swiperSlide>
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/good_01.jpg">
            </swiperSlide>
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/good_01.jpg">
            </swiperSlide>
            <swiperSlide>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/good_01.jpg">
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        coverOption: {
          loop: true,
          spaceBetween: 10
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;

    img {
      max-width: 100%;
    }
  }
</style>