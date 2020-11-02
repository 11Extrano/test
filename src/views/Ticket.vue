<template>
  <div calss="ticket">
    <div class="TicketThead">
      <van-icon name="arrow-left" @click="gotostore" />
      <h3>我的优惠券</h3>
      <van-icon name="wap-home-o" @click="gotohome" />
    </div>
    <div class="ticketBar"></div>
    <van-tabs
      v-model="active"
      color="#00c3f5"
      line-height="2px"
      line-width="50px"
      title-active-color="#00c3f5"
    >
      <van-tab title="可使用">
        <p>你还没有可使用的优惠券</p>
      </van-tab>
      <van-tab title="已使用">
        <p>你还没有已使用的优惠券</p>
      </van-tab>
      <van-tab title="已过期">
        <p>你还没有已过期的优惠券</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      gotohome(){
          this.$router.push('/home');
      },
      gotostore(){
          this.$router.go(-1);
      }
  }
};
</script>
 
<style lang = "less" scoped>
.ticket {
  background-color: #eee;
}
.TicketThead {
  background-color: #fff;
  border-top: 1px solid #ccc;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.25rem;
  padding: 0 4%;
  h3 {
    font-weight: normal;
    font-size: 0.16rem;
  }
}
/deep/.van-tab__pane{
    p{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        color: #999;
        font-size: .16rem;
    }
}
</style>