<template>
  <div class="group-container">
    <div class="group-head-img" @click="goList">
      <img v-lazy="createUrl(typeinfo.pic)">
    </div>
    <div class="group-swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in goodslist" :key="item.id">
          <div class="goods-item" @click="$router.push('/mall/gooddetail/'+item.id)">
            <span class="left-block">剩余 {{parseInt(item.initstore/item.store*100)}}%</span>
            <img v-lazy="createUrl(item.img)">
            <div class="title">{{item.prname}}</div>
            <div class="center-block">
              <div class="bean-block">{{item.jifen}}</div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="goods-item" @click="goList">
            <div class="enter-more"><i class="iconfont icon-you"></i>查看更多</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['goodslist', 'typeinfo'],
    data() {
      return {
        swiperOption: {
          loop: false,
          freeMode: true,
          slidesPerView: 2.5
        }
      }
    },
    methods: {
      goList() {
        this.$router.push(`/mall/goodsearch/${this.typeinfo.id}_${encodeURI(encodeURI(this.typeinfo.type_name))}`)
      },
      createUrl(url) {
        return `http://cdn.bobgame.cn${url}`
      }
    },
    mounted() {
      // console.log(this.type, this.cover, this.goods);
    }
  }
</script>

<style scoped lang="scss">
  .group-container {
    padding-bottom: 20px;
  }

  .group-head-img {
    margin-bottom: 20px;
    display: block;

    img {
      display: block;
      object-fit: cover;
    }
  }

  .goods-item {
    width: 100%;
    height: 360px;
    padding-top: 35px;
    position: relative;

    img {
      display: block;
      object-fit: cover;
      width: 180px;
      height: 180px;
      margin: 0 auto;
      margin-bottom: 20px;
    }

    .title {
      font-size: 24px;
      line-height: 34px;
      color: #333;
      padding: 0 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 15px;
      min-height: 68px;
      text-align: center;
    }

    .left-block {
      padding: 0 12px;
      color: #ff9f74;
      background: #ffebd0;
      height: 30px;
      line-height: 32px;
      border-radius: 5px;
      position: absolute;
      right: 25px;
      top: 25px;
    }
  }

  .bean-block {
    display: inline-block;
    height: 36px;
    background-color: #f5f5f5;
    border-radius: 5px;
    color: #333;
    background-image: url("../assets/images/bean.png");
    background-size: auto 24px;
    background-repeat: no-repeat;
    background-position-x: 7px;
    background-position-y: center;
    font-size: 24px;
    padding-left: 40px;
    padding-right: 10px;
    line-height: 38px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  .enter-more {
    width: 180px;
    height: 240px;
    text-align: center;
    color: #999;
    background: #f0f0f0;
    border-radius: 10px;
    padding-top: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include tapColor;

    .iconfont {
      display: block;
      margin: 0 auto;
      width: 70px;
      height: 70px;
      border: 3px solid #999;
      line-height: 68px;
      font-size: 36px;
      border-radius: 50%;
      padding-left: 5px;
      margin-bottom: 28px;
    }
  }
</style>