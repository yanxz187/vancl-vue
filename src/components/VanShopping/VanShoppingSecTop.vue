<template>
  <div class="sec_top">
    <div class="top_left">
      <input type="checkbox" class="quanxuan" v-model="data.state" @change="productChecked(data.state)">
      <span>在售</span>
    </div>
    <div class="top_right">
      <span class="remove">删除</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanShoppingSecTop",
      props:["data"],
      methods:{
        productChecked(checked){
          this.$emit("checked",checked);
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/shopping.css";
</style>
