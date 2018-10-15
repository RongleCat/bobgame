import FriendsDetail from '../views/Friends/FriendsDetail.vue'
import AddFriend from '../views/Friends/AddFriend.vue'
import FillInfomation from '../views/Friends/FillInfomation.vue'
import FriendInfomation from '../views/Friends/FriendInfomation.vue'


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
}, {
  path: '/friends/friendinfomation/:id',
  name: 'FriendInfomation',
  component: FriendInfomation
}]