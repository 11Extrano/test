<template>
  <div class="detail">
    <div class="header">
      <van-icon name="arrow-left" @click="gotostore" />
      <van-icon name="wap-home-o" @click="gotoMeizuhome" />
    </div>

    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#66c6f2">
        <van-swipe-item v-for="(item,index) in productData[num].swiper" :key="index">
          <img :src="item" alt @click="showProductPicture(index)" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 主要描述 -->
    <div class="content">
      <h3>{{productData[num].name}}</h3>
      <p>￥ {{productData[num].price}}</p>
      <p>分期价 {{productData[num].installmentPrice | RNMFormat}} x 12期</p>
      <p class="van-ellipsis">{{productData[num].introduce}}</p>
      <!-- 服务弹出层 -->
      <Serve></Serve>
    </div>

    <!-- 已选中手机弹出层 -->
    <div class="select">
      <van-cell is-link @click="selectPopup">
        <span class="title">已选</span>
        <div class="selectContent">
          <span v-if="this.netType">{{netType}}</span>
          <span v-if="this.colorType">{{colorType}}</span>
          <span v-if="this.memoryType">{{memoryType}}</span>
          <span v-if="this.comboType">{{comboType}}</span>&nbsp;&nbsp;
          <span class="count" v-if="this.selectNum">x{{selectNum}}</span>
        </div>
      </van-cell>
      <van-popup
        class="selectPopup"
        v-model="selectShow"
        closeable
        position="bottom"
        :style="{ height: '80%' }"
      >
        <div class="popupheader">
          <div class="productImg">
            <img :src="productData[num].swiper[0]" alt />
          </div>
          <div class="productSelected">
            <span class="productprice">￥ {{productData[num].price*selectNum}}</span>
            <p>
              <span v-if="this.netType">{{netType}}</span>
              <span v-if="this.colorType">{{colorType}}</span>
              <span v-if="this.memoryType">{{memoryType}}</span>
              <span v-if="this.comboType">{{comboType}}</span>
            </p>
          </div>
        </div>
        <ul class="popupContent">
          <li v-if="this.netType">
            <p>网路模式</p>
            <van-tag
              :color="isClicknetTag==index ? '#00c3f5' : '#999' "
              @click="selectClick(index,item)"
              plain
              type="primary"
              v-for="(item,index) in productData[num].option.netType"
              :key="index"
            >{{item}}</van-tag>
          </li>
          <li v-if="this.colorType">
            <p>颜色分类</p>
            <van-tag
              :color=" isClickColorTag==index ? '#00c3f5' : '#999' "
              @click="colorTagClick(index,item)"
              plain
              type="primary"
              v-for="(item,index) in productData[num].option.colorType"
              :key="index"
            >{{item}}</van-tag>
          </li>
          <li v-if="this.memoryType">
            <p>内存容量</p>
            <van-tag
              :color=" isClickMemoryTag==index ? '#00c3f5' : '#999' "
              @click="memoryTypeClick(index,item)"
              plain
              type="primary"
              v-for="(item,index) in productData[num].option.memoryType"
              :key="index"
            >{{item}}</van-tag>
          </li>
          <li v-if="this.comboType">
            <p>套餐</p>
            <van-tag
              :color=" isClickcomboTag==index ? '#00c3f5' : '#999' "
              @click="comboTagClick(index,item)"
              plain
              type="primary"
              v-for="(item,index) in productData[num].option.comboType"
              :key="index"
            >{{item}}</van-tag>
          </li>
          <li>
            <p>数量</p>
            <van-stepper v-model="selectNum" />
          </li>
          <li class="installment">
            <p>花呗分期</p>
            <span>￥{{Math.floor(productData[num].price*selectNum/3)}}x3期 &nbsp;(免手续费)</span>
            <span>￥{{Math.floor(productData[num].price*selectNum/6)}}x6期 &nbsp;(免手续费)</span>
            <span>￥{{Math.floor(productData[num].price*selectNum/12)}}x12期(免手续费)</span>
          </li>
        </ul>
        <div class="popupFooter">
          <van-goods-action-button
            type="primary"
            text="加入购物车"
            color="#00c3f5"
            @click="addtoCartSuccess"
          />
          <van-goods-action-button type="primary" text="立即购买" @click="butNow" color="#f0415f" />
        </div>
      </van-popup>
    </div>

    <!-- 配送地址弹出层 -->
    <div class="delivery">
      <van-cell is-link @click="showPopup">
        <van-field
          readonly
          clickable
          label="已选"
          :value="value"
          :placeholder="this.provinceVal"
          @click="addressShow = true"
        />
      </van-cell>
      <van-popup
        v-model="addressShow"
        closeable
        position="bottom"
        :style="{ height: '50%' }"
        get-container=".address"
      >
        <van-area
          title="配送至"
          :area-list="areaList"
          :value="areaVal"
          class="address"
          @change="changeAdd"
        />
      </van-popup>
    </div>

    <!-- 手机参数详情 -->
    <div class="description">
      <van-tabs v-model="active" title-active-color="#00c3f5" animated line-height="0">
        <van-tab title="图片详情">
          <img
            :src="item"
            alt
            v-for="(item,index) in productData[num].particularsImg"
            :key="index"
            width="100%"
            style="display:block"
          />
        </van-tab>
        <van-tab title="规格参数">
          <Sepcification></Sepcification>
        </van-tab>
        <van-tab title="常见问题">
          <NormalProblems></NormalProblems>
        </van-tab>
      </van-tabs>
    </div>

    <MyGoodsAction @fn="addtoCart" ></MyGoodsAction>
  </div>
