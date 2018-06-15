<template>
  <b-container>
    <b-row>
      <b-col cols="5">
        <RecipeList />
      </b-col>
      <b-col cols="7">
        <transition name="fade"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipeList from '@/components/RecipeList';

export default {
  name: 'Recipes',
  components: {
    RecipeList
  }
};
</script>

<style scoped>
</style>
