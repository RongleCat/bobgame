<template>
  <div class="face-block">
    <swiper :options="swiperOption" ref="mySwiper" class="face-container">
      <swiperSlide v-for="i in 5" :key="i">
        <div class="item" v-for="j in 20" :key="j" :class="[`face-${(i-1)*20+j-1}`]" @click="emitFace((i-1)*20+j-1)"></div>
        <div class="item face-delete" @click="deleteFace"></div>
      </swiperSlide>
      <div class="face-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import "swiper/dist/css/swiper.css";
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  export default {
    components: { swiper, swiperSlide },
    data() {
      return {
        swiperOption: {
          loop: false,
          spaceBetween: 10,
          pagination: {
            el: '.face-pagination',
            clickable: true,
            bulletClass: 'face-item',
            bulletActiveClass: 'face-item-active'
          }
        }
      }
    },
    methods: {
      emitFace(index) {
        let that = this
        that.$emit('emitFace',`[em_${index}]`)
      },
      deleteFace() {
        this.$emit('deleteFace')
      }
    }
  }
</script>

<style lang="scss">
  .face-block {
    height: 270px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    transform: translateY(100%);
    transition: transform 0.2s;
    padding-top: 10px;
    @include clearfix;

    .item {
      width: 14.28%;
      height: 70px;
      float: left;
      background-size: 60px auto;
      background-position: center center;
      background-repeat: no-repeat;

      &.face-delete {
        background-image: url('../assets/images/face/delete.png');
      }

      @for $i from 0 through 99 {
        &.face-#{$i} {
          background-image:url('../assets/images/face/#{$i}.png');
        }
      }
    }
  }

  .face-container {
    height: 100%;
  }

  .face-pagination {
    text-align: center;
    position: absolute;
    bottom: 10px !important;

    .face-item {
      margin-left: 12px;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #c2c2c2;

      &.face-item-active {
        background: #999;
      }
    }
  }
</style>