</template>

<script>
import Vue from "vue";
import { ImagePreview } from "vant";
import MyGoodsAction from "@/components/MyGoodsAction";
import { productData, province_list } from "@/data/home";
import Sepcification from "@/components/Specification";
import NormalProblems from "@/components/NormalProblems";
import Serve from "@/components/Serve";

export default {
  data() {
    return {
      productData: productData,
      num: "",
      index: 0,
      // 是否预览
      show: false,
      // 是否显示弹出层
      selectShow: false,
      addressShow: false,
      active: 0,
      value: "",
      provinceVal: "北京市",
      // 已选中数量
      selectNum: 1,
      // 当前已选中的
      val: 0,
      // 地址数据
      areaList: { province_list },
      // 已选中地址
      areaVal: "",

      netType: "",
      colorType: "",
      memoryType: "",
      comboType: "",
      isClicknetTag: 0,
      isClickColorTag: 0,
      isClickMemoryTag: 0,
      isClickcomboTag: 0,
      CartArr: {},
    };
  },
  components: {
    MyGoodsAction,
    Sepcification,
    NormalProblems,
    Serve,
  },
  created() {
    this.num = this.$route.query.product;
    if (this.productData[this.num].option.netType) {
      this.netType = this.productData[this.num].option.netType[0];
    }
    if (this.productData[this.num].option.colorType) {
      this.colorType = this.productData[this.num].option.colorType[0];
    }
    
    if (this.productData[this.num].option.memoryType) {
      this.memoryType = this.productData[this.num].option.memoryType[0];
    }
    if (this.productData[this.num].option.comboType) {
      this.comboType = this.productData[this.num].option.comboType[0];
    }
  },
  methods: {
    netTagClick(index, item) {
      this.isClicknetTag = index;
      this.netType = item;
    },
    colorTagClick(index, item) {
      this.isClickColorTag = index;
      this.colorType = item;
    },
    memoryTypeClick(index, item) {
      this.isClickMemoryTag = index;
      this.memoryType = item;
    },
    comboTagClick(index, item) {
      this.isClickcomboTag = index;
      this.comboType = item;
    },

    //显示弹出层
    showPopup() {
      this.addressShow = !this.addressShow;
    },
    selectPopup() {
      this.selectShow = !this.selectShow;
    },
    // 修改选中地址
    changeAdd(value) {
      console.log(value.$parent.code);
      this.areaVal = value.$parent.code;
      this.provinceVal = this.areaList.province_list[this.areaVal];
      this.showPopup();
    },
    // 加入购物车
    addtoCart() {
      this.$router.push("/cart");
    },
      // 收藏和购买和加入购物车都是同样的信息，存入Vuex中
    addChangeMessage(){
      this.AddObj =  {
        isClick: false,
        imgSrc: this.productData[this.num].swiper[0],
        name: this.productData[this.num].name,
        desc:
          this.netType +
          " " +
          this.colorType +
          " " +
          this.memoryType +
          " " +
          this.comboType,
        price: productData[this.num].price,
        num: this.selectNum,
        id: this.$store.state.id,
        // 交易状态
        exchangeStatus: "待付款",
        // collectstatus: false,
      }
    },
    // 加入购物车成功
    addtoCartSuccess() {
      this.addChangeMessage();
      this.$store.commit("AddCart", this.AddObj);
      this.$toast({
        message: "已成功加入购物车",
        icon: "passed",
      });
    },
    // 立即购买
    butNow() {
      this.addChangeMessage();
      this.$store.commit("AddtoBuy", this.AddObj);
      this.$toast({
        message: "已购买成功",
        icon: "passed",
      });
    },
    // 图片预览
    showProductPicture(item) {
      this.show = true;
      // 查看图片数组
      ImagePreview({
        images: this.productData[this.num].swiper,
        startPosition: item,
      });
    },
    gotostore() {
      this.$router.go(-1);
    },
    gotoMeizuhome() {
      this.$router.push("/home");
    },
  },
};
</script>
 
