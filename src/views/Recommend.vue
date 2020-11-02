<template>
  <div>
    <!-- 轮播图部分 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="pink">
      <van-swipe-item v-for="item in banner" :key="item.id" @click='gotoProductDetail(item.path.query.product)'>
        <img :src="item.imgSrc" alt width='100%' style="display:block; " />
      </van-swipe-item>
    </van-swipe>

    <!-- 服务 -->
    <van-row style="text-align:center;line-height: .3rem" >
      <van-col span="8" v-for='item in tipLists' :key='item.id'>
        <img :src="item.imgSrc" alt="">{{item.text}}</van-col>
    </van-row>

    <!-- Bar导航栏 -->
    <div class="toggleBar">
        <ul>
          <li v-for='(item,index) in hotSites' :key='index' @click='gotoChange(item.path)'>
              <img :src="item.imgSrc" alt="">
              <span> {{item.name}}</span>
           </li>
        </ul>
    </div>

    <!-- 主营手机 -->
    <div class='myPhone'>
      <a href="#" v-for='(item,index) in Myphone' :key='index' @click='gotoProductDetail(item.query)'><img :src="item.imgSrc" alt=""></a>
    </div>

    <!-- 智能手机 -->
    <div class="phoneData">
      <div class="title">
        <h3>智能手机</h3>
      </div>
      <div class="head">
        <img :src="phoneData.head[0].imgSrc" alt="">
      </div>
      <ul class='productDsc'>
        <li v-for='(item,index) in phoneData.content' :key='index' @click='gotoProductDetail(item.query)'>
          <img :src="item.imgSrc" alt="">
          <h4>{{item.name}}</h4>
          <div>
            <span class="sign">{{item.sign}}</span>
            <span class="dsc van-ellipsis">{{item.dsc}}</span>
          </div>
          <p class='price'>￥ {{item.price}}</p>
        </li>
      </ul>
    </div>

    <!-- 魅族声学 -->
    <div class="musicData">
      <div class="title">
        <h3>魅族声学</h3>
      </div>
     <div class="header">
       <a v-for='(item,index) in musicData.head' :key='index' @click='gotoProductDetail(item.query)'>
         <img :src="item.imgSrc" alt="" :class="index %2 == 0? 'l': 'r' ">
         <div :class="!(index %2 == 0)? 'l': 'r' ">
            <h4>{{item.title}}</h4>
            <p class='dsc'>{{item.dsc}}</p>
            <p class='price'>￥ {{item.price}}</p>
         </div>
       </a>
     </div>
     <ul class='productDsc'>
       <li v-for='(item,index) in musicData.content' :key='index' @click='gotoProductDetail(item.query)'>
          <img :src="item.imgSrc" alt="">
          <h4>{{item.name}}</h4>
          <div>
            <span class="sign">{{item.sign}}</span>
            <span class="dsc van-ellipsis">{{item.dsc}}</span>
          </div>
          <p class='price'>￥ {{item.price}}</p>
        </li>
     </ul>
    </div>

    <!-- 智能配件 -->
    <div class="partsData">
      <div class="title">
        <h3>智能配件</h3>
      </div>
     <div class="header">
       <a v-for='(item,index) in partsData.head' :key='index' @click='gotoProductDetail(item.query)'>
         <img :src="item.imgSrc" alt="" :class="index %2 == 0? 'l': 'r' ">
         <div :class="!(index %2 == 0)? 'l': 'r' ">
            <h4>{{item.title}}</h4>
            <p class='dsc'>{{item.dsc}}</p>
            <p class='price'>￥ {{item.price}}</p>
         </div>
       </a>
     </div>
     <ul class='productDsc'>
       <li v-for='(item,index) in partsData.content' :key='index'  @click='gotoProductDetail(item.query)'>
          <img :src="item.imgSrc" alt="">
          <h4 class="dsc van-ellipsis">{{item.name}}</h4>
          <div>
            <span class="sign">{{item.sign}}</span>
            <span class="dsc van-ellipsis">{{item.dsc}}</span>
          </div>
          <p class='price'>￥ {{item.price}}</p>
        </li>
     </ul>
    </div>

     <Footer></Footer>
  </div>
</template>

<script>
import { viewpagerLists ,tipLists,hotSites,Myphone,phoneData,musicData,partsData} from "@/data/home.js";
import Footer from '@/components/Footer'
export default {
  data() {
    return {
      // 轮播图数据
      banner: viewpagerLists,
      hotSites: hotSites,
      // 中心导航数据
      tipLists:tipLists,
      Myphone:Myphone,
      phoneData: phoneData,
      musicData: musicData,
      partsData:partsData
    };
  },
  components:{
    Footer
  },
  methods:{
    gotoChange(path){
      this.$router.push(path);
    },
     gotoProductDetail(detail){
      this.$router.push('/commodity?product=' + detail);
    }
  }
};
</script>
 
<style lang = "less" >
.van-row{
  height: .3rem;
  line-height: .3rem;
  img{
    width: .16rem;
    height: .16rem;
    vertical-align: middle;
  }
}
.toggleBar{
  height: 1rem;
  background-color: #fff;
  ul{
    display: flex;
    padding: 5%;
    li{
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img{
        width: .5rem;
      }
    }
  }
}
.myPhone{
  width: 100%;
  margin-top: .2rem;
  overflow: hidden;
  a{
    width: 50%;
    float:left;
    img{
      width: 100%;
    }
  }
}
.phoneData{
  img{
    width: 100%;
  }
 
}
.title{
  background-color: #f4f4f4;
  position: relative;
  h3{
    font-size: 22px;
    line-height: 90px;
    color: #000;
    text-align: center;
  }
  ::after{
      content: '';
      display: block;
      width: .3rem;
      height: 3px;
      background-color: #0bbbef;
      position: absolute;
      top: 70%;
      left: 47%;
    }
}
.productDsc{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    width: 49%;
    /* padding:3%; */
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: .1rem;
    text-align: center;
    h4{
      font-size: .16rem;
      color: #000;
      line-height: .3rem;
    }
    img{
      width: 100%;
    }
    div{
      border: 1px solid darkred;
      line-height: 22px;
      display: flex;
      margin: .1rem .15rem 0 .15rem;
      .sign{
        width: 40px;
        color: #fff;
        background-color: #cc0000;
      }
      .dsc{
        flex: 1;
        color: #cc0000;
        text-align: left;
        padding-left: .05rem;
      }
    }
    .price{
      font-size: .16rem;
      color: #cc0000;
      line-height: .5rem;
    }
  }
}


.musicData,.partsData {
  .header{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;  
    padding: 0;
    a{
      width: 100%;
      img{
        width: 50%;
        height: 100%;
      }
      div{
        width: 50%;
        height: 100%;
        position: relative;
        color: #fff;
        padding: 4%;
        font-size: .16rem;
        box-sizing: border-box;
        h4{
          color: #fff;
          font-weight: normal;
          font-size: .2rem;
          line-height: .3rem;
        }
        .dsc{
          font-size: 14px;
          line-height: .34rem;
          color:#d4d1ed;
          &::after {
            content: ' ';
            display: block;
            width: .22rem;
            height: 2px;
            background-color: #fff;
          }
        }
        .price{
          font-size: .2rem;
          color:#d4d1ed;
          position: absolute;
          bottom: .16rem;
        }
      }
      .l{
        float: left;
        background-color: #f55c5c;
      }
      .r{
        float: right;
        background-color: #7063c9;
      }
    }
  }
}


</style>