import { createWebHistory, createRouter } from "vue-router";

import App from '@/App.vue'

const routes = [
    {
        path: '/',
        component: App,
        name: 'Home'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  