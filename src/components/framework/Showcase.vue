<template>
	<div>
		<side-menu />
		<navigator />
		<carousel />
		<shortcutPanel />
	</div>
</template>
<script type="text/javascript">
	import SideMenu from '../collection/SideMenu'
	import Navigator from '../collection/Navigator'
	import Carousel from '../collection/Carousel'
	import ShortcutPanel from '../collection/ShortcutPanel'

	export default {
		components: {
			SideMenu, Navigator, Carousel, ShortcutPanel
		}
	}
</script>
<style type="text/css"></style>