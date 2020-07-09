<template>
    <div id="Optionscode">
        <van-nav-bar
        title="设置密码"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-field v-model="value1" placeholder="请输入密码">
                <template #button>
                    <van-button size="small" type="primary">获取验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value2" placeholder="请输入验证码" />
        </van-cell-group>
        <van-cell-group>
            <van-field v-model="value3" placeholder="请输入密码" />
        </van-cell-group>
        <van-cell-group>
            <van-field/>
        </van-cell-group>
        <van-button type="primary" size="large" round>确定</van-button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Optionscode",
        data() {
            return {
                value1: '',
                value2: '',
                value3: '',
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