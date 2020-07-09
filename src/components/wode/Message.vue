<template>
    <div id="Message">
        <van-nav-bar
        title="个人信息"
        left-arrow
        @click-left="onClickLeft"
        />
<!-- 头像 -->
        <Heads/>
<!-- 昵称 -->
        <van-cell @click="goNickname">昵称</van-cell>
<!-- 手机号 -->
        <van-cell>手机号</van-cell>
        <van-popup
        v-model="show"
        closeable
        position="bottom"
        :style="{ height: '40%' }"
        >
        昵称
        </van-popup>
<!-- 性别 -->
        <van-cell @click="goSex">性别</van-cell>
<!-- 出生日期 -->
        <Birth/>
<!-- 所在城市 -->
        <City/>
<!-- 学科 -->
        <van-cell @click="goSubject">学科</van-cell>
<!-- 年级 -->
        <Class/>
    </div>
</template>

<script lang="ts">
import Heads from '@/components/wode/Message/Heads'
import Birth from '@/components/wode/Message/Birth'
import City from '@/components/wode/Message/City'
import Class from '@/components/wode/Message/Class'

import Vue from 'vue'

    export default Vue.extend({
        name: "Message",
        components:{
            Heads,   // 头像
            Birth,   // 出生日期
            City,   // 所在城市
            Class,   // 年级
        },
        methods: {
            onClickLeft(){
                // 返回上一级
                this.$router.go(-1)
            },
            goNickname(){
                this.$router.push("/Nickname")
            },
            goSex(){
                this.$router.push("/Sex")
            },
            goSubject(){
                this.$router.push("/Subject")
            }
        },
    })
</script>

<style scoped lang="scss"></style>