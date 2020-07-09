<template>
    <div id="Subject">
        <van-nav-bar
        title="修改个人信息"
        left-arrow
        right-text="保存"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-checkbox-group v-model="result" :max="9">
            <van-checkbox name="a" shape="square">语文</van-checkbox>
            <van-checkbox name="b" shape="square">数学</van-checkbox>
            <van-checkbox name="c" shape="square">英语</van-checkbox>
            <van-checkbox name="d" shape="square">物理</van-checkbox>
            <van-checkbox name="e" shape="square">化学</van-checkbox>
            <van-checkbox name="f" shape="square">生物</van-checkbox>
            <van-checkbox name="g" shape="square">政治</van-checkbox>
            <van-checkbox name="h" shape="square">历史</van-checkbox>
            <van-checkbox name="i" shape="square">信息技术</van-checkbox>
        </van-checkbox-group>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Subject",
        data() {
            return {
                result: ['a','b','c','d','e','f','g','h','i'],
            };
        },
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            },
            onClickRight() {
                // 返回上一级
                this.$router.go(-1)
            },
        },
    })
</script>

<style scoped lang="scss">
#Subject{
    .van-checkbox-group{
        .van-checkbox{
            padding: 1rem 0.7rem;
            background: #fff;
            border-bottom: 1px solid #eee;
        }
    }
}
</style>