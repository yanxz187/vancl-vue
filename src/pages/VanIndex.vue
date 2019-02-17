<template>
    <div class="van-index">
      <van-index-header></van-index-header>
      <van-index-content v-if="indexdata" :data="indexdata"></van-index-content>
    </div>
</template>

<script>
    import VanIndexHeader from "../components/VanIndex/VanIndexHeader";
    import VanIndexContent from "../components/VanIndex/VanIndexContent";
    export default {
      name: "VanIndex",
      components: {VanIndexContent, VanIndexHeader},
      data(){
        return{
          indexdata:[]
        }
      },
      created() {
        this._initData()
      },
      methods:{
        /**
         * 初始化页面
         * @private
         */
        _initData(){
          this.$axios.get('/data/indexdata')
            .then((res)=>{
              // console.log(res.data);
              this.indexdata = res.data;
            })
            .catch((err)=>{
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  .van-index{
    background: #f2f2f2;
  }
</style>
