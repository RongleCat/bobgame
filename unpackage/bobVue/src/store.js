import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo:JSON.parse(window.localStorage.getItem('userBaseInfo')),
        statusBarHeight:0,
        tabberZIndex:100,
        haveOpenPopView:false,
        hasPopOpen:false,
        showTabber:true,
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
        },
        setShowTabber(state,value){
            state.showTabber = value
        },
        setUserInfo(state,value){
            state.userInfo = value
        }
    },
    actions: {

    }
})