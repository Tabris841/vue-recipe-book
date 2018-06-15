<template>
  <div>
    <Header></Header>

    <b-container class="main-container">
      <transition name="fade"
                  mode="out-in">
        <router-view/>
      </transition>
    </b-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from './components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 20px;
}
</style>
