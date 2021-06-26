<template>
    <div class="container">
        <div class="container">
            <h1>Our Features</h1>
        </div>

        <div style="padding-bottom: 10px">
            <Accordian />
        </div>

        <div class="container" style="margin-bottom: 56px">
            <Carousel />
        </div>



    </div>
</template>

<script>
import Accordian from './Accordian.vue';
import Carousel from './Carousel.vue';

export default {
    name: "Homepage",
    components: {
        Accordian,
        Carousel
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