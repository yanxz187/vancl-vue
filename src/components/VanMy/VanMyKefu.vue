<template>
  <!-- 在线客服 -->
  <div class="kefu">
    <div class="dingdan_bottom">
      <a href="#" v-for="(i,key) in data" :key="key"><img :src="require(`../../assets/img/${i.img}.png`)" alt=""><span>{{i.title}}</span></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanMyKefu",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/my.css";
</style>
