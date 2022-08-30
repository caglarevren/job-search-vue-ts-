<template>
  <div class="container">
    <div class="search-container">
      <i class="fa-solid fa-magnifying-glass fa-xl"></i>
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search by position you want to work"
      />
    </div>

    <Job v-for="job in getJobs" :key="job.jobId" :job="job" />

    <b-pagination
      v-if="showPagination"
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script lang="ts">
/* ------------------------------- interfaces ------------------------------- */
declare interface jobsTypes {
  searchValue: string
  perPage: number
  currentPage: number
  totalRows: number
  showPagination: boolean
}
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'
import Job from '@/components/joblist/Job.vue'

export default Vue.extend({
  name: 'Jobs',
  components: {
    Job,
  },

  /* ---------------------------------- data ---------------------------------- */
  data(): jobsTypes {
    return {
      searchValue: '',
      perPage: 5,
      currentPage: 1,
      totalRows: 0,
      showPagination: true,
    }
  },

  /* -------------------------------- lifecycle ------------------------------- */
  mounted() {
    this.$store.dispatch('getJobs')
  },

  /* -------------------------------- computed -------------------------------- */
  computed: {
    getJobs() {
      const jobs = this.$store.state.jobs
      this.totalRows = jobs.length

      /* For Searching Jobs */
      if (this.searchValue.length) {
        this.showPagination = false

        return jobs.filter((job: any) => {
          return job.positionName
            .toLowerCase()
            .includes(this.searchValue.toLowerCase())
        })
      }

      const jobList: any[] = jobs.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )

      this.showPagination = true
      return jobList
    },
  },
})
</script>

<style scoped lang="scss">
.search-container {
  position: relative;
  margin: 28px 0;

  i {
    position: absolute;
    top: 27px;
    left: 12px;
  }

  input {
    width: 100%;
    height: 55px;
    padding-left: 40px;
    border-radius: 6px;
  }
}
</style>
