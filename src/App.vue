<template>
  <div class="app">
    <Navbar />
  <div class="view-wrapper">
    <RouterView />
  </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import firebase from 'firebase'
import fb from './fb'


//firebase.initializeApp(config);
fb.init();

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    loginUser() {
      return this.$store.getters.user;
    },
  }
};
</script>

<style scoped>
.app {
  background: #ffffff;
  height: 100%;
}
</style>

<style>
html,
body {
  height: 100%;
}
.footer{
    width: 100%;
    text-align: center;
    padding: 5px 0;
    position: absolute;/*←絶対位置*/
    bottom: 0; /*下に固定*/
}


.view-wrapper {
  box-sizing: border-box;
  background: #ffffff;
  height: 85%;
  overflow: auto;
}
</style>

