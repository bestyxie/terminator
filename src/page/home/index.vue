<template>
  <div id="app" class="main">
    <h1 class="title">话题终结者测试</h1>
    <p>来测测看你是不是话题终结者吧！</p>
    <router-link to="/item" class="start">开始测试</router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: {},
    created(){}
  }
</script>

<style lang="scss">
  .main{
    text-align: center;
    margin-top: 40%;
    overflow: hidden;
    .title{
      font-size: 30px;
    }
    .start{
      color: #fff;
      display: inline-block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 5px;
      text-decoration: none;
    }
  }
</style>
