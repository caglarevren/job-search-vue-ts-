import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import baseUrl from '@/constants/constants'

Vue.use(Vuex)

export default new Vuex.Store({

  /* ---------------------------------- state --------------------------------- */
  state: {
    jobs: [],
  },

  /* --------------------------------- getters -------------------------------- */
  getters: {
  },

  /* -------------------------------- mutations ------------------------------- */
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
  },

  /* --------------------------------- actions -------------------------------- */
  actions: {
    getJobs({ commit }) {
      try {
        axios.get(baseUrl)
        .then(response => {
          commit('SET_JOBS', response.data)
        })
      } catch (err) {
        console.log(err)
      }
    },
  },

  /* --------------------------------- modules -------------------------------- */
  modules: {
  }
  
})
