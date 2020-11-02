<template>
  <div class="popup">
    <div class="searchHead">
      <van-icon name="arrow-left" class="arrow" @click="gotohome" />
      <van-search v-model="iptVal" class="search" />
      <span @click="addHistory">搜索</span>
    </div>

    <div class="hotSearch">
      <h3>大家都在搜</h3>
      <van-tag plain type="primary" round text-color="#666" size="large" @click="gotoSearch" ref='op'>魅族POP2</van-tag>
    </div>

    <div class="history">
      <div class="top">
        <h3>历史记录</h3>
        <van-icon name="delete" @click="delProduct" class="del" />
      </div>
      <ul v-if="showHistory">
        <li v-for="item in historyList" :key="item.id">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iptVal: "",
      showHistory: true,
      historyList: [{ id: 0, text: "魅族POP2" }],
    };
  },
  methods: {
    gotohome() {
      this.$router.go(-1);
    },
    delProduct() {
      this.showHistory = false;
    },
    addHistory() {
      this.historyList.push({ id: this.historyList.length, text: this.iptVal });
    },
    gotoSearch() {
      this.$toast({
        message: "暂不能搜索",
        icon: "close",
      });
      this.historyList.push({ id: this.historyList.length, text: this.$refs.op.innerHTML });
    },
  },
};
</script>
 
<style lang = "less" >
.popup {
  width: 100%;
  height: 100%;
  background-color: #eee;
  position: absolute;
  top: 0;
  z-index: 99;
}
.searchHead {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0.1rem 3%;
  .arrow {
    width: 8%;
    font-size: 0.3rem;
    color: #666;
  }
  .search {
    flex: 1;
    width: 100%;
    .van-cell {
      height: 30px;
    }
    ::before {
      font-size: 0.24rem;
    }
    .van-search__content {
      border-radius: 20px;
      background-color: #eee;
    }
  }
  span {
    width: 15%;
  }
}

.hotSearch {
  width: 100%;
  height: 1.5rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  padding: 0.2rem 0 0 0.2rem;
  h3 {
    font-weight: normal;
    margin-bottom: 0.1rem;
  }
  .van-tag {
    padding: 0.05rem 0.2rem;
  }
}

.history {
  padding: 0 0.2rem;
  background-color: #fff;
  margin-top: 0.2rem;
  height: 100vh;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
    h3 {
      font-weight: normal;
    }
    .del {
      font-size: 0.2rem;
    }
  }
  ul {
    border-top: 1px solid #ccc;
    li {
      border-bottom: 1px solid #ccc;
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.16rem;
    }
  }
}
</style>