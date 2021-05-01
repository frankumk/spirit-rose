import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: []
  },
  mutations: {
    SET_INVENTORY(state, items){
      state.inventory = items;
    },
  },
  actions: {

    async getInventory({ commit }){
      try{
        const items = (await axios.get('/api/inventory')).data
        console.log(items)
        commit("SET_INVENTORY", items)

      }catch(ex){
        console.log(`ex: `, ex)
      }
    }
  },
  modules: {
  }
})
