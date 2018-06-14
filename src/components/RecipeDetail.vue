<template>
  <b-container>
    <b-row>
      <img 
        :src="recipes[id].imagePath"
        :alt="recipes[id].name">
    </b-row>
    <b-row><h1>{{recipes[id].name}}</h1></b-row>
    <b-row>
       <b-dropdown text="Manage Recipe" variant="primary">
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
        <b-list-group-item
          v-for="(ingredient, index) of recipes[id].ingredients" 
          :key="index"
        >
          {{ ingredient.name }} - {{ ingredient.amount }}
        </b-list-group-item>
      </b-list-group>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RecipeDetail',
  data: () => ({
    id: null
  }),
  methods: {
    onAddToShoppingList() {},
    onEditRecipe() {},
    onDeleteRecipe() {}
  },
  computed: {
    ...mapGetters('recipeModule', ['recipes'])
  },
  created() {
    this.id = this.$route.params['id'];
  },
  watch: {
    $route() {
      this.id = this.$route.params['id'];
    }
  }
};
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
