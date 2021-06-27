<template>
    <div>
        <div class="container" style="background-color: #f2f0e9">
            <h3 style="text-align:left;">Find a place to stay with FlatShare</h3>
            <v-card>
                <v-toolbar dense>
                    
                    <v-text-field
                        hide-details
                        single-line
                    ></v-text-field>

                    <i class="fas fa-search"></i>
                </v-toolbar>
            </v-card>
        </div>

        <div style="margin-bottom: 56px">
            <Flats />
        </div>
    </div>

</template>

<script>
import Flats from './Flats.vue';


export default {
    name: 'FlatShare',
    components: {
        Flats        
    },
    data() {
        return {
            //
        }
    }
}
</script>

<style>

</style>