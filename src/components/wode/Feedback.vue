<template>
    <div id="Feedback">
        <van-nav-bar
        title="意见反馈"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="500"
        placeholder="请输入您的意见"
        show-word-limit
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Feedback",
        data() {
            return {
                message: '',
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