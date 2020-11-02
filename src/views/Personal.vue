<template>
  <div class="personnal">
    <div class="user">
      <van-icon name="arrow-left" class="userleft" @click='gobacktohome'/>
      <van-icon name="chat-o" class="userRight" @click='gotochat'/>
      <div>
        <img src="@/assets/login.png" alt />
        <p>何缘lwm</p>
      </div>
    </div>

    <div class="order">
      <span>我的订单</span>
      <div>
        查看全部订单
        <van-icon name="arrow" />
      </div>
    </div>
    <ul class="saleAbout">
      <li>
        <van-icon name="cash-on-deliver" />
        <p>待付款</p>
      </li>
      <li>
        <van-icon name="send-gift-o" />
        <p>待发货</p>
        <span></span>
      </li>
      <li>
        <van-icon name="logistics" />
        <p>待收款</p>
        <span></span>
      </li>
      <li>
        <van-icon name="refund-o" />
        <p>退款/售后</p>
        <span></span>
      </li>
    </ul>
    <ul class="userAbout">
      <li>
        <a :href="personData[4].path">
          <img :src="personData[4].imgSrc" alt />
          <p>{{personData[4].text}}</p>
        </a>
      </li>
      <li>
        <a :href="personData[0].path">
          <img :src="personData[0].imgSrc" alt />
          <p>{{personData[0].text}}</p>
        </a>
      </li>
      <li>
        <a :href="personData[2].path">
          <img :src="personData[2].imgSrc" alt />
          <p>{{personData[2].text}}</p>
        </a>
      </li>
      <li>
        <a :href="personData[3].path">
          <img :src="personData[3].imgSrc" alt />
          <p>{{personData[3].text}}</p>
        </a>
      </li>
    </ul>
    <ul class="serveAbout">
      <li v-for="(item,index) in serveAboutData" :key="index">
        <a :href="item.path">
          <p>{{item.text}}</p>
          <van-icon name="arrow" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { toggleBarData } from "@/data/home";
export default {
  data() {
    return {
      personData: toggleBarData.lists_0,
      serveAboutData: toggleBarData.lists_3,
    };
  },
  methods:{
      gobacktohome(){
          this.$router.go(-1);
      },
      gotochat(){
          this.$router.push('/chat');
      }
  }
};
</script>
 
<style lang = "less" scoped>
.personnal {
  width: 100%;
  background-color: #eeeeee;
}
.user {
  width: 100%;
  height: 1.45rem;
  background-color: #00ade5;
  padding: 3%;
  box-sizing: border-box;
  color: #fff;
  .userleft {
    float: left;
    font-size: 0.2rem;
  }
  .userRight {
    float: right;
    font-size: 0.2rem;
  }
  div {
    text-align: center;
    img {
      width: 0.6rem;
      height: 0.6rem;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-top: 0.25rem;
    }
    p {
      font-size: 0.16rem;
      line-height: 0.3rem;
    }
  }
}
.order {
  padding: 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  div {
    color: #999;
  }
}
.saleAbout,
.userAbout {
  background-color: #fff;
  padding: 4% 0;
  display: flex;
  margin-bottom: 0.1rem;
  li {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 0.26rem;
    position: relative;
    color: #666666;
    p {
      font-size: 0.13rem;
      line-height: 0.22rem;
    }
    span {
      width: 1px;
      height: 0.25rem;
      background-color: #ccc;
      position: absolute;
      top: 25%;
    }
    a {
      color: #666;
      img {
        width: 30%;
      }
    }
  }
}
.serveAbout {
  background-color: #fff;

  li {
    display: flex;
    height: 0.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
    border-bottom: 1px solid #ccc;
    a {
      width: 100%;
      color: #666;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
          flex:1;
      }
    }
  }
}
</style>