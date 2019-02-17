<template>
  <!-- 导航 -->
  <nav>
    <div class="nav_top">
      <a href="#"><img src="../../assets/img/2018_7_9_14_59_50_8699_678x60.jpg" alt=""></a>
    </div>
    <div class="nav_bottom">
      <a href="#" v-for="i in data"><img :src="require(`../../assets/img/${i.img}.jpg`)" alt=""><span>{{i.title}}</span></a>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "VanIndexContentNav",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
