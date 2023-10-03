import './bootstrap';

// import 'admin-lte/plugins/jquery/jquery.min.js';

import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';

import 'admin-lte/dist/js/adminlte.min.js';

// 创建一个应用实例。
import { createApp } from 'vue';

// createRouter 创建一个可以被 Vue 应用使用的 Router 实例。
// createWebHistory 创建一个 HTML5 历史。对于单页应用来说这是最常见的历史。
import { createRouter, createWebHistory } from 'vue-router';

import Routes from './routes.js';

const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});

const app = createApp({});

app.use(router);

app.mount('#app');