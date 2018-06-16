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

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import RecipeList from '@/components/RecipeList.vue';

@Component({
  components: {
    RecipeList
  }
})
export default class Recipes extends Vue {}
</script>

<style scoped>
</style>
