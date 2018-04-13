<template>
  <div class="love">
	  <mt-header title="聪哥的vue模板">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
    <mt-navbar v-model="selected">
		  <mt-tab-item id="1">我</mt-tab-item>
		  <mt-tab-item id="2">爱</mt-tab-item>
		  <mt-tab-item id="3">你</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <img src="static/img/tab1.jpg"/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <img src="static/img/tab2.jpg"/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <img src="static/img/tab3.jpg"/>
		  </mt-tab-container-item>
		</mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
  name: 'love',
  data () {
    return {
      selected: '1'
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
img{
	width: 100%;
}
</style>
