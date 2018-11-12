import Lottery from "../views/Mall/Lottery.vue";
import GoodSearch from "../views/Mall/GoodSearch.vue";
import GoodDetail from "../views/Mall/GoodDetail.vue";

export default [{
  path: '/mall/lottery',
  name: 'Lottery',
  component: Lottery
},
{
  path: '/mall/goodsearch/:condition',
  name: 'GoodSearch',
  component: GoodSearch,
  meta: {
    noCache: true
  }
},
{
  path: '/mall/gooddetail/:id',
  name: 'GoodDetail',
  component: GoodDetail,
  meta: {
    noCache: true
  }
}]