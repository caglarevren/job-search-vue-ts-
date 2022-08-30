<template>
  <div>
    <Navbar />
    <Jobs />
  </div>
</template>
<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'
import Navbar from '@/components/homepage/Navbar.vue'
import Jobs from '@/components/joblist/Jobs.vue'

export default Vue.extend({
  name: 'JobListView',
  components: {
    Navbar,
    Jobs,
  },
})
</script>
<style scoped lang="scss"></style>
