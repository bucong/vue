<template>
  <div class="home">
    <h5>{{ msg }}</h5>
    <mt-swipe class="swip" :auto="4000">
		  <mt-swipe-item><img src="static/img/swip1.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="static/img/swip2.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="static/img/swip3.jpg"/></mt-swipe-item>
		</mt-swipe>
    <router-link to="/love" class="a">Our love ...</router-link>
    <mt-button plain type="primary" size="normal" @click="showToast">想对你说</mt-button>
  </div>
</template>

<script>
import { Toast, Swipe, SwipeItem,Button } from 'mint-ui';
export default {
  name: 'home',
  data () {
    return {
      msg: '欢迎来到聪哥的模板！'
    }
  },
  methods:{
  	showToast: function(){
  		Toast({
			  message: '老婆，么么哒',
			  position: 'bottom',
			  duration: 4000
			});
  	}
  },
  mounted:function(){
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
	text-align: center;
}
h5{
	font-size: .5rem;
	margin: .6rem 0;
}
.swip{
	height: 4.6rem;
	margin-bottom: .4rem;
	img{
		width: 100%;
		height: 100%;
	}
}
a{
	display: block;
	margin: .4rem;
	border: .01rem solid #ddd;
	line-height: .6rem;
}
</style>
