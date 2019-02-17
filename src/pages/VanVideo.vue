<template>
  <div class="van-video">
    <header>频道</header>
    <van-video-section v-if="videodata" :data="videodata"></van-video-section>
  </div>
</template>

<script>
    import VanVideoSection from "@/components/VanVideo/VanVideoSection";
    export default {
        name: "VanVideo",
      components: {VanVideoSection},
      data() {
        return {
          videodata: []
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
          this.$axios.get('/data/videodata')
            .then((res) => {
              // console.log(res.data);
              this.videodata = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/video.css";
</style>
