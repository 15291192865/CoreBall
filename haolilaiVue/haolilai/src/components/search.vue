<template>
  <div class="search">
    <!-- 搜索 -->
    <div class="mui-input-row mui-search">
      <input type="search" class="mui-input-clear mui-active" placeholder="商品搜索：请输入商品关键字" v-model="search">
    </div>
    <div class="content">
      <div v-for="good in searchResult">
        <router-link v-bind:to="'/xiangqing/' + good.ID">
          <img v-bind:src=" '../../static' + (good.img.slice(2)) "/>
          <p>{{ good.intro }}</p>
          <mark>￥{{ good.price }}</mark>
          <i class="mui-icon mui-icon-plusempty"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "search",
    data() {
      return {
        goods:[],
        search:''
      }
    },
    computed: {
      searchResult: function() {
        // 过滤，并将新的数组返回
        let resultArr = this.goods.filter((item) => {
          return item.intro.match(this.search);
        });
        return resultArr;
      }
    },
    created() {
      // 请求数据
      let data = new URLSearchParams();
      data.append('type', 'select');
      // http://localhost/haolilaiVue/haolilai/static/php/usercControl.php
      axios({
        method: 'post',
        url: 'http://localhost/haolilaiVue/haolilai/static/php/goodlistControl.php',
        data: data
      }).then((res) => {
        this.goods = res.data.data;
      })
    },
    directives: {

    }
  }
</script>

<style scoped>
  .search {
    padding: 20px 10px 33rem 10px;
  }
  .content {
    padding: 0 15px 1rem 15px;
    width: 100%;
    font-size: 0;
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
