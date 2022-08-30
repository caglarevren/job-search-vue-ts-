<template>
  <div class="container job-detail">
    <img :src="require(`../../assets/${job[0].imageUrl}`)" alt="company logo" />
    <div>
      <p class="job-detail-position">{{ job[0].positionName }}</p>
      <p class="job-detail-company">{{ job[0].companyName }}</p>
      <p>
        <span class="font-bold">Job Description:</span> {{ job[0].description }}
      </p>
    </div>
    <div>
      <p><span class="font-bold">Address:</span> {{ job[0].address }}</p>
      <p>
        <span class="font-bold">Location:</span>
        {{ job[0].townName }} - {{ job[0].cityName }} - {{ job[0].postalCode }}
      </p>
      <p>
        <span class="font-bold">Phone Number:</span> 0{{ job[0].contactPhone }}
      </p>
    </div>
    <button class="go-back" @click="$router.go(-1)">Return Job List</button>
  </div>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'

export default Vue.extend({
  name: 'JobDetail',

  /* ---------------------------------- props --------------------------------- */
  props: {
    id: String,
  },

  /* -------------------------------- lifecycle ------------------------------- */
  mounted() {
    this.$store.dispatch('getJobs')
  },

  /* -------------------------------- computed -------------------------------- */
  computed: {
    job(): any {
      return this.$store.state.jobs.filter((job: any) => job.id === this.id)
    },
  },
})
</script>

<style scoped lang="scss">
img {
  position: absolute;
  top: -80px;
  left: 50%;
  padding: 10px;
  background-color: white;
  border-radius: 50%;
  transform: translateX(-50%);
}

.font-bold {
  font-weight: bold;
}

.go-back {
  padding: 5px 14px;
  color: #fff;
  background-color: #ff0065;
  border-radius: 6px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
}

.job-detail {
  text-align: center;

  &-position {
    padding-top: 24px;
    color: #0c2d48;
    font-size: 40px;
    font-weight: 600;
  }

  &-company {
    font-size: 28px;
  }
}
</style>
