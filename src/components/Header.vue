<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand to="/">Recipe Book</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/recipes">Recipes</b-nav-item>
        <b-nav-item to="/shopping-list">Shopping</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

      </b-navbar-nav>

      <!--<ul class="navbar-nav my-2 my-lg-0">-->
      <!--<ng-template [ngIf]="!authService.isAuthenticated()">-->
      <!--<li class="nav-item"><a routerLink="/signup" class="nav-link">Register</a></li>-->
      <!--<li class="nav-item"><a routerLink="/signin" class="nav-link">Login</a></li>-->
      <!--</ng-template>-->

      <!--<li class="nav-item">-->
      <!--<a class="nav-link" (click)="onLogout()" *ngIf="authService.isAuthenticated()">-->
      <!--Logout-->
      <!--</a>-->
      <!--</li>-->

      <!--<li class="nav-item" ngbDropdown appDropdown *ngIf="authService.isAuthenticated()">-->
      <!--<a class="nav-link dropdown-toggle" role="button" ngbDropdownToggle>Manage</a>-->
      <!--<div ngbDropdownMenu>-->
      <!--<a class="dropdown-item" (click)="onSaveData()">Save Data</a>-->
      <!--<a class="dropdown-item" (click)="onFetchData()">Fetch Data</a>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
</style>
