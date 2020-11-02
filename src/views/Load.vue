<template>
  <div class="load">
    <van-tabs v-model="active" color="#fff" scrollspy sticky>
      <van-tab title="商城App">
        <div class="storeApp" :style="{backgroundImage: `url(${imgSrc1})`}">
          <a href="#">
            <van-button round type="info" color="#ff4812" block>下载商城App</van-button>
            <p>支持所有 Android 机型安装下载</p>
          </a>
        </div>
      </van-tab>
      <van-tab title="社区App">
        <div class="commityApp" :style="{backgroundImage: `url(${imgSrc2})`}">
          <a href="#">
            <van-button round type="info" color="#366cf3">下载社区App</van-button>
            <p>支持所有 Android 机型安装下载</p>
          </a>
        </div>
      </van-tab>
      <van-tab title="服务App">
        <div class="serviceApp" :style="{backgroundImage: `url(${imgSrc3})`}">
          <a href="#">
            <van-button round type="info" color="#00966b" block>下载服务App</van-button>
            <p>支持所有 Android 机型安装下载</p>
          </a>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      imgSrc1: require("@/assets/store-bg.png"),
      imgSrc2: require("@/assets/forum-bg.png"),
      imgSrc3: require("@/assets/service-bg.png"),
    };
  },
};
</script>
 
<style lang = "less" >
.load {
  height: 100vh;
  background-color: #fff;
  .van-tabs__nav {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top:0;
  height: 40px;
  width: 100%;
  z-index: 999;
}
}

.van-tabs__nav--line{
  margin-bottom: 0;
  box-sizing: border-box;
  .van-tabs__line{
    top:38px;
  }
  .van-tab__text--ellipsis{
    margin-top: 20px;
  }
}
.van-tabs {
  width: 100%;
  text-align: center;
}
.storeApp,.commityApp ,.serviceApp{
  width: 100%;
  height: 100vh;
  background-size:100% 80%;
  background-repeat: no-repeat;
  position: relative;
  top:-43px;
   a {
    display: block;
    position: absolute;
    left: 25%;
    top:550px;
    text-align: center;
    .van-button {
      width: 200px;
    }
    p {
      color: #000;
      line-height: .2rem;
    }
  } 
}
</style>