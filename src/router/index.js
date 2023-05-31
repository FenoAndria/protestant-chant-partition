import { createRouter, createWebHistory } from "vue-router";
import Index from './../views/Index.vue'
function lazyLoad(component) {
    return () => import(`./../views/${component}.vue`)
}
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: lazyLoad('Index')
        },

    ]
})

export default router;