//import vue router
import {
    createRouter,
    createWebHistory
} from 'vue-router'
//define a routes
const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/components/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/components/RegisterPage.vue'),
    },
    {
        path: '/user',
        name: 'beranda',
        component: () => import('@/components/UserDashboard.vue'),
        children: [
            {
                path: "/produk",
                name: "produk.index",
                component: () =>
                    import('@/views/User/Produk/indexPage.vue'),
            },
            {
                path: "/transaksi",
                name: "transaksi.index",
                component: () => import("@/views/User/Transaksi/indexPage.vue"),
            },
            {
                path: "/transaksi/create",
                name: "transaksi.create",
                component: () => import("@/views/User/Transaksi/createPage.vue"),
            },
            {
                path: "/transaksi/edit",
                name: "transaksi.edit",
                component: () => import("@/views/User/Transaksi/editPage.vue"),
            },
            {
                  path: "/ulasan",
                  name: "ulasan.index",
                  component: () => import("@/views/User/Ulasan/indexPage.vue"),
            },
            {
                path: "/ulasan/create",
                name: "ulasan.create",
                component: () => import("@/views/User/Ulasan/createPage.vue"),
            },
            {
                path: "/ulasan/edit",
                name: "ulasan.edit",
                component: () => import("@/views/User/Ulasan/editPage.vue"),
            },
        ],
    }, 
]
//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})
export default router;