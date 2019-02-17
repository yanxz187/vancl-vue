<template>
  <div class="van-reg">
    <!-- 头部 -->
    <header>
      <div class="header_top">
        <a href="/#/vanmy">取消</a>
        <p>注册</p>
      </div>
    </header>
    <!-- 注册信息 -->
    <section>
      <div class="ptlogin">
        <h4>凡客</h4>
        <form action="">
          <div class="info">
            <input type="text" class="username" placeholder="请输入您的手机号码">
            <input type="text" class="yzm" placeholder="请输入验证码">
            <input type="button" class="btn" value="获取验证码">
            <input type="password" class="userps ps_one" placeholder="密码：6-16位字母、数字、特殊字符">
            <input type="password" class="userps ps_two" placeholder="再次输入密码">
          </div>
          <p>注册账号即表示同意遵守《VANCL凡客诚品服务条款》</p>
          <input type="submit" value="注册" class="sub">
        </form>
        <p>
          <a href="/#/login">去登录</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "VanReg"
    }
</script>

<style scoped>
  @import "../assets/css/reg.css";
</style>
