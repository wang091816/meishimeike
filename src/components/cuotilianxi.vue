<template>
  <div class="taojuanlianxi">
    <Header :title="this.$route.meta.title" />
     <van-dropdown-menu active-color="#eb6100">
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    <div class="lianxi_empty">
      <img src="/images/lianxi_08.png" alt="">
      <p>暂无错题记录</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../views/LianxiHeader.vue";
export default Vue.extend({
  components: {
    Header
  },
   data() {
    return {
      value1: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 },
      ],
    };
  }
});
</script>

<style scoped lang="scss">
.taojuanlianxi{
 background: #fff;
 height: 100vh;
}
.lianxi_empty{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img{
    width: 10rem;
  }
  p{
    width: 100%;
    text-align: center;
    color: #8c8c8c;
    font-size: .9rem;
    margin-top: 1.25rem;
  }
}
</style>