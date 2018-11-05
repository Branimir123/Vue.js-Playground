import Vue from 'vue';
import Vuex from 'vuex';
import robots from './modules/robots';
import users from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots,
    users,
  },
  getters: {
    foo(state) {
      return `root-getter/${state.foo}`;
    },
  },
});
