import IncomeNotes from "../views/My/IncomeNotes.vue";
import Balance from "../views/My/Balance.vue";
import MyInvitation from "../views/My/MyInvitation.vue";
import MySettings from "../views/My/MySettings.vue";
import AddressList from "../views/My/AddressList.vue";
import BindPhone from "../views/My/BindPhone.vue";

export default [
  //收益明细
  {
    path: '/my/incomenotes',
    name: 'IncomeNotes',
    component: IncomeNotes
  },
  //余额
  {
    path: '/my/balance',
    name: 'Balance',
    component: Balance
  },
  //我邀请的伙伴
  {
    path: '/my/myinvitation',
    name: 'MyInvitation',
    component: MyInvitation
  },
  //个人设置
  {
    path: '/my/mysettings',
    name: 'MySettings',
    component: MySettings
  },
  //地址列表
  {
    path: '/my/addresslist',
    name: 'AddressList',
    component: AddressList
  },
  //绑定手机
  {
    path: '/my/bindphone',
    name: 'BindPhone',
    component: BindPhone
  },
  //修改绑定手机
  {
    path: '/my/changephone',
    name: 'ChangePhone',
    component: BindPhone
  }
]