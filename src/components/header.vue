<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="profile" style="font-size: 25px">
        <i class="fas fa-user-circle"></i>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn value="switch" style="font-size: 25px">
        <i class="fas fa-sign-out-alt"></i>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({ value: 1 }),
  }
</script>

<style scoped>

#nav {
    padding: 0;
}

</style>