<template>
	<view class="content">
		页面 - 2
	</view>
</template>

<script>
export default {
	data() {
		return {
			active: false
		}
	},
	onLoad() {},
	onTabItemTap(item) {
		console.log(item)
	},
	methods: {}
}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
