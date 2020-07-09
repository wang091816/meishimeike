<template>
    <div id="Collect">
        <van-nav-bar
        title="我的收藏"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-empty description="暂无收藏" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Collect",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>