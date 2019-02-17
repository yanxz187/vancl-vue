<template>
  <!-- 我的订单 -->
  <div class="dingdan">
    <div class="dingdan_tit">
      <p>我的订单</p>
      <a href="#">查看更多&gt;</a>
    </div>
    <div class="dingdan_bottom">
      <a href="#" v-for="(i,key) in data" :key="key"><img :src="require(`../../assets/img/${i.img}.png`)" alt=""><span>{{i.title}}</span></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanMyDingDan",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/my.css";
</style>
