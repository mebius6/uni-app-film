<script>
export default {
	onLaunch() {
		console.log('App Launch')
	},

	async onShow() {
		// await this.$store.dispatch('getHeader')
		let res = await this.api.getBtList().catch(err => {
			console.log(['bterr', err])
		})
		console.log(['btres', res])
	},
	onHide() {}
}
</script>

<style>
/*每个页面公共css */
</style>
