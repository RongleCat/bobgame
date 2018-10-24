import Match from '../views/Game/Match.vue'
import MyMatchNote from '../views/Game/MyMatchNote.vue'
import OfficialMatchNote from '../views/Game/OfficialMatchNote.vue'
import ViewResults from '../views/Game/ViewResults.vue'
import Sports from '../views/Game/Sports.vue'
import Matching from '../views/Game/Matching.vue'




export default [
  //比赛场首页
  {
    path: '/game/match',
    name: 'Match',
    component: Match
  },
  //我的比赛记录
  {
    path: '/game/mymatchnote',
    name: 'MyMatchNote',
    component: MyMatchNote
  },
  //官方比赛记录
  {
    path: '/game/officialmatchnote',
    name: 'OfficialMatchNote',
    component: OfficialMatchNote
  },
  //查看比赛结果
  {
    path: '/game/viewresults/:id',
    name: 'ViewResults',
    component: ViewResults
  },
  //竞技场
  {
    path: '/game/sports',
    name: 'Sports',
    component: Sports
  },
  //正在匹配页面
  {
    path: '/game/matching',
    name: 'Matching',
    component: Matching
  }
]