<template>
	<div>
		<div class="floor-info">
		
		</div>
		<div class="floor-items">
			<el-row>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			</el-row>
			<el-row>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			  <el-col :span="6">
			  	<standard-item />
			  </el-col>
			</el-row>
		</div>
	</div>
</template>
<script type="text/javascript">
	import StandardItem from '../../collection/item/StandardItem'

	export default {
		components: {
			StandardItem
		}
	}
</script>
<style type="text/css">
	.floor-info {
		float: left;
		width: 200px;
		height: 300px;
	}

	.floor-items {
		width: 75%;
		float: left;
	}
</style>