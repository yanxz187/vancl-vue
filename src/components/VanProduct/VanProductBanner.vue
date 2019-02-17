<template>
  <!-- 轮播图 -->
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(i,key) in data.imgs" :key="key"><a href="#"><img :src="require(`../../assets/img/${i}.jpg`)" alt=""></a></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.css"
    export default {
        name: "VanProductBanner",
      props:["data"],
      mounted() {
         new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
    }
</script>

<style scoped>
  @import "../../assets/css/product.css";
</style>
