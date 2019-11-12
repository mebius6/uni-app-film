<template>
	<view class="content">
		连续剧
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
	methods: {
		goToPage(url) {
			if (!url) return
			uni.navigateTo({
				url
			})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
