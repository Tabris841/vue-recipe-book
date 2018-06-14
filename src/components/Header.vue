<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand to="/">Recipe Book</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      
      <b-navbar-nav>
        <b-nav-item to="/recipes">Recipes</b-nav-item>
        <b-nav-item to="/shopping-list">Shopping</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <template v-if="!isAuthenticated">
          <b-nav-item to="/signup">Register</b-nav-item>
          <b-nav-item to="/signin">Login</b-nav-item>
        </template>
        <template v-else>
          <b-nav-item @click="logout">Logout</b-nav-item>
        </template>
        <template v-if="isAuthenticated">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Manage</em>
            </template>
            <b-dropdown-item @click="onSaveData">Save Data</b-dropdown-item>
            <b-dropdown-item @click="onFetchData">Fetch Data</b-dropdown-item>
          </b-nav-item-dropdown>
        </template>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  methods: {
    onSaveData() {},
    onFetchData() {},
    ...mapActions('authModule', ['logout'])
  },
  computed: {
    ...mapGetters('authModule', ['isAuthenticated'])
  }
};
</script>

<style scoped>
</style>
