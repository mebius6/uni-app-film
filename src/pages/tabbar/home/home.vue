<template>
	<view class="content">
		页面 - 1
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: {}
		}
	},
	onLoad() {
		try {
			this.data = uni.getStorage('home').data.find(v => v.content === '首页')
		} catch (error) {
			console.log(error)
		}
	},
	onShow() {},
	onHide: function() {
		this.data = {}
	},
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
