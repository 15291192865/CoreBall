<template>
  <div class="aaa">
    <div>
      <p>
        <input type="text" id="tel" placeholder="手机号" v-on:blur="changeTel">
      </p>
      <div class="oneDiv"></div>
      <p>
        <input type="text" id="duanxin" placeholder="短信验证码6位" v-on:blur="changeYanzheng">
        <span class="duanxin">获取短信验证码</span>
      </p>
      <div class="threeDiv"></div>
      <p>
        <input type="password" id="onePswd" placeholder="密码" v-on:blur="changePassword">
      </p>
      <p>
        <input type="password" id="twoPswd" placeholder="确认密码" v-on:blur="changePswd">
      </p>
      <div class="fourDiv"></div>
      <button @click="btn">注册</button>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'

  export default {
    name: "zhuce",
    data() {
      return {}
    },
    methods: {
      // 手机号的验证
      changeTel: function () {
        this.telphon();
        console.log(this.telphon(), 1);
      },
      telphon: function () {
        let reg1 = /^[1][3,4,5,7,8][0-9]{9}$/; // 手机号的正则
        if ($('#tel').val() == '' || !reg1.test($('#tel').val())) {
          $('.oneDiv').text('请输入正确的手机号');
          return false;
        } else {
          $('.oneDiv').text('');
          return true;
        }
      },
      // 短信验证码
      changeYanzheng: function () {
        this.duanxin();
        console.log(this.duanxin(), 2)
      },
      duanxin: function () {
        let reg3 = /^[0-9]{6}$/; // 短信验证码 6位任意数字
        if ($('#duanxin').val() == '' || !reg3.test($('#duanxin').val())) {
          $('div .threeDiv').text('短信验证码不正确');
          return false;
        } else {
          $('div .threeDiv').text('');
          return true;
        }
      },
      // 密码验证
      changePassword: function () {
        this.onepswd();
        console.log(this.onepswd(), 3)
      },
      onepswd: function () {
        let reg2 = /[0-9a-zA-Z_\S]{6,18}/; // 密码的正则 数字字母下划线
        if ($('#onePswd').val() == '' || !reg2.test($('#onePswd').val())) {
          $('div .oneDiv').text('请输入正确的手机号');
          return false;
        } else {
          $('div .oneDiv').text('');
          return true;
        }
      },
      // 二次判断密码
      changePswd: function () {
        this.twopswd();
        console.log(this.twopswd(),4);
      },
      twopswd: function () {
        if ($('#twoPswd').val() == '' || $('#twoPswd').val() != $('#onePswd').val()) {
          $('div .fourDiv').text('请输入相同的密码');
          return false;
        } else {
          $('div .fourDiv').text('');
          return true;
        }
      },
      // 注册的点击事件
      btn:function() {
        if(this.telphon() == true && this.duanxin() == true && this.onepswd() == true && this.twopswd() == true) {
          let data = new URLSearchParams();
          data.append('type', 'zhuce');
          data.append('tel', $('#tel').val());
          data.append('password', $('#onePswd').val());
          // http://localhost/haolilaiVue/haolilai/static/php/usercControl.php
          axios({
            method: 'post',
            url: 'http://localhost/haolilaiVue/haolilai/static/php/usercControl.php',
            data: data
          }).then((res) => {
            this.$router.push({ path:'/login' });
          })
        }
      }
    }
  }
</script>

<style scoped>
  .aaa {
    padding-bottom: 20rem;
  }

  div div {
    padding: 20px 10px 0 10px;
  }

  div div p {
    padding: 0;
    margin: 0;
    position: relative;
  }

  div div input {
    width: 100%;
    border-radius: 10px !important;
  }

  div div span {
    display: inline-block;
    position: absolute;
    right: 7px;
    font-size: 18px;
    height: 25px;
    line-height: 25px;
  }

  div div .duanxin {
    background: cornflowerblue;
    top: 7px;
    color: #000;
    padding: 0 5px;
  }

  div div button {
    width: 100%;
    background: yellow;
    font-size: 18px;
  }

  div div div {
    color: red;
    padding: 0;
  }
</style>
