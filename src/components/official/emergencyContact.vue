<template>
  <div>
    <div class="container">
      <h1>Emergency Contact</h1>
    </div>

    <div class="contact-list">
      <ul>
        <li>
          <container>
            <v-card>
                <v-card-title>
                    <div class="left">
                        Singapore Embassy (US)
                        <br>
                        +1-202-537-3100
                    </div>

                    <div class="right" style="font-size:25px">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                </v-card-title>

                <v-divider class="mx-4"></v-divider>

                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Optio esse facilis consequatur cupiditate impedit quam eius,
                  quia porro fugit fugiat soluta tempora! Corporis nihil,
                  repudiandae vel sit veritatis quibusdam expedita.
                </v-card-text>
            </v-card>
            
          </container>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "emergencyContact",
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
.v-sheet.v-card {
  width: 95%;
  margin: auto;
}

.left {
    width: 90%;
    text-align: left;
}
.right {
    float: right;
}

.v-card__title {
    dispay: flex;
}

</style>