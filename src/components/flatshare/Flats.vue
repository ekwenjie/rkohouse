<template>
    <div class="container" style="padding-top: 0px; margin-top: 0px">
        <v-card
            :loading="loading"
            class="mx-auto mt-5 mb-5"
            max-width="374"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://www.lookboxliving.com.sg/wp-content/uploads/2018/10/HDB-flats-UNO-Interior-Rekindly-by-Uno-living-room.jpg"
            >
            <v-card-title>Ang Mo Kio</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" style="text-align: left">
            2 Rooms For Rental
            </v-card-subtitle>

            <v-card-text class="text--primary" style="text-align: left">

            <div>Extremely near Ang Mo Kio Hub with all the needed amenities [Theatre, Supermarket, Food etc]</div>

            <br>

            <h2>$40 PER NIGHT</h2>
            </v-card-text>
        

            <v-card-actions>
            <v-btn
                color="orange"
                text
            >
                Book Your Room Now
            </v-btn>
            </v-card-actions>
        </v-card>

          <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="data:image/jpeg;base64,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"
            >
            <v-card-title>Tampines</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" style="text-align: left">
            1 Room For Rental
            </v-card-subtitle>

            <v-card-text class="text--primary" style="text-align: left">

            <div>Friendly owner. Has a golder retirever pup. Unit is close to 3 shopping centres</div>

            <br>

            <h2>$60 PER NIGHT</h2>
            </v-card-text>
        

            <v-card-actions>
            <v-btn
                color="orange"
                text
            >
                Book Your Room Now
            </v-btn>
            </v-card-actions>
        </v-card>

  </div>
</template>

<script>
export default {
    name: 'Flats',
    data() {
        return {
            loading: false,
        }
    }

}
</script>

<style>

</style>