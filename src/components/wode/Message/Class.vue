<template>
    <div id="Class">
        <van-cell is-link @click="showPopup">年级</van-cell>
        <van-popup
        v-model="show"
        position="bottom"
        :style="{ height: '40%' }"
        >
            <van-picker show-toolbar :columns="columns" />
        </van-popup>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "Class",
        data() {
            return {
                show: false,
                columns: [
                    {text: '小学一年级'},
                    {text: '小学二年级'},
                    {text: '小学三年级'},
                    {text: '小学四年级'},
                    {text: '小学五年级'},
                    {text: '小学六年级'},
                ],
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