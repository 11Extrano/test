<template>
  <div>
    <ul>
      <li v-for="(item,index) in nonpayNewArr" :key="index">
        <div class="nonpayhead">
          <span>供应商：魅族</span>
          <span class="nonpay">{{item.exchangeStatus}}</span>
        </div>
        <div class="nonpayContent">
          <van-card :price="item.price" :desc="item.desc" :title="item.name" :thumb="item.imgSrc" />
          <span class="num">x 1</span>
          <p>
            共1件商品 合计：
            <span class="price">￥{{item.price}}</span>（免运费）
          </p>
          <div class="pay">
            <van-button color="#ccc" plain class="cancel" @click="cancelBill">取消订单</van-button>
            <van-button color="#f0415f" @click="payBillNow">立即付款</van-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nonpayArr: [
        {
          imgSrc:
            "https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgkGAGR7oAAlO1raU1PA201.png480x480.jpg",
          name: "魅族16s",
          price: 2699,
          desc: "全网通公开版 碳纤黑 6+128GB",
          exchangeStatus: "待付款",
        },
        {
          imgSrc:
            "https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png",
          name: "魅族 16th Plus",
          price: 2698,
          desc: "全网通公开版 静夜黑 6+128GB",
          exchangeStatus: "交易完成",
        },
        {
          imgSrc:
            "https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png",
          name: "魅族 16th Plus",
          price: 2698,
          desc: "全网通公开版 静夜黑 6+128GB",
          exchangeStatus: "交易关闭",
        },
      ],
      nonpayNewArr: [],
    };
  },
  created() {
    console.log(this.$store.state.boughtArr);
    this.nonpayNewArr = this.nonpayArr.concat(this.$store.state.boughtArr);
    console.log(this.nonpayNewArr);
  },
  methods: {
    cancelBill() {
      this.$toast({
        message: "不能取消订单",
        icon: "close",
      });
    },
    payBillNow() {
      this.$toast({
        message: "暂不能付款",
        icon: "close",
      });
    },
  },
};
</script>
 
<style lang = "less" scoped>
ul {
  width: 100%;
  background-color: #eee;
  li {
    background-color: #fff;
    margin-top: 0.1rem;
    .nonpayhead {
      padding: 0 2%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .nonpay {
        color: #f0415f;
      }
    }
    .nonpayContent {
      padding: 4%;
      position: relative;
      
      .van-card {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        .van-card__title {
          font-size: 0.16rem;
        }
        .van-card__desc {
          line-height: 0.3rem;
        }
        .van-card__price {
          color: #f0415f;
        }
      }
      .num {
        position: absolute;
        right: 0.2rem;
        top: 0.3rem;
      }
      p {
        text-align: right;
        line-height: 0.5rem;
        border-bottom: 1px solid #ccc;

        .price {
          color: #f0415f;
        }
      }
      .pay {
        text-align: right;
        .cancel {
          .van-button__text {
            color: #333;
          }
        }
        .van-button {
          margin-left: 0.1rem;
          margin-top: 0.1rem;
          border-radius: 0.04rem;
          height: 0.35rem;
          width: 1rem;
        }
      }
    }
  }
}
</style>