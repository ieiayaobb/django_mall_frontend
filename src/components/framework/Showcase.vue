<template>
	<div>
		<el-row>
		  <el-col :span="4">
		  	<category-menu />
		  </el-col>
		  <el-col :span="15">
		  	<navigator />
		  	<carousel />
		  </el-col>
		  <el-col :span="5">
		  	<extract-info />
		  </el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	import CategoryMenu from '../collection/CategoryMenu'
	import Navigator from '../collection/Navigator'
	import Carousel from '../collection/Carousel'
	import ExtractInfo from '../collection/ExtractInfo'

	export default {
		components: {
			CategoryMenu, Navigator, Carousel, ExtractInfo
		}
	}
</script>
<style type="text/css"></style>