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
Vue.use(VueRouter)



  const routes = [
  {
    path: '/',
    name:"Shouye",
    meta:{
      title:'每时每刻',
    },
    component:Shouye
  },
  {
    path: '/Cepingjilu',
    name:"Cepingjilu",
    meta:{
      title:'测评记录'
    },
    component:Cepingjilu
  },
  {
    path: '/Cuotilianxi',
    name:"Cuotilianxi",
    meta:{
      title:'错题练习'
    },
    component:Cuotilianxi
  },
  {
    path: '/Dengluzhuce',
    name:"Dengluzhuce",
    meta:{
      title:'登陆注册'
    },
    component:Dengluzhuce
  },
  {
    path: '/Fengzhenmokao',
    name:"Fengzhenmokao",
    meta:{
      title:'仿真模考'
    },
    component:Fengzhenmokao
  },
  {
    path: '/Lanxinfeng',
    name:"Lanxinfeng",
    meta:{
      title:'蓝信封'
    },
    component:Lanxinfeng
  },
  {
    path: '/Kaodianlianxi',
    name:"Kaodianlianxi",
    meta:{
      title:'考点专练'
    },
    component:Kaodianlianxi
  },
  {
    path: '/Taojuanlianxi',
    name:"Taojuanlianxi",
    meta:{
      title:'套卷练习'
    },
    component:Taojuanlianxi
  },
  {
    path: '/Teseke',
    name:"Teseke",
    meta:{
      title:'特色课'
    },
    component:Teseke
  },
  {
    path: '/Wode',
    name:"Wode",
    meta:{
      title:'我的'
    },
    component:Wode
  },
  {
    path: '/Xitishouceng',
    name:"Xitishouceng",
    meta:{
      title:'习题收藏'
    },
    component:Xitishouceng
  },
  {
    path: '/Xuexirili',
    name:"Xuexirili",
    meta:{
      title:'学习日历'
    },
    component:Xuexirili
  },
  {
    path: '/Yuduiyifudao',
    name:"Yuduiyifudao",
    meta:{
      title:'一对一辅导'
    },
    component:Yuduiyifudao
  },
  {
    path: '/Yuekejilu',
    name:"Yuekejilu",
    meta:{
      title:'约课记录'
    },
    component:Yuekejilu
  },
  {
    path: '/Lianxi',
    name:"Lianxi",
    meta:{
      title:'练习'
    },
    component:Lianxi
  },
  {
    path: '/Kechengxingqing',
    name:"Kechengxingqing",
    meta:{
      title:'课程详情'
    },
    component:Kechengxingqing
  },
  {
    path: '/Jiangshixingqing',
    name:"Jiangshixingqing",
    meta:{
      title:'讲师详情'
    },
    component:Jiangshixingqing
  },
  {
    path: '/Yuyuekecheng',
    name:"Yuyuekecheng",
    meta:{
      title:'预约课程'
    },
    component:Yuyuekecheng
  },
  {
    path: '/Querendingdan',
    name:"Querendingdan",
    meta:{
      title:'确认订单'
    },
    component:Querendingdan
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

export default router
