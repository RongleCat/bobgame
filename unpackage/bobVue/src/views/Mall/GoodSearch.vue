<template>
  <ThePage color="#f2f2f2" @headerHeight="setHeaderHeight" contentBg="#fff" class="good-page" :loadDone="loadDone" :showSkeleton="true">
    <template slot="headerContent">
      全部商品
      <div class="filter-bar" :style="{top:topHeight+'rem'}">
        <div class="filter-item" :class="[filterOpen?'active':'']" @click="filterOpen = !filterOpen">筛选<i class="iconfont icon-xiala"></i></div>
        <div class="filter-item" :class="[classOpen?'active':'']" @click="classOpen = !classOpen">{{typeSelect!=-1?typeName:'全部'}}<i class="iconfont icon-xiala"></i></div>
        <div class="filter-item btn-search" @click="openSearch">搜索</div>
        <div class="search-box" v-if="showSearch">
          <input v-model="keyword" :class="{focus:searchFocus||isFocus}" placeholder="输入关键字" type="search" @focus="isFocus = true" @blur="isFocus = false" autofocus="true" ref="search" />
          <div class="btn-cancel" @click="closeSearch">取消</div>
        </div>
      </div>
    </template>

    <template slot="gujia">
      <div class="item-block h100">
        <div class="item"></div>
      </div>
      <div class="item-img-text h180" v-for="i in 6" :key="i">
        <div class="pic"></div>
        <div class="text">
          <div class="item w60"></div>
          <div class="item w40"></div>
          <div class="item w90"></div>
        </div>
      </div>
    </template>

    <template slot="plug">
      <transition name="fade-in">
        <div class="income-mask" v-if="filterOpen || classOpen" @touchstart="closeAllPop"></div>
      </transition>
      <transition name="pop-top">
        <div class="filter-pop" v-if="filterOpen" :style="{top:filterTop}">
          <div class="title">选择金豆区间</div>
          <div class="time-line">
            <div class="item start-time ipt">
              <input v-model="minBeen" type="number" placeholder="0" />
            </div>
            <div class="item ipt">
              <input v-model="maxBeen" type="number" placeholder="0" />
            </div>
            <div class="item" :class="[timeBtnClass?'active':'']" @click="beenConfirm">
              确定
            </div>
            <div class="item" v-if="timeBtnClass" @click="clearBeen">清除</div>
          </div>
        </div>
      </transition>
      <transition name="pop-top">
        <div class="class-pop" v-if="classOpen" :style="{top:filterTop}">
          <div class="time-line">
            <div class="item" v-for="(i,index) in typeArr" :key="index" :class="[index === typeSelect?'active':'']" @click="typeSelect = index">{{i.type_name}}</div>
          </div>
        </div>
      </transition>
    </template>
    <template slot="content">
      <div class="good-container">
        <List v-model="loading" :finished="finished" @load="onLoad">
          <div class="item" v-for="(i,index) in listData" :key="index" @click="$router.push('/mall/gooddetail/'+i.id)">
            <div class="good-pic">
              <div class="good-left">剩余{{parseInt(i.initstore/i.store*100)}}%</div>
              <img :src="i.img | imgUrl | ossResize(calcSize(240))">
            </div>
            <div class="main-title">{{i.prname}}</div>
            <div class="sub-title">{{i.summary}}</div>
            <div class="price-info">
              <div class="bean-block">{{i.jifen}}</div>
              <div class="vip-price" v-if="vipLevel != '0'">V{{vipLevel}}享{{vipDiscount}}折</div>
            </div>
          </div>

          <div class="list-no-data" v-if="noData">已经没有了</div>
        </List>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { List, Toast } from "vant";
  import _ from "lodash";
  export default {
    components: {
      List
    },
    data() {
      return {
        topHeight: 0,
        filterOpen: false,
        keyword: "",
        isFocus: false,
        showSearch: false,
        filterTop: null,
        selectBeen: -1,
        classOpen: false,
        minBeen: null,
        maxBeen: null,
        finished: false,
        loading: false,
        page: 0,
        typeId: this.$route.params["condition"].split("_")[0],
        typeName: decodeURI(
          decodeURI(this.$route.params["condition"].split("_")[1])
        ),
        typeArr: null,
        typeSelect: -1,
        loadDone: false,
        listData: [],
        pageMax: null,
        noData: false,
        vipLevel: null,
        vipDiscount: null
      };
    },
    watch: {
      isFocus(newValue) {
        let that = this;
        if (newValue) {
          setTimeout(() => {
            that.$refs.search.focus();
          }, 200);
        }
      },
      filterOpen(newValue) {
        if (newValue) {
          this.classOpen = false;
        }
      },
      classOpen(newValue) {
        if (newValue) {
          this.filterOpen = false;
        }
      },
      typeSelect(v) {
        this.typeName = this.typeArr[v].type_name;
        this.typeId = this.typeArr[v].id;
        this.classOpen = false;
      },
      typeId() {
        Toast.loading({
          message: '加载中...'
        });
        let that = this;
        that.listData = [];
        that.page = 1;
        that.getListData();
      }
    },
    mounted() {
      // console.log(this.typeName);
      let that = this;

      let $type = new Promise((resolve, reject) => {
        that.$http.get("/Bobshop/getTypeList").then(r => {
          console.log(r);

          r.type.map((item, index) => {
            if (item.type_name == that.typeName) {
              that.typeSelect = index;
            }
          });
          that.typeArr = r.type;
          that.vipLevel = r.level;
          that.vipDiscount = r.score;
          resolve(r.type);
        }).catch(err => {
          reject(err)
        });
      });

      let $list = that.getListData();

      Promise.all([$type, $list]).then(r => {
        console.log(r);
        that.loadDone = true;
      });

      that.$watch(
        "keyword",
        _.debounce(function () {
          that.listData = [];
          that.page = 1;
          that.getListData();
        }, 500)
      );
    },
    computed: {
      searchFocus() {
        return this.keyword.length;
      },
      timeBtnClass() {
        return !!this.maxBeen && parseInt(this.maxBeen) > parseInt(this.minBeen);
      }
    },
    methods: {
      setHeaderHeight(value) {
        this.filterTop = value + 100 / 75 + "rem";
        this.topHeight = value;
      },
      closeSearch() {
        this.showSearch = false;
        this.keyword = "";
      },
      closeAllPop() {
        this.filterOpen = this.classOpen = false;
        this.minBeen = this.maxBeen = null;
      },
      onLoad() {
        let that = this;
        that.page++;
        if (that.page > that.pageMax) {
          that.loading = false;
          that.noData = true;
          return false;
        }
        that.getListData().then(() => {
          that.loading = false;
        });
      },
      openSearch() {
        this.showSearch = true;
        this.filterOpen = this.classOpen = false;
      },
      getListData() {
        let that = this;
        return new Promise((resolve, reject) => {
          that.$http.get("/Bobshop/getGoodsList", {
              params: {
                prname: that.keyword,
                type: that.typeId,
                jdstart: that.minBeen,
                jdend: that.maxBeen,
                page: that.page
              }
            })
            .then(r => {
              console.log(r);
              // that.typeArr = r.type
              that.pageMax = r.max;
              that.listData = [...that.listData, ...r.result];
              Toast.clear()
              resolve(r);
            })
            .catch(err => {
              reject(err);
            });
        });
      },
      beenConfirm() {
        Toast.loading({
          message: '加载中...'
        });
        this.listData = [];
        this.page = 1;
        this.filterOpen = false;
        this.getListData();
      },
      clearBeen() {
        Toast.loading({
          message: '加载中...'
        });
        this.minBeen = this.minBeenmaxBeen = null;
        this.filterOpen = false;
        this.listData = [];
        this.page = 1;
        this.getListData();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .good-container {
    width: 100%;
    position: relative;
    padding-top: 100px;
    // min-height: 100%;
    height: 100%;
    // overflow: hidden;
  }

  .filter-bar {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
    height: 100px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #efefef;
    padding-left: 25px;

    @include clearfix;

    .filter-item {
      height: 100px;
      // width: 120px;
      float: left;
      text-align: center;
      padding-right: 40px;
      color: #999;
      font-size: 28px;
      position: relative;
      line-height: 104px;
      transition: color 0.2s;
      margin-right: 25px;

      .iconfont {
        display: block;
        font-size: 12px;
        line-height: 12px;
        position: absolute;
        color: #999;
        top: 44px;
        right: 18px;
        transition: transform 0.2s;
      }

      &.active {
        color: $fy;

        .iconfont {
          transform: rotate(180deg);
        }
      }

      &.btn-search {
        float: right;
        width: 120px;
        padding-right: 15px;
        margin-right: 0;

        &:before {
          display: block;
          position: absolute;
          content: "";
          width: 1px;
          height: 30px;
          background: #999;
          top: 35px;
          left: 0;
          transform: scaleX(0.5);
        }
      }
    }
  }

  .search-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 2px;
    background: #fff;
    padding: 14px 25px;
    padding-right: 145px;
    z-index: 0;

    input {
      border: 0;
      text-align: center;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("../../assets/images/icon_sousuo.png");
      background-repeat: no-repeat;
      font-size: 28px;
      line-height: 36px;
      background-size: 36px auto;
      background-position-y: center;
      background-position-x: 170px;
      background-color: #f0f0f0;
      border-radius: 10px;
      padding-left: 30px;

      &::-webkit-input-placeholder {
        line-height: 46px;
      }

      &.focus {
        padding-left: 70px;
        text-align: left;
        padding-right: 20px;
        background-position-x: 20px;
      }
    }

    .btn-cancel {
      width: 145px;
      height: 100px;
      line-height: 104px;
      position: absolute;
      right: 0;
      top: 0;
      text-align: center;
      font-size: 28px;
      color: #999;
    }
  }

  .filter-pop {
    position: absolute;
    padding: 0 25px;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 51;
    background: #fff;

    .title {
      font-size: 22px;
      line-height: 1;
      padding-top: 40px;
    }

    .time-line {
      padding: 40px 0;
      @include clearfix;

      .item {
        padding: 0 35px;
        background: #f0f0f0;
        float: left;
        font-size: 24px;
        color: #999;
        line-height: 58px;
        height: 56px;
        margin-right: 20px;
        border-radius: 5px;
        position: relative;

        &.ipt {
          padding: 0;
        }

        &.active {
          background: #ffe150;
          color: #333;
          @include tapColor;
        }

        input {
          width: 160px;
          height: 100%;
          border: 0;
          text-align: center;
          background: #f0f0f0;
          border-radius: 5px;
          line-height: 24px;

          &::-webkit-input-placeholder {
            line-height: 36px;
          }

          &:focus::-webkit-input-placeholder {
            color: #f0f0f0;
          }
        }

        &.start-time {
          &:after {
            content: "";
            display: block;
            width: 8px;
            height: 1px;
            /* no */
            background: #adadad;
            position: absolute;
            right: -14px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }

    .time-label {
      font-size: 24px;
      line-height: 1;
    }
  }

  .income-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.2);
  }

  .class-pop {
    background: #fff;
    position: relative;
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    z-index: 51;
    padding: 40px 25px;
    padding-bottom: 20px;

    .item {
      padding: 0 35px;
      background: #f0f0f0;
      float: left;
      font-size: 24px;
      color: #999;
      line-height: 58px;
      height: 56px;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      @include tapMask;

      &.active {
        background: #ffe150;
        color: #333;
      }
    }
  }

  .good-container {
    .item {
      height: 240px;
      position: relative;
      padding-left: 250px;
      padding-top: 46px;
      padding-right: 30px;
      @include oneB;
      @include tapMask;

      &:active {
        &:after {
          opacity: 0.02;
        }
      }

      &:last-child {
        &::before {
          display: none;
        }
      }

      // &:active{
      //   background: #f8f8f8;
      // }

      .good-pic {
        height: 240px;
        width: 240px;
        position: absolute;
        padding: 30px;
        left: 0;
        top: 0;

        .good-left {
          position: absolute;
          height: 30px;
          line-height: 32px;
          color: #ffa075;
          background: #ffebd0;
          padding: 0 10px;
          border-radius: 5px;
          font-size: 20px;
          right: 30px;
          top: 30px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .main-title {
        line-height: 48px;
        font-size: 30px;
        font-weight: bold;
        @include textof;
      }

      .sub-title {
        font-size: 20px;
        color: #999;
        line-height: 48px;
        @include textof;
      }

      .price-info {
        padding-top: 15px;
        @include clearfix;

        .bean-block {
          height: 30px;
          background-color: #f5f5f5;
          border-radius: 5px;
          color: #333;
          background-image: url("../../assets/images/bean.png");
          background-size: auto 24px;
          background-repeat: no-repeat;
          background-position-x: 7px;
          background-position-y: center;
          font-size: 22px;
          padding-left: 40px;
          padding-right: 10px;
          line-height: 32px;
          font-weight: bold;
          float: left;
        }

        .vip-price {
          float: right;
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
      }
    }
  }
</style>