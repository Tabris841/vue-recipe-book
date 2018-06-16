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

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import { Component, Provide } from 'vue-property-decorator';
import { Getter, Mutation, Action } from 'vuex-class';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

const namespace: string = 'authModule';

@Component({
  mixins: [validationMixin]
})
export default class SginIn extends Vue {
  form = {
    email: '',
    password: ''
  };

  @Action('authSignin', { namespace })
  private authSignin: (
    { email, password }: { email: string; password: string }
  ) => Promise<void>;

  onSignin() {
    this.authSignin({
      email: this.form.email,
      password: this.form.password
    }).then(() => this.$router.push({ path: '/' }));
  }

  checkValidationState(field: string) {
    return this.$v.form[field].$dirty ? !this.$v.form[field].$invalid : null;
  }
  // validations: {
  //   form: {
  //     email: {
  //       required
  //     },
  //     password: {
  //       required
  //     }
  //   }
  // },
  // methods: {
  //   onSignin() {
  //     this.authSignin({
  //       email: this.form.email,
  //       password: this.form.password
  //     }).then(() => this.$router.push({ path: '/' }));
  //   },
  //   checkValidationState(field) {
  //     return this.$v.form[field].$dirty ? !this.$v.form[field].$invalid : null;
  //   },
  //   ...mapActions('authModule', ['authSignin'])
  // }
}
</script>

<style scoped>
</style>
