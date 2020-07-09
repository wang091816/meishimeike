<template>
  <div>
    <div class="mjx_hrecord_box">
      <div class="mjx_hrecord_head">
        <p>约课记录</p>
        
      </div>
      <!-- 未登录 -->
      <div class="mjx_hrecord_body" v-if="!login">
        <van-tabs
          title-active-color="#eb6100"
          line-width="4%"
          line-height="3%"
          line-background="#eb6100"
        >
          <van-tab title="待上课" name="a" class="mjx_hrecord_van-tab">
            <img src="../assets/img/444.png" alt />
            <p>请登录后查看内容</p>
            <router-link tag="button" to="/tabbar/my" class="button">登录/注册</router-link>
          </van-tab>
          <van-tab title="已上课" name="b" class="mjx_hrecord_van-tab">

            <img src="../assets/img/444.png" alt />
            <p>请登录后查看内容</p>
            <router-link tag="button" to="/tabbar/my" class="button">登录/注册</router-link>

          </van-tab>

          <van-tab title="已取消" name="c" class="mjx_hrecord_van-tab">
            <img src="../assets/img/444.png" alt />
            <p>请登录后查看详细内容</p>
            <router-link tag="button" to="/tabbar/my" class="button">登录/注册</router-link>
          </van-tab>
        </van-tabs>
      </div>
      <!-- 已登录 -->
      <div class="mjx_hrecord_body" v-else>
       
        <van-tabs
          title-active-color="#eb6100"
          line-width="4%"
          line-height="3%"
          line-background="#eb6100"
        >
          <van-tab title="待上课" name="a" class="mjx_hrecord_van-tab">
            <img src="../assets/img/444.png" alt />
            <p>还没有待上课记录哦</p>
            <router-link tag="button" to="/xygydy" class="button">立即约课</router-link>
          </van-tab>
          <van-tab title="已上课" name="b" class="mjx_hrecord_van-tab">
            <img src="../assets/img/444.png" alt />
            <p>还没有上课记录哦</p>
            <router-link tag="button" to="/xygydy" class="button">立即约课</router-link>
          </van-tab>
          <van-tab title="已取消" name="c" class="mjx_hrecord_van-tab">
            <img src="../assets/img/444.png" alt />
            <p>还没有取消上课记录哦</p>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false
    };
  },

  created() {
    if (localStorage.userInfo) {
      this.login = true;
    } else {
      this.login = false;
    }
  }
};
</script>

<style scoped>
html {
  width: 100%;
  height: 10rem;
  background: #ffffff;
}
.mjx_hrecord-box {
  width: 100%;
  height: 10rem;
}
.mjx_hrecord_box > .mjx_hrecord_head {
  width: 100%;
  height: 3rem;
  border-bottom: 0.01rem #ddd solid;
  align-items: center;
  display: flex;
    align-items: center;
  justify-content: center;
}
.mjx_hrecord_box > .mjx_hrecord_head > p {
  font-size: 0.34rem;
}
.mjx_hrecord_van-tab > img {
  width: 50%;
  height: 8rem;
  margin-top: 25%;
}
.mjx_hrecord_van-tab {
  text-align: center;
  min-height: 10rem;
  background: #f0f2f5;
}
.mjx_hrecord_van-tab > p {
  font-size: 1rem;
  color: #b7b7b7;
}
.mjx_hrecord_van-tab > .button {
    margin-top:1rem; 
  width: 4rem;
  height: 1.5rem;
  background: orange;
  color: #ffffff;
  font-size: 0.16rem;
  border: none;
  border-radius: 0.04rem;
}
</style>