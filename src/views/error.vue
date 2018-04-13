<template>
  <div class="error">
	  <img src="static/img/error.jpg" alt="" />
	  <div>
	  	<span>Error</span>
	  	<router-link to="/">返回首页</router-link>
	  	<p>{{msg}}</p>
	  </div>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      msg: '对不起，您访问的页面没找到！'
    }
  },
  methods:{
  	
  },
  mounted:function(){
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error{
	padding: 1rem 0;
	text-align: center;
	span{
		font-size: .6rem;
		color: #80c26a;
		padding-right: .6rem;
	}
	a{
		font-size: .4rem;
		color: #551a8b;
	}
	p{
		font-size: .36rem;
		margin-top: .6rem;
	}
}
img{
	width: 100%;
}
</style>
