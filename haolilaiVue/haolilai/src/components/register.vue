<template>
  <div>
    <div class="register">
      <!-- 手机号 -->
      <div>
        <input v-model="phone" v-validate="'required|max:11|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" name="phone" class="layui-input" placeholder="手机号">
        <span v-show="errors.has('phone')" v-cloak> {{ errors.first('phone') }} </span>
      </div>
      <!-- 手机号验证码 -->
      <div>
        <input v-model="telphone" v-validate="'required|max:6|telphone'" :class="{'input': true, 'is-danger': errors.has('telphone') }" type="text" name="telphone" class="layui-input" placeholder="手机号验证码">
        <span v-show="errors.has('telphone')" v-cloak> {{ errors.first('telphone') }} </span>
      </div>
      <!-- 密码 -->
      <div>
        <input v-model="password" v-validate="'required|max:18|password'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" name="password" class="layui-input" placeholder="密码">
        <span v-show="errors.has('password')" v-cloak> {{ errors.first('password') }} </span>
      </div>
      <!-- 确认密码 -->
      <div>
        <input v-model="passwordtwo" v-validate="'required|max:18|passwordtwo'" :class="{'input': true, 'is-danger': errors.has('passwordtwo') }" type="password" name="passwordtwo" class="layui-input" placeholder="密码">
        <span v-show="errors.has('passwordtwo')" v-cloak> {{ errors.first('passwordtwo') }} </span>
      </div>
      <!-- 注册 -->
      <button v-on:click="registerBtn">注册</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "register",
      data() {
        return {
          password:'',
          phone: '',
          telphone: '',
          passwordtwo: ''
        }
      },
      methods:{
        registerBtn:function() {
          this.$validator.validateAll().then((result) => {
            if (result) {
              if(this.password == this.passwordtwo) {
                let data = new URLSearchParams();
                data.append('type', 'zhuce');
                data.append('tel', this.phone);
                data.append('password', this.password);
                // http://localhost/haolilaiVue/haolilai/static/php/usercControl.php
                axios({
                  method: 'post',
                  url: 'http://localhost/haolilaiVue/haolilai/static/php/usercControl.php',
                  data: data
                }).then((res) => {
                  this.$router.push({ path: '/login' });
                })
              } else {
                alert('请输入相同的密码');
              }
            }
          });
        }
      }
    }
</script>

<style scoped>
  .register{
    padding: 20px 10px 21rem 10px;
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
</style>
