<template>
    <div id="Balance">
        <van-nav-bar
        title="我的余额"
        left-arrow
        right-text="余额明细"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Balance",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            },
            onClickRight(){
                this.$router.push("/Balancedetail")
            }
        },
    })
</script>

<style scoped lang="scss"></style>