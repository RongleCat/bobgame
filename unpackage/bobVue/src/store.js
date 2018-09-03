import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo:{
            headImg:'https://fmcatcdn.oss-cn-hangzhou.aliyuncs.com/fmcatCDN/images/head.png',
            beanCount:105785,
            userName:'瑞克'
        },
        statusBarHeight:0,
        tabberZIndex:100,
        haveOpenPopView:false,
        hasPopOpen:false
    },
    mutations: {
        setStatusBarHeight(state,value){
            state.statusBarHeight = value
        },
        setTabberZIndex(state,value){
            state.tabberZIndex = value
        },
        setHaveOpenPopView(state,value){
            state.haveOpenPopView = value
        },
        setHasPopOpen(state,value){
            state.hasPopOpen = value
        }
    },
    actions: {

    }
})