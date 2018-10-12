import IncomeNotes from "../views/My/IncomeNotes.vue";
import Balance from "../views/My/Balance.vue";
import MyInvitation from "../views/My/MyInvitation.vue";
import MySettings from "../views/My/MySettings.vue";
import AddressList from "../views/My/AddressList.vue";
import BindPhone from "../views/My/BindPhone.vue";
import BindAlipay from "../views/My/BindAlipay.vue";
import ChangePassword from "../views/My/ChangePassword.vue";
import Task from "../views/My/Task.vue";
import Withdraw from "../views/My/Withdraw.vue";
import Sgin from "../views/My/Sgin.vue";
import School from "../views/My/School.vue";
import SchoolDetails from "../views/My/SchoolDetails.vue";
import OrderList from "../views/My/OrderList.vue";
import RankingList from "../views/My/RankingList.vue";
import ContactUs from "../views/My/ContactUs.vue";
import Rule from "../views/My/Rule.vue";
import Feedback from "../views/My/Feedback.vue";
import Recharge from "../views/My/Recharge.vue";
import GiveBean from "../views/My/GiveBean.vue";
import Share from "../views/My/Share.vue";
import MyPower from "../views/My/MyPower.vue";
import WaitWithdraw from "../views/My/WaitWithdraw.vue";




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
  },
  //绑定支付宝
  {
    path: '/my/bindalipay',
    name: 'BindAlipay',
    component: BindAlipay
  },
  //修改密码
  {
    path: '/my/changepassword',
    name: 'ChangePassword',
    component: ChangePassword
  },
  //任务
  {
    path: '/my/task',
    name: 'Task',
    component: Task
  },
  //提现
  {
    path: '/my/withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  //签到
  {
    path: '/my/sgin',
    name: 'Sgin',
    component: Sgin
  },
  //波波学院
  {
    path: '/my/school',
    name: 'School',
    component: School
  },
  //波波学院详情
  {
    path: '/my/school/:id',
    name: 'SchoolDetails',
    component: SchoolDetails
  },
  //我的订单列表
  {
    path: '/my/orderlist',
    name: 'OrderList',
    component: OrderList
  },
  //排行榜
  {
    path: '/my/rankinglist',
    name: 'RankingList',
    component: RankingList
  },
  //联系我们
  {
    path: '/my/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  //用户协议
  {
    path: '/my/rule',
    name: 'Rule',
    component: Rule
  },
  //意见反馈
  {
    path: '/my/feedback',
    name: 'Feedback',
    component: Feedback
  },
  //充值
  {
    path: '/my/recharge',
    name: 'Recharge',
    component: Recharge
  },
  //会员代充
  {
    path: '/my/givebean',
    name: 'GiveBean',
    component: GiveBean
  },
  //分享模板
  {
    path: '/my/share',
    name: 'Share',
    component: Share
  },
  //我的权益
  {
    path: '/my/mypower/:vipLevel',
    name: 'MyPower',
    component: MyPower
  },
  //等待提现
  {
    path: '/my/waitwithdraw',
    name: 'WaitWithdraw',
    component: WaitWithdraw
  }
]