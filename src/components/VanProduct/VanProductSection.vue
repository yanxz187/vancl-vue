<template>
  <!-- 商品详情 评论 提问 -->
  <section>
    <ul class="sec_top">
      <li :class="{focus:index===key}" v-for="(i,key) in data.sectop" :key="key" @click="isIndex(key)">{{i}}</li>
    </ul>
    <ul class="sec_bottom">
      <li :is="flag" :data="data.secbottom[index]"></li>
    </ul>
  </section>
</template>

<script>
    import VanProductSecBottomOne from "@/components/VanProduct/VanProductSecBottomOne";
    import VanProductSecBottomTwo from "@/components/VanProduct/VanProductSecBottomTwo";
    import VanProductSecBottomThree from "@/components/VanProduct/VanProductSecBottomThree";
    export default {
        name: "VanProductSection",
      components: {VanProductSecBottomThree, VanProductSecBottomTwo, VanProductSecBottomOne},
      props:["data"],
      data(){
          return{
            index:0,
            flag:"VanProductSecBottomOne"
          }
      },
      methods:{
        isIndex(key){
          this.index = key;
          this.flag = key;
          if(this.flag === 0){
            this.flag = VanProductSecBottomOne
          }else if(this.flag === 1){
            this.flag = VanProductSecBottomTwo
          }else if(this.flag === 2){
            this.flag = VanProductSecBottomThree
          }
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/product.css";
</style>
