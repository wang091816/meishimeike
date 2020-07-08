<template>
    <div>
        <div class="title">
            <div class="title_text">
                给我们留言
            </div>
            <div class="title_img" v-on:click="back">
                ﹀
            </div>
        </div>
        <div class="text">
            您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题
        </div>
        <p style="padding-left:4%">手机</p>
        <div class="input">
            请输入
        </div>
        <p style="padding-left:4%;margin-top:4%">留言内容</p>
        <div class="input">
            请输入
        </div>
        <div class="shift">
            提交
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .title{
        width: 100%;
        height: 4rem;
        background-color: #007AFF;
        display: inline-flex;
        justify-content: space-between
    }
    .title_text{
        width: 20%;
        height: 4rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white
    }
    .title_img{
        width: 10%;
        height: 4rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: white;
        /* background-color: red */
    }
    .text{
        width: 100%;
        padding: 3%
    }
    .input{
        width: 99%;
        height: 2.5rem;
        background-color: white;
        border: 1%;
        display: inline-flex;
        align-items: center;
        color: #c2c2c2;
        margin-top: 2%
    }
    .shift{
        width: 90%;
        height: 3rem;
        background-color: #007AFF;
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        margin-top: 5%;
        font-size: 1.2rem
    }
</style>