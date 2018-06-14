import Vue from 'vue';
import Vuex from 'vuex';

import shoppingListModule from './modules/shopping-list';
import authModule from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingListModule,
    authModule
  },
  state: {},
  mutations: {},
  actions: {}
});
