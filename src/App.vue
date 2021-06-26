<template>
  <div id="app">

      <div id="header">
        <Header />
      </div>

      <router-view></router-view>

      <!-- <router-link to="/emergency">Emergency</router-link> -->
      <div id="bottomNav">
        <BottomNav />
      </div>

  </div>

</template>

<script>

import Header from './components/header.vue';
import BottomNav from './components/bottomNav.vue';

export default {
  name: 'App',
  components: {
    Header,
    BottomNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#header {
  position: relative;
  top: 0;
  width: 100%;
}


#bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
