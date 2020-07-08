<template>
    <div>
        <div class="screen">
            <div class="screen_goback" v-on:click="GoBack">
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
            </div>
            <!-- 搜索 -->
            <div class="screen_input">
                <form action="/">
                    <van-search
                        v-model="value"
                        show-action
                        placeholder="请输入搜索关键词"
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                </form>    
            </div>
        </div>
        <!-- 搜索历史 -->
        <div class="screen_history">
            <p>历史搜索</p>
            <div class="screen_history_img" v-on:click="pop">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAAAqJJREFUWAntWb+PEkEUdvcO+Cso7vxxZ4gdtZEQAiQWWnj+BxdbvdLicsUVl3DGv+Ou0EaBRGK0prtQKNJQQ2ezuwp+j+Ntls3MMO4MZ0xmE/Jm3nzve49vZmfZwbulec3n861ut3sE+AHaD2DzmqErMM/zIjiuYC/z+XyrUqn8WgFIOp7Ev+JeFvkJ9tHKgGEHxX4tFApVnWJ9nVykpO0iKS84HwZBQLO09tpei7gGHDAOKrwuFoutUqkUsu9vbL/fz00mk5co8mwZ9wyW21IqLUVBSmtycZkUSQTlcjkCx9trtoWqMTf7RFarUATGN05WJZPJUxwxdxKTbusWmo678b7X6/Vuh2FIa7CgyH6cGDtJtE2aupwBtrELr9PpDLEG75hk3HQsbuAf/83Ub+dyuYbG1G9aNBV/gBovVAA3lkUB6bO+3W7v+b7/dDabvWs2m99E5LRjRFH0BFPzvlqtjrJi8IguIvYx8n2o1WpjEY/qEfoRRe7ijjtE4K4oGEV2aMeAfYHxu1kx4Ojicx/5voNjT8SjuusXxYFgRxRIPioyaUU4HQzi9pex94AXzrKqUFHef+ZzhdqW3inqFLWtgG0+t0adorYVsM3n1qhT1LYCtvlM1yifP7EV1cdjbEWYtT6jQvHqcI43gJ/4tGSZdDCy2KRf+GuaAHhnmjMQ70xSHGNMLA5BZvzLvtFo+PjicW7mNVKUSW7CukJtq6xSNOBkw+FQddLHsEyWTqB5fWJtRqL1ScSqQq8482g0OhoMBloHrhyjY4lzOp0mz/DjnOl41QEEHUyVKQDf+HQ8Hp9iJ0jHG/XBmY6XHoZJFcU28QbT8DnNtMH+F/yVcy7jV+6PUHILe9wrFPwc7cx/gsmSwx+Cm6b7sl6vt9D+LcP+AZp39kJf+YeiAAAAAElFTkSuQmCC" alt="">
            </div>
        </div>
        <div class="history_content">
            <div class="history_content_item" v-for="(item,index) in history" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Search } from 'vant';
import { Toast } from 'vant';

Vue.use(Search);
export default {
     data() {
        return {
            value: '',
            history:[]
        };
  },
    methods:{
        GoBack(){
            this.$router.go(-1)
        },
        onSearch(val) {
            Toast(val);
            // this.history.push(val)
            if(this.history.length < 3){
                this.history.push(val)
            }else if(this.history.length >= 3){
                this.history.pop(1)
                this.history.unshift(val)
            }
        },
        onCancel() {
            Toast('取消');
        },
        pop(){
            this.history = []
        }
    }
}
</script>
<style scoped>
    .screen{
        width: 100%;
        height: 3.4rem;
        background-color: white;
        display: inline-flex;
        align-items: center;
        justify-content: space-around;
        /* flex-wrap: wrap */
    }
    .screen_goback img{
        width: 70%;
        height: 50%
    }
    .screen_goback{
        width: 6%;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: white;

    }
    .screen_input{
        width: 94%;
        height: 100%;
    }
    .screen_history{
        width: 100%;
        height: 3rem;
        display: inline-flex;
        justify-content: space-between;
        padding: 5%;
        background-color: white;
        align-items: center
    }
    .screen_history p{
        font-size: 1.2rem;
        /* padding: 2% */
    }
    .screen_history_img{
        width: 10%;
        height: 3rem;
        /* background-color: red; */
        display: inline-flex;
        align-items: center;
        justify-content: center;

    }
    .screen_history_img img{
        width: 50%;
        height: 40%;
    }
    .history_content{
        width: 100%;
        height: 39.2rem;
        background-color: white;
        display: inline-flex;
        flex-wrap: wrap;
        padding-top: 1rem;
        padding-left: 3%
    }
    .history_content_item{
        font-size: 1rem;
        padding: 1%;
        height: 2rem;
        background-color: #F7F7F7;
        border-radius: 20%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-right: 3%
    }
</style>