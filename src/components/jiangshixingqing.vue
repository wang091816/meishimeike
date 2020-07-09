<template>
    <div class="div1">
         <div class="div2">
              <p class="div2-p1">讲师详情</p>
         </div>
         <div class="div3">
            <img src="../assets/img/A_03.jpg" alt="" class="img1">
            <div class="div3-1">这里是名字</div>
            <div class="div3-2">这里是简述</div>
            <div class="div3-3">关注</div>
         </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>
  .div2{
      width: 100%;
      height: 6rem;
      background: blue;
  }
  .div2-p1{
      position: absolute;
      color: white;
      font-size: 1.2rem;
      margin-left:40%; 
      margin-top: 0.5rem;
  }
  .div3{
      border-radius:5%; 
      background: white;
      width: 90%;
      height: 6rem;
      margin-top:-3rem;
      margin-left: 5%;
  }
  .img1{
      width: 2rem;
      height: 2rem;
      border-radius:50%;  
      margin-left:1.5rem;
      margin-top:1.5rem;  
  }
  .div3-1{
      margin-left:5rem;
      margin-top:-2rem;  
  }
  .div3-2{
       margin-left:5rem;
  }
  .div3-3{
      position: absolute;
      margin-left: 16rem;
      margin-top: -2.5rem;
      display: flex;
      justify-content:space-around;
      align-items: center;
      width: 4rem;
      height: 2rem;
     background: lightblue;
     border-radius: 40%;
     color: red;
  }
</style>