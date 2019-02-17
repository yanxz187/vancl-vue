<template>
  <li>
    <h4>购买评论({{data.length}})</h4>
    <ul class="pinglun">
      <li v-for="(i,key) in data" :key="key">
        <p>{{i.content}}</p>
        <p>{{i.user}}<span>{{i.time}}</span></p>
      </li>
    </ul>
  </li>
</template>

<script>
    export default {
        name: "VanProductSecBottomTwo",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/product.css";
</style>
