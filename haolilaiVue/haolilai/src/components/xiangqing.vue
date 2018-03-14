<template>
  <div>
    <div class="shangpin">
      <router-link to="/goods">
        <i class="mui-icon mui-icon-arrowleft"></i>
      </router-link>
      <h4>商品详情</h4>
      <img v-bind:src="'../../static' + imgurl" alt="" />
      <p>{{ intro }}</p>
      <mark>￥{{ price }}元</mark>
      <div>
        <button>加入购物车</button>
        <button>立即购买</button>
      </div>
      <div class="img">
        <img src="../../static/img/g1.jpg" alt=""/>
        <img src="../../static/img/g2.jpg" alt=""/>
        <img src="../../static/img/g3.jpg" alt=""/>
        <img src="../../static/img/g4.jpg" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "xiangqing",
    data() {
      return {
        imgurl:'',
        intro:'',
        price:''
      }
    },
    created() {
      let thisId = this.$route.params.id;
      let data = new URLSearchParams();
      data.append('type','select');
      // http://localhost/haolilaiVue/haolilai/static/php/goodlistControl.php
      axios({
        method: 'post',
        url: 'http://localhost/haolilaiVue/haolilai/static/php/goodlistControl.php',
        data: data
      }).then((res) => {
        for(let item of res.data.data) {
          if(thisId == item.ID) {
            this.imgurl = item.img.slice(2);
            this.intro = item.intro;
            this.price = item.price;
          }
        }
      })
    }
  }
</script>

<style scoped>
  div .shangpin{
    margin-bottom: 50px;
  }
  div div i{
    vertical-align: middle;
    float: left;
    font-size: 2rem;
    padding: 0.5rem 0 0 0;
  }
  div div h4{
    text-align: center;
    margin: 0;
    background: #eee;
    padding: 15px 0;
    /*margin: 10px;*/
    margin-bottom: 10px;
    color: #444;
    vertical-align: middle;
  }
  div div img {
    width: 95%;
    margin: 10px;
    margin-bottom: 0;
  }
  div div p {
    padding: 10px;
    margin: 0;
    text-align: left;
  }
  div div mark {
    width: 100%;
    background: #fff;
    padding: 10px;
    color: dodgerblue;
    border-bottom: 1px solid #999;
    display: block;
    padding-top: 0;
    text-align: left;
  }
  div div .img{
    font-size: 0;
    margin-top: 25px;
  }
  div div .img img{
    width: 95%;
    padding: 0;
    margin-top: -11px;
  }
  div div div {
    width: 100%;
  }
  div div div button {
    margin: 10px;
    width: 95%;
  }
  div div div button:nth-child(2) {
    background: yellow;
  }
</style>
