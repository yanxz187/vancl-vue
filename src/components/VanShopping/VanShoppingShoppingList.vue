<template>
  <ul class="shopping_list">
    <li v-for="(i,key) in data" :key="key" :pid="key">
      <a href="product.html">
        <input type="checkbox" name="" class="checkbox" v-model="i.state" @change="singleCheck(key)">
        <img :src="require(`../../assets/img/${i.img}.jpg`)" alt="">
        <div class="shopping_info">
          <p class="title">{{i.title}}</p>
          <p class="info">颜色：{{i.attr.color}} 尺码：{{i.attr.size}}</p>
          <p class="price">
            <span>特惠</span>
            <span>¥ {{i.newprice}}.00</span>
            <span>¥ {{i.oldprice}}.00</span>
          </p>
        </div>
      </a>
      <p class="count">
        <span @click="minus(key)">-</span>
        <span>{{i.num}}</span>
        <span @click="add(key)">+</span>
      </p>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "VanShoppingShoppingList",
      props:["data"],
      methods:{
        minus(pid){
          this.$emit("singleChecked",pid)
          this.$emit("minusEvent",pid)
        },
        add(pid){
          this.$emit("singleChecked",pid)
          this.$emit("addEvent",pid)
        },
        singleCheck(pid){
          this.$emit("singleChecked",pid)
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/shopping.css";
</style>
