<template>
  <div>
    <router-view></router-view>
    <!-- 尾部 -->
    <footer>
      <router-link to="/" exact-active-class="linka" class="one"></router-link>
      <router-link to="/vansort" exact-active-class="linkb" class="two"></router-link>
      <router-link to="/vanvideo" exact-active-class="linkc" class="three"></router-link>
      <router-link to="/vanshopping" exact-active-class="linkd" class="four"></router-link>
      <router-link to="/vanmy" exact-active-class="linke" class="five"></router-link>
    </footer>
  </div>

</template>

<script>
    export default {
        name: "VanIndexFooter"
    }
</script>

<style scoped>
  /* 尾部 */
  footer{
    width:100%;
    height:.49rem;
    background: #fff;
    position: fixed;
    bottom:0;
    border-top:1px solid #8c8d8e;
    display: -webkit-flex;
  }
  footer a{
    display: block;
    -webkit-flex:1;
    width: .36rem;
    height: .48rem;
    margin:0 auto;
    background: url(../assets/img/navBgimgNew.png) no-repeat;
    background-size: 48%;
  }
  footer .one{
    background-position: center 0rem;
  }
  footer .linka{
     background-position: center -2.4rem;
   }
  footer .two{
    background-position: center -0.48rem;
  }
  footer  .linkb{
     background-position:center -2.88rem;
   }
  footer .three{
    background-position: center -0.97rem;
  }
  footer  .linkc{
    background-position: center -3.37rem;
  }
  footer .four{
    background-position: center -1.44rem;
  }
  footer  .linkd{
    background-position: center -3.84rem;
  }
  footer .five{
    background-position: center -1.92rem;
  }
  footer  .linke{
    background-position: center -4.32rem;
  }
</style>

