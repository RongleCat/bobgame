<template>
  <ThePage color="#f2f2f2" contentBg="#fff">
    <template slot="headerContent">
      完善资料
    </template>
    <template slot="content">
      <div class="fill-container">
        <div class="select-head" @click="openSelectHead">
          <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
          <i class="iconfont icon-xiangji"></i>
          <input type="file" name="head" id="head" ref="head" class="upload-head">
        </div>
        <div class="input-item">
          <label for="nickname">昵称</label>
          <input type="text" id="nickname" class="input" placeholder="请输入您的昵称">
        </div>
        <div class="input-item">
          <label for="">生日</label>
          <div class="block-birthday input picker-tap" :class="[birthdayDone?'hasdata':'']" @click="birthdayOpen">{{formatStart}}</div>
        </div>
        <div class="input-item">
          <label for="">地区</label>
          <div class="block-location input picker-tap" :class="[selectLocation?'hasdata':'']" @click="locationOpen">{{formatLocation}}</div>
        </div>
        <div class="input-item no-border">
          <label>性别</label>
          <div class="sex-select">
            <div class="item left" :class="[sexSelect === 0?'selected':'']" @click="sexSelect = 0"><i class="iconfont icon-male"></i>男生</div>
            <div class="item right" :class="[sexSelect === 1?'selected':'']" @click="sexSelect = 1"><i class="iconfont icon-female"></i>女生</div>
            <div class="center">or</div>
          </div>
        </div>
        <div class="btn-submit" @click="submit">完成</div>
      </div>
      <VanPopup v-model="openBirthdayTime" position="bottom" :close-on-click-overlay="false">
        <DatetimePicker v-model="birthdayTime" type="date" :min-date="minDate" :max-date="maxDate" title="选择您的生日" @cancel="birthdayCancel" @confirm="birthdayConfirm"></DatetimePicker>
      </VanPopup>
      <VanPopup v-model="openLocation" position="bottom" :close-on-click-overlay="false">
        <van-area :area-list="areaList" title="选择您的地区" :columns-num="2" @confirm="locationConfirm" @cancel="locationCancel" @change="locationChange" ref="area"></van-area>
      </VanPopup>
    </template>
  </ThePage>
</template>

<script>
  import moment from "moment";
  import area from '../../unit/area.js'
  import { Area, DatetimePicker, Popup } from 'vant';
  export default {
    components: {
      'van-area': Area,
      DatetimePicker,
      VanPopup: Popup,
    },
    data() {
      return {
        birthdayTime: null,
        selectLocation: null,
        sexSelect: 0,
        openBirthdayTime: false,
        birthdayDone: false,
        areaList: area,
        openLocation: false,
        locationDone: false
      }
    },
    computed: {
      minDate() {
        return moment('1940-01-01').toDate()
      },
      maxDate() {
        return moment().toDate()
      },
      formatStart() {
        if (this.birthdayDone) {
          return moment(this.birthdayTime).format('YYYY-MM-DD')
        } else {
          return '点击选择您的生日'
        }
      },
      formatLocation() {
        console.log(this.selectLocation);
        if (!this.selectLocation) {
          return '点击选择您的地区'
        }
        return this.selectLocation
      }
    },
    methods: {
      birthdayOpen() {
        if (!this.birthdayDone) {
          this.birthdayTime = moment('1990-01-01').toDate()
        }
        this.openBirthdayTime = true
      },
      birthdayCancel() {
        this.openBirthdayTime = false
        if (!this.birthdayDone) {
          this.birthdayTime = null
          this.birthdayDone = false
        }
      },
      birthdayConfirm() {
        this.birthdayDone = true
        this.openBirthdayTime = false
      },
      locationOpen() {
        if (!this.locationDone && this.$refs.area) {
          this.$refs.area.reset()
        }
        this.openLocation = true
      },
      locationCancel() {
        this.openLocation = false
        if (!this.locationDone) {
          this.selectLocation = null
        }
      },
      locationConfirm() {
        this.openLocation = false
        this.locationDone = true
      },
      locationChange(p) {
        let value = p.getValues()
        this.selectLocation = value[0].name + ' ' + value[1].name
      },
      openSelectHead() {
        this.$refs.head.dispatchEvent(new MouseEvent('click'));
      },
      submit() {
        window.localStorage.setItem('friends', 'end')
        this.$router.replace('/friends')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fill-container {
    padding: 25px;
    padding-top: 60px;

    .select-head {
      width: 160px;
      height: 160px;
      position: relative;
      margin: 0 auto;
      margin-bottom: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
      }

      .iconfont {
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f0f0f0;
        color: #8a8a8a;
        font-size: 22px;
        line-height: 42px;
        text-align: center;
        bottom: 0;
        right: 0;
      }
    }

    .input-item {
      position: relative;
      padding-top: 40px;
      @include oneB;

      &.no-border {
        &::before {
          display: none;
        }
      }

      label {
        display: block;
        line-height: 80px;
        font-size: 20px;
        color: #adadad;
        padding-left: 2px;
        position: absolute;
        top: 0;
        left: 0;
      }

      .input {
        height: 90px;
        width: 100%;
        text-align: center;
        font-size: 32px;
        line-height: 92px;

        &.picker-tap {
          color: #ccc;
        }

        &.hasdata {
          color: #333;
        }
      }

      input {
        border: 0;
        line-height: 32px;

        &::-webkit-input-placeholder {
          color: #ccc;
        }

        &:focus::-webkit-input-placeholder {
          color: #fff;
          line-height: 42px;
        }
      }
    }

    .sex-select {
      width: 100%;
      height: 110px;
      padding-top: 30px;
      position: relative;

      .item {
        width: 180px;
        height: 80px;
        border: 1px solid #ccc;
        border-radius: 40px;
        line-height: 82px;
        text-align: center;
        bottom: 0;
        font-size: 28px;
        // @include tapMask;
        position: absolute;
        overflow: hidden;

        &.left {
          left: 120px;
        }

        &.right {
          right: 120px;
        }

        .iconfont {
          font-size: 28px;
          padding-right: 5px;
        }

        &.selected {
          background: $by;
          border-color: $by;
        }
      }

      .center {
        font-size: 34px;
        color: #adadad;
        line-height: 82px;
        text-align: center;
      }
    }

    .btn-submit {
      width: 600px;
      height: 100px;
      margin: 0 auto;
      background: $by;
      margin-top: 130px;
      border-radius: 50px;
      text-align: center;
      line-height: 102px;
      font-size: 30px;
    }

    .upload-head {
      display: none;
    }
  }
</style>