<template>
  <div class="bottom">
    <p>还差{{199 - data}}元免运费</p>
    <div class="xuangou"><a href="#">去选购&gt;</a></div>
  </div>
</template>

<script>
    export default {
        name: "VanShoppingShoppingListBottomthree",
      props:["data"]
    }
</script>

<style scoped>
  .bottom{
    display:flex;
    line-height: .27rem;
    background: #a92e2a;
    justify-content: space-between;
  }
  p{
    font-size: 12px;
    color:#fff;
    margin-left:.21rem;
  }
  .xuangou a{
    display: block;
    font-size: 12px;
    color:#fff;
    margin-right:.21rem;
  }
</style>