<style lang = "less" scoped>
.detail {
  background-color: #eee;
  .header {
    width: 100%;
    height: 0.5rem;
    box-sizing: border-box;
    padding: 0 0.2rem;
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.25rem;
    font-weight: 600;
  }
  .swiper {
    width: 100%;
    background-color: #fff;
    padding-bottom: 0.1rem;
    margin-top: 0.45rem;
    .van-swipe {
      width: 60%;
      height: 40vh;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
        height: 90%;
        display: block;
      }
    }
  }
  .content {
    line-height: 0.3rem;
    border-top: 1px solid #ccc;
    padding-left: 4%;
    margin-bottom: 0.1rem;
    background-color: #fff;
    h3 {
      line-height: 0.5rem;
    }
    p {
      color: #f0415f;
      &:nth-child(2) {
        font-size: 0.18rem;
      }
      &:nth-child(4) {
        font-size: 0.12rem;
      }
    }
  }
  .select,
  .delivery {
    height: 0.5rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0.12rem;
    padding: 0 4%;
    background-color: #fff;
    margin-top: 0.1rem;
    .van-cell {
      padding: 0;
      .van-cell__value {
        display: flex;
        position: relative;
        line-height: 0.5rem;
        .title {
          color: #666;
          margin-right: 0.1rem;
        }
        .selectContent {
          span {
            margin-right: 0.05rem;
          }
        }
        .count {
          position: absolute;
          top: 0;
          right: 0;
          margin-right: 0.1rem;
        }
      }
      .van-cell__right-icon {
        line-height: 0.5rem;
      }
    }
  }
  .delivery {
    position: relative;
    .van-cell {
      height: 0.5rem;
      line-height: 0.5rem;
    }
  }
}
/deep/.van-overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
/deep/.popupContent {
  overflow: auto;
}
/deep/.van-picker__cancel,
/deep/.van-picker__confirm {
  display: none !important;
}
/deep/.van-picker__title {
  text-align: center;
  margin: auto;
  padding-top: 0.1rem;
}
/deep/.van-picker-column__item {
  justify-content: left;
  padding-left: 0.1rem;
}
/deep/.van-picker__columns {
  height: 100% !important;
}
/deep/.van-field__control {
  color: pink;
}
/deep/.van-field__label {
  width: 0.28rem;
}

.van-popup {
  overflow: initial;
}
.select {
  display: flex;
  flex-direction: column;
}
.popupheader {
  position: relative;
  width: 100%;
  height: 0.9rem;
  border-bottom: 1px solid #ddd;
  .productImg {
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px solid #ddd;
    background-color: #fff;
    position: absolute;
    top: -0.35rem;
    left: 0.15rem;
    padding-top: 0.1rem;
    img {
      width: 100%;
    }
  }
  .productSelected {
    margin-left: 1.2rem;
    margin-top: 0.2rem;
    .productprice {
      color: red;
      font-size: 0.14rem;
      line-height: 0.2rem;
    }
    p {
      line-height: 0.25rem;
    }
  }
}
/deep/.popupContent {
  flex: 1;
  padding-top: 2%;
  overflow: scroll;
  overflow: initial;
  li {
    padding-left: 2%;
    p {
      color: #d2d2d2;
      font-size: 0.14rem;
      line-height: 0.3rem;
    }
    .van-tag {
      padding: 2% 4%;
      margin-right: 0.15rem;
      margin-bottom: 2%;
    }
  }
  .installment {
    span {
      display: inline-block;
      width: 20%;
      padding: 4% 3%;
      border: 1px solid #999;
      font-size: 0.12rem;
      margin-right: 0.15rem;
    }
  }
}
.popupFooter {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  .van-goods-action-button {
    width: 50%;
    border-radius: 0;
    margin: 0;
  }
}
</style>