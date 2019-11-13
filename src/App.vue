<script>
export default {
	onLaunch: function() {
		console.log('App Launch')
	},

	onShow: function() {
		this.$store.dispatch('getHeader')
	},
	onHide: function() {}
}
</script>

<style>
/*每个页面公共css */
</style>
