<template>
	<div class="search">
		<el-input placeholder="请输入内容" style="width: 600px;">
		  <el-button slot="append" icon="search"></el-button>
		</el-input>
		<ul class="frequency">
			<li v-for="item in items">
				<a href="#">{{ item.keyword }}</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: function() {
			return {
				items: [
					{ keyword: '关键词1'},
					{ keyword: '关键词2'},
					{ keyword: '关键词3'}
				]
			}
		}
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