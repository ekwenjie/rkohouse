<template>

    <div>
        <v-toolbar>
            <v-tabs
            dark
            background-color="primary"
            grow
            >
            
                <v-tab>
                    Community
                </v-tab>


                <router-link to="/groups">
                    <v-tab style="padding-left: 16px; padding-right: 16px; width: 170.375px; height: 56px">
                        Groups
                    </v-tab>
                </router-link>

            </v-tabs>
        </v-toolbar>

        <v-card>
            <v-toolbar dense>
                
                <v-text-field
                    hide-details
                    single-line
                ></v-text-field>

                <i class="fas fa-search"></i>


            </v-toolbar>
        </v-card>


        <div class="container" style="padding-top: 0px; margin-top: 0px; margin-bottom: 0px">
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
                style="background-color: #f2f0e9;"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-card-title>New Post</v-card-title>

                <v-card-text>

                    <div style="text-align: left">
                        Title: <input type="text" style="border: 1px solid black; width: 100%">

                        <br>
                        <br>

                        Description: <textarea style="border: 1px solid black; width: 100%;" rows="5" cols="10"></textarea>

                        <br>
                        <br>

                        <v-btn style="color: gray">Add Image</v-btn>
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions style="justify-content: center">
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        Publish
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>


        <div style="margin-bottom: 56px">
            <Posts />
        </div>
        
    </div>
</template>

<script>
import Posts from './Posts.vue';


export default {
    name: 'Community',
    components: {
        Posts
    },
    data: () => ({
      loading: false,
      selection: 1
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    }
}
</script>

<style scoped>

input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}

</style>