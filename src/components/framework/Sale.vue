<template>
	<div>
		<div class="sale-logo"></div>
		<el-row class="sale-list">
		  <el-col :span="6">
		  	<image-item />
		  </el-col>
		  <el-col :span="6">
		  	<image-item />
		  </el-col>
		  <el-col :span="6">
		  	<image-item />
		  </el-col>
		  <el-col :span="6">
		  	<image-item />
		  </el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import ImageItem from '../collection/item/ImageItem'

	export default {
		components: {
			ImageItem
		}
	}
</script>
<style type="text/css">
	.sale-logo {
		float: left;
		width: 200px;
		height: 80px;
	}
	.sale-list {
		float: left;
	}
</style>