<template>
    <div id="dengluzhuce">
        <van-nav-bar
        title="登录注册"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "dengluzhuce",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>