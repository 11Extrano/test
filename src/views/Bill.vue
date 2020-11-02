<template>
  <div class="Bill">
    <div class="BillHead">
      <van-icon name="arrow-left" @click="gotostore" />
      <h3>我的订单</h3>
      <van-icon name="wap-home-o" @click="gotohome" />
    </div>

    <van-tabs v-model="activeBill" title-active-color="#00c3f5" color='#00c3f5'>
      <van-tab title="全部">
        <BillAll></BillAll>
      </van-tab>
      <van-tab title="待付款">
        <NonPayment></NonPayment>
      </van-tab>
      <van-tab title="待发货">
         <van-empty
            class="custom-image"
            image="http://codesohigh.com/meizu/images/packet.jpg"
            description="没有发货订单"
          />
      </van-tab>
      <van-tab title="待收货">
         <van-empty
            class="custom-image"
            image="http://codesohigh.com/meizu/images/packet.jpg"
            description="没有收货订单"
          />
      </van-tab>
      <van-tab title="退款/售后">
       <Refund></Refund>
       </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Refund from "@/components/Refund"
import NonPayment from "@/components/NonPayment"
import BillAll from "@/components/BillAll"
export default {
  data() {
    return {
      activeBill: 0,
    };
  },
  components:{
    Refund,NonPayment,BillAll
  },
  methods: {
    gotostore() {
      this.$router.go(-1);
    },
    gotohome() {
      this.$router.push("/home");
    },
  },
};
</script>
 
<style lang = "less" scoped>
.Bill {
  background-color: #eeeeee;
  height: 100vh;
}
.BillHead {
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.25rem;
  padding: 0 4%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  h3 {
    font-weight: normal;
    font-size: 0.16rem;
  }
}
.van-tab__pane{
 width: 100%;
 height: 100vh;
 background-color: #fff;
 margin-top: .1rem;
}
</style>