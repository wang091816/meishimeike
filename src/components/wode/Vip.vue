<template>
    <div id="Vip">
        <van-nav-bar
        title="开通会员"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Vip",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>