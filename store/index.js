import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

// holds your root state
export const state = () => ({
  products: [],
  cart: []
})

// contains your actions
export const actions = {
   async loadProducts ({ commit }) {
     try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // JSON responses are automatically parsed.

       response.data.forEach((product) => {
         product.inventory = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
       })
        commit('SET_ITEMS', response.data)
      }
      catch (error) {
       console.log(error);
     }
  },
  addToCart({ state, commit }, product) {
    console.log('Action - ')
    console.log(product)
    // commit('pushProductToCart', product)
    //product.inventory = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if (product.inventory > 0) {
      console.log(product)
      const cartItem = state.cart.find(product => product.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
    }
  }


}
// contains your mutations
export const mutations = {
  SET_ITEMS(state, products) {
    state.products = products
  },
  pushProductToCart(state, product) {
    //Vue.set(state.product, Math.floor(Math.random() * (10 - 1 + 1)) + 1)

    state.cart.push({
      product,
      quantity: 1
    })
  },
   incrementItemQuantity (state, { id }) {
    const cartItem = state.cart.find(product => product.id === id)
    cartItem.quantity++
  }
}
// your root getters
export const getters = {
  getProducts(state) {
    return state.products;
  },
  getShoppingCart(state) {
    return state.cart;
  }
}
