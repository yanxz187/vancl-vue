<template>
  <li>
    <img v-for="(i,key) in data" :key="key" :src="require(`../../assets/img/${i}.jpg`)" alt="">
  </li>
</template>

<script>
    export default {
        name: "VanProductSecBottomOne",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/product.css";
  img{
    width:100%;
  }
</style>
