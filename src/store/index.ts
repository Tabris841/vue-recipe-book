import Vue from 'vue';
import Vuex from 'vuex';

import shoppingListModule from './modules/shopping-list';
import authModule from './modules/auth';
import recipeModule from './modules/recipe';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingListModule,
    authModule,
    recipeModule,
  },
  state: {},
  mutations: {},
  actions: {},
});
