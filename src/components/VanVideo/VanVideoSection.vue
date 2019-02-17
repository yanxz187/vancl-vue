<template>
  <!-- 中部 -->
  <section>
    <a href="#" v-for="(i,key) in data" :key="key"><img :src="require(`../../assets/img/${i}.jpg`)" alt=""></a>
  </section>
</template>

<script>
    export default {
        name: "VanVideoSection",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/video.css";
</style>
