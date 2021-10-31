import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ "../views/Dashboard.vue")
    },
    {
      path: "/add/payment/:category",
      name: "AddPaymentFormLink",
      component: () =>
        import(/* webpackChunkName: "PageDashBoard" */ "../views/Dashboard.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "About" */ "../views/About.vue")
    },
    {
      path: "/404",
      name: "NotFound",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
    }
  ]
})

const titles = {
  dashboard: "dashboard",
  About: "About",
  NotFound: "NotFound"
}
router.afterEach((to, from) => {
  document.title = titles[to.name]
})
export default router
