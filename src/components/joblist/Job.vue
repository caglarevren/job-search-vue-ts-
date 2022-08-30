<template>
  <div class="job">
    <div class="job-left">
      <img :src="require(`../../assets/${job.imageUrl}`)" alt="company logo" />
      <div class="job-left-inner">
        <div class="d-flex">
          <p class="job-left-inner-company">{{ job.companyName }}</p>
          <p class="job-left-inner-duration">{{ job.durationDayText }}</p>
        </div>
        <p class="job-left-inner-position">{{ job.positionName }}</p>
        <div class="d-flex">
          <p class="me-2 color-gray">{{ job.distance }} -</p>
          <p class="me-2 color-gray">{{ job.cityName }} -</p>
          <p class="color-gray">{{ job.townName }}</p>
        </div>
      </div>
    </div>
    <router-link
      class="go-detail"
      :to="{ name: 'jobDetail', params: { id: job.id } }"
    >
      Show Job Detail <i class="fa-solid fa-arrow-right-long ms-1"></i>
    </router-link>
  </div>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'

export default Vue.extend({
  name: 'Job',

  /* ---------------------------------- props --------------------------------- */
  props: ['job'],
})
</script>

<style scoped lang="scss">
.job {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  margin-top: 24px;
  box-shadow: 0 1px 8px 0 rgb(18 5 41 / 15%);
  border-left: 5px solid #0c2d48;
  border-radius: 6px;

  &-left {
    display: flex;
    align-items: center;

    &-inner {
      margin-left: 16px;

      &-company {
        font-weight: 500;
      }

      &-duration {
        padding: 0 5px;
        margin-left: 10px;
        color: #fff;
        background-color: #b61644;
        border-radius: 10px;
      }

      &-position {
        color: #0c2d48;
        font-size: 20px;
        font-weight: 500;
      }

      p {
        margin-bottom: 3px;
      }
    }
  }

  .color-gray {
    color: #888;
  }

  .go-detail {
    padding: 5px 14px;
    color: #fff;
    background-color: #0c2d48;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .go-detail {
      margin-top: 14px;
    }
  }
}
</style>
