<script>
export default {
	onLaunch() {
		console.log('App Launch')
	},

	async onShow() {
		await this.$store.dispatch('getHeader')
	},
	onHide() {}
}
</script>

<style>
/*每个页面公共css */
</style>
