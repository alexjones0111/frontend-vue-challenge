import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AdminPage from '../views/Admin.vue';
import HomePage from '../views/Index.vue';
import CartPage from '../views/Cart.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomePage},
    { path: '/admin', component: AdminPage },
    { path: '/cart', component: CartPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;