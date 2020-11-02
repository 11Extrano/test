<template>
  <div class="home">
      <div class="header">
        <div class="header_l">
          <van-icon name="search" class="search" @click="gotoPopup" />
        </div>
        <h4>MEIZU</h4>
        <div class="header_r">
          <van-icon name="shopping-cart-o" class="cart" @click='gotoCart'/>
          <van-icon name="more-o" class="more" @click='gotoOfficial' />
        </div>
      </div>

    <!-- NavBar导航 -->
      <van-tabs v-model="active"  color="#00b4ff" title-active-color="#00b4ff" line-height="1px">
        <van-tab v-for="item in banner" :key="item.id" :title="item.text" :to="item.path">
          <router-view></router-view>
        </van-tab>
      </van-tabs>

    <!-- 点击搜索框滑出部分 -->
    <transition name="van-slide-up">
      <router-view v-if='$route.path=="/home/popup"'></router-view>
    </transition>

    <!-- 点击分类滑出 -->
    <transition name="van-slide-down" >
      <router-view v-if='$route.path=="/home/official"'></router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
import { navData } from "@/data/home";
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      banner: navData,
      isShowHome: 1,
    };
  },
  created() {},
  methods: {
    gotoPopup() {
      this.$router.push('/home/popup');
    },
     gotoOfficial(){
       this.$router.push('/home/official');
     },
     gotoCart(){
       this.$router.push('/cart');
     }
  },
  components: {
    
  },
   created(){
     console.log(this.banner)
     this.banner.forEach((e,i) => {
       if(e.path==this.$route.path){
         this.active = i
       }
     });
   }
};
</script>

<style lang="less" >
.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 4% 4% 0 4%;
  font-size: 0.22rem;
  h4 {
    color: #00b4ff;
    font-size: 0.2rem;
  }
  .header_r {
    .cart {
      margin-right: 0.1rem;
    }
  }
}

.van-tab {
  font-size: 0.16rem !important;
}
.van-tabs__line {
  bottom: 25px !important;
}

.van-slide-up-enter,
.van-slide-up-leave-to {
  bottom: -100%;
}
.van-slide-up-enter-active,
.van-slide-up-leave-active {
  transition: bottom 2s linear;
}
.van-slide-up-enter-to,
.van-slide-up-leave {
  bottom: 0;
}
.van-slide-down-enter,
.van-slide-down-leave-to{
  top: -100%;
}
.van-slide-down-enter-active,
.van-slide-down-leave-active{
  transition: top 2s linear;
}
.van-slide-down-enter-to,
.van-slide-down-leave{
  top: 0;
}

</style>
