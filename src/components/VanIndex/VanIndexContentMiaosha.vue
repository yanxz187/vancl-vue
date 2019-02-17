<template>
  <!-- 每日秒杀 -->
  <div class="miaosha">
    <div class="miaosha_top">
      <div class="top_left">
        <span></span>
        <span>每日秒杀</span>
        <span></span>
        <span>23点场</span>
      </div>
      <div class="top_right">
        <span class="shijian">距开始</span>
        <span class="sj">{{shi}}</span>&nbsp;:&nbsp;
        <span class="sj">{{fen}}</span>&nbsp;:&nbsp;
        <span class="sj">{{miao}}</span>
      </div>
    </div>
    <div class="miaosha_con">
      <a href="#" v-for="i in data">
        <img :src="require(`../../assets/img/${i.img}.png`)" alt="">
        <span>
          <span>充值后</span>
          <span>￥{{i.newprice}}</span>
          <span>￥{{i.oldprice}}</span>
        </span>
      </a>
      <a href="#">查看更多</a>
    </div>
    <div class="xian"></div>
    <h3>限时特惠 欲购从速</h3>
  </div>
</template>

<script>
    export default {
      name: "VanIndexContentMiaosha",
      props:["data"],
      data(){
        return{
          shi:0,
          fen:0,
          miao:0
        }
      },
      methods:{
        _daoJiShi(){
          var nowDate = new Date();
          var endDate = new Date(new Date().toLocaleDateString()+" 23:00:00");
          var cha = endDate - nowDate;
          //转化为天，时，分，秒
          var totalSec = parseInt(cha / 1000);
          //60*60*24
          var sec = parseInt(totalSec % 60);
          var min = parseInt(totalSec / 60 % 60);
          var hour = parseInt(totalSec / 3600 % 24);

          this.shi = this._jialing(hour);
          this.fen = this._jialing(min);
          this.miao = this._jialing(sec);
        },
        _jialing(num){
          if(num < 10){
            num = "0" + num;
          }
          return num;
        }
      },
      mounted() {
        this._daoJiShi();
        setInterval(this._daoJiShi,1000);
      }
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
