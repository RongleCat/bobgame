
export default {
  state: {
    homeData:null,
    homeReqDone:false
  },
  mutations: {
    setHomeData(state,value){
      state.homeData = value
    },
    setHomeReqDone(state,value){
      state.homeReqDone = value
    }
  },
  // actions: {
  //   reqHomeData({commit}){
  //     console.log(Vue.$http);
  //     commit('setHomeData',{a:'1'})
  //   }
  // },
  getters: {}
}