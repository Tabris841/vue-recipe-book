import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: 'AIzaSyBFSLlimrqMipqKXmn8cID1_6MVq4m5BTk',
  authDomain: 'recipe-book-7ea07.firebaseapp.com',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
