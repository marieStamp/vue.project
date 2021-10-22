import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    // {
    //   path: '/dashboard/:page',
    //   name: 'dashboard',
    //   component: Dashboard
    // },
    {
      path: '/add/payment/:category',
      name: 'AddPaymentFormLink',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
    // {
    //   path: '*',
    //   component: NotFound
    // }
  ]
})

// const user = false
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'NotFound') {
//     next({ name: 'NotFound' })
//   } else {
//     next()
//   }
// })

const titles = {
  dashboard: 'dashboard',
  About: 'About',
  NotFound: 'NotFound'
}
router.afterEach((to, from) => {
  document.title = titles[to.name]
})
export default router
