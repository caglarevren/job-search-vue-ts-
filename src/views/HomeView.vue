<template>
  <div class="home">
    <Navbar />
    <Hero />
  </div>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'
import Hero from '@/components/homepage/Hero.vue'
import Navbar from '@/components/homepage/Navbar.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    Hero,
    Navbar,
  },
})
</script>
<style scoped lang="scss">
.home {
  height: 80vh;
}
</style>
