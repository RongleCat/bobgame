<template>
  <ThePage color="#f2f2f2" @headerHeight="setHeaderHeight" contentBg="#f0f0f0">
    <template slot="headerContent">
      个人设置
    </template>
    <template slot="content">
      <input type="file" name="head" id="head" ref="head" class="upload-head">
      <div class="settings-container">
        <div class="settings-block">
          <div class="item head" @click="openSelectHead">
            <div class="item-main">
              <div class="text">头像</div>
              <img src="https://bobtestimg.oss-cn-hangzhou.aliyuncs.com/images/1.jpg">
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="showNickName = true">
            <div class="item-main">
              <div class="text">昵称</div>
              <div class="right-value">{{nickname}}</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="showSex = true">
            <div class="item-main">
              <div class="text">性别</div>
              <div class="right-value">{{sex}}</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="showBirthday = true">
            <div class="item-main">
              <div class="text">生日</div>
              <div class="right-value">{{birthdayFormat}}</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item-three">
            <div class="item-three-item">
              <div class="value zuanshi"><img src="../../assets/images/my/zuanshi.png">110</div>
              <div class="name">钻石</div>
            </div>
            <div class="item-three-item">
              <div class="value jindou"><img src="../../assets/images/my/jindou.png">99999</div>
              <div class="name">金豆</div>
            </div>
            <div class="item-three-item">
              <div class="value meili"><img src="../../assets/images/my/xin.png">100</div>
              <div class="name">魅力值</div>
            </div>
          </div>
        </div>
        <div class="settings-block">
          <div class="item alipay" @click="go('bindalipay')">
            <div class="item-main">
              <div class="iconfont icon-zhifubao"></div>
              <div class="text">支付宝账号</div>
              <div class="right-value">去绑定</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="go('bindphone')">
            <div class="item-main">
              <div class="text">绑定手机</div>
              <div class="tip">完成绑定赠送100金豆</div>
              <div class="right-value">去绑定</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="showRealname = true">
            <div class="item-main">
              <div class="text">实名认证</div>
              <div class="tip">完成实名赠送100金豆</div>
              <div class="right-value">去认证</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="go('addresslist')">
            <div class="item-main">
              <div class="text">收货地址</div>
              <div class="right-value">去填写</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="go('changepassword')">
            <div class="item-main">
              <div class="text">修改密码</div>
              <div class="right-value">去修改</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
          <div class="item" @click="showEmail = true">
            <div class="item-main">
              <div class="text">电子邮箱</div>
              <div class="right-value">{{email?email:'去绑定'}}</div>
              <i class="iconfont icon-you"></i>
            </div>
          </div>
        </div>
        <cat-alert v-model="showEmail" :showCancel="true" @cancel="cancelEmail" @confirm="confirmEmail" title="绑定邮箱">
          <input v-model="email" type="text" class="pop-input" placeholder="请输入邮箱" />
        </cat-alert>
        <cat-alert v-model="showRealname" :showCancel="true" @cancel="cancelRealname" @confirm="confirmRealname" title="实名认证">
          <input v-model="realname" type="text" class="pop-input" placeholder="请输入真实姓名" />
        </cat-alert>
        <cat-alert v-model="showNickName" :showCancel="true" @cancel="cancelNickname" @confirm="confirmNickname" title="修改昵称">
          <input v-model="nickname" type="text" class="pop-input" placeholder="请输入昵称" />
        </cat-alert>
        <cat-alert v-model="showSex" :showCancel="true" @cancel="sexSelect = 0" @confirm="confirmSex" title="修改性别">
          <van-picker :columns="sexColumns" @change="sexChange" :visible-item-count="3"></van-picker>
        </cat-alert>
        <VanPopup v-model="showBirthday" position="bottom" :close-on-click-overlay="false">
          <DatetimePicker v-model="birthday" type="date" :min-date="minDate" :max-date="maxDate" title="选择生日" @cancel="selectCancel" @confirm="showBirthday = false"></DatetimePicker>
        </VanPopup>
      </div>
    </template>
  </ThePage>
</template>

