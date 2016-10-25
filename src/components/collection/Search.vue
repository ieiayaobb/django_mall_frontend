<template>
	<div class="search">
		<el-input placeholder="请输入内容" style="width: 600px;">
		  <el-button slot="append" icon="search"></el-button>
		</el-input>
		<ul class="frequency">
			<li>
				<a href="#">关键词1</a>
			</li>
			<li>
				<a href="#">关键词2</a>
			</li>
			<li>
				<a href="#">关键词3</a>
			</li>
			<li>
				<a href="#">关键词4</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css">
	.search {
		display: inline-block;
		margin: 10px;
	}

	.frequency>li{
		float:left;
		padding: 2px;
	}
</style>