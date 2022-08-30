<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
/* --------------------------------- common styles -------------------------------- */
* {
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #ddd;

  a {
    text-decoration: none;
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
}
</style>
