import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
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
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
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
