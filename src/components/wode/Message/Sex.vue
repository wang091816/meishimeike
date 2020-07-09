<template>
    <div id="Sex">
        <van-nav-bar
        title="修改个人信息"
        left-arrow
        right-text="保存"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        />
        <van-cell-group>
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="男" clickable @click="radio = '1'">
                    <template #right-icon>
                        <van-radio name="1" />
                    </template>
                    </van-cell>
                    <van-cell title="女" clickable @click="radio = '2'">
                    <template #right-icon>
                        <van-radio name="2" />
                    </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-cell-group>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Sex",
        data() {
            return {
                radio: '1'
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