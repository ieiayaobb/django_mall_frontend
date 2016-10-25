<template>
	<div>
		<div class="logo">
		</div>
		<search />
		
		<shopcart />
	</div>
</template>
<script type="text/javascript">
	import Shopcart from '../collection/Shopcart'
	import Search from '../collection/Search'
	export default {
		components: {
			Search,
			Shopcart
		}
	}

</script>
<style type="text/css">
	.logo {
		display: inline-block;
		width: 270px;
		height: 60px;
		background: url('../../assets/logo.png');
	}

	.search {
		display: inline-block;
	}
</style>