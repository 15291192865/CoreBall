<template>
  <div>
    <div class="login">
      <!-- 手机号 -->
      <div>
        <input v-model="phone" v-validate="'required|max:11|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" name="phone" class="layui-input" placeholder="手机号">
        <span v-show="errors.has('phone')" v-cloak> {{ errors.first('phone') }} </span>
      </div>
      <!-- 密码 -->
      <div>
        <input v-model="password" v-validate="'required|max:18|password'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" name="password" class="layui-input" placeholder="密码">
        <span v-show="errors.has('password')" v-cloak> {{ errors.first('password') }} </span>
      </div>
      <!-- 登录 -->
      <button v-on:click="loginBtn">登录</button>
      <div class="text">
        <a>忘记密码</a>
        <router-link to="/register">
          <a>立即注册</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "login",
    data() {
      return {
        password:'',
        phone: ''
      }
    },
    methods: {
      loginBtn:function(){
        this.$validator.validateAll().then((result) => {
          if(result) {
            // http://localhost/haolilaiVue/haolilai/static/php/usercControl.php
            let data = new URLSearchParams();
            data.append('type','login');
            data.append('tel',this.phone);
            data.append('password',this.password);
            axios({
              method: 'post',
              url: 'http://localhost/haolilaiVue/haolilai/static/php/usercControl.php',
              data: data
            }).then((res) => {
              if(res.data.status == 0) {
                alert(res.data.message);
              } else {
                document.cookie = 'userTel=' + JSON.stringify(this.phone);
                this.$router.push('/');
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login{
    padding: 20px 10px 28rem 10px;
  }
  input{
    border-radius: 0.5rem;
  }
  span{
    color: red;
  }
  button {
    width: 100%;
    font-size: 18px;
    background: yellow;
  }
  .text{
    padding-top: 15px;
  }
  div div div a:nth-child(1) {
    float: left;
  }
  div div div a:nth-child(2) {
    float: right;
  }
</style>
