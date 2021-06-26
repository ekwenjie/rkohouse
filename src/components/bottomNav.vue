<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="gov" style="font-size: 25px">
        <i class="fas fa-building"></i>
    </v-btn>

    <v-btn value="community" style="font-size: 25px">
        <i class="fas fa-users"></i>
        
    </v-btn>

    <v-btn value="chat" style="font-size: 25px">
        <i class="fas fa-comment-alt"></i>
       
    </v-btn>

    
    <v-btn value="flat" style="font-size: 25px">
         <i class="fas fa-home"></i>
    </v-btn>

    <v-btn value="call" style="font-size: 25px">
        <i class="fas fa-phone-alt"></i>
    </v-btn>
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