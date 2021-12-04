import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

// holds your root state
export const state = () => ({
  products: []
})

// contains your actions
export const actions = {
   async loadProducts ({ commit }) {
     try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // JSON responses are automatically parsed.
        commit('SET_ITEMS', response.data)
      }
      catch (error) {
       console.log(error);
     }
  }

}
// contains your mutations
export const mutations = {
  SET_ITEMS(state, products) {
    state.products = products
  }
}
// your root getters
export const getters = {
  getProducts(state) {
    return state.products;
  }
}
