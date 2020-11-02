<template>
  <div class="cart">
    <div class="header">
      <van-icon name="arrow-left" @click="gobacktohome" />
      <h3>购物车</h3>
      <span @click="edit">{{isShowStepper?'完成':'编辑'}}</span>
    </div>

    <van-checkbox-group v-model="result">
      <van-checkbox
        :name="item.id"
        v-for="item in $store.state.cartArr"
        :key="item.id"
        @click="ChangeChecked(item.id)"
        :disabled="isShowStepper"
      >
        <van-card
          :num="item.num"
          :price="item.price.toFixed(2)"
          :desc="item.desc"
          :title="item.name"
          :thumb="item.imgSrc"
        />
        
        <!-- 进步器 -->
        <van-stepper v-model="item.num" v-if="isShowStepper" />
      </van-checkbox>
    </van-checkbox-group>
    
    
    <van-submit-bar
      :price="totalPrice*100"
      :button-text="isShowStepper?'删除':'结算'"
      @submit="delGoods"
      :button-color="isShowStepper?'#00c3f5':'#f0415f'"
    >
      <van-checkbox v-model="checkedAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
// import { cartData } from "@/data/cart.js";
export default {
  data() {
    return {
      // 初始数组，全部isClick都为true
      // CartData: cartData,
      //已选中的数组
      result: [],
      isShowStepper: false,
    };
  },
  created() {
    // console.log(this.CartData);
    this.result = [];
    this.$store.state.cartArr.map((val) => {
      if (val.isClick) {
        this.result.push(val.id);
        // console.log(this.result);
      }
    });
    
  },
  computed: {
    //  ...mapState(["cartArr"]),
    checkedAll: {
      get() {
        return this.result.length == this.$store.state.cartArr.length ? true : false;
      },
      set(val) {
        // console.log(val);
        this.result = [];
        if (val) {
          this.$store.state.cartArr.map((item) => {
            item.isClick = true;
            this.result.push(item.id);
          });
        } else {
          this.$store.state.cartArr.map((item) => {
            item.isClick = false;
          });
        }
      },
    },
    // 计算总价
    totalPrice() {
      let total = 0;
      this.$store.state.cartArr.map((e) => {
        //  只计算当前已经被选中的项的价格
        if (e.isClick) {
          total += e.price * e.num;
        }
      });
      return total;
    },
  },
  methods: {
    //   返回上一页
    gobacktohome() {
      this.$router.go(-1);
    },
    // 是否显示进步器的方法
    edit() {
      this.isShowStepper = !this.isShowStepper;
    },
    onSubmit() {},
    // 点击改变复选框选中状态
    ChangeChecked(id) {
      if (!this.isShowStepper) {
        //   遍历数组，在数组找到当前点击项的id
        this.$store.state.cartArr.forEach((e) => {
          if (e.id == id) {
            //   改变选中状态
            e.isClick = !e.isClick;
          }
        });
        // console.log(this.CartData);
      }
    },
    // 删除列表所有
    delGoods() {
      this.$store.state.cartArr = [];
    },
  },
};
</script>
 
<style lang = "less" scoped>
.cart {
  background-color: #eee;
  width: 100%;
}
.header {
  height: 0.45rem;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.25rem;
  h3 {
    font-weight: normal;
    font-size: 0.16rem;
  }
  span {
    font-size: 0.12rem;
    color: #999;
    margin-right: 0.1rem;
  }
}
.van-submit-bar__button {
  height: 0.5rem;
  border-radius: 0;
}
.van-submit-bar__bar {
  padding-right: 0;
}
.van-checkbox {
  padding: 0.1rem 4%;
  background-color: #fff;
  margin-top: 2%;
}
/deep/.van-checkbox__label {
  width: 100%;
}
/deep/.van-card {
  background-color: #fff;
}
.van-card__title {
  font-size: 0.14rem;
}
.van-card__desc {
  color: #999;
  line-height: 0.25rem;
}
.van-card__price {
  color: red;
}
/deep/.van-checkbox__label {
  position: relative;
  .van-stepper {
    position: absolute;
    right: 0;
    bottom: 0.15rem;
  }
}
</style>