<template>
    <div id="Study">
        <van-nav-bar
        title="我的学习"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Study",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>