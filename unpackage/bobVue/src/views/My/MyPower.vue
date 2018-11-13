<template>
  <ThePage color="#f2f2f2" contentBg="#f0f0f0">
    <template slot="headerContent">
      我的权益
    </template>
    <template slot="content">
      <div class="power-container" :style="{paddingBottom:bottomHeight+'px'}">
        <div class="main-block">
          <div class="main-bg">
            <div class="top-card-box">
              <swiper :options="cardOption" ref="card" class="swiper-card">
                <swiperSlide v-for="(i,index) in 6" :key="i">
                  <div class="card-item" :class="['card-'+index]">
                    <div class="label-vip" :class="['vip-'+index]">{{vipName[index]}}</div>
                    <div class="up-level-label" v-if="index === 2">直升V2送黄金会员卡</div>
                    <div class="up-level-label" v-else-if="index === 3">升级V3送铂金会员卡</div>
                    <div class="up-level-label" v-else-if="index === 4">升级V4送钻石会员卡</div>
                    <div class="up-level-label" v-else-if="index !== 0">剩余15天</div>
                  </div>
                </swiperSlide>
                <div class="card-pagination" slot="pagination"></div>
              </swiper>
              <div class="my-level-box">
                <i class="iconfont icon-huangguan"></i>
                您当前的等级是：V0达人
                <p>月卡到期后，会员权益除了提现外都能保留。</p>
              </div>
            </div>
            <swiper :options="contentOption" ref="content" class="swiper-content">
              <swiperSlide>
                <div class="content-v0">
                  <div class="up-v1" @click="slideTo(1)"></div>
                  <div class="power-list-title">
                    V0达人权益
                  </div>
                  <div class="power-list v0">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">20%分享奖金</div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额20%现金奖励。</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">免费升级VIP</div>
                      <div class="content">多途径获得VIP经验，集满99经验可升级VIP1。</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">玩游戏得现金红包</div>
                      <div class="content">每局游戏结束，有几率获得现金红包。</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v1">
                  <div class="month-power">
                    <div class="title">月卡权益</div>
                    <div class="content">您今日还可领取400金豆</div>
                    <div class="btn-getbeen state-ok">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V1高手权益
                  </div>
                  <div class="power-list v1">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">25%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额25%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">8%复充奖金<label>超值</label></div>
                      <div class="content">直接获取邀请的玩家首次充值之后的每次充值8%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">15%充值增益<label>超值</label></div>
                      <div class="content">免费获得充值对应金豆数额之外15%的金豆数量增益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-3"></div>
                      <div class="title">赠送白银会员卡<label>超值</label></div>
                      <div class="content">赠送白银会员卡，获得价值30元RMB的金豆奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-4"></div>
                      <div class="title">现金红包金额翻倍<label>超值</label></div>
                      <div class="content">每局游戏结束，有几率获得现金红包的金额奖励翻倍</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-9"></div>
                      <div class="title">比赛场挑战次数永久+1<label>超值</label></div>
                      <div class="content">更高的获奖概率，参加平台官方比赛，享受比规定挑战次数更多1次的挑战机会</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-5"></div>
                      <div class="title">VIP1商品95折</div>
                      <div class="content">解锁商城VIP1商品折扣，兑换VIP1商品享95折优惠</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-6"></div>
                      <div class="title">收益一键提现</div>
                      <div class="content">解锁平台一键提现功能，所有收益可直接在线提现</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-8"></div>
                      <div class="title">VIP1专属奖池</div>
                      <div class="content">解锁VIP1奖池，享受更高价值专属抽奖奖品</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-10"></div>
                      <div class="title">免费专业培训</div>
                      <div class="content">免费享受3-5天平台系统培训，每月4次线上营销课，微信1对1沟通</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-11"></div>
                      <div class="title">广告宣传扶持</div>
                      <div class="content">免费畅享游戏运营中心服务支持、广告投放支持、专业素材文案支持、宣传物料支持</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v2">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得3000金豆<br>
                      每日可领取400金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V2大师权益
                  </div>
                  <div class="power-list v2">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">30%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额30%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">12%复充奖金<label>超值</label></div>
                      <div class="content">直接获取邀请的玩家首次充值之后的每次充值12%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">6%间接分享奖金<label>超值</label></div>
                      <div class="content">直接获得自己邀请玩家再邀请的玩家每次充值6%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-3"></div>
                      <div class="title">20%充值增益<label>超值</label></div>
                      <div class="content">免费获得充值对应金豆数额之外20%的金豆数量增益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-4"></div>
                      <div class="title">赠送黄金会员卡<label>超值</label></div>
                      <div class="content">赠送黄金会员卡，获得价值150元RMB的金豆奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-11"></div>
                      <div class="title">线下沙龙物料支持<label>超值</label></div>
                      <div class="content">获得平台线下少龙免费入场权，可申请举办区域沙龙并免费获得流程辅导和物料支持。</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-5"></div>
                      <div class="title">现金红包金额翻倍</div>
                      <div class="content">每局游戏结束，有几率获得现金红包奖励翻倍</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-6"></div>
                      <div class="title">VIP商品95折</div>
                      <div class="content">解锁商城VIP商品折扣，兑换VIP商品享95折优惠</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-7"></div>
                      <div class="title">收益一键提现</div>
                      <div class="content">解锁平台一键提现功能，所有收益可直接在线提现</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-9"></div>
                      <div class="title">VIP2专属奖池</div>
                      <div class="content">解锁VIP2奖池，享受更高价值专属抽奖奖品</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-10"></div>
                      <div class="title">比赛场挑战次数+3</div>
                      <div class="content">参加平台官方比赛，享受比规定挑战次数更多3次的挑战机会</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-12"></div>
                      <div class="title">免费专业培训</div>
                      <div class="content">免费享受3-5天平台系统培训，每月4次线上营销课，微信1对1沟通</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-13"></div>
                      <div class="title">广告宣传扶持</div>
                      <div class="content">免费畅享游戏运营中心服务支持、广告投放支持、专业素材文案支持、宣传物料支持</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v3">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得19800金豆<br>
                      每日可领取2700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V3推广部长权益
                  </div>
                  <div class="power-list v3">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">35%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额35%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">12%团队奖金<label>超值</label></div>
                      <div class="content">直接获取自己全部下级充值金额12%的现金奖励（直推从复充开始计算）</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">6%直接团队奖金<label>超值</label></div>
                      <div class="content">直接获得自己邀请玩家每次复充金额6%的现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-3"></div>
                      <div class="title">25%充值增益<label>超值</label></div>
                      <div class="content">免费获得充值对应金豆数额之外25%的金豆数量增益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-4"></div>
                      <div class="title">赠送铂金会员卡<label>超值</label></div>
                      <div class="content">赠送铂金会员卡，获得价值990元RMB的金豆奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-5"></div>
                      <div class="title">现金红包金额翻倍<label>超值</label></div>
                      <div class="content">每局游戏结束，有几率获得现金红包奖励翻倍</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-15"></div>
                      <div class="title">免费会员赠送<label>超值</label></div>
                      <div class="content">平台直接赠送200—500活跃会员，直接绑定至对应V3账号下，随时产生收益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-12"></div>
                      <div class="title">线下沙龙物料支持<label>超值</label></div>
                      <div class="content">获得平台线下少龙免费入场权，可申请举办区域沙龙并免费获得流程辅导和物料支持。</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-8"></div>
                      <div class="title">创建专属比赛<label>超值</label></div>
                      <div class="content">解锁专属比赛功能，可随意创建个人专属比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-9"></div>
                      <div class="title">现金比赛场特权<label>超值</label></div>
                      <div class="content">开放现金比赛场，可自定义创建个人现金比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-6"></div>
                      <div class="title">VIP商品9折</div>
                      <div class="content">解锁商城VIP商品折扣，兑换VIP商品享9折优惠</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-7"></div>
                      <div class="title">收益一键提现</div>
                      <div class="content">解锁平台一键提现功能，所有收益可直接在线提现</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-10"></div>
                      <div class="title">VIP3专属奖池</div>
                      <div class="content">解锁VIP3奖池，享受更高价值专属抽奖奖品</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-11"></div>
                      <div class="title">比赛场挑战次数+5</div>
                      <div class="content">参加平台官方比赛，享受比规定挑战次数更多5次的挑战机会</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-13"></div>
                      <div class="title">免费专业培训</div>
                      <div class="content">免费享受3-5天平台系统培训，每月10次以上线上营销课，15天电话辅导，微信1对1沟通</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-14"></div>
                      <div class="title">广告宣传扶持</div>
                      <div class="content">免费畅享游戏运营中心服务支持、广告投放支持、专业素材文案支持、宣传物料支持</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v4">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得64800金豆<br>
                      每日可领取8700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V4总代理权益
                  </div>
                  <div class="power-list v4">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">40%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额40%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">14%团队奖金<label>超值</label></div>
                      <div class="content">直接获取自己全部下级充值金额14%的现金奖励（直推从复充开始计算）</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">7%直接团队奖金<label>超值</label></div>
                      <div class="content">直接获得自己邀请玩家每次复充金额7%的现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-3"></div>
                      <div class="title">30%充值增益<label>超值</label></div>
                      <div class="content">免费获得充值对应金豆数额之外30%的金豆数量增益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-4"></div>
                      <div class="title">赠送钻石会员卡<label>超值</label></div>
                      <div class="content">赠送钻石会员卡，获得价值3240元RMB金豆奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-5"></div>
                      <div class="title">现金红包金额翻倍<label>超值</label></div>
                      <div class="content">每局游戏结束，有几率获得现金红包奖励翻倍</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-17"></div>
                      <div class="title">免费会员赠送<label>超值</label></div>
                      <div class="content">平台直接赠送200—500活跃会员，直接绑定至对应V4账号下，随时产生收益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-8"></div>
                      <div class="title">创建专属比赛<label>超值</label></div>
                      <div class="content">解锁自定义比赛功能，可随意创建个人专属比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-9"></div>
                      <div class="title">现金比赛场特权<label>超值</label></div>
                      <div class="content">开放现金比赛场，可自定义创建个人现金比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-12"></div>
                      <div class="title">地区代理<label>超值</label></div>
                      <div class="content">获取地区推广和代理权限，直接畅享该区域所有平台用户充值收益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-13"></div>
                      <div class="title">线下高端私密会<label>超值</label></div>
                      <div class="content">获取线下顶级私密会入场券，公司协助扩充人脉</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-6"></div>
                      <div class="title">VIP商品85折</div>
                      <div class="content">解锁商城VIP商品折扣，兑换VIP商品享85折优惠</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-7"></div>
                      <div class="title">收益一键提现</div>
                      <div class="content">解锁平台一键提现功能，所有收益可直接在线提现</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-10"></div>
                      <div class="title">VIP4专属奖池</div>
                      <div class="content">解锁VIP4奖池，享受更高价值专属抽奖奖品</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-11"></div>
                      <div class="title">比赛场挑战次数+10</div>
                      <div class="content">参加平台官方比赛，享受比规定挑战次数更多10次的挑战机会</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-14"></div>
                      <div class="title">线下沙龙物料支持</div>
                      <div class="content">获得平台线下少龙免费入场权，可申请举办区域沙龙并免费获得流程辅导和物料支持</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-15"></div>
                      <div class="title">免费专业培训</div>
                      <div class="content">免费享受3-5天平台系统培训，每月10次以上线上营销课，30天电话辅导，微信1对1沟通</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-16"></div>
                      <div class="title">广告宣传扶持</div>
                      <div class="content">免费畅享游戏运营中心服务支持、广告投放支持、专业素材文案支持、宣传物料支持</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
              <swiperSlide>
                <div class="content-v5">
                  <div class="month-power no-mycard">
                    <div class="title">月卡权益</div>
                    <div class="content">立得64800金豆<br>
                      每日可领取8700金豆</div>
                    <div class="btn-getbeen">立即领取</div>
                  </div>
                  <div class="power-list-title">
                    V4+联合创始人
                  </div>
                  <div class="power-list">
                    <div class="item">
                      <div class="icon icon-0"></div>
                      <div class="title">40%分享奖金<label>超值</label></div>
                      <div class="content">邀请其他玩家进入平台消费，拿首次充值金额40%现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-1"></div>
                      <div class="title">14%团队奖金<label>超值</label></div>
                      <div class="content">直接获取自己全部下级充值金额14%的现金奖励（直推从复充开始计算）</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-2"></div>
                      <div class="title">7%直接团队奖金<label>超值</label></div>
                      <div class="content">直接获得自己邀请玩家每次复充金额7%的现金奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-3"></div>
                      <div class="title">30%充值增益<label>超值</label></div>
                      <div class="content">免费获得充值对应金豆数额之外30%的金豆数量增益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-4"></div>
                      <div class="title">赠送钻石会员卡<label>超值</label></div>
                      <div class="content">赠送钻石会员卡，获得价值3240元RMB金豆奖励</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-5"></div>
                      <div class="title">现金红包金额翻倍<label>超值</label></div>
                      <div class="content">每局游戏结束，有几率获得现金红包奖励翻倍</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-17"></div>
                      <div class="title">免费会员赠送<label>超值</label></div>
                      <div class="content">平台直接赠送200—500活跃会员，直接绑定至对应V4账号下，随时产生收益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-8"></div>
                      <div class="title">创建专属比赛<label>超值</label></div>
                      <div class="content">解锁自定义比赛功能，可随意创建个人专属比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-9"></div>
                      <div class="title">现金比赛场特权<label>超值</label></div>
                      <div class="content">开放现金比赛场，可自定义创建个人现金比赛</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-12"></div>
                      <div class="title">地区代理<label>超值</label></div>
                      <div class="content">获取地区推广和代理权限，直接畅享该区域所有平台用户充值收益</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-13"></div>
                      <div class="title">线下高端私密会<label>超值</label></div>
                      <div class="content">获取线下顶级私密会入场券，公司协助扩充人脉</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-6"></div>
                      <div class="title">VIP商品85折</div>
                      <div class="content">解锁商城VIP商品折扣，兑换VIP商品享85折优惠</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-7"></div>
                      <div class="title">收益一键提现</div>
                      <div class="content">解锁平台一键提现功能，所有收益可直接在线提现</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-10"></div>
                      <div class="title">VIP4专属奖池</div>
                      <div class="content">解锁VIP4奖池，享受更高价值专属抽奖奖品</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-11"></div>
                      <div class="title">比赛场挑战次数+10</div>
                      <div class="content">参加平台官方比赛，享受比规定挑战次数更多10次的挑战机会</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-14"></div>
                      <div class="title">线下沙龙物料支持</div>
                      <div class="content">获得平台线下少龙免费入场权，可申请举办区域沙龙并免费获得流程辅导和物料支持</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-15"></div>
                      <div class="title">免费专业培训</div>
                      <div class="content">免费享受3-5天平台系统培训，每月10次以上线上营销课，30天电话辅导，微信1对1沟通</div>
                    </div>
                    <div class="item">
                      <div class="icon icon-16"></div>
                      <div class="title">广告宣传扶持</div>
                      <div class="content">免费畅享游戏运营中心服务支持、广告投放支持、专业素材文案支持、宣传物料支持</div>
                    </div>
                  </div>
                </div>
              </swiperSlide>
            </swiper>
          </div>
        </div>
        <div class="bottom-bar">
          <swiper :options="payOption" ref="pay" class="swiper-pay">
            <swiperSlide>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low" v-if="vipLevel === 0">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>6</span><i>￥99</i></div>
                <div class="btn-up">直升V1高手</div>
              </div>
              <div class="up-low" v-else-if="vipLevel === 1">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>49</span><i>￥1000</i></div>
                <div class="btn-up">直升V2大师</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low">
                <div class="top-label">
                  限时折扣
                </div>
                <div class="price">￥<span>49</span><i>￥1000</i></div>
                <div class="btn-up">直升V2大师</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low no-price">
                <div class="btn-up">联系客服升级</div>
              </div>
            </swiperSlide>
            <swiperSlide>
              <div class="up-low no-price">
                <div class="btn-up">联系客服升级</div>
              </div>
            </swiperSlide>
            <swiperSlide>
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </template>
  </ThePage>
