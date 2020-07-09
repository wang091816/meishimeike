<template>
    <div class="div1">
        <div class="div2">
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item> <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg" alt="" class="img1"></van-swipe-item>
            <van-swipe-item> <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg" alt="" class="img1"></van-swipe-item>
            <van-swipe-item> <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg" alt="" class="img1"></van-swipe-item>
            <van-swipe-item> <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg" alt="" class="img1"></van-swipe-item>
        </van-swipe>
        </div>
         <div class="div3">
             <router-link to="Kecheng" class="rou1">
                          <div class="div4">
                  <img src="../assets/img/111.png" alt="" class="img2">
                  <p>特色课</p>
              </div>
             </router-link>
               <router-link to="Yuduiyifudao" class="rou1">
                          <div class="div4">
                  <img src="../assets/img/222.png" alt="" class="img2">
                  <p>一对一辅导</p>
              </div>
             </router-link>
               <router-link to="Xuexirili" class="rou1">
                          <div class="div4">
                  <img src="../assets/img/333.png" alt="" class="img2">
                  <p>学习日历</p>
              </div>
             </router-link>
         </div>
         <div class="div5">
             <div class="div5-1"></div>
             <b><div class="p1"><span>名师阵容</span></div></b>
         </div>
         <router-link to="Jiangshixingqing">
                 <div class="div6">
                 <img src="../assets/img/A_03.jpg" alt="" class="img3">
                 <div class="div6-1">这里是名字</div>
              <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         <router-link to="Jiangshixingqing">
                 <div class="div6">
                 <img src="../assets/img/A_03.jpg" alt="" class="img3">
                 <div class="div6-1">这里是名字</div>
              <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         <router-link to="Jiangshixingqing">
                 <div class="div6">
                 <img src="../assets/img/A_03.jpg" alt="" class="img3">
                 <div class="div6-1">这里是名字</div>
              <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         <router-link to="Jiangshixingqing">
                 <div class="div6">
                 <img src="../assets/img/A_03.jpg" alt="" class="img3">
                 <div class="div6-1">这里是名字</div>
              <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
          <div class="div5">
             <div class="div5-1"></div>
             <b><div class="p1"><span>精品课程</span></div></b>
         </div>
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
        
         
         
         <div class="div5">
             <div class="div5-1"></div>
             <b><div class="p1"><span>推荐讲师</span></div></b>
         </div>
         <router-link :to="{name:'Particulars',params:{item:this.list}}">
              <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
          <router-link :to="{name:'Particulars',params:{item:this.list}}">
              <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         <router-link :to="{name:'Particulars',params:{item:this.list}}">
              <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         <router-link :to="{name:'Particulars',params:{item:this.list}}">
              <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         </router-link>
         
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import axios from 'axios'
    export default Vue.extend({
        data(){
            return{
              list:{}
            }
        },
       mounted(){
           axios.get('http://localhost:8080/List.json').then((item)=>{
                        this.list=item.data[0]
           })
       }
    })
</script>

<style scoped >
  .div2{
      width: 100%;
      height: 13rem;
  }
  .img1{
      width: 100%;
      height: 13rem;
  }
  .div3{
      display: flex;
      justify-content:space-around;
      align-items: center;
      width: 100%;
      height: 6rem;
      position: relative;
      margin-top:-1rem; 
  }
  .rou1{
      display: flex;
      justify-content:space-around;
      align-items: center;
      width: 28%;
      height: 6rem;
      position: relative;
      margin-top:-3rem; 
       background: white
  }
  .div4{
      border-radius:10%; 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column; 
  }
  .img2{
      width: 1.3rem;
      height: 1.2rem;
  }
  .div5-1{
      margin-left: 1rem;
      width: 0.2rem;
      height: 1rem;
      background: red;
  }
  .p1{
      position: relative;
      margin-top: -1rem;
      margin-left: 1.3rem;
  }
  .div6{
      margin-left: 1rem;
      margin-top:0.5rem; 
      width: 90%;
      height: 5rem;
      background: white;
  }
  .img3{
      width: 2rem;
      height: 2rem;
      border-radius:50%;  
      margin-left:1.5rem;
      margin-top:1.5rem;  
  }
  .div6-1{
      margin-left:5rem;
      margin-top:-2rem;  
  }
  .div6-2{
       margin-left:6rem;
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