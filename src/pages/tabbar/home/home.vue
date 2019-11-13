<template>
	<view>
		<navbar-tabs :tabsList="tabsList" :page="page" :activeIndex="activeIndex" @tabsClickItem="tabsClickItem"></navbar-tabs>
	</view>
</template>

<script>
export default {
	props: {
		navigationBarTextStyle: {
			type: String,
			defalut: '首页'
		}
	},
	data() {
		return {
			activeIndex: 0,
			page: 3,
			tabsList: [
				{
					title: '待审批'
				},
				{
					title: '已批准'
				},
				{
					title: '已失效'
				}
			],
			data: {},
			params: {}
		}
	},
	onLoad() {},
	onShow() {},
	onHide() {
		this.data = {}
	},
	onTabItemTap(item) {
		console.log(item, this.$store)
	},
	methods: {
		tabsClickItem(item) {
			this.activeIndex = item.index
		},
		getList() {}
	}
}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
