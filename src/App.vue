<script>
import api from './api'
export default {
	onLaunch: function() {
		console.log('App Launch')
	},

	onShow: function() {
		// console.log('App Show')
		api.getList().then(
			res => {
				uni.setStorage({
					key: 'header',
					data: res.header
				})
			},
			err => {
				console.log(['err', err])
			}
		)
	},
	onHide: function() {
		uni.removeStorage({ key: 'header' })
	}
}
</script>

<style>
/*每个页面公共css */
</style>
