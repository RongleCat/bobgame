<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      我的地址
      <div class="btn-address" @click="showAdd = true"><i class="iconfont icon-add"></i>新建地址</div>
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
      <Popup v-model="editAdd" :maskClose="false">
        <div class="address-pop">
          <div class="title">编辑地址</div>
          <AddressEdit :area-list="areaList" :show-delete="true" @save="saveAddress"></AddressEdit>
          <div class="btn-close">
            <div class="btn-main" @click="editAdd = false">
              <i class="iconfont icon-guanbi"></i>
            </div>
          </div>
        </div>
      </Popup>
    </template>
    <template slot="content">
      <div class="address-list">
        <div class="item" v-for="i in 20" :key="i">
          <div class="address">浙江省杭州市滨江区长河街道建业路511号华业大厦25楼2503室</div>
          <div class="userinfo">曹铁柱 18367833505</div>
          <div class="btn-edit" @click="editAdd = true"><i class="iconfont icon-edit"></i>修改</div>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import { AddressEdit, Toast } from "vant";
  import area from '../../unit/area.js'
  export default {
    components: {
      AddressEdit
    },
    data() {
      return {
        showAdd: false,
        editAdd: false,
        areaList: area
      }
    },
    methods: {
      saveAddress(content) {
        console.log(content);
        this.showAdd = false
        Toast('保存成功！')
      }
    }
  }
</script>

<style scoped lang="scss">
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

  .address-list {
    margin-bottom: 150px;

    .item {
      width: 100%;
      height: 150px;
      position: relative;
      background: #fff;
      padding: 15px 25px;
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
        font-size: 24px;
        color: #999;
        line-height: 36px;
        @include tapMask;
        position: absolute;

        .iconfont {
          display: block;
          width: 60px;
          height: 60px;
          font-size: 48px;
          line-height: 60px;
          margin: 0 auto;
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

    .btn-close {
      position: absolute;
      height: 150px;
      line-height: 150px;
      bottom: -150px;
      width: 100%;
      left: 0;
      z-index: 100;

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