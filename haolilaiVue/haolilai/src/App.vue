<template>
  <div id="app">
    <!-- 引入组件  导航 -->
    <navbar/>

    <!-- 引入路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  background: #fff;
}
</style>
