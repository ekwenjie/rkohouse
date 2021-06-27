<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >

    <router-link to="/gov">
      <v-btn value="gov" style="font-size: 25px; width: 80px; height: 56px">
          <i class="fas fa-building"></i>
      </v-btn>
    </router-link>

    <router-link to="/chat">
      <v-btn value="chat" style="font-size: 25px; width: 80px; height: 56px">
          <i class="fas fa-comment-alt"></i>
      </v-btn>
    </router-link>


    <router-link to="/">
      <v-btn value="community" style="font-size: 25px; width: 80px; height: 56px">
          <i class="fas fa-users"></i>
      </v-btn>
    </router-link>

    <router-link to="/flatshare">
      <v-btn value="flat" style="font-size: 25px; width: 80px; height: 56px">
          <i class="fas fa-bed"></i>
      </v-btn>
    </router-link>


    <router-link to="/emergency">
      <v-btn value="call" style="font-size: 25px; width: 80px; height: 56px">
        <i class="fas fa-phone-alt"></i>
      </v-btn>
    </router-link>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
      }
    },
  }
</script>


<style scoped>


</style>