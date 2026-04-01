import { createApp } from 'vue'
import './style.css'
import './assets/font/font.css';
import App from './App.vue'
import { Pagination as TPagination } from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
createApp(App).use(TPagination).mount('#app')