<script>
  import Alert from "@/components/Alert.vue";
  import { Toast, Picker, DatetimePicker, Popup } from 'vant';
  import moment from "moment";

  export default {
    components: {
      'cat-alert': Alert,
      'van-picker': Picker,
      VanPopup: Popup,
      DatetimePicker
    },
    data() {
      return {
        showNickName: false,
        showSex: false,
        showRealname: false,
        showEmail: false,
        showBirthday: false,
        email: '',
        realname: '',
        nickname: this.$store.state.userInfo.nickname,
        sexSelect: 0,
        sexColumns: ['男', '女'],
        birthday: moment('1994-05-16').toDate(),
        minDate: moment('1940-01-01').toDate(),
        maxDate: moment('2010-01-01').toDate()
      }
    },
    computed: {
      sex() {
        return this.sexSelect === 0 ? '男' : '女'
      },
      birthdayFormat() {
        return moment(this.birthday).format('YYYY-MM-DD')
      }
    },
    methods: {
      openSelectHead() {
        this.$refs.head.dispatchEvent(new MouseEvent('click'));
      },
      go(value) {
        this.$router.push('/my/' + value)
      },
      selectCancel() {
        this.birthday = moment('1994-05-16').toDate()
        this.showBirthday = false
      },
      setHeaderHeight(value) {
        this.filterTop = value + 100 / 75 + "rem"
        this.topHeight = value
      },
      confirmNickname() {
        if (this.nickname.length != 0) {
          this.showNickName = false;
        } else {
          Toast.fail('名字太短啦~~')
        }
      },
      cancelNickname() {
        this.nickname = this.$store.state.userInfo.nickname
      },
      confirmEmail() {
        if (/^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(this.email)) {
          this.showEmail = false;
        } else {
          Toast.fail('邮箱格式不正确~~')
        }
      },
      cancelEmail() {
        this.email = '';
      },
      confirmRealname() {
        if (this.realname.length >= 2) {
          this.showRealname = false;
        } else {
          Toast.fail('你这不是真名吧' + this.realname + '~~')
        }
      },
      cancelRealname() {
        this.realname = '';
      },
      confirmSex() {
        this.showSex = false
      },
      sexChange(picker, value, index) {
        Toast(`当前值：${value}, 当前索引：${index}`);
        this.sexSelect = index
      }
    }
  }
</script>

<style scoped lang="scss">
  .settings-container {
    width: 100%;
    background: #f0f0f0 url('../../assets/images/my/s_bg.png') no-repeat;
    padding: 25px;
    background-size: 100% auto;

    .settings-block {
      background: #fff;
      border-radius: 15px;
      margin-bottom: 25px;
      overflow: hidden;

      .item {
        height: 100px;
        width: 100%;
        position: relative;
        padding: 0 25px;


        .item-main {
          height: 100%;
          position: relative;
          padding-right: 40px;

          @include clearfix;
          @include onePXlineBottom;
        }


        .text {
          font-size: 28px;
          color: #333;
          float: left;
          height: 100%;
          overflow: hidden;
          line-height: 104px;
          padding-left: 5px;
        }

        .right-value {
          float: right;
          height: 100%;
          line-height: 104px;
          overflow: hidden;
          font-size: 28px;
          color: #ccc;
        }

        .iconfont.icon-you {
          font-size: 36px;
          color: #ccc;
          position: absolute;
          line-height: 100px;
          bottom: 0;
          right: 0;
        }

        .tip {
          position: absolute;
          background: #ff394e;
          color: #fff;
          font-size: 18px;
          line-height: 1;
          padding: 5px 8px;
          border-radius: 0 0 15px 0;
          left: 140px;
          top: 50%;
          transform: translateY(-50%);
        }

        &.head {
          img {
            height: 60px;
            width: 60px;
            position: absolute;
            right: 40px;
            top: 20px;
            border-radius: 50%;
          }
        }


        &.alipay {

          .item-main {
            padding-left: 50px;
          }

          .iconfont.icon-zhifubao {
            position: absolute;
            display: block;
            width: 40px;
            height: 100px;
            left: 0;
            top: 0;
            font-size: 40px;
            color: #00a0e9;
            line-height: 104px;
          }
        }

        &:last-child {
          .item-main:before {
            display: none;
          }
        }

        &:active {
          background: #fafafa;
        }
      }

      .item-three {
        @include clearfix;
        padding: 25px;

        .item-three-item {
          width: 33.33%;
          float: left;
          text-align: center;

          .value {
            font-size: 30px;
            color: #333;
            font-weight: bold;
            padding-right: 10px;
            line-height: 76px;

            img {
              width: 36px;
              height: 36px;
              object-fit: contain;
              margin-right: 10px;
              vertical-align: -10px;
            }
          }

          .name {
            font-size: 26px;
            color: #ccc;
            line-height: 50px;
          }
        }
      }
    }
  }

  .pop-input {
    &:after {
      display: none;
    }
  }

  .pop-input {
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 80px;
    border: 0;
    border: 1px solid #ddd;
    font-size: 24px;
    color: #333;
    padding-left: .5em;
    border-radius: 10px;
  }

  .upload-head{
    display: none;
  }
</style>