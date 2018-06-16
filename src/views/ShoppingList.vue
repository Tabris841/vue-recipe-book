<template>
  <div>
    <ShoppingEdit></ShoppingEdit>
    <hr/>
    <b-list-group>
      <b-list-group-item v-for="(ingredient, index) in ingredients"
                         :key="index"
                         @click="startEdit(index)"
                         style="cursor: pointer">
        {{ ingredient.name }} ({{ ingredient.amount }})
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

import ShoppingEdit from '@/components/ShoppingEdit.vue';
import { Ingredient } from '@/models';

const namespace: string = 'shoppingListModule';

@Component({
  components: {
    ShoppingEdit
  }
})
export default class ShippingList extends Vue {
  @Getter('ingredients', { namespace })
  private ingredients: Ingredient[];

  @Mutation('startEdit', { namespace })
  private startEdit: (index: number) => void;
}
</script>

<style scoped>
</style>
