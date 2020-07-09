<template>
  <div class="div1">
    <div class="div2">
      <p class="div2-p1">讲师详情</p>
    </div>
    <div class="div3">
      <img src="../assets/img/A_03.jpg" alt="" class="img1" />
      <div class="div3-1">这里是名字</div>
      <div class="div3-2">这里是简述</div>
      <div class="div3-3">关注</div>
    </div>
    <div class="div4">
<van-tabs v-model="active" class="tit">
      <van-tab title="讲师介绍" >
        <p class="div4-p">教学年龄</p><p class="div4-p1">30年</p>
        <p class="div4-p">授课价格</p><p class="div4-p1">400学习币</p>
        <p class="div4-p">老师简介</p><p class="div4-p1">杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。</p>
      </van-tab>
      <van-tab title="主讲课程">
          <router-link :to="{name:'Particulars',params:{item:this.list}}">
             <div class="div7">
            <div class="div7-1">
                <p class="div7-p1">随便写的东西随便写的东西随便写的东西随便写的东西随便写的东西</p>
                <p>共1课时</p>
                <img src="../assets/img/A_03.jpg" alt="" class="img4">
                <p class="div7-p2">这里是名字</p>
                <p class="div7-p3">多少人已经报名</p>
                <p class="div7-p4">免费</p>
            </div>
         </div>
         </router-link>
         <router-link :to="{name:'Particulars',params:{item:this.list}}">
             <div class="div7">
            <div class="div7-1">
                <p class="div7-p1">随便写的东西随便写的东西随便写的东西随便写的东西随便写的东西</p>
                <p>共1课时</p>
                <img src="../assets/img/A_03.jpg" alt="" class="img4">
                <p class="div7-p2">这里是名字</p>
                <p class="div7-p3">多少人已经报名</p>
                <p class="div7-p4">免费</p>
            </div>
         </div>
         </router-link>
         <router-link :to="{name:'Particulars',params:{item:this.list}}">
             <div class="div7">
            <div class="div7-1">
                <p class="div7-p1">随便写的东西随便写的东西随便写的东西随便写的东西随便写的东西</p>
                <p>共1课时</p>
                <img src="../assets/img/A_03.jpg" alt="" class="img4">
                <p class="div7-p2">这里是名字</p>
                <p class="div7-p3">多少人已经报名</p>
                <p class="div7-p4">免费</p>
            </div>
         </div>
         </router-link>
      </van-tab>
      <van-tab title="学员评价"></van-tab>
    </van-tabs>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from 'axios'
export default Vue.extend({
  data() {
    return {
      active: 0,
      list:{},
    };
  },
  mounted(){
           axios.get('http://localhost:8080/List.json').then((item)=>{
                        this.list=item.data[0]
           })
       }
});
</script>

<style scoped>
.div2 {
  width: 100%;
  height: 6rem;
  background: blue;
}
.div2-p1 {
  position: absolute;
  color: white;
  font-size: 1.2rem;
  margin-left: 40%;
  margin-top: 0.5rem;
}
.div3 {
  border-radius: 5%;
  background: white;
  width: 90%;
  height: 6rem;
  margin-top: -3rem;
  margin-left: 5%;
}
.img1 {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
}
.div3-1 {
  margin-left: 5rem;
  margin-top: -2rem;
}
.div3-2 {
  margin-left: 5rem;
}
.div3-3 {
  position: absolute;
  margin-left: 16rem;
  margin-top: -2.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 4rem;
  height: 2rem;
  background: lightblue;
  border-radius: 40%;
  color: red;
}
.div4{
    margin-top:1rem; 
}
.div4-p{
    margin-left: 1.5rem;
    margin-top:2rem; 
    font-size: 1rem;
}
.div4-p1{
    font-size: 1rem;
     margin-left: 8rem;
     margin-top: -1.2rem;
     word-wrap: break-word;
word-break: break-all;
}
.tit{
    background: white;
}
 .div7{
      margin-top: 1rem;
      width: 90%;
      height: 10rem;
      background: white;
      margin-left: 5%;
      border-radius:5%; 
  } 
  .div7-1{
      position: absolute;
      width: 80%;
      margin-left: 5%;
      margin-top: 1rem;
  }
  .div7-p1{
     font-size: 1rem;
  }
  .img4{
     width: 1.5rem;
      height: 1.5rem;
      border-radius:50%;  
      margin-left:0.5rem;
      margin-top:1rem;  
  }
  .div7-p2{
      margin-left: 3rem;
      margin-top: -1.5rem;
      position: relative;
  }
  .div7-p3{
     margin-top: 1rem;
  }
   .div7-p4{
     margin-top: -1rem;
      margin-left: 16rem;
      font-size: 1rem;
      color: lawngreen;
  } 
</style>