</template>

<script>
  let cardInit = false,
    contentInit = false,
    payInit = false;
  export default {
    data() {
      return {
        bottomHeight: 0,
        vipName: ["达人", "高手", "大师", "推广部长", "总代理", "联合创始人"],
        cardOption: {
          loop: false,
          spaceBetween: (28 / 75) * window.rem,
          centeredSlides: true,
          slidesPerView: 1.15,
          resistanceRatio: 0,
          initialSlide: this.$route.params.vipLevel,
          pagination: {
            el: ".card-pagination",
            clickable: true,
            bulletClass: "card-item",
            bulletActiveClass: "card-item-active"
          },
          on: {
            init() {
              setTimeout(() => {
                cardInit = true;
              }, 100);
            },
            slideChange() {
              if (!cardInit) {
                return false;
              }
              this.vue.contentSwiper.slideTo(this.activeIndex);
              this.vue.paySwiper.slideTo(this.activeIndex);
            }
          }
        },
        contentOption: {
          loop: false,
          spaceBetween: 10,
          autoHeight: true,
          resistanceRatio: 0,
          initialSlide: this.$route.params.vipLevel,
          on: {
            init() {
              setTimeout(() => {
                contentInit = true;
              }, 100);
            },
            slideChange() {
              if (!contentInit) {
                return false;
              }
              this.vue.cardSwiper.slideTo(this.activeIndex);
              this.vue.paySwiper.slideTo(this.activeIndex);
            }
          }
        },
        payOption: {
          loop: false,
          spaceBetween: 10,
          resistanceRatio: 0,
          autoHeight: true,
          initialSlide: this.$route.params.vipLevel,
          on: {
            init() {
              setTimeout(() => {
                payInit = true;
                this.vue.bottomHeight = this.slides[this.realIndex].offsetHeight;
              }, 200);
            },
            slideChange() {
              if (!payInit) {
                return false;
              }
              this.vue.bottomHeight = this.slides[this.realIndex].offsetHeight;
              this.vue.contentSwiper.slideTo(this.activeIndex);
              this.vue.cardSwiper.slideTo(this.activeIndex);
            }
          }
        }
      };
    },
    computed: {
      cardSwiper() {
        let that = this;
        that.$refs.card.swiper.vue = that;
        return that.$refs.card.swiper;
      },
      contentSwiper() {
        let that = this;
        that.$refs.content.swiper.vue = that;
        return that.$refs.content.swiper;
      },
      paySwiper() {
        let that = this;
        that.$refs.pay.swiper.vue = that;
        return that.$refs.pay.swiper;
      },
      vipLevel() {
        return parseInt(this.$route.params.vipLevel)
      }
    },
    watch: {
      // bottomHeight(nv) {
      //   console.log(nv);
      // }
    },
    beforeDestroy() {
      cardInit = contentInit = payInit = false
    },
    mounted() {
      this.cardSwiper;
      this.contentSwiper;
      this.paySwiper;
      this.$http.get('/Bobcenter/userCenter').then(r => {
        console.log(r)

      }).catch(err => {
        console.error(err)
      })
    },
    methods: {
      slideTo(v) {
        this.cardSwiper.slideTo(v);
      }
    }
  };
