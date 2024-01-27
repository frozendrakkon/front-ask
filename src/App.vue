<script setup lang="ts">
import NavigationBtn from './components/NavigationBtn.vue';
import TheAskModalVue from './components/TheAskModal.vue';

</script>

<template>
  <div class="app">
    <NavigationBtn />
    <TheAskModalVue />>
  </div>
  <!-- <router-view></router-view> -->
</template>

<style lang="scss" scoped>
.app {
  justify-content: center;
  display: flex;
}
</style>