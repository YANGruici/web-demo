import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import './assets/js/languages';
import './assets/fonts/iconfont';

import Particles from 'particles.vue3'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/fonts/font.css'


createApp(App).use(ElementPlus).use(router).use(DataVVue3).use(hljsVuePlugin ).use(Particles).mount('#app')


