<template>
  <div class="official">
    <div class="OfficialHead">
      <van-nav-bar title="魅族官网">
        <template #right>
          <van-icon name="cross" size="22" color="#333" @click="gotoHome" />
        </template>
      </van-nav-bar>
    </div>

    <ul>
      <li v-for="(item,index) in toggleBarData.lists_0" :key="index">
        <router-link :to="item.path">
          <img :src="item.imgSrc" alt />
        </router-link>
        <span>{{item.text}}</span>
      </li>
    </ul>

    <ul class="center">
      <li v-for="(item,index) in toggleBarData.lists_1" :key="index">
        <a :href="item.path">
          <img :src="item.imgSrc" alt />
        </a>
        <span>{{item.text}}</span>
      </li>
    </ul>

    <ul>
      <li v-for="(item,index) in toggleBarData.lists_2" :key="index"  @click='gotoOfficialDetail(item.path.query.product)' >
          <img :src="item.imgSrc" alt />
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { toggleBarData } from "@/data/home";
export default {
  data() {
    return {
      toggleBarData: toggleBarData,
    };
  },
  methods: {
    gotoHome() {
      this.$router.go(-1);
    },
    gotoOfficialDetail(detail){
      this.$router.push('/commodity?product=' + detail);
    }
  },
};
</script>
 
<style lang = "less" scoped>
.official {
  height: 100vh;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 99;
}
.OfficialHead {
  padding: 2% 2%;
  .van-nav-bar {
    &::after {
      display: none;
    }
  }
}
ul {
  padding: 5%;
  overflow: hidden;
  li {
    float: left;
    width: 25%;
    margin-bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 0.5rem;
    }
    span {
      font-size: 0.12rem;
    }
  }
}

.center {
  background-color: #fafafa;
}
</style>