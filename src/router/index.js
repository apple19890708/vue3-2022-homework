import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    meta: { requiresAuth: true },
    component: () => import('../views/Products.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const session = JSON.parse(localStorage.getItem('session'));
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (session && session.isLogin && to.fullPath !== '/admin-login') {
      next();
    } else {
      next({ name: 'AdminLogin' });
    }
  } else if (session && session.isLogin && to.fullPath === '/admin-login') {
    next({ name: 'Products' });
  } else {
    next();
  }
});

export default router
