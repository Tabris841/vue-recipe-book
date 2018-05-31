import Vue from 'vue';
import Vuex from 'vuex';

import shoppingListModule from './modules/shopping-list';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingListModule
  },
  state: {},
  mutations: {},
  actions: {}
});
