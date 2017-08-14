<template>
  <div id="app">
    <h2>Live Stocks</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EEEEEE;
  margin:0;
  padding:24px;
  color:#42A5F5;  
  
}
</style>
