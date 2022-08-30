<template>
  <div class="hero container">
    <div>
      <h1 class="hero-title mb-4">Find a best job for yourself</h1>
      <h3 class="mb-4">You can find jobs all over the world</h3>
      <router-link to="/joblist" class="hero-route"
        >Find a Job<i class="fa-solid fa-arrow-right-long ms-2"></i
      ></router-link>
    </div>
    <img class="hero-img" src="../../assets/hero.png" alt="" />
  </div>
</template>

<script lang="ts">
/* --------------------------------- imports -------------------------------- */
import Vue from 'vue'

export default Vue.extend({
  name: 'Hero',
})
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &-title {
    background: linear-gradient(
    to left,
    #008080 0%,
    #a6a6a6 25%,
    #05c1ff 50%,
    #8a8a8a 75%,
    #005757 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &-route {
    padding: 10px 14px;
    color: #fff;
    background-color: #ff0065;
    border-radius: 6px;
  }

  &-img {
    height: 500px;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;

    &-img {
      width: 550px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    &-img {
      width: 350px;
    }
  }
}
</style>
