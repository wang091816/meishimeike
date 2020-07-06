<template>
  <div class="taojuanlianxi">
    <Header :title="this.$route.meta.title" />
    <van-dropdown-menu active-color="#eb6100">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <div class="lianxi_empty">
      <img src="/images/lianxi_08.png" alt />
      <p>请稍候，模考正在赶来的路上啦</p>
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
      value2: "a",
      value3: "A",
      option1: [
        { text: "考试类型", value: 0 },
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "正式考试", value: 3 },
      ],
      option2: [
        { text: "考试状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "未开始", value: "c" },
        { text: "进行中", value: "d" },
        { text: "已结束", value: "e" },
      ],
      option3: [
        { text: "参考状态", value: "A" },
        { text: "全部", value: "B" },
        { text: "已做", value: "C" },
        { text: "未做", value: "D" }
      ]
    };
  }
});
</script>

<style scoped  lang="scss">
.taojuanlianxi {
  background: #fff;
  height: 92.5vh;
}
.lianxi_empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 10rem;
  }
  p {
    width: 100%;
    text-align: center;
    color: #8c8c8c;
    font-size: 0.9rem;
    margin-top: 1.25rem;
  }
}
</style>