<template>
    <div id="City">
        <van-cell is-link @click="showPopup">所在城市</van-cell>
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
        name: "City",
        data() {
            return {
                show: false,
                columns: [
                    {
                        text: '浙江',
                        children: [
                            {
                                text: '杭州',
                                children: [{ text: '西湖区' }, { text: '余杭区' }],
                            },
                            {
                                text: '温州',
                                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                            },
                        ],
                    },
                    {
                        text: '福建',
                        children: [
                            {
                                text: '福州',
                                children: [{ text: '鼓楼区' }, { text: '台江区' }],
                            },
                            {
                                text: '厦门',
                                children: [{ text: '思明区' }, { text: '海沧区' }],
                            },
                        ],
                    },
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