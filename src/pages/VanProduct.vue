<template>
<div class="van-product">
  <!-- 头部 -->
  <header>
    <a href="/#/"><img src="../assets/img/back.png" alt=""></a>
    <a href="#"><img src="../assets/img/fenxiang.png" alt=""></a>
  </header>
  <div class="box">
    <van-product-banner v-if="productdata.banner" :data="productdata.banner"></van-product-banner>
    <!-- 商品信息 -->
    <div class="info" v-if="productdata.info">
      <p>{{productdata.info.title}}</p>
      <p>充值购买更优惠</p>
      <p>¥ {{productdata.info.newprice}}<span>¥ {{productdata.info.oldprice}}</span></p>
      <div class="size">
        请选择：颜色/尺码/数量 +
      </div>
    </div>
    <!-- 充值活动 -->
    <div class="chongzhi">
      <a href="#">
        <img src="../assets/img/money.png" alt="">
        亲，有充值活动喔
        <span>充100返100</span>
        <img src="../assets/img/swordr_icon.jpg" alt="">
      </a>
    </div>
    <!-- 免运费 -->
    <div class="mianyunfei">
      全场购物满199元免运费
    </div>
    <van-product-section v-if="productdata.section" :data="productdata.section"></van-product-section>
  </div>
  <!-- 尾部 -->
  <footer>
    <div class="foot_son">
      <a href="#">
        <img src="../assets/img/xingxing.png" alt="">
      </a>
      <a href="#">
        <img src="../assets/img/xiaoche.png" alt="">
      </a>
    </div>
    <div class="foot_son">
      <a href="#">加入购物车</a>
    </div>
    <div class="foot_son">
      <a href="#">立即购买</a>
    </div>
  </footer>
</div>
</template>

<script>
    import VanProductBanner from "../components/VanProduct/VanProductBanner";
    import VanProductSection from "../components/VanProduct/VanProductSection";
    export default {
        name: "VanProduct",
      components: {VanProductSection, VanProductBanner},
      data(){
        return{
          productdata:[]
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
          this.$axios.get('/data/productdata')
            .then((res)=>{
              // console.log(res.data);
              this.productdata = res.data;
            })
            .catch((err)=>{
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/product.css";
  .van-product{
    height:100%;
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
  }
</style>
