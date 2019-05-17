<template>
  <div id="container">
    <div class="right">
      <div>
        <img src="../assets/logo/logo.png" alt="自动改价" class="logo-img">
        <img src="../assets/logo/font.png" alt="球鞋" class="font-img">
      </div>
      <div class="ch-box">
        <img src="../assets/logo/ch.png" alt="自动改价" class="ch-img">
      </div>
      <div class="icons">
        <img src="..//assets/logo/footer.png" alt="自动改价" class="foonter-img">
      </div>
    </div>
    <div class="left">
      <div class="box">
        <p>请使用小程序扫码登录</p>
        <img src="../assets/logo/wechat.jpg" alt class="wechat-img">
        <div class="wechat-box">
          <img src="../assets/logo/wechat.png" alt class="wechat-img-2">
          <span>点击查看小程序二维码</span>
        </div>
        <span class="sj">-- 仅供商家使用 --</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#container {
  * {
    box-sizing: border-box;
  }
  display: flex;
  background-image: url(../assets/logo/bg.png);
  img {
	vertical-align: middle;
	max-width: 100%;
  }
  .right {
    flex: 0 1 65%;
    padding-top: 60px;
    padding-left: 138px;
    position: relative;

	.ch-box {
		height: 74%;
		display: flex;
		align-items: center;
	}
    .logo-img {
      margin-left: 44px;
	  margin-right: 8px;
	  width: calc(100% - 598px);
	  min-width: 50px;
	  max-width: 60px;
	}
	.font-img {
	  width: calc(100% - 143px);
	  max-width: 516px;
	  min-width: 200px;
	}

    .ch-img {
      margin-top: 40px;
    }

    .foonter-img {
      padding-left: 12%;
      padding-top: 58px;
    }
  }

  .left {
    flex: 0 1 35%;
    display: flex;
    align-items: center;
    .box {
	  width: 80%;
	  max-width: 424px;
      height: auto;
      background-color: #fff;
      text-align: center;
	  padding-bottom: 56px;
	  margin-left: 20px;;
      p {
        color: #45536b;
        font-size: 22px;
        height: 152px;
        line-height: 152px;
      }
      .wechat-box {
        width: 224px;
        height: 34px;
        color: #d16227;
        font-size: 16px;
        border: 2px solid #d16227;
        border-radius: 15px;
        margin: 40px auto 90px;
        img,
        span {
          margin-top: 3px;
        }
        span {
          vertical-align: middle;
          display: inline-block;
          margin-left: 8px;
        }
      }
      .sj {
        font-size: 18px;
        color: #728090;
      }
    }
  }
}

#container,
.right,
.left {
  height: 100%;
}
</style>