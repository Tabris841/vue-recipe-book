import firebase from 'firebase';

export interface IAuthState {
  token: string | null;
  authenticated: boolean;
}

const state: IAuthState = {
  token: null,
  authenticated: false,
};

const getters = {
  token: (state: IAuthState) => state.token,
  isAuthenticated: (state: IAuthState) => state.authenticated,
};

const actions = {
  async authSignup({ commit }, { email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const token = await firebase.auth().currentUser.getIdToken();
      commit('signin');
      commit('setToken', token);
    } catch (e) {
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
      console.log(e);
    }
  },
  async logout({ commit }) {
    try {
      await firebase.auth().signOut();
      commit('logout');
    } catch (e) {
      console.log(e);
    }
  },
};

const mutations = {
  signin(state: IAuthState) {
    state.authenticated = true;
  },
  logout(state: IAuthState) {
    state.authenticated = false;
    state.token = null;
  },
  setToken(state, token) {
    state.token = token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