</script>

<style lang="scss" scoped>
  $o:#fe6f49;

  .power-container {
    width: 100%;
    height: 100%;
    padding-bottom: 120px;

    .top-card-box {
      background: #fff;
      padding-top: 45px;
      margin-bottom: 15px;

      .swiper-card {
        padding-bottom: 50px;
      }

      .my-level-box {
        line-height: 44px;
        padding-left: 70px;
        position: relative;
        font-size: 30px;
        padding-top: 25px;
        padding-bottom: 35px;
        color: #333;

        .iconfont {
          position: absolute;
          font-size: 36px;
          left: 26px;
          top: 25px;
          line-height: 40px;
        }

        p {
          font-size: 24px;
          color: #adadad;
        }
      }
    }

    .main-block {
      height: 100%;
      width: 100%;
      overflow-y: auto;
      position: relative;
      z-index: 10;
      background: #fff;

      .main-bg {
        background: #f0f0f0;
      }
    }

    .bottom-bar {
      height: 120px;
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #fff;
    }

    .card-item {
      width: 650px;
      height: 300px;
      background-image: url("../../assets/images/my/card_4.png");
      background-size: 100% auto;
      position: relative;
      border-radius: 15px;
      overflow: hidden;

      @for $i from 0 through 4 {
        &.card-#{$i} {
          background-image: url("../../assets/images/my/card_#{$i}.png");
        }
      }
    }


    .label-vip {
      height: 40px;
      background-position: left center;
      background-size: auto 100%;
      background-color: #333;
      color: #fff;
      padding-left: 50px;
      padding-right: 8px;
      line-height: 42px;
      font-size: 24px;
      position: absolute;
      border-radius: 5px;
      right: 30px;
      top: 30px;
    }

    .up-level-label {
      height: 50px;
      padding: 0 20px;
      background: #333;
      color: #fff;
      line-height: 52px;
      position: absolute;
      bottom: 40px;
      right: 30px;
      border-radius: 15px 0 15px 0;
      overflow: hidden;
    }

    .month-power {
      height: 150px;
      background: #fff url("../../assets/images/my/been_pack.jpg") no-repeat;
      background-size: auto 90px;
      background-position: 45px center;
      margin-bottom: 15px;
      position: relative;
      padding-top: 30px;
      padding-left: 175px;

      .title {
        line-height: 44px;
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
      }

      .content {
        font-size: 22px;
        color: #adadad;
        line-height: 34px;
      }

      &.no-mycard {
        padding-top: 20px;

        .title {
          margin-bottom: 0;
        }
      }

      .btn-getbeen {
        border: 1px solid #ccc;
        color: #ccc;
        height: 60px;
        line-height: 60px;
        width: 160px;
        text-align: center;
        border-radius: 30px;
        position: absolute;
        top: 45px;
        right: 35px;

        &.state-ok {
          border: 1px solid $o;
          color: $o;

          &:active {
            background: #ffe6df;
          }
        }
      }
    }

    .power-list-title {
      line-height: 155px;
      font-size: 34px;
      font-weight: bold;
      padding-left: 35px;
      height: 150px;
      position: relative;
      background: #fff;
      color: #333;

      &:before {
        display: block;
        content: "";
        width: 10px;
        height: 24px;
        background: #333;
        position: absolute;
        top: 63px;
        left: 0;
      }
    }

    .power-list {
      background: #fff;

      .item {
        position: relative;
        padding-left: 160px;
        padding-right: 60px;
        padding-bottom: 50px;
        min-height: 90px;

        .icon {
          position: absolute;
          width: 100px;
          height: 100px;

          background-size: 100px auto;
          top: -5px;
          left: 30px;
          background-image: url('../../assets/images/my/pwoer_icon_v4.png');
          background-repeat: no-repeat;

          @for $i from 0 through 20 {
            &.icon-#{$i} {
              background-position-y: $i * -100px
            }
          }
        }

        .title {
          font-size: 26px;
          line-height: 1;

          label {
            display: inline-block;
            height: 30px;
            padding: 0 10px;
            background: #333;
            color: #fff;
            font-size: 20px;
            line-height: 32px;
            vertical-align: 2px;
            border-radius: 5px;
            margin-left: 10px;
          }
        }

        .content {
          font-size: 22px;
          line-height: 28px;
          padding-top: 25px;
          color: #adadad;
        }
      }

      @for $i from 0 through 4 {
        &.v#{$i} {
          .icon {
            background-image:url('../../assets/images/my/pwoer_icon_v#{$i}.png');
          }
        }
      }
    }

    .content-v0 {
      width: 100%;
      padding: 25px;
      background: #fff;

      .up-v1 {
        width: 100%;
        height: 180px;
        background: url("../../assets/images/my/up_v1.jpg") no-repeat;
        background-size: 100%;
      }
    }

    .up-low {
      height: 120px;
      position: relative;
      padding: 20px;
      padding-left: 350px;
      background: #fff;
      @include oneT;

      .top-label {
        font-size: 24px;
        color: #fff;
        background: $o;
        height: 40px;
        line-height: 42px;
        font-weight: bold;
        padding: 0 12px;
        position: absolute;
        top: 0;
        left: 25px;
        z-index: 1000;
        border-radius: 0 0 10px 10px;
      }

      .price {
        color: $o;
        font-size: 20px;
        position: absolute;
        bottom: 20px;
        left: 20px;

        span {
          font-size: 36px;
        }

        i {
          font-style: normal;
          color: #cccccc;
          text-decoration: line-through;
          padding-left: 15px;
        }
      }

      .btn-up {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 32px;
        color: #fff;
        background: #333;
        line-height: 80px;
        border-radius: 15px;
        @include tapColor;
      }

      &.no-price {
        padding-left: 20px;
      }
    }
  }
</style>