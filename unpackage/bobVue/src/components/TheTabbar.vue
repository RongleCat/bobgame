<template>
    <div>
        <ul class="nav-list">
            <li>
                <router-link to="/home">
                    <div class="tab-icon icon-1"></div>
                    <div class="tab-text">首页</div>
                </router-link>
            </li>
            <li>
                <router-link to="/friends">
                    <div class="tab-icon icon-2"></div>
                    <div class="tab-text">好友</div>
                </router-link>
            </li>
            <li>
                <router-link to="/mall">
                    <div class="tab-icon icon-3"></div>
                    <div class="tab-text">商城</div>
                </router-link>
            </li>
            <li>
                <router-link to="/my">
                    <div class="tab-icon icon-4"></div>
                    <div class="tab-text">我的</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      key: "是是是"
    };
  },
  methods: {
    name() {}
  },
  mounted() {
    console.log(this.$atApp());
  }
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  .nav-list {
    list-style: none;
    display: flex;
    height: px2rem(100px);
    background: #fff;
    border-top: 0.5px solid #e5e5e5;
    li {
      flex: 1;
      > a {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        padding-top: px2rem(11px);
        text-decoration: none;
        color: #333;
        opacity: 0.5;
        filter: grayscale(100%);
        filter: gray;
        .tab-icon {
          width: px2rem(56px);
          height: px2rem(47px);
          background: url("../assets/images/tabber_icon.png");
          background-size: 100% auto;
          margin-bottom: px2rem(11px);
          @for $i from 1 through 4 {
            &.icon-#{$i} {
              background-position-y: ($i - 1) * px2rem(-47px);
            }
          }
        }
        .tab-text {
          text-align: center;
          line-height: px2rem(20px);
          font-size: px2rem(20px);
        }
        &.router-link-active{
          opacity: 1;
          filter:none;
        }
      }
    }
  }
}
</style>