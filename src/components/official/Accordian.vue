<template>
    <v-expansion-panels>
        <v-expansion-panel
        v-for="(description,item) in features"
        :key="item"
        >
        <v-expansion-panel-header>
            {{ item }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            {{ description }}
            <br>
            <br>
            <span style="margin-top: 5px">
                <v-btn
                    small 
                    dark
                >
                    View More
                </v-btn>
            </span>
        </v-expansion-panel-content>

        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    data() {
        return {
            features: {
                'Singapore News': 'Always stay up to date with the local news and never miss out on the action!',
                'Visa Services': 'If you are confused about visa application and visa related matters, please click here to view more information',
                'National Service': 'Are you worried about your NS duties? Please click here to view more about your reservist and NS related matters.',
                'Health Advisories': 'When visiting a country, always be in the know about the health related matters in that country. Take necessary steps to be safe when visiting any country.',
                'Preparation Guide': 'Looking to return to Singapore. Make sure to follow this checklist so that you do not miss out on any important issues. Please click here to view the checklist'
            }
        }
    }
}
</script>

<style>

</style>