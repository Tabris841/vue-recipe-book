import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import Recipes from '@/views/Recipes';
import ShoppingList from '@/views/ShoppingList';
import RecipeStart from '@/components/RecipeStart';
import RecipeDetail from '@/components/RecipeDetail';
import RecipeEdit from '@/components/RecipeEdit';

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
      component: Recipes,
      children: [
        {
          path: '',
          name: 'recipes',
          component: RecipeStart
        },
        {
          path: '/new',
          component: RecipeEdit
        },
        {
          path: ':id',
          component: RecipeDetail
        },
        {
          path: ':id/edit',
          component: RecipeEdit
        }
      ]
    },
    {
      path: '/shopping-list',
      name: 'shoppingList',
      component: ShoppingList
    }
  ]
});
