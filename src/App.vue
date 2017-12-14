<template>
  <div id="app">
	  <mt-header title="聪哥的vue模板">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
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
