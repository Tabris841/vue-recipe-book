<template>
  <div>
    <Header></Header>

    <b-container class="main-container">
      <router-view/>
    </b-container>

  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 20px;
}
</style>
