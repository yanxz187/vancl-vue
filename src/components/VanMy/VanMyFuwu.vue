<template>
  <!-- 我的服务 -->
  <div class="fuwu">
    <div class="dingdan_tit">
      <p>我的服务</p>
    </div>
    <div class="dingdan_bottom" v-for="(i,key) in data" :key="key">
      <a href="#" v-for="(j,key) in i" :key="key"><img :src="require(`../../assets/img/${j.img}.png`)" alt=""><span>{{j.title}}</span><span>{{j.futitle}}</span></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanMyFuwu",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/my.css";
</style>
