<template>
	<view class="free-watch-tabs">
		<view class="nav-tabs">
			<view :class="activeIndex===index?'nav-tabs-con nav-tabs-item-active':'nav-tabs-con'" v-for="(item,index) in tabList" :key="item.title" :styles="style" @click="tabsClick">

			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		tabsList: {
			type: Array,
			defalut: []
		},
		page: {
			type: Number,
			defalut: 4
		},
		activeIndex: {
			type: Number,
			defalut: 0
		},
		tabsClickItem: {
			type: Function
		}
	},
	data() {
		return {
			list: [],
			pages: 4,
			active: this.activeIndex
		}
  },
  mounted(){
     this.lineStyleFun(this.active)
  },
	computed: {
		tabList: {
			get() {
				return this.tabsList
			},
			set(val) {
				return val
			}
		}
  },
  
	methods: {
		// 获取tabs文字的宽度和划线left
		widthFun(index) {
			// tabs元素文字的宽度
			// let textWidth = document.querySelectorAll('.nav-tabs-item')[index].offsetWidth

			// 屏幕的宽度
			let clientWidth = document.body.clientWidth
			//下划线宽度
			let textWidth = document.body.clientWidth / 15
			// tabs的Item宽度
			let itemWidth = 100 / this.state.page
			let left =
				itemWidth * index + (itemWidth - (textWidth / clientWidth) * 100) / 2
			return { textWidth, left }
		},
		// 设置tabs下划线样式
		lineStyleFun(index) {
			// tabs宽度
			const style = {
				width: 100 / this.state.page + '%'
			}

			let { textWidth, left } = this.widthFun(index)
			const moveClass = {
				width: textWidth + 'px',
				left: left + '%'
			}
			this.setState({
				style: style,
				moveClass: moveClass
			})
    },
      tabsClick = index => {
    // 获取tabs文字的宽度和划线left
    let { textWidth, left } = this.widthFun(index)
    const moveClass = {
      width: textWidth + 'px',
      left: left + '%'
    }

    this.setState({
      moveClass: moveClass,
      activeIndex: index
    })

    let params = this.state.tabsList[index]
    params['index'] = index
    // 事件
    this.props.tabsClickItem(params)
  }
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/colors.less';
.nav-tabs {
	width: 100%;
	height: 80px;
	background: @mw-white-color;
	display: flex;
	overflow-x: auto;
	font-size: 22px;
	color: rgba(33, 33, 51, 0.8);
	position: relative;
	flex-direction: row;
	border-bottom: 1px solid @mw-gray2-color;
	/* 滚动条整体部分 */
	&::-webkit-scrollbar {
		width: 1px;
		height: 8px;
		background-color: #ffffff;
	}
	/* scroll轨道背景 */
	&::-webkit-scrollbar-track {
		//-webkit-box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		//border-left: 1px solid #cccccc;
		background-color: @mw-gray-color;
	}
	/* 滚动条中能上下移动的小块 */
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		//-webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
		background-color: @mw-orange-color;
	}
	&-con {
		text-align: center;
		flex-shrink: 0;

		.nav-tabs-item {
			line-height: 80px;
		}
	}

	.nav-tabs-item-active {
		font-size: 28px;
		color: @mw-black-color;
	}

	.nav-tabs-move {
		width: 100px;
		height: 5px;
		background-color: @mw-main-color;
		position: absolute;
		left: 0;
		bottom: 0;
		transition: left 0.2s;
	}
}
</style>