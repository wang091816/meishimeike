<template>
    <div id="Cardsconvert">
        <van-nav-bar
        title="学习卡兑换"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="卡号"
                label="卡号"
                placeholder="卡号"
                :rules="[{ required: true, message: '请输入学习卡号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请输入学习卡密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">立即兑换</van-button>
            </div>
        </van-form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Cardsconvert",
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            },
            onSubmit(values) {
                console.log('submit', values);
            },
        },
    })
</script>

<style scoped lang="scss"></style>