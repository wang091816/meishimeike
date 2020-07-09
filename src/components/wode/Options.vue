<template>
    <div id="Options">
        <van-nav-bar
        title="设置"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell is-link @click="goOptionscode">设置密码</van-cell>
        <van-cell></van-cell>
        <van-button type="primary" size="large">退出登录</van-button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Options",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            },
            goOptionscode(){
                this.$router.push("/Optionscode")
            },
        },
    })
</script>

<style scoped lang="scss"></style>