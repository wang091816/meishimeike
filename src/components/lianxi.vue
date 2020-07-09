<template>
  <div>
    <van-nav-bar class="lianxi_title">
      <div slot="title">练习</div>
    </van-nav-bar>
    <div class="lianxi_section">
      <div v-for="(item,index) in lianxi" :key="index" @click="enterChildren(index)">
        <img :src="item.img" alt />
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="lianxi_content">
      <h1>近期模考</h1>
      <div>
        <span>默认排序</span>
        <span>时间</span>
      </div>
      <img src="/images/lianxi_07.png" alt />
      <p>暂无模考按排，敬请期待</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      lianxi: []
    };
  },
  mounted() {
    this.$axios.get("/api/lianxi.json").then(res => {
      this.lianxi = res.data.lianxi_one;
    });
  },
  methods: {
    enterChildren(index) {
      switch (index) {
        case 0:
          this.$router.push("Kaodianlianxi");
          break;
        case 1:
          this.$router.push("Taojuanlianxi");
          break;
        case 2:
          this.$router.push("Fengzhenmokao");
          break;
        case 3:
          this.$router.push("Cuotilianxi");
          break;
        case 4:
          this.$router.push("Cepingjilu");
          break;
        case 5:
          this.$router.push("Xitishouceng");
          break;
      }
    }
  }
});
</script>

<style scoped lang="scss">
.lianxi_title {
  height: 2.75rem;
}
.lianxi_title div {
  font-size: 1.125rem;
}
.lianxi_section {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin: 0.625rem;
  padding: 0.3125rem 0;
  border-radius: 0.2rem;
}
.lianxi_section div {
  width: 25%;
  text-align: center;
  padding-top: 0.625rem;
}
.lianxi_section img {
  width: 1.9rem;
}
.lianxi_section p {
  font-weight: 400;
  color: #595959;
  line-height: 2.73rem;
}
.lianxi_content {
  padding: 0.875rem 0.9375rem;
  background: #fff;
  color: #8c8c8c;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  h1 {
    font-size: 0.9375rem;
    font-weight: 400;
    margin-bottom: 0.675rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span:first-child {
      color: #eb6100;
    }
  }
  img {
    width: 8.75rem;
    margin: auto;
  }
  p {
    width: 100%;
    text-align: center;
  }
}
</style>