import { createRouter, createWebHistory } from 'vue-router'
import { useRegisterStore } from '@/store/auth/register'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SellerHome',
      component: () => import('@/pages/home/SellerHome.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/not-found/NotFound.vue')
    },
    {
      path: '/auth/login',
      name: 'LoginRoot',
      component: () => import('@/pages/auth/login/LoginRoot.vue')
    },
    {
      path: '/auth/register',
      name: 'RegisterRoot',
      component: () => import('@/pages/auth/register/RegisterRoot.vue'),

      children: [
        {
          path: 'registration',
          name: 'SellerRegister',
          component: () => import('@/pages/auth/register/SellerRegister.vue')
        },
        {
          path: 'email_verification',
          name: 'VerifyEmail',
          component: () => import('@/pages/auth/register/VerifyEmail.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'taxpayer_info',
          name: 'TaxPayerInfo',
          component: () => import('@/pages/auth/register/TaxPayerInfo.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'payment_verification',
          name: 'BankInfo',
          component: () => import('@/pages/auth/register/BankInfo.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/seller/dashboard',
      name: 'DashboardRoot',
      component: () => import('@/dashboard/DashboardRoot.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'HomeDashboard.vue',
          component: () => import('../dashboard/content/home/HomeDashboard.vue')
        },
        {
          path: 'store',
          name: 'StoreDashboard.vue',
          component: () => import('../dashboard/content/store/StoreDashboard.vue')
        },
        {
          path: 'orders',
          name: 'OrdersDashboard.vue',
          component: () => import('../dashboard/content/orders/OrdersDashboard.vue')
        },
        {
          path: 'products',
          name: 'ProductsDashboard.vue',
          component: () => import('../dashboard/content/products/ProductsDashboard.vue')
        },
        {
          path: 'account',
          name: 'AccountDashboard.vue',
          component: () => import('../dashboard/content/products/AccountDashboard.vue')
        }
      ]
    },
    {
      path: '/account_inactive',
      name: 'AccountInactive',
      component: () => import('@/pages/auth/register/AccountInactive.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Simplified router guard
router.beforeEach(async (to, from, next) => {
  console.log(`Navigating from ${from.path} to ${to.path}`)

  const requiresAuth = to.meta.requiresAuth ?? false

  if (!requiresAuth) {
    console.log('Public route detected')
    return next() // Allow access to public routes
  }

  try {
    const registerStore = useRegisterStore()
    await registerStore.checkUserState()
    const seller = registerStore.seller
    if (!seller) {
      // Redirect to login if not authenticated
      if (to.path === '/auth/login') {
        return next() // Allow access to login page
      }
      return next('/auth/login')
    }

    // Allow navigation to the intended route if authenticated
    next()
  } catch (error) {
    console.error('Error fetching seller data:', error)
    return next('/auth/login')
  }
})

export default router
