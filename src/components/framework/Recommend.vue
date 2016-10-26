<template>
	<div>
		<div class="recommend-title">
			<h4>猜你喜欢</h4>
		</div>
		<el-row>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		  <el-col :span="4">
		  	<standard-item />
		  </el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import StandardItem from '../collection/item/StandardItem'

	export default {
		components: {
			StandardItem
		}
	}
</script>
<style type="text/css">
	.recommend-title {
		font-size: 24px;
	}
</style>