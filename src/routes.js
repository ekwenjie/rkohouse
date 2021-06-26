import emergencyContact from './components/official/emergencyContact';
import homepage from './components/official/Homepage.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/gov', component: homepage },
        { path: '/emergency', component: emergencyContact }
    ]
})