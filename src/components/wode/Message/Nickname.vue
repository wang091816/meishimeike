<template>
    <div id="Nickname">
        <van-nav-bar
        title="修改个人信息"
        left-arrow
        right-text="保存"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-cell-group>
            <van-field v-model="value" placeholder="最多可输入15个字" />
        </van-cell-group>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Nickname",
        data() {
            return {
                value: ''
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

<style scoped lang="scss"></style>