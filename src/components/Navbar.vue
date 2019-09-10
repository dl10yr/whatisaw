<template>
  <nav class="navbar navbar-light mb-2" style="background-color: #ffffff">
    <RouterLink class="navbar-brand mb-0 h1 font-weight-bolder text-black" to="/">WhatISaw</RouterLink>

    <ul class="navbar-nav mr-auto"></ul>

    <RouterLink to="/create" class="navbar-icon">
      <img alt="create" src="../assets/create.png" width="30" height="30" />
    </RouterLink>
    <RouterLink to="/posts" class="navbar-icon">
      <img alt="posts" src="../assets/normal.png" width="40" height="40" />
    </RouterLink>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.navbar {
  max-width: 400px;
  margin: 0 auto;
}
.navbar-icon {
  margin: 5px 5px;
}
</style>