import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HOME.vue'
import Vue from '../views/VUE.vue'
import React from '../views/REACT.vue'
import Echarts from '../views/ECharts.vue'
import HTML from '../views/HTML.vue'
import CSS from '../views/CSS.vue'
import Bootstrap from '../views/BootStrap.vue'
import JavaScript from '../views/JavaScript.vue'
import JQuery from '../views/JQuery.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/vue',
        name: 'Vue',
        component: Vue
    },
    {
        path: '/react',
        name: 'React',
        component: React
    },
    {
        path: '/echarts',
        name: 'Echarts',
        component: Echarts
    },
    {
        path: '/html',
        name: 'HTML',
        component: HTML
    },
    {
        path: '/css',
        name: 'CSS',
        component: CSS
    },
    {
        path: '/bootstrap',
        name: 'Bootstrap',
        component: Bootstrap
    },
    {
        path: '/javascript',
        name: 'JavaScript',
        component: JavaScript
    },
    {
        path: '/jquery',
        name: 'JQuery',
        component: JQuery
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
