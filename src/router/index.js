import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(component) {
    return () => import(`../views/${component}.vue`)
}
const isAuthenticated = localStorage.getItem('isAuthenticated')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: lazyLoad('Index'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Auth/Login.vue'),
            meta: {
                requireAuth: false
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (!to.meta.requireAuth) {
        if ((to.name == 'Login') && isAuthenticated) {
            next({ name: 'Index' })
        } else {
            next()
        }
    } else {
        if (!isAuthenticated) {
            next({ name: 'Login' })
        } else {
            next()
        }
    }
})

export default router;