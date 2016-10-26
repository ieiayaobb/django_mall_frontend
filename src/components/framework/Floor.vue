<template>
	<div>
		<div class="clear-float">
			<div class="title">
				<i></i>
				<span>居家生活</span>
			</div>
			<floor-menu class="menu" />
		</div>
		<left-small-floor v-if="isLeftSmall" class="container clear-float" />
		<left-standard-floor v-if="isLeftStandard" class="container clear-float" />
		<center-standard-floor v-if="isCenterStandard" class="container clear-float" />
		<floor-footer class="footer" />
	</div>
</template>
<script type="text/javascript">
	import FloorMenu from '../collection/FloorMenu'
	import FloorFooter from '../collection/FloorFooter'
	import LeftSmallFloor from '../collection/floor/LeftSmallFloor'
	import LeftStandardFloor from '../collection/floor/LeftStandardFloor'
	import CenterStandardFloor from '../collection/floor/CenterStandardFloor'
	export default {
		props: ['type'],
		components: {
			FloorMenu, FloorFooter, LeftSmallFloor
		},
		computed: {
			isLeftSmall: function() {
				return this.type == 'left-small'
			},
			isLeftStandard: function() {
				return this.type == 'left-standard'
			},
			isCenterStandard: function() {
				return this.type == 'center-standard'
			}
		}
	}
</script>
<style type="text/css">
	.title {
		float: left;
	}

	.menu {
		float: right;
	}

	.footer {
		float: left;
	}

	.container {

	}
</style>