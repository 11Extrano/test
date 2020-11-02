<template>
  <div class="footer">
    <div class="chat">
      <van-button icon="phone" type="info" large round @click='gotoChat'>400-788-3333</van-button>
      <van-button icon="chat" type="info" large round class="chatonline" @click='gotoChat'>在线客服</van-button>
    </div>
    <div class="content">
      <p>粤ICP备13003602号-2 合字B2-20170010</p>
      <p>营业执照©2018 Meizu All rights reserved</p>
    </div>
    <div class="languageStyle">
      <van-dropdown-menu direction="up" :overlay="false">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      <div class="flag">
        <van-icon name="star" color="red" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "简体中文", value: 0 },
        { text: "English", value: 1 },
        { text: "india", value: 2 },
        { text: "Русский", value: 3 },
        { text: "繁體中文", value: 4 },
        { text: "Україна", value: 5 },
        { text: "Türkiye", value: 6 },
      ],
    };
  },
  methods:{
      gotoChat(){
          this.$router.push('/chat');
      }
  }
};
</script>
 
<style lang = "less">
.footer {
  background-color: #fff;
  .chat {
    padding: 0.2rem 3%;
    box-sizing: border-box;
    .van-button {
      width: 45%;
      height: 0.4rem;
      font-size: 0.16rem;
    }
  }

  .chatonline {
    float: right;
  }
  .content {
    float: left;
    padding: 0 0.15rem 5%;
    color: #999;
    font-size: .12rem;
    box-sizing: border-box;
  }
  .languageStyle {
    float:right;
    position: relative;
    .van-dropdown-menu__bar {
      height: 0.25rem;
      box-shadow: none;
      margin-right: .3rem;
    }
    .van-popup--bottom{
        width: 30%;
        left: 70%;
    }
    .van-cell__value{
        i {
            &::before{
                display: none;
            }
        }
    }
    .flag {
      position: absolute;
      top: 0.05rem;
      left: -.15rem;
    }
  }
}
</style>