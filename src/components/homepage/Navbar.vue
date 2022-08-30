<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-logo">
      <img src="../../assets/logo.png" alt="logo" />
      <span>BestJob</span>
    </router-link>
    <p class="navbar-info">Find a best job for yourself!</p>
    <router-link to="/joblist" class="navbar-route"
      >Find a Job<i class="fa-solid fa-arrow-right-long ms-2"></i
    ></router-link>
  </nav>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'

export default Vue.extend({
  name: 'Navbar',
})
</script>

<style scoped lang="scss">
.navbar {
  padding: 10px 20px;
  color: #fff;
  background-color: #0c2d48;

  &-info {
    margin-top: inherit;
    margin-bottom: inherit;
    font-size: 18px;
  }

  &-logo {
    display: flex;
    align-items: center;

    span {
      margin-left: 16px;
      color: #fff;
      font-size: 24px;
      font-weight: 500;
    }
  }

  &-route {
    padding: 5px 14px;
    color: #fff;
    background-color: #ff0065;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    &-info {
      display: none;
    }
  }
}
</style>
