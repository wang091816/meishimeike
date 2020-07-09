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
const Kechengxingqing = resolve => require(["../components/kechengxingqing"], resolve);
const Jiangshixingqing = resolve => require(["../components/jiangshixingqing"], resolve);
const Yuyuekecheng = resolve => require(["../components/yuyuekecheng"], resolve);
const Querendingdan = resolve => require(["../components/querendingdan"], resolve);

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
    name:"Shouye",
    component:Shouye
  },
  {
    path: '/Cepingjilu',
    name:"Cepingjilu",
    component:Cepingjilu
  },
  {
    path: '/Cuotilianxi',
    name:"Cuotilianxi",
    component:Cuotilianxi
  },
  {
    path: '/Dengluzhuce',
    name:"Dengluzhuce",
    component:Dengluzhuce
  },
  {
    path: '/Fengzhenmokao',
    name:"Fengzhenmokao",
    component:Fengzhenmokao
  },
  {
    path: '/Lanxinfeng',
    name:"Lanxinfeng",
    component:Lanxinfeng
  },
  {
    path: '/Kaodianlianxi',
    name:"Kaodianlianxi",
    component:Kaodianlianxi
  },
  {
    path: '/Taojuanlianxi',
    name:"Taojuanlianxi",
    component:Taojuanlianxi
  },
  {
    path: '/Teseke',
    name:"Teseke",
    component:Teseke
  },
  {
    path: '/Wode',
    name:"Wode",
    component:Wode
  },
  {
    path: '/Message',
    name:"Message",
    component:Message
  },
  {
    path: '/Nickname',
    name:"Nickname",
    component:Nickname
  },
  {
    path: '/Sex',
    name:"Sex",
    component:Sex
  },
  {
    path: '/Subject',
    name:"Subject",
    component:Subject
  },
  {
    path: '/Study',
    name:"Study",
    component:Study
  },
  {
    path: '/Balance',
    name:"Balance",
    component:Balance
  },
  {
    path: '/Balancedetail',
    name:"Balancedetail",
    component:Balancedetail
  },
  {
    path: '/Attention',
    name:"Attention",
    component:Attention
  },
  {
    path: '/Collect',
    name:"Collect",
    component:Collect
  },
  {
    path: '/Course',
    name:"Course",
    component:Course
  },
  {
    path: '/Member',
    name:"Member",
    component:Member
  },
  {
    path: '/Invite',
    name:"Invite",
    component:Invite
  },
  {
    path: '/Coupon',
    name:"Coupon",
    component:Coupon
  },
  {
    path: '/Cards',
    name:"Cards",
    component:Cards
  },
  {
    path: '/Cardsconvert',
    name:"Cardsconvert",
    component:Cardsconvert
  },
  {
    path: '/Vip',
    name:"Vip",
    component:Vip
  },
  {
    path: '/News',
    name:"News",
    component:News
  },
  {
    path: '/Feedback',
    name:"Feedback",
    component:Feedback
  },
  {
    path: '/Service',
    name:"Service",
    component:Service
  },
  {
    path: '/Options',
    name:"Options",
    component:Options
  },
  {
    path: '/Optionscode',
    name:"Optionscode",
    component:Optionscode
  },
  {
    path: '/Xitishouceng',
    name:"Xitishouceng",
    component:Xitishouceng
  },
  {
    path: '/Xuexirili',
    name:"Xuexirili",
    component:Xuexirili
  },
  {
    path: '/Yuduiyifudao',
    name:"Yuduiyifudao",
    component:Yuduiyifudao
  },
  {
    path: '/Yuekejilu',
    name:"Yuekejilu",
    component:Yuekejilu
  },
  {
    path: '/Lianxi',
    name:"Lianxi",
    component:Lianxi
  },
  {
    path: '/Kechengxingqing',
    name:"Kechengxingqing",
    component:Kechengxingqing
  },
  {
    path: '/Jiangshixingqing',
    name:"Jiangshixingqing",
    component:Jiangshixingqing
  },
  {
    path: '/Yuyuekecheng',
    name:"Yuyuekecheng",
    component:Yuyuekecheng
  },
  {
    path: '/Querendingdan',
    name:"Querendingdan",
    component:Querendingdan
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
