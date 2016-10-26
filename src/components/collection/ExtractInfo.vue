<template>
	<div class="extra-info">
		<div class="hot-button"></div>
		<dl class="news-panel">
			<dt class="news-title">快报</dt>
			<dd class="news-info">[公告]活动开始了</dd>
			<dd class="news-info">[公告]活动开始了</dd>
			<dd class="news-info">[公告]活动开始了</dd>
			<dd class="news-info">[公告]活动开始了</dd>
		</dl>
		<div class="shortcut-panel">
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
			<shortcut />
		</div>
	</div>
</template>
<script type="text/javascript">
	import Shortcut from './Shortcut'
	export default {
		components: {
			Shortcut
		}
	}
</script>
<style type="text/css">
	.hot-button {
		width: 160px;
		height: 40px;
		background: url("../../assets/hot.png");
	}

	.news-panel {
		border: 1px dotted #E8E8E7;
		font-size: 14px;
		margin-top: 5px;
	}

	.news-title {
		border-bottom: 1px dotted #E8E8E7;
		font-size: 16px;
		margin: 5px;
	}

	.news-info {
		margin: 10px 5px;
	}

	
</style>