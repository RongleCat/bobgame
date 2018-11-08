import Match from '../views/Game/Match.vue'
import MyMatchNote from '../views/Game/MyMatchNote.vue'
import OfficialMatchNote from '../views/Game/OfficialMatchNote.vue'
import ViewResults from '../views/Game/ViewResults.vue'
import Sports from '../views/Game/Sports.vue'
import Matching from '../views/Game/Matching.vue'
import Stadium from '../views/Game/Stadium.vue'
import AddFrequency from '../views/Game/AddFrequency.vue'
import CustomList from '../views/Game/CustomList.vue'
import CreateMatch from '../views/Game/CreateMatch.vue'





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
  },
  //赛场页面
  {
    path: '/game/stadium/:id',
    name: 'Stadium',
    component: Stadium
  },
  //增加游戏次数
  {
    path: '/game/addfrequency/:id',
    name: 'AddFrequency',
    component: AddFrequency
  },
  //自定义比赛列表
  {
    path: '/game/customlist',
    name: 'CustomList',
    component: CustomList
  },
  //创建自定义比赛
  {
    path: '/game/creatematch',
    name: 'CreateMatch',
    component: CreateMatch
  }
]