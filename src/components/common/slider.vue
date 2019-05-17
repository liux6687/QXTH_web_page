<template>
	<div class="slider">
		<ul class="list">
			<li v-for="(item, index) in list" :class="is_select == index ? 'active' : ''" :key="index" @click="change_select(index)">
				<img :src="is_select == index ? item.img_select : item.img" alt="">
				<span>{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				is_select: 0,
				list: [
					{
						text: "选货",
						img: require("@/assets/slider_icon/selectShop.png"),
						img_select: require("@/assets/slider_icon/selectShop_select.png")
					},
					{
						text: "订单",
						img: require("@/assets/slider_icon/order.png"),
						img_select: require("@/assets/slider_icon/order_select.png")
					},
					{
						text: "钱包",
						img: require("@/assets/slider_icon/wallet.png"),
						img_select: require("@/assets/slider_icon/wallet_select.png")
					},
				],
			}
		},
		methods:{
			change_select(index) {
				this.$data.is_select = index
			}
		}
	}
	
</script>

<style lang="less">
	.slider {
		width: 220px;
		background: #fff;
		padding-top: 55px;
		height: 100%;
		.list {
			li {
				&.active {
					color: #3151ff;
				}
				height: 84px;
				line-height: 84px;
				text-align: center;
				font-family: PingFangSC-Semibold;
				font-size: 20px;
				color: #c8d1db;
				img {
					display: inline-block;
					vertical-align: middle;
					width: 28px;
					height: 30px;
					margin-right: 15px;
				}
			}
		}
	}
</style>
