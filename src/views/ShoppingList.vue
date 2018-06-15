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

<script>
import { mapMutations, mapGetters } from 'vuex';

import ShoppingEdit from '@/components/ShoppingEdit';

export default Vue.extend({
  name: 'ShoppingList',
  components: {
    ShoppingEdit
  },
  methods: { ...mapMutations('shoppingListModule', ['startEdit']) },
  computed: { ...mapGetters('shoppingListModule', ['ingredients']) }
});
</script>

<style scoped>
</style>
