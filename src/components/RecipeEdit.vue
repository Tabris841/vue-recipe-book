<template>
  <div>RecipeEdit</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'RecipeEdit',
  data: () => ({
    id: null,
    editMode: false
  }),
  created() {
    this.id = this.$route.params['id'];
    this.editMode = params['id'] != null;
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required
      },
      imagePath: {
        required
      },
      description: {}
    }
  },
  watch: {
    $route() {
      this.id = this.$route.params['id'];
      this.editMode = this.$route.params['id'] != null;
    }
  },
  methods: {
    initForm() {
      let recipeName = '';
      let recipeImagePath = '';
      let recipeDescription = '';
      const recipeIngredients = [];

      if (editMode) {
      }
    }
  }
};
</script>
