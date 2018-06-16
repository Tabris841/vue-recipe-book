<template>
  <b-container>
    <b-row>
      <img :src="recipes[id].imagePath"
           :alt="recipes[id].name">
    </b-row>
    <b-row>
      <h1>{{recipes[id].name}}</h1>
    </b-row>
    <b-row>
      <b-dropdown text="Manage Recipe"
                  variant="primary">
        <b-dropdown-item @click="onAddToShoppingList">To Shopping List</b-dropdown-item>
        <b-dropdown-item @click="onEditRecipe">Edit Recipe</b-dropdown-item>
        <b-dropdown-item @click="onDeleteRecipe">Delete Recipe</b-dropdown-item>
      </b-dropdown>
    </b-row>
    <b-row>
      <div class="description">{{recipes[id].description}}</div>
    </b-row>
    <b-row>
      <b-list-group>
        <b-list-group-item v-for="(ingredient, index) of recipes[id].ingredients"
                           :key="index">
          {{ ingredient.name }} - {{ ingredient.amount }}
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </b-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'RecipeDetail',
  data() {
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    onAddToShoppingList() {
      this.addIngredients(this.recipes[this.id].ingredients);
    },
    onEditRecipe() {
      this.$router.push({ name: 'recipeEdit', params: { id: this.id } });
    },
    onDeleteRecipe() {
      this.deleteRecipe(this.id);
      this.$router.push({ name: 'recipes' });
    },
    ...mapMutations('recipeModule', ['deleteRecipe']),
    ...mapMutations('shoppingListModule', ['addIngredients'])
  },
  computed: {
    ...mapGetters('recipeModule', ['recipes'])
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  max-height: 300px;
}
.description {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
}
</style>
