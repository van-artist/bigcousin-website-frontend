// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入你的路由配置

// 创建 Vue 应用实例，并使用路由
createApp(App).use(router).mount('#app');
