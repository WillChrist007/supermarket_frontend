//import vue router
import {
    createRouter,
    createWebHistory
} from 'vue-router'
//define a routes
const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () => import('@/components/WelcomePage.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/LoginPage.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/RegisterPage.vue'),
    },
    {
        path: '/user',
        name: 'beranda',
        component: () => import('@/components/UserDashboard.vue'),
        children: [
            {
                path: "/produk",
                name: "user.produk.index",
                component: () =>
                    import('@/views/User/Produk/indexPage.vue'),
            },
            {
                path: "/transaksi",
                name: "user.transaksi.index",
                component: () => import("@/views/User/Transaksi/indexPage.vue"),
            },
            {
                path: "/transaksi/create",
                name: "user.transaksi.create",
                component: () => import("@/views/User/Transaksi/createPage.vue"),
            },
            {
                path: "/transaksi/edit",
                name: "user.transaksi.edit",
                component: () => import("@/views/User/Transaksi/editPage.vue"),
            },
            {
                  path: "/ulasan",
                  name: "user.ulasan.index",
                  component: () => import("@/views/User/Ulasan/indexPage.vue"),
            },
            {
                path: "/ulasan/create",
                name: "user.ulasan.create",
                component: () => import("@/views/User/Ulasan/createPage.vue"),
            },
            {
                path: "/ulasan/edit",
                name: "user.ulasan.edit",
                component: () => import("@/views/User/Ulasan/editPage.vue"),
            },
            {
                path: "/profile",
                name: "user.profile.view",
                component: () => import("@/views/User/Profile/profilePage.vue"),
            },
            {
                path: "/profile/edit",
                name: "user.profile.edit",
                component: () => import("@/views/User/Profile/editPage.vue"),
            },
        ],
    },
    {
        path: '/admin',
        name: 'beranda',
        component: () => import('@/components/AdminDashboard.vue'),
        children: [            
            {
                path: "/produk",
                name: "admin.produk.index",
                component: () => import("@/views/Admin/Produk/indexPage.vue"),
            },
            {
                path: "/produk/create",
                name: "admin.produk.create",
                component: () => import("@/views/Admin/Produk/createPage.vue"),
            },
            {
                path: "/produk/edit",
                name: "admin.produk.edit",
                component: () => import("@/views/Admin/Produk/editPage.vue"),
            },
            {
                  path: "/ulasan",
                  name: "admin.ulasan.index",
                  component: () => import("@/views/Admin/Ulasan/indexPage.vue"),
            },
            {
                path: "/user",
                name: "admin.user.index",
                component: () => import("@/views/Admin/User/indexPage.vue"),
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