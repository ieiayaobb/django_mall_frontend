<template>
	<div class="shopcart-wrapper">
		<el-dropdown>
		  <el-badge :value="3" class="item">
			  <el-button type="primary">
			    购物车
			    <i class="el-icon-caret-bottom el-icon-right"></i>
			  </el-button>
			</el-badge>
		  <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item>黄金糕</el-dropdown-item>
		    <el-dropdown-item>狮子头</el-dropdown-item>
		    <el-dropdown-item>螺蛳粉</el-dropdown-item>
		    <el-dropdown-item>双皮奶</el-dropdown-item>
		    <el-dropdown-item>蚵仔煎</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css">
	.shopcart-wrapper {
		float: right;
		margin: 10px 50px 0 0;
	}
</style>