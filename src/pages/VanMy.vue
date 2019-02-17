<template>
  <div class="van-my">
    <van-my-header></van-my-header>
    <van-my-ding-dan v-if="mydata.dingdan" :data="mydata.dingdan"></van-my-ding-dan>
    <van-my-fuwu v-if="mydata.fuwu" :data="mydata.fuwu"></van-my-fuwu>
    <van-my-kefu v-if="mydata.kefu" :data="mydata.kefu"></van-my-kefu>
  </div>
</template>

<script>
    import VanMyHeader from "@/components/VanMy/VanMyHeader";
    import VanMyDingDan from "@/components/VanMy/VanMyDingdan";
    import VanMyFuwu from "@/components/VanMy/VanMyFuwu";
    import VanMyKefu from "@/components/VanMy/VanMyKefu";
    export default {
        name: "VanMy",
      components: {VanMyKefu, VanMyFuwu, VanMyDingDan, VanMyHeader},
      data() {
        return {
          mydata: []
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
          this.$axios.get('/data/mydata')
            .then((res) => {
              // console.log(res.data);
              this.mydata = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>

</style>
