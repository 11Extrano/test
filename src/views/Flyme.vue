<template>
  <div class='flyme'>
    <div class="header">
      <h3>Flyme</h3>
      <span>
        <van-icon name="wap-home-o" @click="gotohome" />
      </span>
    </div>
    <div class="FlymeSwiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperData" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="flymeNav">
      <a href="#" v-for="(item,index) in navData" :key="index">
        <img :src="item" alt />
      </a>
    </div>

    <div class="FlymecenterSwiper">
      <div>
        <van-swipe style="height: 90px;" vertical :autoplay="3000">
          <van-swipe-item v-for="(item,index) in showPicturelist1 " :key="index">
            <img :src="item.imgSrc" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div>
        <van-swipe style="height: 90px;" vertical :autoplay="3000">
          <van-swipe-item v-for="(item,index) in showPicturelist2 " :key="index">
            <img :src="item.imgSrc" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div>
        <van-swipe style="height: 90px;" vertical :autoplay="3000">
          <van-swipe-item v-for="(item,index) in showPicturelist3 " :key="index">
            <img :src="item.imgSrc" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div>
        <van-swipe style="height: 90px;" vertical :autoplay="3000">
          <van-swipe-item v-for="(item,index) in showPicturelist4 " :key="index">
            <img :src="item.imgSrc" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div class="new_actions">
        <h3>最新动态</h3>
        <img src="https://image-res.mzres.com/image/flyme-icon/79eccf51cd7142eca068c0ce9bc460ffz" alt="">
        <ul>
            <li v-for="(item,index) in stateData" :key='index'>
                <a href="#">
                    <img :src="item.imgSrc" alt="">
                    <p>{{item.name}}</p>
                </a>
            </li>
        </ul>
    </div>

    <div class="flyme_use">
        <h3>Flyme应用</h3>
        <ul>
          <li v-for="(item,index) in useData" :key='index'>
                <a href="#">
                    <img :src="item" alt="">              
                </a>
            </li>
        </ul>
    </div>

    <div class="flyme_contact">
        <a href="#">
            <van-icon name="chat-o" />
            <span>微信公众号</span>
            <span class='line'>|</span>
        </a>
        <a href="#">
            <van-icon name="chat-o" />
            <span>新浪微博</span>
        </a>
        <a href="#">
            <van-icon name="phone-o" />
            <span>400-788-3333</span>
            <span class='line'>|</span>
        </a>
         <a href="#">
            <van-icon name="service" />
            <span>在线客服</span>
        </a>
    </div>
    <Footer></Footer>
  </div>
    
</template>

<script>
import { swiperData, navData, showPictureData ,stateData,useData,fnData} from "@/data/flyme"
import Footer from '@/components/Footer'
export default {
  data() {
    return {
      swiperData: swiperData,
      navData: navData,
      showPicturelist1: showPictureData[0],
      showPicturelist2: showPictureData[1],
      showPicturelist3: showPictureData[2],
      showPicturelist4: showPictureData[3],
      stateData:stateData,
      useData:useData,
      fnData: fnData
    };
  },
  methods: {
    gotohome() {
      this.$router.go(-1);
    },
  },
  components:{
      Footer
  }
};
</script>
 
<style lang = "less" scoped>
.flyme{
    width: 100%;
    background-color: #fff;
}
.header {
  padding-bottom: 3%;
  h3 {
    color: #3987ec;
    font-size: 0.2rem;
  }
}
.FlymeSwiper {
  img {
    display: block;
    width: 100%;
    height: 35vh;
  }
}
.flymeNav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding:4%;
    
    a{
        width: 50%;
        img{
            width: 100%;
        }
    }
}
.FlymecenterSwiper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: rotate(180deg);
    >div{
        width: 50%;
        img{
            width: 100%;
            transform: rotate(180deg);
        }
    }
}
/deep/.van-swipe__indicator{
    display:none;
}
.new_actions{
    h3{
        height: .75rem;
        line-height: .75rem;
        text-align: center;
        font-weight: normal;
    }
    img{
        width: 100%;
    }
    ul{
        padding: 2%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        li{
            width: 49%;
            p{
                text-align: center;
                line-height: .4rem;
                color: #000;
                font-size: .16rem;
            }
        }
    }
}
.flyme_use{
    h3{
         height: .75rem;
        line-height: .75rem;
        text-align: center;
        font-weight: normal;
    }
    ul{
        padding: 1%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li{
            width: 47%;
            margin-bottom: 2%;
            img{
                width: 100%;
            }
        }
    }
}
.flyme_contact{
    padding: 2%;
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: .1rem;
    a{
        width: 50%;
        padding: 4%;
        box-sizing: border-box;
        color: #ccc;
        font-size: .13rem;
        border-top: 1px solid #ccc;
        padding-left: .4rem;
        .line{
            float: right;
        }
        &:nth-child(3),
        &:nth-child(4){
            border-bottom: 1px solid #ccc;
        }
    }
}
</style>