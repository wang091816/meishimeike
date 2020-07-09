<template>
    <div>
        <div class="title">
            <div class="title_text">特色课</div>
            <div class="title_seach" v-on:click="Screem"><img src="data:image/png;base64,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" alt=""></div>
        </div>
        <!-- 搜索 -->
        <div class="screen">
            <van-dropdown-menu active-color="orange">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value2" :options="option3" />
            </van-dropdown-menu>

        </div>
        <!-- content -->
        <div class="content">
            <div class="content_item" v-for="(item,index) in list" :key="index" v-on:click="click(item)">
                <div class="content_item_text">{{item.title}}</div>
                <div class="content_item_time">
                    <img :src="item.img" alt="">
                    {{item.time}}
                </div>
                <div class="headerImg">
                    <img :src="item.headerImg" alt="">
                    {{item.name}}
                </div>
                <div class="content_item_number">
                    <div>
                        {{item.number}}人已报名
                    </div>
                    <div style="color:orange">
                        ￥{{item.price}}.00
                    </div>
                </div>
            </div>
        </div>
        <div class="blue" v-on:click="hint">
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
    data(){
        return{
            list:[],
               value1: 0,
                value2: 'a',
                option1: [
                    { text: '分类', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 },
                ],
                option2: [
                    { text: '排序', value: 'a' },
                    { text: '综合排序', value: 'b' },
                    { text: '最新', value: 'c' },
                    { text: '最热', value: 'e' },
                    { text: '价格从低到高', value: 'f' },
                    { text: '价格从高到低', value: 'g' },
                ],
                option3: [
                    { text: '筛选', value: 'a' },
                    { text: '好评排序', value: 'b' },
                    { text: '销量排序', value: 'c' },
                ],
        }
    },
    mounted(){
        axios.get("http://localhost:8080/List.json").then((response)=>{
            this.list = response.data
        }).catch((error)=>{
            window.console.log(error)
        })
    },
    methods:{
        Screem(){
            this.$router.push('/screemn')
        },
        click(item){
            this.$router.push({
                name:"Particulars",
                params:{
                    item:item
                }
            })
        },
        hint(){
            this.$router.push("/hint")
        }
    }
}
</script>
<style scoped>
    *{
        /* background-color: white */
    }
    .title{
        width: 100%;
        height: 3rem;
        /* background-color: red; */
        border-bottom: 1px solid #FBFCFC;
        display: inline-flex
    }
    .title_text{
        width: 90%;
        height: 3rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #595959
    }
    .title_seach{
        width: 10%;
        height: 3rem;
        display: inline-flex;
        justify-content: center;
        align-items: center
    }
    .title_seach img{
        width: 50%;
        height: 40%;
    }
    .screen{
        width: 100%;
        height: 3rem;
        /* background-color: orange; */

    }
    .content{
        width: 100%;
        display: inline-flex;
        flex-wrap: wrap
    }
    .content_item{
        width: 100%;
        height: 10.5rem;
        background-color: white;
        margin-bottom: 0.5rem;
        padding: 3%;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center
    }
    .content_item_text{
        width: 100%;
        /* height: 2rem; */
        font-size: 1.2rem;
    }
    .content_item_time{
        width: 100%;
        height: 2rem;
        /* background-color: aliceblue; */
        display: inline-flex;
        align-items: center;
        color: #5F5F5F
    }
    .content_item_time img{
        width: 6%;
        height: 70%;
        margin-right: 1%
    }
    .headerImg{
        width: 100%;
        height: 2.3rem;
        /* background-color: #FBFCFC; */
        display: inline-flex;
        align-items: center;
        color: #8C8C8C;
        border-bottom: 1px solid #F7F7F7;
        padding-bottom: 1%
        
    }
    .headerImg img{
        width: 10%;
        height: 80%;
        margin-right: 2%;
        border-radius: 50%

    }
    .content_item_number{
        width: 100%;
        height: 2rem;
        /* background-color: red; */
        display: inline-flex;
        align-items: center;
        justify-content: space-around
    }
    .blue{
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        position: fixed;
        right: 1.5rem;
        bottom: 5rem;
        background-color: #007AFF;
        background-image: url("https://static.meiqia.com/widget/static/icon-mq-round@2x.png");
        background-position: 4rem;
        /* background-size: 10rem */
    }
    
</style>