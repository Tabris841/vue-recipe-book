<template>
  <div>
    <b-button variant="primary"
              @click="onNewRecipe">New Recipe</b-button>
    <hr/>
    <b-list-group>
      <RecipeItem v-for="(recipe, index) of recipes"
                  :recipe="recipe"
                  :key="index"
                  :index="index" />
    </b-list-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

import RecipeItem from '@/components/RecipeItem';

export default Vue.extend({
  name: 'RecipeList',
  components: {
    RecipeItem
  },
  methods: {
    onNewRecipe() {
      this.$router.push({ name: 'recipeNew' });
    }
  },
  computed: {
    ...mapGetters('recipeModule', ['recipes'])
  }
});
</script>
