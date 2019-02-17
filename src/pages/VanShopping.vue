<template>
  <div class="van-shopping">
    <header>购物车</header>
    <section>
      <van-shopping-sec-top v-if="shoppingdata" :data="shoppingdata" @checked="resetProductChecked"></van-shopping-sec-top>
      <div id="shopping-list">
        <van-shopping-shopping-list v-if="shoppingdata.productList" :data="shoppingdata.productList" @minusEvent="receiveminus" @addEvent="receiveadd" @singleChecked="singleChecked"></van-shopping-shopping-list>
        <div :is="flag" v-if="shoppingdata.money" :data="shoppingdata.money.totalmoney"></div>
      </div>
      <van-shopping-sec-bottom v-if="shoppingdata.money" :data="shoppingdata.money"></van-shopping-sec-bottom>
    </section>
  </div>
</template>

<script>
    import VanShoppingSecTop from "@/components/VanShopping/VanShoppingSecTop";
    import VanShoppingShoppingList from "@/components/VanShopping/VanShoppingShoppingList";
    import VanShoppingSecBottom from "@/components/VanShopping/VanShoppingSecBottom";
    import VanShoppingShoppingListBottomone from "@/components/VanShopping/VanShoppingShoppingListBottomone";
    import VanShoppingShoppingListBottomtwo from "@/components/VanShopping/VanShoppingShoppingListBottomtwo";
    import VanShoppingShoppingListBottomthree from "@/components/VanShopping/VanShoppingShoppingListBottomthree";
    export default {
        name: "VanShopping",
      components: {VanShoppingSecBottom,
        VanShoppingShoppingList,
        VanShoppingSecTop,
        VanShoppingShoppingListBottomone,
        VanShoppingShoppingListBottomtwo,
        VanShoppingShoppingListBottomthree
      },
      data(){
        return{
          shoppingdata:{},
          flag:"VanShoppingShoppingListBottomone"
        }
      },
      created() {
        this._initData()
      },
      watch:{
        shoppingdata:{
          handler(n,o){
            this._countPrice(n.productList);
            this._countNum(n.productList);
            this._isFlag();
          },
          deep:true
        }
      },
      methods:{
        /**
         * 初始化页面
         * @private
         */
        _initData(){
          this.$axios.get('/data/shoppingdata')
            .then((res)=>{
              this.shoppingdata = res.data;
            })
            .catch((err)=>{
              console.log(err);
            });
        },
        /**
         * 统计总支付价格
         * @param products
         * @private
         */
        _countPrice(products){
          let totalPrice = 0;
          products.forEach((product,index)=>{
            if(product.state) {
              totalPrice += product.newprice * product.num
            }
          });
          this.shoppingdata.money.totalmoney = totalPrice;
          this.shoppingdata.money.needmoney = totalPrice;
        },
        /**
         * 统计总支付数量
         * @param products
         * @private
         */
        _countNum(products){
          let totalNum = 0;
          products.forEach((product,index)=>{
            if(product.state) {
              totalNum += product.num;
            }
          });
          this.shoppingdata.money.totalnum = totalNum;
        },
        /**
         * 重置每个商品的选中状态（全选）
         * @param checked
         */
        resetProductChecked(checked){
          // console.log(checked);
          this.shoppingdata.productList.forEach((product,index)=>{
            product.state = checked
          })
        },
        /**
         * 每个商品的选中状态发生变化时，改变全选的状态（反选）
         * @param pid
         */
        singleChecked(pid){
          let checked = this.shoppingdata.productList[pid].state;
          let checkedArr = [];
          if(!checked){
            this.shoppingdata.state = checked
          }else{
            this.shoppingdata.productList.forEach((product,index)=>{
              if(product.state){
                checkedArr.push(product)
              }
            });
            // console.log(checkedArr.length);
            if(checkedArr.length === this.shoppingdata.productList.length){
              // console.log(checkedArr.length);
              this.shoppingdata.state = true;
            }
          }
        },
        /**
         *根据商品编号，减少数量，改变总价格，改变总数量
         * @param pid
         */
        receiveminus(pid){
          if(this.shoppingdata.productList[pid].num === 1){
            this.shoppingdata.productList[pid].num = 1
          }else{
            this.shoppingdata.productList[pid].num --;
          }
          this.shoppingdata.productList[pid].state = true;
        },
        /**
         *根据商品编号，增加数量，改变总价格，改变总数量
         * @param pid
         */
        receiveadd(pid){
          this.shoppingdata.productList[pid].num ++;
          this.shoppingdata.productList[pid].state = true;
        },
        /**
         * 根据总价与199之间的关系，判断显示哪个底部组件
         * @private
         */
        _isFlag(){
          if( 199 - this.shoppingdata.money.totalmoney <= 0){
            this.flag = "VanShoppingShoppingListBottomone"
          }else if( 199 - this.shoppingdata.money.totalmoney === 199){
            this.flag = "VanShoppingShoppingListBottomtwo"
          }else if(199 - this.shoppingdata.money.totalmoney > 0 && 199 - this.shoppingdata.money.totalmoney < 199){
            this.flag = "VanShoppingShoppingListBottomthree"
          }
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/shopping.css";
  .van-shopping{
    height:100%;
  }
</style>
