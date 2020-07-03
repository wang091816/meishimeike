<template>
  <div>
    <van-nav-bar class="lianxiHeader" :title="title" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="20" />
      </template>
      <template #right>
        <van-icon name="search" size="20" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.lianxiHeader {
  .van-icon {
    color: black;
  }
}
</style>