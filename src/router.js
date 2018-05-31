import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home/Home';
import Recipes from './views/Recipes';
import ShoppingList from './views/shopping-list/ShoppingList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/shopping-list',
      name: 'shoppingList',
      component: ShoppingList
    }
  ]
});
