<template>
	<el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove">
    	<el-tab-pane label="热门"></el-tab-pane>
    	<el-tab-pane label="国际大牌"></el-tab-pane>
    	<el-tab-pane label="男装"></el-tab-pane>
    	<el-tab-pane label="女装"></el-tab-pane>
	</el-tabs>
</template>
<script type="text/javascript">
	export default {
		methods: {
			handleRemove(tab) {
				console.log(tab);
			},
			handleClick(tab) {
				console.log(tab);
			}
		}
	}
</script>
<style type="text/css">
	
</style>