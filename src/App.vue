<template>
  <div id="app">
    <router-view />
<<<<<<< HEAD
    <van-tabbar route>
      <van-tabbar-item replace to="/Shouye" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Kecheng" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/Yuekejilu" icon="todo-list-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/Lianxi" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace to="/Wode" icon="contact">我的</van-tabbar-item>
=======
    <van-tabbar route inactive-color="#b7b7b7" active-color="#ff882e">
      <van-tabbar-item replace to="/">
        <template #icon>
          <span class="iconfont icon-xuewei"></span>
        </template>
        <small>首页</small>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Kecheng">
        <template #icon>
          <span class="iconfont icon-tiku"></span>
        </template>
        <small>课程</small>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Yuekejilu">
        <template #icon>
          <span class="iconfont icon-shouzhi"></span>
        </template>
        <small>约课记录</small>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Lianxi">
        <template #icon>
          <span class="iconfont icon-lianxi"></span>
        </template>
        <small>练习</small>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Wode">
        <template #icon>
          <span class="iconfont icon-yonghu"></span>
        </template>
        <small>我的</small>
      </van-tabbar-item>
>>>>>>> f59da9b43fb959360a4724e9b5d745c6eafa3c37
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App"
<<<<<<< HEAD
}
</script>

<style scoped></style>
=======
};
</script>

<style scoped>
.van-tabbar .iconfont {
  font-size: 1.22rem;
}
.van-tabbar small {
  font-size: 0.6rem;
  color: #000;
}
</style>
>>>>>>> f59da9b43fb959360a4724e9b5d745c6eafa3c37
