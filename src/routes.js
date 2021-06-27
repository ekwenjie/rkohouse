import emergencyContact from './components/official/emergencyContact.vue';
import main from './components/official/Main.vue';
import homepage from './components/Homepage.vue';
import groups from './components/community/Groups.vue';
import flatshare from './components/flatshare/Main.vue';
import chat from './components/chat/Main.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/', component: homepage },
        { path: '/gov', component: main },
        { path: '/groups', component: groups },
        { path: '/emergency', component: emergencyContact },
        { path: '/flatshare', component: flatshare },
        { path: '/chat', component: chat }
    ]
})