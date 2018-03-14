<template>
  <div>
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/" class="mui-tab-item">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link to="/goods" class="mui-tab-item">
          <span class="mui-icon mui-icon-list"></span>
          <span class="mui-tab-label">商品</span>
      </router-link>

      <router-link to="/proson" class="mui-tab-item">
          <span class="mui-icon mui-icon-person"></span>
          <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
  nav{
    background: #fff;
  }
</style>
