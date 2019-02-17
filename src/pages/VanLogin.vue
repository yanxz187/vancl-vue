<template>
  <div class="van-login">
    <!-- 头部 -->
    <header>
      <div class="header_top">
        <a href="/#/vanmy">取消</a>
        <p>登录</p>
      </div>
      <div class="header_bottom">
        <ul>
          <li v-for="(i,key) in loginData" :key="key" :class="{focus:index===key}" @click="isIndex(key)">{{i.loginmethod}}</li>
        </ul>
      </div>
    </header>
    <!-- 中部 -->
    <section>
      <div class="ptlogin" v-for="(i,key) in loginData" :key="key" :class="{show:index===key}">
        <h4>凡客</h4>
        <form action="">
          <div class="info">
            <input type="text" class="username" :placeholder="i.zhanghao">
            <input type="password"  class="userps" :placeholder="i.mima">
            <input type="button" class="btn" :value="i.getyzm">
          </div>
          <input type="submit" value="登录" class="sub">
        </form>
        <p>
          <a href="/#/reg">快速注册</a>
          <a href="#">手机找回密码&gt;</a>
        </p>
      </div>
    </section>
    <!-- 尾部 -->
    <footer>
      <div class="title">
        <div class="xian"></div>
        <p>使用其他账号</p>
        <div class="xian"></div>
      </div>
      <div class="bottom">
        <a href="#"><img src="../assets/img/weixin.png" alt=""></a>
        <a href="#"><img src="../assets/img/qq.png" alt=""></a>
        <a href="#"><img src="../assets/img/weibo.png" alt=""></a>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "Vanlogin",
      data(){
          return{
            index:0,
            loginData:[
              {
                "loginmethod":"普通登录",
                "zhanghao":"账号（邮箱或手机号）",
                "mima":"密码"
              },{
                "loginmethod":"验证码登录",
                "zhanghao":"请输入您的手机号",
                "mima":"短信验证码",
                "getyzm":"获取短信验证码"
              }
            ]
          }
      },
      methods:{
        isIndex(key){
          this.index = key;
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/login.css";
  .van-login{
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
