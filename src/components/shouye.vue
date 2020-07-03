<template>
    <div class="div1">
         <div class="div2"><img src="../assets/img/E17_02.jpg" alt="" class="img1"></div>
         <div class="div3">
              <div class="div4">
                  <img src="../assets/img/A_03.jpg" alt="" class="img2">
                  <p>特色课</p>
              </div>
              <div class="div4">
                  <img src="../assets/img/A_03.jpg" alt="" class="img2">
                  <p>一对一辅导</p>
              </div>
              <div class="div4">
                  <img src="../assets/img/A_03.jpg" alt="" class="img2">
                  <p>学习日历</p>
              </div>
         </div>
         <div class="div5">
             <div class="div5-1"></div>
             <b><div class="p1"><span>名师阵容</span></div></b>
         </div>
         <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         <div class="div6">
            <img src="../assets/img/A_03.jpg" alt="" class="img3">
            <div class="div6-1">这里是名字</div>
            <div class="div6-2">这里是简述</div>
         </div>
         <div class="div5">
             <div class="div5-1"></div>
             <b><div class="p1"><span>精品课程</span></div></b>
         </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        
    })
</script>

<style scoped >
.div1{
   
}
  .div2{
      width: 100%;
      height: 13rem;
  }
  .img1{
      width: 100%;
      height: 100%;
  }
  .div3{
      display: flex;
      justify-content:space-around;
      align-items: center;
      width: 100%;
      height: 8rem;
      position: relative;
      margin-top:-3rem; 
  }
  .div4{
      border-radius:10%; 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: white;
      width: 28%;
      height: 70%;
  }
  .img2{
      width: 20%;
      height: 50%;
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
</style>