<template>
  <div>
    <div class="talk_con">
      <div class="talk_show" id="words">
        <div :class="item.who =='A' ? 'atalk':'btalk'" v-for="(item,index) in arr" :key="index">
          <van-icon name="chat" class="chat" v-if="item.who=='A'" />
          <span class="answer">{{item.words}}</span>
        </div>
      </div>
      <div class="talk_input">
        <input
          type="text"
          placeholder="请输出你的问题"
          class="talk_word"
          id="talkwords"
          v-model="iptVal"
          @keyup.enter="add"
        />
        <van-icon name="play" class="talk_sub" @click="add" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [{ who: "A", words: "你好，请问有什么可以帮到你的吗" }],
      iptVal: "",
    };
  },
  methods: {
    add() {
      if (this.iptVal) {
        this.arr.push({
          who: this.selVal == "0" ? "A" : "B",
          words: this.iptVal,
        });
        this.iptVal = "";
        setTimeout(() => {
          this.arr.push({ who: "A", words: "你好，请问有什么可以帮到你的吗" });
        }, 1000);
      }else{
           this.$toast('请输入你的问题');
      }
    },
  },
};
</script>
 
<style lang = "less" >
.talk_con {
  width: 100%;
  height: 100vh;
  background: #f2f2f2;
}
.talk_show {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.talk_input {
  width: 100%;
  height: 9vh;
  padding: 0.15rem 0.15rem;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
}
.talk_word {
  flex: 1;
  width: 100%;
  border: 0;
  height: 0.34rem;
  background-color: #f2f2f2;
  border-radius: 0.2rem;
  text-indent: 0.15rem;
}
.talk_sub {
  display: inline-block;
  padding-left: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
  font-size: 0.4rem;
  color: #ddd;
}
.atalk {
    padding: .2rem .15rem;
  .chat{
      width: .3rem;
      height: .3rem;
      line-height: .3rem;
      background-color: #198ded;
      color: #fff;
      font-size: .2rem;
      text-align: center;
      border-radius: 50%;
      margin-right: .15rem;
  }
}
.atalk span {
  display: inline-block;
  background: #fff;
  border-radius: 0 .2rem .2rem .2rem ;
  color: #000;
  padding: .1rem .1rem;
}
.btalk {
 
  text-align: right;
padding: .2rem .15rem;
}
.btalk span {
  display: inline-block;
  background: blue;
  border-radius: .2rem 0 .2rem .2rem;
  color: #fff;
  padding: .1rem .1rem;
}
</style>