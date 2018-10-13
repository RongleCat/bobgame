import FriendsDetail from '../views/Friends/FriendsDetail.vue'
import AddFriend from '../views/Friends/AddFriend.vue'
import FillInfomation from '../views/Friends/FillInfomation.vue'


export default [{
  path: '/friends/detail/:id',
  name: 'FriendsDetail',
  component: FriendsDetail
}, {
  path: '/friends/addfriend',
  name: 'AddFriend',
  component: AddFriend
}, {
  path: '/friends/filinfomation',
  name: 'FillInfomation',
  component: FillInfomation
}]