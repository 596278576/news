<template>
  <div id="app">
    <router-link :to="{path: '/index'}">首页</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/1'>手机</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/2'>电脑</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to='/product/3'>服装</router-link>
    <!-- <a href="#/index">首页</a> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
#app{
  background-color: pink;
}
</style>
