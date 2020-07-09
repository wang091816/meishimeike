<template>
    <div id="Invite">
        <van-nav-bar
        title="约课订单"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs v-model="active">
            <van-tab title="全部订单">
                <van-empty description="暂无订单" />
            </van-tab>
            <van-tab title="待支付">
                <van-empty description="暂无订单" />
            </van-tab>
            <van-tab title="已完成">
                <van-empty description="暂无订单" />
            </van-tab>
            <van-tab title="已取消">
                <van-empty description="暂无订单" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Invite",
        data() {
            return {
                active: 0,
            };
        },
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>