<template>
    <div id="Attention">
        <van-nav-bar
        title="我的关注"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-empty description="暂无关注" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Attention",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>