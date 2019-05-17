<template>
	<div class="header clearfix">
		<div class="logo_box fl">
			<img src="@/assets/logo.png" alt="">
		</div>
		<div class="header_search fl">
			  <Input prefix="ios-search" placeholder="NIKE AIR" clearable/>
		</div>
		<div class="right_box fr">
			<img src="@/assets/order.png" alt="">
			<div class="user fr">
				<img class="portrait" src="@/assets/logo.png" alt="">
				<span class="user-name">Leslie</span>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.header {
		background: #fff;
		border-bottom: 2px solid #eaedf6;
		height: 120px;
		line-height: 120px;                                    
		img {
			vertical-align: middle;
		}
		.logo_box {
			margin: 0 130px 0 80px; 
		}
		.header_search {
			width: 500px;
		}
		.right_box {
			margin-right: 100px;
			width: 200px;
			img.portrait {
				width: 46px;
				height: 46px;
			}
			.user-name {
				margin-left: 23px;
				font-family: PingFangSC-Regular;
				font-size: 17px;
				color: #646464;
			}
		}
	}
</style>
