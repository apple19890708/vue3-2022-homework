import {
  getProduct,
  getCart
} from '../api';

export default {
  namespaced: true,
  strict: true,
  state: {
    productsInfo: [],
    carts: [],
    favoriteFoders: [],
    toastMessage: {},
  },
  actions: {
    getProduct({ commit }, payload) {
      getProduct(payload).then((res) => {
        commit('GET_PRODUCT', res)
      })
    },
    getCart({ commit }) {
      getCart()
        .then((res) => {
          commit('GET_CARTS', res.data)
        })
    }
  },
  mutations: {
    GET_PRODUCT(state, payload) {
      state.productsInfo = payload
    },
    GET_CARTS(state, payload) {
      state.carts = payload
    },
    SAVE_FAVORIE_FOLDERS(state, payload) {
      state.favoriteFoders = payload
    },
    SAVE_TOAST_MESSAGE(state, { res, status = '更新' }) {
      console.log('res', res)
      if (res.success) {
        state.toastMessage = {
          style: 'success',
          title: `${status}成功`,
        }
      } else {
        // 有些訊息是字串，有些則是陣列，在此統一格式
        const message = typeof res.data.message === 'string'
          ? [res.data.message] : res.data.message;
        state.toastMessage = {
          style: 'danger',
          title: `${status}失敗`,
          content: message.join('、'),
        }
      }
    }
  },
  getters: {
    productsInfo: (state) => state.productsInfo,
    carts: (state) => state.carts,
    favoriteFoders: (state) => state.favoriteFoders,
    toastMessage: (state) => state.toastMessage

  },
}
