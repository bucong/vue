<template>
  <div class="hello">
    <img src="src/assets/images/logo.png">
    <h1>{{ msg }}</h1>
    <mt-swipe class="swip" :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
    <button @click="showToast">点我</button>
  </div>
</template>

<script>
import { Toast, Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome'
    }
  },
  methods:{
  	showToast: function(){
  		Toast({
			  message: '提示',
			  position: 'bottom',
			  duration: 5000
			});
  	}
  },
  mounted:function(){
  	//这里使用jQuery
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
	text-align: center;
	h1, h2 {
	  font-weight: normal;
	  color: red;
	}
}
.swip{
	height: 200px;
	background: yellow;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
