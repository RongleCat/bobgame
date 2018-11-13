<template>
  <ThePage :color="stateBarColor" contentBg="#fff" :noHead="true" :showSkeleton="true" :loadDone="loadDone">
    <!-- <template slot="headerContent">
      <div class="good-title">
        Apple iPhone XS Max (A2104) 64GB 金色 移动联通电信4G手机 双卡双待
      </div>
    </template> -->
    <template slot="gujia">
      <div class="item-block h700">
        <div class="item"></div>
      </div>
      <div class="item-img-text h160">
        <div class="pic"></div>
        <div class="text">
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
          <div class="item" :class="[`w${random(10,3)}0`]"></div>
        </div>
      </div>
      <div class="item-block h700">
        <div class="item"></div>
      </div>
    </template>
    <template slot="content">
      <div class="detail-container" v-if="loadDone">
        <div class="btn-back" :style="{top:statusBarHeight}" @click="$router.go(-1)"><i class="iconfont icon-zuo"></i></div>
        <div class="btn-duihuan btn-common" @click="showAlart">确定兑换</div>
        <div class="guding-block">
          <div class="cover-list" ref="cover">
            <swiper :options="coverOption" ref="pay" class="swiper-cover">
              <swiperSlide v-for="(i,index) in pageData.pics" :key="index">
                <img :src="i | imgUrl">
              </swiperSlide>
            </swiper>
            <div class="cover-pagination"></div>
          </div>
          <div class="detail-info" :class="[pageData.level != '0' && parseInt(pageData.pr.pro_end_time)?'hasvip':'',!parseInt(pageData.pr.pro_end_time)?'nocount':'',pageData.level == '0'? 'novip':'']">
            <div class="title">{{pageData.pr.prname}}</div>
            <div class="miaoshu">{{pageData.pr.summary}}</div>
            <CountDown class="countdown" :endTime="parseInt(pageData.pr.pro_end_time)*1000" v-if="parseInt(pageData.pr.pro_end_time)"></CountDown>
            <div class="vip-price" v-if="pageData.level != '0'">V{{pageData.level}}享{{pageData.score}}折</div>
            <div class="bean-block">{{realPrice}}</div>
            <div class="cut-price">￥{{pageData.pr.jifen}}</div>
          </div>
          <div class="address-box" v-if="pageData.address.time">
            <div class="line-one"><span class="name">收货人：{{defultAddress.customer}}</span>{{defultAddress.phone}}</div>
            <div class="line-two">{{defultAddress.area+' '+defultAddress.detail}}</div>
            <div class="btn-change" @click="openAddressList">
              <div class="main"><i class="iconfont icon-edit"></i>更换</div>
            </div>
          </div>
          <div class="address-box" v-else>
            <div class="no-address">
              您还没有添加地址
            </div>
            <div class="btn-change" @click="showAdd = true">
              <div class="main"><i class="iconfont icon-add"></i>去添加</div>
            </div>
          </div>
          <div class="long-container">
            <div class="long-title">图文详情</div>
            <div class="content-block" ref="long" v-html="fromatUrl(pageData.pr.descr)"></div>
          </div>
        </div>
      </div>
      <van-popup v-model="selectAddress" position="right" :overlay="false">
        <div class="btn-address" @click="showAdd = true"><i class="iconfont icon-add"></i>新建地址</div>
        <div class="common-header" @click="selectAddress = false" :style="{marginTop:statusBarHeight}"><i class="iconfont icon-cuo"></i>选择地址</div>
        <transition name="fade-in">
          <div class="skeleton-container" v-if="!addressDone" :style="{top:popTop}">
            <div class="item-img-text h150" v-for="i in 8" :key="i">
              <div class="pic"></div>
              <div class="text">
                <div class="item" :class="[`w${random(10,3)}0`]"></div>
                <div class="item" :class="[`w${random(10,3)}0`]"></div>
                <div class="item" :class="[`w${random(10,3)}0`]"></div>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade-in">
          <div class="select-conttainer" :style="{top:popTop}" v-if="addressDone">
            <div class="address-list">
              <div class="item" v-for="(i,index) in addressList" :key="index" :class="[defultAddress.time == i.time?'selected':'']" @click="selectDefultAddress(i.time,index)">
                <div class="address">{{i.area +' '+ i.detail}}</div>
                <div class="userinfo">{{i.customer}} {{i.phone}}</div>
                <div class="btn-edit" @click="editAdd = true"><i class="iconfont icon-duigou"></i>选择</div>
              </div>
            </div>
          </div>
        </transition>
      </van-popup>
      <Popup v-model="showAdd" :maskClose="false">
        <div class="address-pop">
          <div class="title">新建地址</div>
          <AddressEdit :area-list="areaList" :show-delete="true" @save="saveAddress"></AddressEdit>
          <div class="btn-close">
            <div class="btn-main" @click="showAdd = false">
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
        </div>
      </Popup>

      <template v-if="loadDone">
        <Alert title="金豆不足" v-model="showBeenCant" :showCancel="true" confirmText="去充值" @confirm="$router.push('/my/recharge')">
          <div class="alert-pop">您的金豆不足~</div>
        </Alert>

        <Alert title="确认兑换" v-model="showConfirm" :showCancel="true" @confirm="buyGoods">
          <div class="alert-pop">是否使用 {{realPrice}}个金豆 兑换一件“{{pageData.pr.prname}}”</div>
        </Alert>

        <Alert title="没有地址" v-model="showNoAddress" :showCancel="true" confirmText="去添加" @confirm="goAddAddress">
          <div class="alert-pop">您还未添加地址~</div>
        </Alert>
      </template>
    </template>
  </ThePage>
