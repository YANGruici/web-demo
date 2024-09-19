import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Home', component: () => import('@/views/HOME.vue') },
    { path: '/:markdownFile', name: 'MarkdownRenderer', component: () => import('@/views/MarkdownRenderer.vue') },
    { path: '/echartscss', name: 'EChartscss', component: () => import('@/views/ECharts.vue') },
];

const router = createRouter({
    history: createWebHistory('/web-demo/'),
    routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next();
    } else {
        // 如果从未匹配过，重定向到根路径
        if (from.matched.length === 0) {
            next('/');
        } else {
            next();
        }
    }
});

export default router;