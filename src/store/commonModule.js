import {
  getProduct
} from '../api';

export default {
  namespaced: true,
  strict: true,
  state: {
    productsInfo: [],
    carts: [],
  },
  actions: {
    getProduct({ commit }, payload) {
      getProduct(payload).then((res) => {
        commit('GET_PRODUCT', res)
      })
    },
    getCarts({ commit }, payload) {
      commit('GET_CARTS', payload)
    }
  },
  mutations: {
    GET_PRODUCT(state, payload) {
      state.productsInfo = payload
    },
    GET_CARTS(state, payload) {
      state.carts = payload
    }
  },
  getters: {
    productsInfo: (state) => state.productsInfo,
    carts: (state) => state.carts,
  },
}
