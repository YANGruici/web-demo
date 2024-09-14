import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    { path: '/', name: 'Home', component: () => import('../views/HOME.vue') },
    { path: '/:markdownFile', name: 'MarkdownRenderer', component: () => import('../views/MarkdownRenderer.vue') }
];


const router = createRouter({
    history: createWebHistory('/web-demo/'),
    routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // 如果目标路径是根路径，则允许通过
    if (to.path === '/') {
        next()
    } else {
        // 每次刷新页面时都重定向到根路径
        if (from.matched.length === 0) {
            next('/')
        } else {
            next()
        }
    }
})

export default router