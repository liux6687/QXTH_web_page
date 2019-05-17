<template>
	<div class="selectShop clearfix">
		<div class="left fl">
			<div class="nav">
				
			</div>
			<shopCard></shopCard>
		</div>
		<div class="right fr">
			
		</div>
	</div>
</template>

<script>
	import shopCard from '@/components/selectShop/shopCard';
	export default {
		data() {
			return {
				
			}
		},
		components:{
			shopCard
		}
	}
</script>

<style lang="less">
	.selectShop {
		.left {
			width: calc(100% - 434px);
		}
		.right {
			width: 370px;
			height: 200px;
			background: #fff;
		}
	}
</style>
