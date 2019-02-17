<template>
  <!-- 轮播图 -->
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in data.img"><a href="#"><img :src="require(`../../assets/img/${i}.jpg`)" alt=""></a></div>
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
      name: "VanIndexContentBanner",
      props:["data"],
      mounted() {
        // 轮播图 js
        new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
        });
      }
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
