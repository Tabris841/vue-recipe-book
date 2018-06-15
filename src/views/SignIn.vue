<template>
  <b-container>
    <b-form @sumbit.prevent="onSignin"
            autocomplete="off"
            novalidate>
      <b-form-group label="Email"
                    label-for="email">
        <b-form-input type="text"
                      id="email"
                      name="email"
                      v-model="form.email"
                      @change="$v.$touch()"
                      :state="checkValidationState('email')" />
      </b-form-group>
      <b-form-group label="Password"
                    label-for="password">
        <b-form-input type="password"
                      id="password"
                      name="password"
                      v-model="form.password"
                      @change="$v.$touch()"
                      :state="checkValidationState('password')" />
      </b-form-group>
      <b-button variant="primary"
                type="submit"
                @click.prevent="onSignin"
                :disabled="$v.form.$invalid">
        Sign In
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSignin() {
      this.authSignin({
        email: this.form.email,
        password: this.form.password
      }).then(() => this.$router.push({ path: '/' }));
    },
    checkValidationState(field) {
      return this.$v.form[field].$dirty ? !this.$v.form[field].$invalid : null;
    },
    ...mapActions('authModule', ['authSignin'])
  }
};
</script>

<style scoped>
</style>
