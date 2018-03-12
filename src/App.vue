<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {

  }

</script>

<style lang="scss">
  html,body{
    width: 100%;
    height: 100%;
  }
  body{
    color: #fff;
    background: url("./images/timg.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .container{
    overflow: hidden;
  }
</style>
