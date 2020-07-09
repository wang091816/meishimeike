<template>
    <div id="Service">
        <van-nav-bar
        title="在线客服"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Service",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>