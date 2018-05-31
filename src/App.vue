<template>
  <div>
    <Header></Header>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
</style>
