import firebase from 'firebase';
import { GetterTree, Module, ActionTree, MutationTree } from 'vuex';

import { IRootState } from '@/store';

export interface IAuthState {
  token: string | null;
  authenticated: boolean;
}

const authState: IAuthState = {
  token: null,
  authenticated: false
};

const getters: GetterTree<IAuthState, IRootState> = {
  token: (state) => state.token,
  isAuthenticated: (state) => state.authenticated
};

const actions: ActionTree<IAuthState, IRootState> = {
  async authSignup({ commit }, { email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const token = await firebase.auth().currentUser.getIdToken();
      commit('signin');
      commit('setToken', token);
    } catch (e) {
      // tslint:disable-next-line
      console.log(e);
    }
  },
  async authSignin({ commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const token = await firebase.auth().currentUser.getIdToken();
      commit('signin');
      commit('setToken', token);
    } catch (e) {
      // tslint:disable-next-line
      console.log(e);
    }
  },
  async logout({ commit }) {
    try {
      await firebase.auth().signOut();
      commit('logout');
    } catch (e) {
      // tslint:disable-next-line
      console.log(e);
    }
  }
};

const mutations: MutationTree<IAuthState> = {
  signin(state) {
    state.authenticated = true;
  },
  logout(state) {
    state.authenticated = false;
    state.token = null;
  },
  setToken(state, token) {
    state.token = token;
  }
};

export const authModule: Module<IAuthState, IRootState> = {
  namespaced: true,
  state: authState,
  getters,
  actions,
  mutations
};
