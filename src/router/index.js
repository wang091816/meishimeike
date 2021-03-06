import Vue from 'vue'
import VueRouter from 'vue-router'
const Shouye = resolve => require(["../components/shouye"], resolve);
const Cepingjilu = resolve => require(["../components/cepingjilu"], resolve);
const Cuotilianxi = resolve => require(["../components/cuotilianxi"], resolve);
const Dengluzhuce = resolve => require(["../components/dengluzhuce"], resolve);
const Fengzhenmokao = resolve => require(["../components/fengzhenmokao"], resolve);
const Lanxinfeng = resolve => require(["../components/lanxinfeng"], resolve);
const Kaodianlianxi = resolve => require(["../components/kaodianlianxi"], resolve);
const Taojuanlianxi = resolve => require(["../components/taojuanlianxi"], resolve);
const Teseke = resolve => require(["../components/teseke"], resolve);
const Wode = resolve => require(["../components/wode"], resolve);
const Xitishouceng = resolve => require(["../components/xitishouceng"], resolve);
const Xuexirili = resolve => require(["../components/xuexirili"], resolve);
const Yuduiyifudao = resolve => require(["../components/yiduiyifudao"], resolve);
const Yuekejilu = resolve => require(["../components/yuekejilu"], resolve);
const Lianxi = resolve => require(["../components/lianxi"], resolve);
const Jiangshixingqing = resolve => require(["../components/jiangshixingqing"], resolve);
const Yuyuekecheng = resolve => require(["../components/yuyuekecheng"], resolve);
const Querendingdan = resolve => require(["../components/querendingdan"], resolve);
const Kecheng = resolve => require(["../components/KeCheng"], resolve);
const Particulars = resolve => require(["../components/Particulars"], resolve);
const Hint = resolve => require(["../components/Hint"], resolve);
const Screemn = resolve => require(["../components/Screemn"], resolve);

import Message from "@/components/wode/Message"
import Nickname from "@/components/wode/Message/Nickname"
import Sex from "@/components/wode/Message/Sex"
import Subject from "@/components/wode/Message/Subject"

