<template>
	<div class="home">
		<div class="header_box">
			<my_Header></my_Header>
		</div>
		<div class="main">
			<div class="slider_box">
				<my_Slider></my_Slider>
			</div>
			<div class="content">
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
		}
	}
</style>
