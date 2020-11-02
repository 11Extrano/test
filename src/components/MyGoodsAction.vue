<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#00c3f5" @click="gotoChat" />
      <van-goods-action-icon
        icon="star-o"
        :text="$store.state.collectstatus? '已收藏':'未收藏'"
        :color="$store.state.collectstatus? '#00c3f5':'#999'"
        @click="isCollectClick"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="$store.state.cartArr.length"
        @click="addtoCart"
      />
      <van-goods-action-button
        type="primary"
        text="加入购物车"
        color="#00c3f5"
        @click="addtoCartSuccess"
      />
      <van-goods-action-button type="primary" text="立即购买" @click="butNow" color="#f0415f" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
import { productData } from "@/data/home";
export default {
  props: ["badge"],
  data() {
    return {
      productData: productData,
      isCollect: false,
      netType: "",
      colorType: "",
      memoryType: "",
      comboType: "",
      isClicknetTag: 0,
      isClickColorTag: 0,
      isClickMemoryTag: 0,
      isClickcomboTag: 0,
      CartArr: {},
      num: "",
      selectNum: 1,
      // 存入vuex的对象
      AddObj: {},
    };
  },
  created() {
  
    this.num = this.$route.query.product;
    if (this.productData[this.num].option.netType) {
      this.netType = this.productData[this.num].option.netType[0];
    }
    if (this.productData[this.num].option.colorType) {
      this.colorType = this.productData[this.num].option.colorType[0];
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
    //初始判断
      this.$store.commit("changeCollect",this.productData[this.num]);
    console.log(this.$store.state.collectArr);
    this.$store.state.collectArr.map((e) => {
      if (e.name == this.productData[this.num].name) {
        this.isCollect = e.collectstatus;
      }
    });
  },
  methods: {
    // 购买成功
    butNow() {
      this.addChangeMessage();
      this.$store.commit("AddtoBuy", this.AddObj);
      this.$toast({
        message: "已购买成功",
        icon: "passed",
      });
    },
    gotoChat() {
      this.$router.push("/chat");
    },
    addtoCart() {
      this.$emit("fn");
    },
    // 收藏和购买和加入购物车都是同样的信息，存入Vuex中
    addChangeMessage() {
      this.AddObj = {
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
        collectId:  this.$store.state.collectId
      };
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
    // 收藏成功
    isCollectClick() {
      this.addChangeMessage();
      this.$store.commit("AddCollect", this.AddObj);
      this.$store.commit("changeCollect",this.productData[this.num])
      this.$store.state.collectstatus? this.$toast("已收藏成功"): this.$toast("已取消收藏");
    },
  },
};
</script>
 
<style lang = "less" scoped>
.van-goods-action {
  height: 0.45rem;
  line-height: 0.45rem;
  .van-goods-action-button {
    border-radius: 0;
    height: 0.45rem;
    margin: 0;
  }
}
</style>