<template>
    <div id="Heads">
        <van-cell is-link @click="showPopup">头像</van-cell>
        <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '20%' }"
        >
            <van-cell is-link @click="showPopup">拍照</van-cell>
            <van-cell is-link @click="showPopup">从手机相册选取</van-cell>
            <van-cell is-link @click="showPopup">取消</van-cell>
        </van-popup>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Heads",
        data() {
            return {
                show: false
            };
        },
        methods: {
            showPopup() {
                this.show = true;
            },
        },
    })
</script>

<style scoped lang="scss">
#Heads{
    .van-cell{
        width: 100%;
        text-align: center;
    }
}
</style>