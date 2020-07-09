<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/Shouye" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Kecheng" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/Yuekejilu" icon="todo-list-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/Lianxi" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace to="/Wode" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped></style>
