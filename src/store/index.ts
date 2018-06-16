import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { recipeModule, authModule, shoppingListModule } from '@/store/modules';

Vue.use(Vuex);

export interface IRootState {
  // shoppingListModule: shoppingListModule;
  // authModule: authModule;
  // recipeModule: recipeModule;
}

const store: StoreOptions<IRootState> = {
  modules: {
    shoppingListModule,
    authModule,
    recipeModule,
  },
  state: {},
  mutations: {},
  actions: {},
};

export default new Vuex.Store<IRootState>(store);
