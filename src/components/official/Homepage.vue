<template>
    <div>
        <div class="container">
            <h1>Our Features</h1>
        </div>

        <div style="padding-bottom: 10px">
            <Accordian />
        </div>



    </div>
</template>

<script>
import Accordian from './Accordian.vue';

export default {
    name: "Homepage",
    components: {
        Accordian
    },
    data() {
        return {
            //
        }
    }
}
</script>

<style scoped>

</style>