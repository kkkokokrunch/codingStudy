<template>
  <div class="login">
      <h2>登录</h2>
      <div class="login-wrap">
          <p>
              <span>账号</span>
              <input type="text">
          </p>
          <p>
              <span>密码</span>
              <input type="text">
          </p>
          <div class="btn">{{btn}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data() {
        return{
            btn:'登录'
        }
    }
}
</script>

<style scoped>
    .login {
        width: 100%;
    }
    h2 {
        font-size: 20px;
    }
    .login-wrap {
        width: 300px;
        height: 200px;
        background-color: #eeeeee;
        border: 1px solid #aaaaaa;
        border-radius: 5px;
        margin: 0 auto;
    }
</style>