import Vue from 'vue'
import VueRouter from 'vue-router'
const Holloworld = resolve => require(["../components/HelloWorld"], resolve);
const Shouye = resolve => require(["../components/shouye"], resolve);
const Cepingjilu = resolve => require(["../components/cepingjilu"], resolve);
const Cuotilianxi = resolve => require(["../components/cuotilianxi"], resolve);
const Dengluzhuce = resolve => require(["../components/dengluzhuce"], resolve);
const Fengzhenmokao = resolve => require(["../components/fengzhenmokao"], resolve);
const Jingpinkecheng = resolve => require(["../components/jingpinkecheng"], resolve);
const Lanxinfeng = resolve => require(["../components/lanxinfeng"], resolve);
const Mingshizhenrong = resolve => require(["../components/mingshizhenrong"], resolve);
const Kaodianlianxi = resolve => require(["../components/kaodianlianxi"], resolve);
const Kecheng = resolve => require(["../components/kecheng"], resolve);
const Taojuanlianxi = resolve => require(["../components/taojuanlianxi"], resolve);
const Teseke = resolve => require(["../components/teseke"], resolve);
const Wode = resolve => require(["../components/wode"], resolve);
const Xitishouceng = resolve => require(["../components/xitishouceng"], resolve);
const Xuexirili = resolve => require(["../components/xuexirili"], resolve);
const Yuduiyifudao = resolve => require(["../components/yiduiyifudao"], resolve);
const Yuekejilu = resolve => require(["../components/yuekejilu"], resolve);
const Lianxi = resolve => require(["../components/lianxi"], resolve);
const Kechengxingqing = resolve => require(["../components/kechengxingqing"], resolve);
Vue.use(VueRouter)




  const routes = [
  {
    path: '/',
    name:"Holloworld",
    component:Holloworld
  },
  {
    path: '/Shouye',
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
    path: '/Jingpinkecheng',
    name:"Jingpinkecheng",
    component:Jingpinkecheng
  },
  {
    path: '/Lanxinfeng',
    name:"Lanxinfeng",
    component:Lanxinfeng
  },
  {
    path: '/Mingshizhenrong',
    name:"Mingshizhenrong",
    component:Mingshizhenrong
  },
  {
    path: '/Kaodianlianxi',
    name:"Kaodianlianxi",
    component:Kaodianlianxi
  },
  {
    path: '/Kecheng',
    name:"Kecheng",
    component:Kecheng
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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
