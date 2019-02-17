<template>
  <div class="sec_bottom">
    <div class="money">
      <p class="zhifu">需支付:¥<span>{{data.needmoney}}.00</span></p>
      <p class="zonge">总额:¥<span>{{data.totalmoney}}.00</span></p>
    </div>
    <div class="jiesuan">
      去结算(<span>{{data.totalnum}}</span>)
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanShoppingSecBottom",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/shopping.css";
</style>
