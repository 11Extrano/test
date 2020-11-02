import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartArr: [],
    collectArr: [],
    boughtArr: [],
    id: 0,
    collectstatus:false,
    collectId: 0
    
  },
  mutations: {
    // 加入购物车
    AddCart(state, payload) {
      let index = state.cartArr.findIndex(e => e.id == payload.id && e.desc == payload.desc)
      if (index == -1) {
        payload.id = ++state.id
        state.cartArr.push(payload);
        console.log(index)
      } else {
        state.cartArr[index].num += payload.num
        console.log("重复")
      }

    },
    // 收藏方法
    AddCollect(state, payload) {
      let index = state.collectArr.findIndex(e => e.name == payload.name)
      if (index == -1) {
        payload.collectId = ++state.collectId
        state.collectArr.push(payload);
      } else {
        state.collectArr.splice(index,1)
        console.log("重复")
      }
      console.log(state.collectArr)
    },
    // 修改收藏状态
    changeCollect(state,payload){
      let index = state.collectArr.findIndex(e => e.name == payload.name)
      if(index==-1){
        state.collectstatus = false
      }else{
        state.collectstatus = true;
      }
    },
    //删除方法
    delCollect(state,payload){
      let index = state.collectArr.findIndex(e => e.collectId == payload)
      state.collectArr.splice(index,1)  
    },
    // 购买方法
    AddtoBuy(state, payload) {
      state.boughtArr.push(payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
