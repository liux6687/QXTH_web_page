<template>
	<div class="home">
		<div class="header_box">
			<my_Header></my_Header>
		</div>
		<div class="main clearfix">
			<div class="slider_box fl">
				<my_Slider></my_Slider>
			</div>
			<div class="content fl">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import my_Header from '@/components/common/header';
	import my_Slider from '@/components/common/slider';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			my_Header,
			my_Slider
		}
	}
</script>
<style lang="less">
	.home {
		height: 100%;
		.main {
			height: 100%;
			.slider_box {
				height: 100%;
			}
			.content {
				width: calc(100% - 220px);
				padding-left: 26px;
			}
		}
	}
</style>
