<template>
  <div>
    <Header :title="this.$route.meta.title" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../views/LianxiHeader.vue";
export default Vue.extend({
  components: {
    Header
  }
});
</script>

<style scoped>
</style>