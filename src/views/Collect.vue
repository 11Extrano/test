<template>
  <div class="collect">
    <div class="CollectHead">
      <van-icon name="arrow-left" @click="gotostore" />
      <h3>我的收藏</h3>
      <van-icon name="wap-home-o" @click="gotohome" />
    </div>
    <ul>
      <li v-for="item in $store.state.collectArr" :key="item.name">
        <van-card :price="item.price.toFixed(2)" :title="item.name" :thumb="item.imgSrc" />
        <van-icon name="delete"  @click="delectCollect(item.collectId)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 已收藏的数组
      collected: [],
    };
  },
  methods: {
    gotostore() {
      this.$router.go(-1);
    },
    gotohome() {
      this.$router.push("/home");
    },
    delectCollect(id){
        // this.collected.splice(this.collected.indexOf(id),1);
        this.$store.commit('delCollect',id)
    }
  },
  created() {
    console.log();
    // this.collected = this.$store.state.collectArr;
  },
};
</script>
 
<style lang = "less" scoped>
.collect {
  background-color: #fff;
  height: 100vh;
}
.CollectHead {
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
ul{
    li{
        position: relative;
        .van-icon{
            position: absolute;
            bottom: .2rem;
            right: .2rem;
            font-size: .2rem;
        }
        .van-card{
            background-color: #fff;
        }
    }
}
</style>