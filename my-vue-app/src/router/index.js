import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/file',
        component: () => import('@/pages/file.vue')
    },
    {
        path: '/webrtc',
        component: () => import('@/pages/webrtc.vue')
    },
    {
        path: '/player',
        component: () => import('@/pages/player.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;