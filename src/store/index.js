import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    itemsData: [],
  },

  getters: {
    ITEMS(state) {
      return state.itemsData;
    },
  },

  mutations: {
    SET_ITEMS_TO_STATE: (state, itemsData) => {
      state.itemsData = itemsData;
    },
  },

  actions: {
    GET_ITEMS_FROM_DB({ commit }) {
      return axios('http://localhost:3000/items', {
        method: 'GET',
      })
        .then((response) => {
          commit('SET_ITEMS_TO_STATE', response.data);
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
});