import Study from "@/components/wode/Study"
import Balance from "@/components/wode/Balance"
import Balancedetail from "@/components/wode/Balancedetail"
import Attention from "@/components/wode/Attention"
import Collect from "@/components/wode/Collect"
import Course from "@/components/wode/Course"
import Member from "@/components/wode/Member"
import Invite from "@/components/wode/Invite"
import Coupon from "@/components/wode/Coupon"
import Cards from "@/components/wode/Cards"
import Cardsconvert from "@/components/wode/Cardsconvert"
import Vip from "@/components/wode/Vip"
import News from "@/components/wode/News"
import Feedback from "@/components/wode/Feedback"
import Service from "@/components/wode/Service"
import Options from "@/components/wode/Options"
import Optionscode from "@/components/wode/Optionscode"

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: "Shouye",
    meta: {
      title: '每时每刻',
      footer:true
    },
    component: Shouye
  },
  {
    path: '/Cepingjilu',
    name: "Cepingjilu",
    meta: {
      title: '测评记录'
    },
    component: Cepingjilu
  },
  {
    path: '/Cuotilianxi',
    name: "Cuotilianxi",
    meta: {
      title: '错题练习'
    },
    component: Cuotilianxi
  },
  {
    path: '/Particulars',
    name:"Particulars",
    meta:{
      title:'课程详情'
    },
    component:Particulars
  },
  {
    path: '/Dengluzhuce',
    name: "Dengluzhuce",
    meta: {
      title: '登陆注册'
    },
    component: Dengluzhuce
  },
  {
    path: '/Kecheng',
    name:"Kecheng",
    meta:{
      title:'特色课',
      footer:true
    },
    component:Kecheng
  },
  {
    path: '/Fengzhenmokao',
    name: "Fengzhenmokao",
    meta: {
      title: '仿真模考'
    },
    component: Fengzhenmokao
  },
  {
    path: '/Lanxinfeng',
    name: "Lanxinfeng",
    meta: {
      title: '蓝信封'
    },
    component: Lanxinfeng
  },
  {
    path: '/Kaodianlianxi',
    name: "Kaodianlianxi",
    meta: {
      title: '考点专练'
    },
    component: Kaodianlianxi
  },
  {
    path: '/Taojuanlianxi',
    name: "Taojuanlianxi",
    meta: {
      title: '套卷练习'
    },
    component: Taojuanlianxi
  },
  {
    path: '/Teseke',
    name: "Teseke",
    meta: {
      title: '特色课'
    },
    component: Teseke
  },
  {
    path: '/Wode',
    name: "Wode",
    meta: {
      title: '我的',
      footer:true
    },
    component: Wode
  },
  {
    path: '/Message',
    name: "Message",
    meta: {
      title: '个人信息'
    },
    component: Message
  },
  {
    path: '/Nickname',
    name: "Nickname",
    meta: {
      title: '修改昵称'
    },
    component: Nickname
  },
  {
    path: '/Sex',
    name: "Sex",
    meta: {
      title: '修改性别'
    },
    component: Sex
  },
  {
    path: '/Subject',
    name: "Subject",
    meta: {
      title: '修改学科'
    },
    component: Subject
  },
  {
    path: '/Study',
    name: "Study",
    meta: {
      title: '我的学习'
    },
    component: Study
  },
  {
    path: '/Balance',
    name: "Balance",
    meta: {
      title: '我的余额'
    },
    component: Balance
  },
  {
    path: '/Balancedetail',
    name: "Balancedetail",
    meta: {
      title: '我的余额'
    },
    component: Balancedetail
  },
  {
    path: '/Attention',
    name: "Attention",
    meta: {
      title: '我的关注'
    },
    component: Attention
  },
  {
    path: '/Collect',
    name: "Collect",
    meta: {
      title: '我的收藏'
    },
    component: Collect
  },
  {
    path: '/Course',
    name: "Course",
    meta: {
      title: '订单'
    },
    component: Course
  },
  {
    path: '/Member',
    name: "Member",
    meta: {
      title: '订单'
    },
    component: Member
  },
  {
    path: '/Invite',
    name: "Invite",
    meta: {
      title: '订单'
    },
    component: Invite
  },
  {
    path: '/Coupon',
    name: "Coupon",
    meta: {
      title: '优惠券'
    },
    component: Coupon
  },
  {
    path: '/Cards',
    name: "Cards",
    meta: {
      title: '学习卡'
    },
    component: Cards
  },
  {
    path: '/Cardsconvert',
    name: "Cardsconvert",
    meta: {
      title: '学习卡兑换'
    },
    component: Cardsconvert
  },
  {
    path: '/Vip',
    name: "Vip",
    meta: {
      title: '会员'
    },
    component: Vip
  },
  {
    path: '/News',
    name: "News",
    meta: {
      title: '消息中心'
    },
    component: News
  },
  {
    path: '/Feedback',
    name: "Feedback",
    meta: {
      title: '意见反馈'
    },
    component: Feedback
  },
  {
    path: '/Service',
    name: "Service",
    meta: {
      title: '在线客服'
    },
    component: Service
  },
  {
    path: '/Options',
    name: "Options",
    meta: {
      title: '设置'
    },
    component: Options
  },
  {
    path: '/Optionscode',
    name: "Optionscode",
    meta: {
      title: '设置密码'
    },
    component: Optionscode
  },
  {
    path: '/Xitishouceng',
    name: "Xitishouceng",
    meta: {
      title: '习题收藏'
    },
    component: Xitishouceng
  },
  {
    path: '/Xuexirili',
    name: "Xuexirili",
    meta: {
      title: '学习日历'
    },
    component: Xuexirili
  },
  {
    path: '/Yuduiyifudao',
    name: "Yuduiyifudao",
    meta: {
      title: '一对一辅导'
    },
    component: Yuduiyifudao
  },
  {
    path: '/Yuekejilu',
    name: "Yuekejilu",
    meta: {
      title: '约课记录',
      footer:true
    },
    component: Yuekejilu
  },
  {
    path: '/Lianxi',
    name: "Lianxi",
    meta: {
      title: '练习',
      footer:true
    },
    component: Lianxi
  },
  {
    path: '/Jiangshixingqing',
    name: "Jiangshixingqing",
    meta: {
      title: '讲师详情'
    },
    component: Jiangshixingqing
  },
  {
    path: '/Yuyuekecheng',
    name: "Yuyuekecheng",
    meta: {
      title: '预约课程'
    },
    component: Yuyuekecheng
  },
  {
    path: '/Querendingdan',
    name: "Querendingdan",
    meta: {
      title: '确认订单'
    },
    component: Querendingdan
  },
  {
    path: '/screemn',
    name: "Screemn",
    meta: {
      title: '搜索'
    },
    component: Screemn
  },
  {
    path: '/particulars',
    name: "Particulars",
    meta: {
      title: '课程详情'
    },
    component: Particulars
  },
  {
    path: '/hint',
    meta: {
      title: '蓝色小信封'
    },
    name: "Hint",
    component: Hint
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
