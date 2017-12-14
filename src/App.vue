<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  name: 'app'
}
</script>

<style>
body{
	margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
.mint-header{
	background: #41b883;
}
</style>
