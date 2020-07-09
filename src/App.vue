<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      inactive-color="#b7b7b7"
      active-color="#ff882e"
      v-show="this.$route.meta.footer"
    >
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
    </van-tabbar>
    <!-- 蓝色信封 -->
    <div class="blue" v-on:click="hint"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    hint() {
      this.$router.push("/hint");
    }
  }
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
.blue {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  right: 1.5rem;
  bottom: 5rem;
  background-color: #007aff;
  background-image: url("https://static.meiqia.com/widget/static/icon-mq-round@2x.png");
  background-position: 4rem;
  /* background-size: 10rem */
}
</style>
