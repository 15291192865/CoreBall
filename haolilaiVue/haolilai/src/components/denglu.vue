<template>
  <div class="aaa">
    <div>
      <input type="text" id="tel" placeholder="手机/邮箱">
      <input type="password" id="pswd" placeholder="输入密码">
      <div class="tishi"></div>

      <button v-on:click="loginBtn">登录</button>
      <div>
        <a>忘记密码</a>
        <router-link to="/zhuce">
          <a>立即注册</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
    export default {
        name: "denglu",
      data() {
        return {
          tel:'',
          pswd:''
        }
      },
      methods: {
        loginBtn:function() {
          this.tel = $('#tel').val();
          this.pswd = $('#pswd').val();
          // http://localhost/haolilaiVue/haolilai/static/php/usercControl.php
          let data = new URLSearchParams();
          data.append('type','login');
          data.append('tel',this.tel);
          data.append('password',this.pswd);
          axios({
            method: 'post',
            url: 'http://localhost/haolilaiVue/haolilai/static/php/usercControl.php',
            data: data
          }).then((res) => {
            if(res.data.status == 0) {
              $('.tishi').text(res.data.message);
            } else {
              document.cookie = 'userTel=' + JSON.stringify(this.tel);
              this.$router.push('/');
            }
          })
        }
      }
    }
</script>

<style scoped>
  .aaa {
    padding-bottom: 27rem;
  }

  div {
    padding: 20px 10px 0 10px;
  }

  div input {
    width: 100%;
    border-radius: 10px !important;
  }

  button {
    width: 100%;
    font-size: 18px;
    background: yellow;
  }

  div div a {
    text-decoration: none;
    color: #333;
  }

  div div a:nth-child(2) {
    float: right;
  }

  div .tishi {
    color: red;
    padding: 0;
  }

  div div a:nth-child(1) {
    float: left;
  }
</style>
