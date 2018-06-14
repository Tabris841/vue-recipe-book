import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueFire from 'vuefire';
import firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(VueFire);

const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyBFSLlimrqMipqKXmn8cID1_6MVq4m5BTk',
    authDomain: 'recipe-book-7ea07.firebaseapp.com',
    databaseURL: 'https://recipe-book-7ea07.firebaseio.com',
    projectId: 'recipe-book-7ea07',
    storageBucket: 'recipe-book-7ea07.appspot.com',
    messagingSenderId: '85417034442'
  })
  .database();

const recipeRef = db.ref('recipes');

new Vue({
  router,
  store,
  firebase: {
    recipeRef
  },
  render: h => h(App)
}).$mount('#app');
