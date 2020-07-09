<template>
    <div id="Yiduiyifudao">
        <van-nav-bar
        title="一对一辅导"
        left-arrow
        @click-left="onClickLeft"
        />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Yiduiyifudao",
        methods: {
            onClickLeft() {
                // 返回上一级
                this.$router.go(-1)
            }
        },
    })
</script>

<style scoped lang="scss"></style>