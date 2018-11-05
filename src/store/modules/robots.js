import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((res) => {
          commit('updateParts', res.data);
        })
        .catch((err) => {
          console.error('Error fetching data about parts', err);
        });
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];

      axios.post('/api/cart', cart)
        .then(() => {
          commit('addRobotToCart', robot);
        });
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale);
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
};
