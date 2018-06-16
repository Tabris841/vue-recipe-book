<template>
  <b-form @sumbit.prevent="onSubmit"
          autocomplete="off"
          novalidate>
    <b-form-row>
      <b-button variant="primary"
                type="submit"
                :style="{'margin-right': '10px'}"
                :disabled="$v.form.$invalid"
                @click.prevent="onSubmit">Save</b-button>
      <b-button variant="warning"
                type="button"
                @click="onCancel">Cancel</b-button>
    </b-form-row>
    <b-form-row>
      <b-col cols="12">
        <b-form-group label="Name"
                      label-for="name">
          <b-form-input type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        v-model="form.name"
                        @change="$v.$touch()"
                        :state="checkValidationState('name')" />
        </b-form-group>
        <b-form-group label="Image URL"
                      label-for="imagePath">
          <b-form-input type="text"
                        id="imagePath"
                        name="imagePath"
                        placeholder="Image URL"
                        v-model="form.imagePath"
                        @change="$v.$touch()"
                        :state="checkValidationState('imagePath')" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col cols="12"><img :src="form.imagePath"></b-col>
    </b-form-row>
    <b-form-row v-for="(ingredient, index) in $v.form.ingredients.$each.$iter"
                :key="index">
      <b-form-input type="text"
                    class="col-8"
                    v-model="form.ingredients[index].name"
                    :state="ingredient.name.$dirty ? !ingredient.name.$invalid : null"
                    @blur.native="$v.$touch()" />
      <b-form-input type="number"
                    class="col-2"
                    v-model="form.ingredients[index].amount"
                    :state="ingredient.amount.$dirty ? !ingredient.amount.$invalid : null"
                    @blur.native="$v.$touch()" />
      <b-button variant="danger"
                class="col-2"
                @click="onDeleteIngredient(index)"
                type="button">X</b-button>

    </b-form-row>
    <b-form-row>
      <b-col cols="12">
        <b-button variant="success"
                  @click="onAddIngredient">Add Ingredient</b-button>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
import Vue from 'vue';
import { mapMutations, mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, numeric } from 'vuelidate/lib/validators';

export default Vue.extend({
  name: 'RecipeEdit',
  data() {
    return {
      id: this.$route.params.id,
      editMode: this.$route.params.id != null,
      form: {
        name: '',
        imagePath: '',
        description: '',
        ingredients: []
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required },
      imagePath: { required },
      description: { required },
      ingredients: {
        $each: {
          name: { required },
          amount: { required, numeric }
        }
      }
    }
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.editMode = to.params.id != null;
      this.initForm();
    }
  },
  methods: {
    initForm() {
      if (this.editMode) {
        const recipe = this.recipes[this.id];
        this.form.name = recipe.name;
        this.form.imagePath = recipe.imagePath;
        this.form.description = recipe.description;
        this.form.ingredients = recipe.ingredients;
      } else {
        this.form.name = '';
        this.form.imagePath = '';
        this.form.description = '';
        this.form.ingredients = [];
      }
    },
    checkValidationState(field) {
      return this.$v.form[field].$dirty ? !this.$v.form[field].$invalid : null;
    },
    onSubmit() {
      if (this.editMode) {
        this.updateRecipe({ index: this.id, updatedRecipe: this.form });
      } else {
        this.addRecipe(this.form);
      }
      this.onCancel();
    },
    onCancel() {
      this.$router.go(-1);
    },
    onAddIngredient() {
      this.form.ingredients.push({ name: '', ammount: '' });
    },
    onDeleteIngredient(index) {
      this.form.ingredients.splice(index, 1);
    },
    ...mapMutations('recipeModule', ['updateRecipe', 'addRecipe'])
  },
  computed: {
    ...mapGetters('recipeModule', ['recipes'])
  },
  created() {
    this.initForm();
  }
});
</script>

<style lang="scss" scoped>
img {
  max-height: 200px;
  margin-bottom: 20px;
}
.form-row {
  margin-top: 10px;
}
</style>
