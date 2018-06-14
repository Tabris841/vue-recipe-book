import dataStorage from '@/services/data-storage';
import { Ingredient, Recipe } from '@/models';

const state = {
  recipes: [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ]
};

const getters = {
  recipes: state => state.recipes
};

const actions = {
  recipeFetch({ commit }) {
    dataStorage.getRecipes().then(recipes => commit('setRecipes', recipes));
  },
  recipeStore(_, recipes) {
    dataStorage.storeRecipes(recipes);
  }
};

const mutations = {
  setRecipes(state, recipes) {
    state = { ...state, recipes: [...recipes] };
  },
  addRecipe(state, recipe) {
    state.recipes = [...state.recipes, recipe];
  },
  updateRecipe(state, payload) {
    const recipe = state.recipes[payload.index];
    const updatedRecipe = { ...recipe, ...payload.updatedRecipe };
    const recipes = [...state.recipes];
    recipes[payload.index] = updatedRecipe;
    state = { ...state, recipes: [...recipes] };
  },
  deleteRecipe(state, index) {
    const oldRecipes = [...state.recipes];
    oldRecipes.splice(index, 1);
    state = { ...state, recipes: oldRecipes };
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
