<template>
    <section>
      <ul class="ul_left">
        <li v-for="(i,key) in data.leftTitle" :key="key" @click="isActive(key)" :class="{focus:key===index}">{{i}}</li>
      </ul>
      <ul class="ul_right">
        <li v-if="data.right">
          <a href="#" v-for="(i,key) in data.right[index]" :key="key"><img :src="require(`../../assets/img/${i.img}.jpg`)" alt=""><span>{{i.title}}</span></a>
        </li>
      </ul>
    </section>
</template>

<script>
     export default {
        name: "VanSortSection",
       props:["data"],
      data(){
        return {
          index:0
        }
      },
      methods:{
        isActive(key){
          this.index = key;
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/sort.css";
</style>
