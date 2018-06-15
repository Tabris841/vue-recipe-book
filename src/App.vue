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
