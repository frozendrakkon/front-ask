import Favorites from "@/pages/Favorites.vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/favorites',
        component: Favorites,
        name: 'Favorites'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;  