</template>

<script>
  import CountDown from "@/components/CountDown.vue"
  import Alert from "@/components/Alert.vue"
  import area from '../../unit/area.js'

  import { Popup, AddressEdit, Toast } from "vant";
  export default {
    components: {
      CountDown,
      'van-popup': Popup,
      AddressEdit,
      Alert
    },
    data() {
      return {
        coverOption: {
          loop: true,
          spaceBetween: 0,
          preloadImages: false,
          lazyLoading: true,
          autoplay: false,
          watchOverflow: true,
          pagination: {
            el: '.cover-pagination',
            clickable: true,
            bulletClass: "cover-item",
            bulletActiveClass: "cover-item-active"
          }
        },
        loadDone: false,
        pageData: null,
        selectAddress: false,
        showAdd: false,
        areaList: area,
        addressList: [],
        addressDone: false,
        defultAddress: null,
        myBeen: null,
        showBeenCant: false,
        showConfirm: false,
        showNoAddress: false
      }
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight + 'rem'
      },
      popTop() {
        return this.$store.state.statusBarHeight + 88 / 75 + 'rem'

      },
      realPrice() {
        let discount = parseInt(this.pageData.pr.discount)
        let jifen = parseInt(this.pageData.pr.jifen)
        let score = this.pageData.score
        if (discount == 0 || discount == 10) {
          discount = 100
        }
        // Toast(discount + ',' + jifen + ',' + score)
        return Math.ceil(jifen * ((discount * score) / 1000))
      },
      stateBarColor() {
        if (this.selectAddress) {
          return 'rgba(255,255,255,0)'
        } else {
          return 'rgba(255,255,255,.5)'
        }
      }
    },
    activated() {
      let that = this
      let getPage = that.getPageData()

      let getBeen = that.getUserInfo(['balance'])

      Promise.all([getPage, getBeen]).then(r => {
        that.pageData = r[0]
        that.loadDone = true
        that.defultAddress = r[0].address
        that.myBeen = r[1].balance
      }).catch(err => {
        console.error(err);
      })
    },
    methods: {
      enter(arr) {
        arr.forEach(item => {
          if (item.isIntersecting) {
            item.target.src = item.target.dataset.src
          }
        })
      },
      fromatUrl(html) {
        let _html = html
        _html.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
          _html = _html.replace(new RegExp(capture, 'g'), "http://cdn.bobgame.cn" + capture)
        });
        return _html
      },
      saveAddress(val) {
        let that = this
        // console.log(val);
        Toast.loading('正在提交')
        that.$http.post('/Bobshop/changeAddress', {
          customer: val.name,
          phone: val.tel,
          area: `${val.province} ${val.city} ${val.county}`,
          detail: val.addressDetail
        }).then(() => {
          that.showAdd = false
          Toast('保存成功！')
          if (that.selectAddress) {
            that.getAddressList()
          } else {
            that.getPageData().then(() => {
              location.reload()
            })
          }
        }).catch(err => {
          console.error(err);
        })

        if (window.reqBlock) {
          return false
        }
        window.reqBlock = true
        Toast.loading('正在提交')
        that.$http.post('/Bobshop/changeAddress', {
          customer: val.name,
          phone: val.tel,
          area: `${val.province} ${val.city} ${val.county}`,
          detail: val.addressDetail
        }).then(r => {
          console.log(r)
          that.showAdd = false
          if (that.selectAddress) {
            that.getAddressList()
          } else {
            that.getPageData().then(() => {
              location.reload()
            })
          }
          Toast.success('保存成功')
          setTimeout(() => {
            delete window.reqBlock
          }, 4000)
        }).catch(err => {
          console.error(err)
          setTimeout(() => {
            delete window.reqBlock
          }, 4000)
        })
      },
      openAddressList() {
        let that = this
        that.selectAddress = true
        if (!that.addressDone) {
          that.getAddressList()
        }
      },
      getAddressList() {
        let that = this
        that.$http.get('/Bobshop/getAddressList').then(r => {
          that.addressList = r
          that.addressDone = true
        }).catch(err => {
          console.error(err);
        })
      },
      selectDefultAddress(time, index) {
        let that = this
        that.$http.post('/Bobshop/setDefaultAddress', { time }).then(() => {
          Toast('切换成功')
          that.defultAddress = that.addressList[index]
          that.selectAddress = false
        }).catch(err => {
          console.error(err);
        })
      },
      getPageData() {
        let that = this
        return that.$http.get('/Bobshop/prdetail', {
          params: {
            id: that.$route.params.id
          }
        })
      },
      showAlart() {
        let that = this
        if (!that.defultAddress.time.length) {
          that.showNoAddress = true
          return false
        }

        if (that.realPrice <= parseInt(that.myBeen)) {
          that.showConfirm = true
        } else {
          that.showBeenCant = true
          return false
        }
      },
      buyGoods() {
        let that = this
        // window.reqBlock = true
        if (window.reqBlock) {
          return false
        }
        window.reqBlock = true
        Toast.loading('正在购买')
        that.$http.post('/Bobshop/buygoods', {
          id: that.pageData.pr.id
        }).then(r => {
          console.log(r)
          that.showConfirm = false
          Toast.success('购买成功')
          setTimeout(() => {
            delete window.reqBlock
          }, 3000);
        }).catch(err => {
          console.error(err);
        })
      },
      goAddAddress() {
        this.showNoAddress = false
        this.showAdd = true
      }
    },
    beforeRouteLeave(to, from, next) {
      this.loadDone = false
      if (to.name == "GoodSearch") {
        to.meta.reload = false;
      } else {
        delete to.meta.reload
      }
      next();
    }
  }
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 100px;

    .btn-back {
      color: #fff;
      width: 100px;
      height: 100px;
      padding: 25px;
      position: fixed;
      left: 0;
      z-index: 100;

      .iconfont {
        display: block;
        width: 50px;
        height: 50px;
        background: rgba(48, 48, 48, .5);
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
      }
    }

    .btn-duihuan {
      position: fixed;
      bottom: 0;
      border-radius: 0;
      font-size: 30px;
    }

    .guding-block {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      background: #f0f0f0;
    }

    .cover-list {
      background: #fff;
      position: relative;

      img {
        width: 100vw;
        height: 100vw;
        object-fit: cover;
      }
    }

    img {
      max-width: 100%;
      display: block;
    }

    .detail-info {
      margin-top: 20px;
      min-height: 200px;
      background: #fff;
      padding-bottom: 25px;
      padding-top: 20px;
      padding-right: 270px;
      padding-left: 25px;
      position: relative;

      .title {
        font-size: 30px;
        line-height: 36px;
        padding-bottom: 25px;
      }

      .miaoshu {
        font-size: 24px;
        color: #adadad;
        line-height: 40px;

      }

      .countdown {
        position: absolute;
        top: 25px;
        right: 25px;
      }

      .bean-block {
        height: 44px;
        background-color: #f5f5f5;
        border-radius: 22px;
        color: #333;
        background-image: url("../../assets/images/bean.png");
        background-size: auto 33px;
        background-repeat: no-repeat;
        background-position-x: 7px;
        background-position-y: center;
        font-size: 30px;
        padding-left: 50px;
        padding-right: 20px;
        line-height: 48px;
        font-weight: bold;
        position: absolute;
        top: 85px;
        right: 25px;
        font-style: italic;
      }

      .cut-price {
        position: absolute;
        right: 25px;
        top: 145px;
        color: #adadad;
        display: block;
        font-size: 24px;
        line-height: 1;
        padding-right: 10px;

        &:before {
          display: block;
          content: '';
          position: absolute;
          background: #e93539;
          width: 100%;
          height: 1px;
          top: 10px;
          left: 0;
          right: 0;
        }
      }

      .vip-price {
        // float: right;
        position: absolute;
        right: 25px;
        top: 85px;
        height: 30px;
        background: #333;
        color: #fff;
        font-size: 20px;
        background-image: url("../../assets/images/mall/vip_price.png");
        background-size: auto 22px;
        background-repeat: no-repeat;
        background-position-x: 7px;
        background-position-y: center;
        padding-left: 40px;
        padding-right: 10px;
        border-radius: 5px;
      }

      &.hasvip {
        height: 240px;

        .bean-block {
          top: 135px;
        }

        .cut-price {
          top: 200px;
        }
      }

      &.nocount {
        .vip-price {
          top: 35px;
        }
      }

      &.nocount.novip {
        min-height: 140px;

        .bean-block {
          top: 25px;
        }

        .cut-price {
          top: 85px;
        }
      }

    }

    .long-container {
      width: 100%;
      margin-top: 20px;
      background: #fff;

      img {
        min-height: 300px;
        width: 100%;
      }

      .long-title {
        font-size: 34px;
        line-height: 80px;
        height: 80px;
        position: relative;
        padding-left: 30px;

        &:before {
          display: block;
          content: '';
          width: 20px;
          height: 30px;
          background: #333;
          transform: skew(-10deg, 0);
          position: absolute;
          left: -8px;
          top: 25px;
        }
      }
    }

    .address-box {
      width: 100%;
      min-height: 150px;
      margin-top: 20px;
      background: #fff url('../../assets/images/my/bar_line.jpg') repeat-x center bottom;
      background-size: auto 10px;
      position: relative;
      padding: 0 25px;
      padding-top: 10px;
      padding-bottom: 25px;
      padding-right: 150px;

      .no-address {
        height: 115px;
        font-size: 24px;
        line-height: 120px;
      }

      .line-one {
        font-size: 24px;
        line-height: 55px;

        .name {
          padding-right: 54px;
          font-weight: bold;
        }
      }

      .line-two {
        font-size: 24px;
        line-height: 1.2;
        padding: 5px 0;
      }

      .btn-change {
        width: 140px;
        right: 0;
        top: 0;
        bottom: 10px;
        @include tapMask;
        position: absolute;

        .main {
          height: 30px;
          font-size: 24px;
          color: #adadad;
          line-height: 30px;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          text-align: center;
          transform: translateY(-50%);

          .iconfont {
            font-size: 30px;
            vertical-align: -3px;
          }
        }
      }
    }
  }

  .van-popup--right {
    width: 100%;
    height: 100%;
    background: #f2f2f2;

    .btn-address {
      position: fixed;
      bottom: 25px;
      width: 700px;
      left: 25px;
      font-size: 30px;
      color: #333;
      line-height: 100px;
      background: $by;
      text-align: center;
      border-radius: 15px;
      @include tapColor;

      .iconfont {
        font-size: 36px;
        vertical-align: -3px;
        padding-right: 5px;
      }
    }

    .common-header {
      background: #f2f2f2;
      position: relative;

      .iconfont {
        width: 88px;
        height: 88px;
        text-align: center;
        position: absolute;
        left: 20px;
        top: 0;
        line-height: 90px;
        font-size: 48px;
      }
    }

    .skeleton-container {
      bottom: 0 !important;
      overflow: hidden;
    }
  }

  .select-conttainer {
    width: 100%;
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 150px;


    .address-list {

      .item {
        width: 100%;
        height: 150px;
        position: relative;
        background: #fff;
        padding: 15px 25px;
        padding-left: 35px;
        padding-right: 155px;
        margin-bottom: 10px;

        .address {
          font-size: 30px;
          font-weight: bold;
          line-height: 1.5;
          color: #333;
        }

        .userinfo {
          font-size: 22px;
          color: #666;
          position: absolute;
          bottom: 15px;
        }

        .btn-edit {
          right: 0;
          top: 0;
          bottom: 0;
          width: 130px;
          height: 150px;
          text-align: center;
          padding-top: 30px;
          font-size: 20px;
          color: #999;
          line-height: 36px;
          @include tapMask;
          position: absolute;

          .iconfont {
            display: block;
            width: 60px;
            height: 60px;
            font-size: 32px;
            line-height: 60px;
            margin: 0 auto;
          }
        }

        &.selected {
          &:before {
            display: block;
            width: 10px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            background: $by;
            content: '';
          }
        }
      }
    }
  }

  .add-address-pop {
    text-align: left;
  }

  .address-pop {
    width: 600px;
    background: #fff;
    border-radius: 15px;
    // overflow: hidden;
    padding: 0 25px;
    position: relative;

    .title {
      line-height: 88px;
      text-align: center;
    }

    .btn-close {
      position: absolute;
      height: 150px;
      line-height: 150px;
      bottom: -150px;
      width: 100%;
      left: 0;
      z-index: 100;
      text-align: center;

      .btn-main {
        width: 150px;
        height: 100%;
        margin: 0 auto;
      }

      .iconfont {
        font-size: 64px;
        color: #fff;
      }
    }
  }
</style>