<template>
    <div id="Coupon">
        <van-nav-bar
        title="我的优惠券"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-tabs v-model="active">
            <van-tab title="未使用">
                <van-empty description="暂无优惠券" />
            </van-tab>
            <van-tab title="已使用">
                <van-empty description="暂无优惠券" />
            </van-tab>
            <van-tab title="已过期">
                <van-empty description="暂无优惠券" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Coupon",
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