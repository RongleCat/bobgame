<template>
    <div>
        <div class="nav-list">
            <ul class="clearfix">
                <li>
                    <router-link to="/" exact>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
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
    height: 100px;
    background: #fff;
    position: relative;
    // border-top: 1px solid #e5e5e5;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      /* no */
      background: #e5e5e5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      transform: scaleY(0.5);
    }
    li {
      float: left;
      width: 25%;
      height: 100px;
      > a {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        padding-top: 11px;
        text-decoration: none;
        color: #333;
        transition: all 0.2s;
        opacity: 0.5;
        .tab-icon {
          width: 56px;
          height: 47px;
          background: url("../assets/images/tabber_icon.png");
          background-size: 100% auto;
          margin-bottom: 11px;
          @for $i from 1 through 4 {
            &.icon-#{$i} {
              background-position-y: ($i + 4 - 1) * -47px;
            }
          }
        }
        .tab-text {
          text-align: center;
          line-height: 20px;
          font-size: 20px;
        }
        &.active {
          opacity: 1;
          @for $i from 1 through 4 {
            .icon-#{$i} {
              background-position-y: ($i - 1) * -47px;
            }
          }
        }
      }
    }
  }
}
</style>