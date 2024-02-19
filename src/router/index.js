// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/homepage/HomePage.vue';
import BlogsPage from '@/views/blogs/BlogsPage.vue'; 
import AboutPage from '@/views/about/AboutPage.vue'; 
import ContactPage from '@/views/contact/ContactPage.vue'; 
import BlogDetail from '@/views/blogs/components/BlogDetail.vue';
import ChatPage from'@/views/chat/ChatPage.vue';
// 定义路由
// 每个路由都需要映射到一个组件。

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: BlogsPage,
    },
    {
      path: '/blogs/:id', // 添加这个路由来处理博客详情
      name: 'BlogDetail',
      component: BlogDetail,
      props: true, // 允许组件接收路由参数作为props
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
    },
    {
        path:'/chat',
        name:'Chat',
        component: ChatPage,
    }
    
  ];

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 的 History 模式
  history: createWebHistory(),
  routes, // 使用上面定义的路由规则
});

export default router;

