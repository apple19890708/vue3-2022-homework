import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台畫面
  {
    path: '/',
    component: () => import('../layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'front-products',
        name: 'FrontProducts',
        component: () => import('../views/FrontProducts.vue'),
      },
      {
        path: 'front-product/:id?',
        name: 'FrontProduct',
        component: () => import('../views/FrontProduct.vue'),
      },
    ]
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
  // 後台畫面
  {
    path: '/admin',
    component: () => import('../layouts/DashboardView.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'products',
        name: 'Products',
        default: true,
        meta: { requiresAuth: true },
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        default: true,
        meta: { requiresAuth: true },
        component: () => import('../views/Coupon.vue'),
      },
    ],
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'xxx',
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active', // 區別當前已選擇的link顏色
  scrollBehavior(to, from, savedPosition) {
    // to & from 都是路由地址
    // saveposition 可以為空
    // const commentContent = document.getElementsByClassName('Common-content')[0]; 可針對特定內容做處理
    // if (commentContent) {
    //   commentContent.scrollTop = 0;
    // }
    // return { x: 0, y: 0 }; do not work
    return { x: 0, y: 0 };
  }
})

router.beforeEach((to, from, next) => { // 透過路由守衛判定是否有登入，沒登入返回首頁
  const session = JSON.parse(localStorage.getItem('session'))
  if (to.matched.some((record) => record.meta.requiresAuth)) { // 判斷該路由是否有meta requiresAuth
    if (session && session.isLogin && to.fullPath) { // 如果都回true 則繼續前往該頁
      next()
    } else {
      next({ name: 'AdminLogin' })
    }
  } else if (session && session.isLogin && to.fullPath === '/admin-login') { // 如果登入成功但路由指向/admin-login 則導向Products
    next({ name: 'Products' })
  } else {
    next()
  }
})

export default router
