<template>
  <div>
    <van-nav-bar class="kaodianlianxi_title" title="题库选择" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="20" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
});
</script>

<style scoped>
.kaodianlianxi_title .van-icon{
    color: #000;
}
</style>