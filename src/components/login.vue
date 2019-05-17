<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row" style="display: flex;">
        <div class="right">
          <div>
            <img src="/assets/_layouts/store/img/zidong.png" alt="自动改价" class="zidong">
          </div>
          <div>
            <img
              src="/assets/_layouts/store/img/Automaticpricechange.png"
              alt="自动改价"
              class="autoimg"
            >
          </div>
          <div class="icons">
            <img src="/assets/_layouts/store/img/24-2.png" alt="自动改价" class="gai-1">
            <img src="/assets/_layouts/store/img/cao-2.png" alt="自动改价" class="gai-2">
            <img src="/assets/_layouts/store/img/gai-2.png" alt="自动改价" class="gai-3">
          </div>
        </div>
        <div class="left">
          <div>
            <img src="/assets/_layouts/store/img/Login.png" alt="登录" class="login">
          </div>
          <div>
            <img src="/assets/_layouts/store/img/font-1.png" alt="登录" class="font-1">
          </div>
          <form method="post" action="{{url('store/login')}}">
            {{ csrf_field() }}
            <div
              class="user"
              ref="divUser"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              <img src="/assets/_layouts/store/img/user.png" alt="用户" class="user-img">
              <input type="text" name="name" id="user" placeholder="请输入用户名或手机号" ref="user">
            </div>
            <div
              class="pass"
              ref="divPass"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              <img src="/assets/_layouts/store/img/pass.png" alt="密码" class="pass-img">
              <input :type="pass" name="password" id="pass" placeholder="请输入密码" ref="pass">
              <img
                src="/assets/_layouts/store/img/hide-pass.png"
                alt="显示密码"
                class="hide-pass-img"
                @mousedown.left="passDown"
                @mouseup.left="passUp"
              >
            </div>
            <input type="submit" class="sub-btn" value="登录">
          </form>
          <a
            href="https://oauth.taobao.com/authorize?response_type=code&client_id=23763997&redirect_uri=http://api.taoesoft.com/caiwu.aspx&view=web&state=https%3A%2F%2Fcw.tosneaker.com%2Fstore%2Fcallback%3Fact%3Dbindshop_do"
          >
            <img src="/assets/_layouts/store/img/taobao2.png" alt="淘宝" class="taobao-img">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "microsoft yahei";
  overflow: hidden;
}

#app,
.container-fluid,
.row,
.right,
.left {
  height: 100%;
}

.right {
  background-image: url(/assets/_layouts/store/img/bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 120px;
  padding-left: 12.5%;
  flex: 0 0 52%;
  position: relative;
}

input {
  outline: none;
}

.right .autoimg {
  margin-top: 16px;
}

.left {
  background-image: url(/assets/_layouts/store/img/yingy2.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 166px;
  padding-left: 130px;
  flex: 0 0 48%;
}

.left .font-1 {
  margin-top: 26px;
}

.user,
.pass {
  border-bottom: 2px solid #010101;
  width: 510px;
  position: relative;
  left: 0;
  top: 0;
  height: 40px;
}

.user input,
.pass input {
  border: none;
  width: 486px;
  position: absolute;
  left: 30px;
  line-height: 24px;
  color: #010101;
  font-size: 16px;
  padding-left: 10px;
  background: transparent;
}

.user {
  margin-top: 120px;
}

.pass {
  margin-top: 62px;
}

.user .user-img,
.pass .pass-img {
  position: absolute;
  left: 0;
  top: 0;
}

.pass .hide-pass-img {
  position: absolute;
  right: 0;
  top: 8px;
  cursor: pointer;
}

.sub-btn {
  width: 200px;
  height: 82px;
  margin-top: 64px;
  margin-left: -12px;
  color: transparent;
  border: none;
  background-color: transparent;
  background-image: url(/assets/_layouts/store/img/login-bg2.png);
  cursor: pointer;
}

.taobao-img {
  margin-top: 40px;
}

.right .icons {
  position: absolute;
  bottom: 10.8%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

input {
  outline: none;
  border: none;
}

.wap-container {
  width: 100%;
  height: 100%;
  padding-top: 20%;
  background-color: #000735;
  background-image: url("/assets/base/images/body-bg.png");
  background-size: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.wap-container .top {
  text-align: center;
  margin-bottom: 20%;
}

.wap-container .user,
.wap-container .pass {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background-color: #1f3264;
  border-radius: 20px !important;
  overflow: hidden;
  height: 44px;
}

.wap-container .pass {
  margin-top: 5%;
}

.wap-container .user img,
.wap-container .pass img {
  position: absolute;
  left: 23px;
  top: 0;
  bottom: 0;
  margin: auto;
}

.wap-container .user {
  margin-top: 0 !important;
}

.wap-container .user input,
.wap-container .pass input {
  width: 100%;
  height: 44px;
  line-height: 44px;
  padding-left: 50px;
  background-color: transparent;
  color: #8892ab;
  font-size: 14px;
  left: 0;
  top: 0;
}

.wap-container .wap-login {
  background-image: url("/assets/base/images/loginbg.png");
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  height: 44px;
  margin-top: 10%;
}

.wap-container .wap-login img {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.wap-container .wap-login .wap-btn {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
}

.imgs {
  text-align: center;
  margin-top: 5%;
}
</style>


