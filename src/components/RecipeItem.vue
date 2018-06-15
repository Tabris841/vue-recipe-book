<template>
  <b-list-group-item :to="{ name: 'recipeDetail', params: { id: index } }">
    <img :src="recipe.imagePath"
         :alt="recipe.name">
    <h3>{{recipe.name}}</h3>
    <p>{{recipe.description}}</p>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'RecipeItem',
  props: {
    recipe: Object,
    index: Number
  }
};
</script>

<style lang="scss" scoped>
img {
  max-height: 50px;
}
</style>
