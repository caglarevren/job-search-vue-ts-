<template>
  <div>
    <Navbar />
    <div class="job-detail">
      <img class="job-detail" src="../assets/office.jpg" alt="company logo" />
      <JobDetail :id="id" />
    </div>
  </div>
</template>
<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'
import Navbar from '@/components/homepage/Navbar.vue'
import JobDetail from '@/components/jobdetail/JobDetail.vue'

export default Vue.extend({
  name: 'JobDetailView',
  components: {
    Navbar,
    JobDetail,
  },

  /* ---------------------------------- props --------------------------------- */
  props: {
    id: String,
  },
})
</script>
<style scoped lang="scss">
.job-detail {
  position: relative;
  width: 100%;
  height: 500px;

  object-fit: cover;

  @media (max-width: 768px) {
    height: 350px;
  }
}
</style>
