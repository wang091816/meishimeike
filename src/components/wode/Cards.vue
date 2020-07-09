<template>
    <div id="Cards">
        <van-nav-bar
        title="我的学习卡"
        left-arrow
        right-text="学习卡兑换"
        @click-left="onClickLeft"
        @click-right="goCardsconvert"
        />
        <van-empty description="暂无兑换记录" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Cards",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            },
            goCardsconvert(){
                this.$router.push("/Cardsconvert")
            }
        },
    })
</script>

<style scoped lang="scss"></style>