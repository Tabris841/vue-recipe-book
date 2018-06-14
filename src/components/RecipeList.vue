<template>
  <div>
    <b-button variant="primary">New Recipe</b-button>
    <hr/>
    <b-list-group>
      <RecipeItem 
        v-for="(recipe, index) of recipes"
       :recipe="recipe" 
       :key="index"
       :index="index"/>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import RecipeItem from '@/components/RecipeItem';

export default {
  name: 'RecipeList',
  components: {
    RecipeItem
  },
  computed: {
    ...mapGetters('recipeModule', ['recipes'])
  }
};
</script>
