<template>
  <div>
    <header>
      <router-link to="/" style="color: #fff;">
        <i class="mui-icon mui-icon-arrowleft"></i>
      </router-link>
      <p>会员中心</p>
    </header>
    <div class="z-img">
      <img src="../../static/img/0000.png"/>
      <p v-show="user == ''">^-^</p>
      <p v-show="user != ''">{{ user }}</p>
    </div>
    <div id="dingdan">
      <div class="fenlei">
        <div>
          <span>0</span>
          <p>未完成</p>
        </div>
        <div>
          <span>0</span>
          <p>已完成</p>
        </div>
        <div>
          <span>100</span>
          <p>积分</p>
        </div>
      </div>
      <div class="dingdan">
        <div>
          <p>全部订单</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>收藏夹</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>我的优惠券</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>收货地址薄</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>我的亲友</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>修改密码</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>更换手机号</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>编辑个人信息</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div>
          <p>投诉|建议</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
        <div v-on:click="clearUser">
          <p>退出</p>
          <i class="mui-icon mui-icon-arrowright"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "proson",
    data() {
      return {
        user: '',
        name: 'userTel'
      }
    },
    methods: {
      // 获取cookie里的数据
      getCookie:function () {
        var arr, reg = new RegExp("(^| )" + this.name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
          this.user = eval('(' + arr[2] + ')');
          return true;
        } else {
          return false;
        }
      },
      clearUser:function() {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.getCookie();
        // if (cval != null) {
        //   document.cookie = this.name + "=" + cval + ";expires=" + exp.toGMTString();
        //   this.$router.push({ path: '/' });
        // }
        if (cval) {
          document.cookie = this.name + "=" + cval + ";expires=" + exp.toGMTString();
          this.$router.push({ path: '/' });
        }
      }
    },
    created() {
      this.getCookie()
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    height: 80px;
    color: #fff;
    background: dodgerblue;
    text-align: center;
    line-height: 80px !important;
  }

  header i {
    float: left;
    font-size: 40px !important;
    line-height: 80px !important;
  }

  header p {
    display: inline-block;
    font-size: 25px;
    color: #fff;
  }

  .z-img {
    padding: 2rem 0;
    background: #eee;
  }

  .z-img img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  .z-img p {
    color: #000;
  }

  #dingdan .fenlei {
    width: 100%;
    border-bottom: 1px solid #eee;
    text-align: center;
    padding-top: 10px;
    font-size: 0;
  }

  #dingdan .fenlei div {
    width: 33%;
    display: inline-block;
    border-right: 1px solid #eee;
    font-size: 16px;
  }

  #dingdan .fenlei div:nth-child(3) {
    border-right: 0;
  }

  #dingdan .dingdan {
    padding: 0 10px;
    padding-bottom: 50px;
    text-align: left;
  }

  #dingdan .dingdan div {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    line-height: 50%;
    color: #333;
  }

  #dingdan .dingdan div p,
  #dingdan .dingdan div i {
    display: inline-block;
  }

  #dingdan .dingdan div p {
    padding: 0;
    margin: 0;
  }

  #dingdan .dingdan div i {
    float: right;
  }
</style>
