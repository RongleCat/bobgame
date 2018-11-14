<template>
  <ThePage color="#f2f2f2" contentBg="#fff" :showSkeleton="true" :loadDone="loadDone">
    <template slot="headerContent">
      {{id}}
    </template>
    <template slot="gujia">
      <div class="item-block h40">
        <div class="item"></div>
      </div>
      <div class="item-block h40">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h300">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h300">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h30">
        <div class="item"></div>
      </div>
      <div class="item-block h300">
        <div class="item"></div>
      </div>
    </template>
    <template slot="content">
      <div class="detail-container" v-if="pageData">
        <div class="head-box">
          <div class="title">{{pageData.title}}</div>
          <div class="time">{{pageData.create_time | fTime}}</div>
        </div>
        <div class="content-box" v-html="fromatUrl(pageData.content)"></div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  export default {
    data() {
      return {
        pageData: null,
        loadDone: false
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      }
    },
    activated() {
      let that = this
      that.$http.get('/Bobschool/getContent', {
        params: {
          id: that.id
        }
      }).then(r => {
        if (r) {
          console.log(r)
          that.pageData = r
          that.loadDone = true
        }
      }).catch(err => {
        console.error(err)
      })
    },
    methods: {
      fromatUrl(html) {
        let _html = html
        _html.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
          _html = _html.replace(new RegExp(capture, 'g'), "http://cdn.bobgame.cn" + capture)
        });
        return _html
      }
    },
    beforeRouteLeave(to, from, next) {
      let that = this
      that.loadDone = false
      that.pageData = null
      next()
    }
  }
</script>

<style lang="scss" scoped>
  .detail-container {
    padding: 30px 25px;
    overflow: hidden;

    .head-box {
      position: relative;
      // padding-bottom: 20px;
      @include oneB;

      .title {
        font-size: 40px;
        line-height: 50px;
        padding-bottom: 10px;
      }

      .time {
        font-size: 24px;
        color: #adadad;
        line-height: 60px;
      }
    }

    .content-box {
      padding: 20px 0;
      font-size: 28px;

      p {
        text-indent: 2em;
        padding-bottom: 10px;

        img {
          max-width: 100%;
          margin-top: 10px;
          transform: translateX(-2em);
        }
      }
    }
  }
</style>