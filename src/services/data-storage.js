import axios from 'axios';

import Store from '@/store';

axios.defaults.baseURL = 'https://recipe-book-7ea07.firebaseio.com';

axios.interceptors.request.use(config => {
  config.params = { auth: Store.getters['authModule/token'] };
  return config;
});

export default {
  getRecipes() {
    return new Promise(resolve => {
      axios.get('/recipes.json').then(response => {
        resolve(response.data);
      });
    });
  },
  storeRecipes(recipes) {
    return new Promise(resolve => {
      axios.put('/recipes.json', recipes).then(response => {
        resolve(response.data);
      });
    });
  }
};
