<template>
  <div>
    <van-nav-bar class="kaodianlianxi_title" title="题库选择" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="20" />
      </template>
    </van-nav-bar>
    <van-search v-model="value" placeholder="请输入题库名称关键词" shape="round" />
    <div class="kaodianlianxi_nav">
      <div class="kaodianlianxi_nav_left">
        <p
          v-for="(one,index) in navs"
          :key="index"
          v-show="one.pid == 0"
          :class="{kaodianlianxi_nav_left_active : sel == one.id}"
          @click="add(one.id)"
        >{{one.name}}</p>
      </div>
      <div class="kaodianlianxi_nav_right">
        <p v-for="(two,index) in navs" :key="index" v-show="two.pid == sel">
          <span>{{two.classify_name}}</span>
          <br />
          <span>{{two.bank}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      value: "",
      navs: [],
      sel: 1,
    };
  },
  mounted() {
    this.$axios.get("/api/kaodianlianxi.json").then(res => {
      res.data.nav.map(item => {
        if (item.pid > 0) {
          if (item.bank) {
            this.isShow = true;
          }
        }
      });
      this.navs = res.data.nav;
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    add(id) {
      this.sel = id;
    }
  }
});
</script>

<style scoped lang="scss">
.kaodianlianxi_title .van-icon {
  color: #000;
}
.kaodianlianxi_nav {
  display: flex;
  height: 85vh;
  color: #595959;
  .kaodianlianxi_nav_left {
    flex: 1;
    background: #fafafa;
    font-size: 0.9375rem;
    text-align: center;
    p {
      padding: 1.125rem 1rem;
    }
  }
  .kaodianlianxi_nav_right {
    background: #fff;
    flex: 3;
    p {
      padding-top: 1.5625rem;
      padding-left: 1.1rem;
      span:first-child {
        display: inline-block;
        margin-bottom: 0.9rem;
      }
      span:last-child {
        font-size: 0.82rem;
        padding: 0.4rem 2.2rem;
        background: #f5f5f5;
      }
    }
  }
}
.kaodianlianxi_nav_left_active {
  background: #fff;
}
</style>