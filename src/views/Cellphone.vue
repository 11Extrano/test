<template>
  <div class="cellphone">
    <!-- 手机区页面 -->
    <a href="#" v-for="(item,index) in cellphoneData.head" :key="index" @click='gotoProductDetail(item.query)'>
      <img :src="item.imgSrc" alt />
    </a>
    <ul>
      <li v-for="(item,index) in cellphoneData.content" :key="index" @click='gotoProductDetail(item.query)'>
        <img :src="item.imgSrc" alt />
        <h4>{{item.name}}</h4>
        <div>
          <span class="sign">{{item.sign}}</span>
          <span class="dsc van-ellipsis">{{item.dsc}}</span>
        </div>
        <p class="price">￥ {{item.price}}</p>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import { cellphoneData } from "@/data/home";
import Footer from '@/components/Footer'
export default {
  data() {
    return {
      cellphoneData: cellphoneData,
    };
  },
  components:{
      Footer
  },
  methods:{
      gotoProductDetail(detail){
      this.$router.push('/commodity?product=' + detail);
    }
  }
};
</script>
 
<style lang = "less" scoped>
.cellphone {
  img {
    width: 100%;
  }
}
ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li{
    width: 49%;
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
</style>