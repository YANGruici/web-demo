import { createApp } from 'vue'
import App from './App.vue'
import DataVVue3 from '@kjgl77/datav-vue3'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(router).use(DataVVue3).mount('#app')


