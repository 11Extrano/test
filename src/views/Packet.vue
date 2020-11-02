<template>
  <div class='packet'>
    <div class="Packethead">
      <van-icon name="arrow-left" @click="gotostore" />
      <h3>我的红包</h3>
      <van-icon name="wap-home-o" @click="gotostore" />
    </div>

    <div class="PacketBar">
      <van-tabs v-model="active" color="#00c3f5" line-height='2px' line-width='50px' title-active-color='#00c3f5'>
        <van-tab title="可使用">
          <van-empty
            class="custom-image"
            image="http://codesohigh.com/meizu/images/packet.jpg"
            description="没有可用红包"
          />
        </van-tab>
        <van-tab title="已使用">
            <van-empty
            class="custom-image"
            image="http://codesohigh.com/meizu/images/packet.jpg"
            description="没有已使用的红包"
          /></van-tab>
        <van-tab title="已过期"> 
            <van-empty
            class="custom-image"
            image="http://codesohigh.com/meizu/images/packet.jpg"
            description="没有已过期的红包"
          /></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    gotostore() {
      this.$router.go(-1);
    },
  },
};
</script>
 
<style lang = "less" scoped>
.packet{
    background-color: #fff;
    height: 100vh;
}
.Packethead {
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
.PacketBar {
  border-top: 1px solid #ccc;
}
 .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  /deep/.van-tabs__wrap{
      border-bottom: 1px solid #ccc;
  }
/deep/.van-tabs__line{
      bottom: 15px !important;
  }

</style>