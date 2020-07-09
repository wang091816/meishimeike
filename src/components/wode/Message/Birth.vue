<template>
    <div id="Birth">
        <van-cell is-link @click="showPopup">出生日期</van-cell>
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
        name: "Birth",
        data() {
            return {
                show: false,
                columns: [
                    {
                        text: '2019',
                        children: [
                            {
                                text: '01',
                                children: [{ text: '01' },
                                            { text: '02' },
                                            { text: '03' },
                                            { text: '04' },
                                            { text: '05' }],
                            },
                            {
                                text: '02',
                                children: [{ text: '01' },
                                            { text: '02' },
                                            { text: '03' },
                                            { text: '04' },
                                            { text: '05' }],
                            },
                        ],
                    },
                    {
                        text: '2020',
                        children: [
                            {
                                text: '01',
                                children: [{ text: '06' },
                                            { text: '07' },
                                            { text: '08' },
                                            { text: '09' },
                                            { text: '10' }],
                            },
                            {
                                text: '02',
                                children: [{ text: '06' },
                                            { text: '07' },
                                            { text: '08' },
                                            { text: '09' },
                                            { text: '10' }],
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

<style scoped lang="scss"></style>