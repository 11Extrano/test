<template>
  <div class="serve">
    <van-cell is-link @click="servePopup">
      <van-row type="flex">
        <van-col span="6">
          <van-icon name="passed" />花呗分期
        </van-col>
        <van-col span="6">
          <van-icon name="passed" />顺丰发货
        </van-col>
        <van-col span="10">
          <van-icon name="passed" />7天无理由退货
        </van-col>
      </van-row>
    </van-cell>
    <van-popup v-model="serveShow" closeable position="bottom" :style="{ height: '80%' }">
      <div class="ServeContent">
        <div class="Servetitle">服务说明</div>
        <ul>
          <li>
            <h3>
              <van-icon name="comment-circle" />花呗分期
            </h3>
            <p>花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。</p>
          </li>
          <li>
            <h3>
              <van-icon name="comment-circle" />顺丰发货
            </h3>
            <p>该商品顺丰发货，顺丰无法到达的地区会安排转寄其他快递。</p>
          </li>
          <li>
            <h3>
              <van-icon name="comment-circle" />花7天无理由退货
            </h3>
            <p>自您的订单签收之日7个自然日之内（含），在商品完好的情况下，可进行无理由退货。</p>
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
        serveShow: false
    };
  },
  methods: {
    servePopup() {
      this.serveShow = !this.serveShow;
    },
  },
};
</script>
 
<style lang = "less" scoped>
 .serve {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #ccc;
      font-size: 0.12rem;
      height: 0.5rem;
      padding-right: 0.2rem;
      .van-cell__value {
        width: 70%;
        color: #666;
      }
      .van-cell {
        padding: 0.1rem 0;
      }
      .ServeContent {
        .Servetitle {
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          font-size: 0.18rem;
        }
        ul {
          padding: 4%;
          li {
            h3 {
              color: #62d9fb;
              font-size: 0.14rem;
            }
            p {
              font-size: 0.14rem;
              color: #999;
              line-height: 0.16rem;
            }
          }
        }
      }
    }

</style>