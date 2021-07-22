import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: [],
    appointments: [],
    apptsAvailableOnDate: []
  },
  mutations: {
    SET_INVENTORY(state, items){
      state.inventory = items;
    },
    SET_APPOINTMENTS(state, appts){
      state.appointments = appts;
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
    },
    async getAppointments({ commit }){
      try{
        const appts = (await axios.get('/api/appointments')).data
        console.log(appts)
        commit("SET_APPOINTMENTS", appts)

      }catch(ex){
        console.log(`ex: `, ex)
      }
    },
    async bookAppt({ commit }, appt){
      try{
        console.log("date", appt)
        const appts = (await axios.put('/api/appointments', { date: appt.date, time: appt.time, name: appt.name, phone: appt.phone })).data
        console.log(appts)
        commit("SET_APPOINTMENTS", appts)

      }catch(ex){
        console.log(`ex: `, ex)
      }
    }

  },
  modules: {
  }
})
