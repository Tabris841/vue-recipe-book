import Vue from 'vue';
import Router from 'vue-router';

import store from './store/index';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import Recipes from '@/views/Recipes.vue';
import ShoppingList from '@/views/ShoppingList.vue';
import RecipeStart from '@/components/RecipeStart.vue';
import RecipeDetail from '@/components/RecipeDetail.vue';
import RecipeEdit from '@/components/RecipeEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
    },
    {
      path: '/recipes',
      component: Recipes,
      children: [
        {
          path: '',
          name: 'recipes',
          component: RecipeStart,
        },
        {
          path: '/new',
          name: 'recipeNew',
          component: RecipeEdit,
          beforeEnter: (to, from, next) => {
            if (store.state.authModule.authenticated) {
              next();
            } else {
              next(false);
            }
          },
        },
        {
          path: ':id',
          name: 'recipeDetail',
          component: RecipeDetail,
        },
        {
          path: ':id/edit',
          name: 'recipeEdit',
          component: RecipeEdit,
          beforeEnter: (to, from, next) => {
            if (store.state.authModule.authenticated) {
              next();
            } else {
              next(false);
            }
          },
        },
      ],
    },
    {
      path: '/shopping-list',
      name: 'shoppingList',
      component: ShoppingList,
    },
    { path: '*', redirect: '/' },
  ],
});
