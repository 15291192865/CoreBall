<template>
  <div>
    <!-- 头部 -->
    <header>
      <div v-on:click="showAll">
        <span>和风软点</span>
        <i class="mui-icon mui-icon-arrowdown"></i>
        <div v-show="all">全部</div>
      </div>
      <div v-on:click="showRank">
        <span>排序</span>
        <i class="mui-icon mui-icon-arrowdown"></i>
        <div v-show="rank">价格</div>
      </div>
    </header>
    <!-- 内容 -->
    <div class="content">
      <div v-for="good in goods">
        <router-link v-bind:to="'/xiangqing/' + good.ID">
          <img v-bind:src=" '../../static' + (good.img.slice(2)) "/>
          <p>{{ good.intro }}</p>
          <mark>￥{{ good.price }}</mark>
          <i class="mui-icon mui-icon-plusempty"></i>
        </router-link>
      </div>
      <!--<div>-->
      <!--<img src="../../static/img/4.jpg"/>-->
      <!--<p>巧克力口味半熟芝士</p>-->
      <!--<mark>￥40.00</mark>-->
      <!--<i class="mui-icon mui-icon-plusempty"></i>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "goods",
    data() {
      return {
        goods: '',
        all: false,
        rank: false
      }
    },
    methods: {
      showAll: function () {
        if (this.all == true) {
          this.all = false;
        } else {
          this.all = true;
        }
      },
      showRank: function () {
        if (this.rank == true) {
          this.rank = false;
        } else {
          this.rank = true;
        }
      }
    },
    created() {
      let data = new URLSearchParams();
      data.append('type', 'select');
      // http://localhost/haolilaiVue/haolilai/static/php/goodlistControl.php
      axios({
        method: 'post',
        url: 'http://localhost/haolilaiVue/haolilai/static/php/goodlistControl.php',
        data: data
      }).then((res) => {
        this.goods = res.data.data;
        // console.log(res.data.data);
      })
    }
  }
</script>

<style scoped>
  header {
    font-size: 0;
  }

  header div {
    width: 50%;
    font-size: 1rem;
    text-align: center;
    height: 4rem;
    line-height: 4rem;
    display: inline-block;
    border-bottom: 1px solid #999;
    position: relative;
  }

  header div div {
    width: 100%;
    position: absolute;
    left: 0;
    top: 4rem;
    background: #fff;
  }

  .content {
    padding: 15px;
    width: 100%;
    font-size: 0;
    padding-bottom: 3rem;
    text-align: left;
  }

  .content div {
    display: inline-block;
    width: -webkit-calc(50% - 10px);
    width: -moz-calc(50% - 10px);
    width: calc(50% - 10px);
    margin: 15px 0;
  }

  .content div:nth-child(2n) {
    margin-left: 20px;
  }

  .content div img {
    width: 100%;
    margin-bottom: 0.8rem;
  }

  .content div p {
    font-size: 1rem;
  }

  .content div mark {
    display: inline-block;
    background: #fff;
    color: darkslateblue;
    font-size: 1.2rem;
  }

  .content div i {
    display: inline-block;
    float: right;
    width: 1.2rem;
    height: 1.2rem;
    background: deepskyblue;
    border-radius: 50%;
    font-size: 1.2rem;
    color: #fff;
  }
</style>
