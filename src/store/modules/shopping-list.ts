import { GetterTree, Module, ActionTree, MutationTree } from 'vuex';

import { Ingredient } from '@/models/ingredient.model';
import { IRootState } from '@/store';

export interface IShoppingList {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const shoppingListState: IShoppingList = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

const getters: GetterTree<IShoppingList, IRootState> = {
  ingredients: (state) => state.ingredients,
  editedIngredientIndex: (state) => state.editedIngredientIndex,
  editedIngredient: (state) => state.editedIngredient,
};

const actions: ActionTree<IShoppingList, IRootState> = {};

const mutations: MutationTree<IShoppingList> = {
  addIngredient(state, ingredient) {
    state.ingredients = [...state.ingredients, ingredient];
  },
  addIngredients(state, ingredients) {
    state.ingredients = [...state.ingredients, ...ingredients];
  },
  updateIngredient(state, ingredient) {
    const ingredientToUpdate = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = { ...ingredientToUpdate, ...ingredient };
    const ingredients = [...state.ingredients];
    ingredients[state.editedIngredientIndex] = updatedIngredient;

    state.ingredients = ingredients;
    state.editedIngredient = null;
    state.editedIngredientIndex = -1;
  },
  deleteIngredient(state) {
    const newIngredients = state.ingredients.slice();
    newIngredients.splice(state.editedIngredientIndex, 1);

    state.ingredients = newIngredients;
    state.editedIngredient = null;
    state.editedIngredientIndex = -1;
  },
  startEdit(state, index) {
    state.editedIngredient = { ...state.ingredients[index] };
    state.editedIngredientIndex = index;
  },
  stopEdit(state) {
    state.editedIngredient = null;
    state.editedIngredientIndex = -1;
  },
};

export const shoppingListModule: Module<IShoppingList, IRootState> = {
  namespaced: true,
  state: shoppingListState,
  getters,
  actions,
  mutations,
};
