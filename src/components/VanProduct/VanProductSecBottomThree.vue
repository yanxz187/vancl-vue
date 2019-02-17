<template>
  <li>
    <h4 class="tw">我要提问</h4>
    <textarea style="width:3.55rem;height:1rem;resize: none;" placeholder="请输入您的问题，字数在60字以内"></textarea>
    <input type="button" value="提交" class="btn">
    <ul class="tiwen">
      <li v-for="(i,key) in data" :key="key">
        <p>{{i.content}}</p>
        <p>{{i.user}}</p>
        <p>{{i.hufu}}</p>
        <p>{{i.time}}</p>
      </li>
    </ul>
  </li>
</template>

<script>
    export default {
        name: "VanProductSecBottomThree",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/product.css";
</style>
