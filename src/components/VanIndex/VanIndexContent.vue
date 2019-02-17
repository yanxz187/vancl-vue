<template>
    <div class="content">
      <van-index-content-banner v-if="data.banner" :data="data.banner"></van-index-content-banner>
      <van-index-content-nav :data="data.nav"></van-index-content-nav>
      <van-index-content-miaosha :data="data.miaosha"></van-index-content-miaosha>
      <van-index-content-section :data="data.section"></van-index-content-section>
    </div>
</template>

<script>
    import VanIndexContentBanner from "./VanIndexContentBanner";
    import VanIndexContentNav from "./VanIndexContentNav";
    import VanIndexContentMiaosha from "./VanIndexContentMiaosha";
    import VanIndexContentSection from "./VanIndexContentSection";
    export default {
      name: "VanIndexContent",
      props:["data"],
      components: {VanIndexContentSection, VanIndexContentMiaosha, VanIndexContentNav, VanIndexContentBanner}
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
