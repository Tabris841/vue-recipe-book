<template>
  <div>
    <b-form @sumbit.prevent="onSubmit"
            @reset="onClear"
            autocomplete="off"
            novalidate>
      <b-form-row>
        <b-form-group class="col-sm-5"
                      label="Name"
                      label-for="name">
          <b-form-input type="text"
                        id="name"
                        name="name"
                        v-model="form.name"
                        @change="$v.$touch()"
                        :state="checkValidationState('name')" />
        </b-form-group>
        <b-form-group class="col-sm-2"
                      label="Amount"
                      label-for="amount">
          <b-form-input type="number"
                        id="amount"
                        name="amount"
                        v-model="form.amount"
                        @change="$v.$touch()"
                        :state="checkValidationState('amount')" />
        </b-form-group>
      </b-form-row>

      <b-form-row>
        <b-button-group class="col-sm-12">
          <b-button variant="success"
                    type="submit"
                    @click.prevent="onSubmit"
                    :disabled="$v.form.$invalid">
            {{ editMode ? 'Update' : 'Add' }}
          </b-button>
          <b-button v-if="editMode"
                    variant="danger"
                    @click="onDelete">Delete</b-button>
          <b-button variant="primary"
                    type="reset">Clear</b-button>
        </b-button-group>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, numeric } from 'vuelidate/lib/validators';

import { Ingredient } from '@/models/ingredient.model';

export default {
  name: 'ShoppingEdit',
  data: () => ({
    form: {
      name: '',
      amount: ''
    },
    editMode: false,
    editeditemIndex: undefined
  }),
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required },
      amount: { required, numeric }
    }
  },
  methods: {
    onSubmit() {
      const newIngredient = new Ingredient(this.form.name, this.form.amount);
      if (this.editMode) {
        this.updateIngredient(newIngredient);
      } else {
        this.addIngredient(newIngredient);
      }
      this.onClear();
    },
    onClear() {
      this.form.name = '';
      this.form.amount = '';
      this.editMode = false;
      this.$v.$reset();
    },
    onDelete() {
      this.deleteIngredient();
      this.onClear();
    },
    checkValidationState(field) {
      return this.$v.form[field].$dirty ? !this.$v.form[field].$invalid : null;
    },
    ...mapMutations('shoppingListModule', [
      'deleteIngredient',
      'stopEdit',
      'addIngredient',
      'updateIngredient'
    ])
  },
  computed: {
    ...mapGetters('shoppingListModule', [
      'editedIngredientIndex',
      'editedIngredient'
    ])
  },
  watch: {
    editedIngredientIndex() {
      if (this.editedIngredientIndex > -1) {
        this.editMode = true;
        this.form.name = this.editedIngredient.name;
        this.form.amount = this.editedIngredient.amount;
      } else {
        this.editMode = false;
      }
    }
  },
  destroyed() {
    this.stopEdit();
  }
};
</script>
