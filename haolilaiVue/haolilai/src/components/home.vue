<template>
  <div>
    <header>
      <div>
        <img src="../../static/img/logo.png"/>
        <i class="mui-icon mui-icon-location"></i>
        <span>渭南</span>
      </div>
      <div>
        <span v-show="user == ''">
          <router-link to="/login">
            <a>登录</a>
          </router-link>
          <mark>|</mark>
          <router-link to="/register">
            <a>注册</a>
          </router-link>
        </span>
        <span v-show="user != ''">
          <router-link to="/proson">
            <a>{{ user }}</a>
          </router-link>
        </span>
        <mark>|</mark>
        <a>购物车</a>
      </div>
    </header>
    <!-- 轮播图 -->
    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../static/img/3.jpg">
          </a>
        </div>
        <!-- 第一张 -->
        <div class="mui-slider-item">
          <router-link to="/xiangqing/3">
            <img src="../../static/img/2.jpg">
          </router-link>

        </div>
        <!-- 第二张 -->
        <div class="mui-slider-item">
          <router-link to="/xiangqing/4">
            <img src="../../static/img/3.jpg">
          </router-link>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../static/img/2.jpg">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 输入框 -->
      <router-link to="/search">
        <div class="mui-input-row mui-search">
          <input type="search" class="mui-input-clear mui-active" placeholder="商品搜索：请输入商品关键字">
        </div>
      </router-link>
      <!-- 商品列表 -->
      <div class="goodList">
        <router-link to="/xiangqing/11">
          <img src="../../static/img/7.jpg"/>
          <img src="../../static/img/6.jpg"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        user: '',
        name: 'userTel'
      }
    },
    created() {
      // cookie中取数据
      var arr, reg = new RegExp("(^| )" + this.name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg)) {
        this.user = eval('(' + arr[2] + ')');
        return true;
      } else {
        return false;
      }
    }
  }
</script>

<style scoped>
  header div {
    display: inline-block;
    vertical-align: text-bottom;
    color: dodgerblue;
  }

  header div i {
    width: 1.5rem;
    height: 1.5rem;
  }

  header div:nth-child(1) {
    float: left;
    padding-left: 10px;
    padding-top: 6px;
  }

  header div:nth-child(2) {
    float: right;
    padding: 30px 20px 10px 9px;
  }

  header img {
    width: 100px;
  }

  header div mark {
    width: 1px;
    height: 100%;
    background: #fff;
    color: dodgerblue;
  }

  header div a:nth-child(3):after {
    display: none;
  }

  .content {
    padding: 15px;
  }

  .content input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
  }

  .goodList img {
    width: 100%;
  }
</style>
