<template>
  <div class="van-sort">
    <header>分类</header>
    <van-sort-section v-if="sortdata" :data="sortdata"></van-sort-section>
  </div>
</template>

<script>
    import VanSortSection from "@/components/VanSort/VanSortSection";
    export default {
      name: "VanSort",
      components: {VanSortSection},
      data() {
        return {
          sortdata: []
        }
      },
      created() {
        this._initData()
      },
      methods: {
        /**
         * 初始化页面
         * @private
         */
        _initData() {
          this.$axios.get('/data/sortdata')
            .then((res) => {
              // console.log(res.data);
              this.sortdata = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/sort.css";
  .van-sort{
    height:100%;
  }
</style>
