<template>
  <div id="app">
    <MHeader />
    <router-view />
  </div>
</template>

<script>
import MHeader from '@/components/layout/MHeader.vue';

export default {
  name: 'App',
  components: {
    MHeader,
  },
};
</script>

<style lang="scss"></style>
