<template>
  <!-- 日式免烫 全新上线 -->
  <section>
    <p class="title">
      <img src="../../assets/img/2018_1_10_14_54_45_8302_26x26.jpg" alt="">日式免烫 全新上线
    </p>
    <div class="show" v-for="i in data">
      <div class="show_top">
        <a href="#">
          <img :src="require(`../../assets/img/${i.bigimg}.jpg`)" alt="">
          <span></span>
        </a>
      </div>
      <div class="show_bottom">
        <div class="bottom_con" v-for="j in i.details">
          <a href="/#/product"><img :src="require(`../../assets/img/${j.img}.jpg`)" alt=""></a>
          <h4>{{j.title}}</h4>
          <h5>售价：¥ {{j.oldprice}}</h5>
          <p>充值相当于：<span>¥ {{j.newprice}}</span></p>
        </div>
        <div class="bottom_con">
          <a href="#" class="gengduo">
            <span>查看更多</span>
            <span>View More</span>
            <img src="../../assets/img/more.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "VanIndexContentSection",
      props:["data"]
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
