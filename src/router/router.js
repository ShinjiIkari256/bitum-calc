import Main from '@/pages/Main';
import TotalCost from '@/pages/TotalCost';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/result',
        component: TotalCost
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;