import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8fd02d6e = () => interopDefault(import('../pages/addresses/index.vue' /* webpackChunkName: "pages/addresses/index" */))
const _4af9084c = () => interopDefault(import('../pages/Cart.vue' /* webpackChunkName: "pages/Cart" */))
const _b8c8a526 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _68c63091 = () => interopDefault(import('../pages/Orders.vue' /* webpackChunkName: "pages/Orders" */))
const _7fa9e2ec = () => interopDefault(import('../pages/Payment.vue' /* webpackChunkName: "pages/Payment" */))
const _2692dcad = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _00a84f62 = () => interopDefault(import('../pages/Register.vue' /* webpackChunkName: "pages/Register" */))
const _c1943550 = () => interopDefault(import('../pages/addresses/add.vue' /* webpackChunkName: "pages/addresses/add" */))
const _3df1a9f1 = () => interopDefault(import('../pages/addresses/_id.vue' /* webpackChunkName: "pages/addresses/_id" */))
const _237a741b = () => interopDefault(import('../pages/products/_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _be2da72c = () => interopDefault(import('../pages/reviews/_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _6281ea76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addresses",
    component: _8fd02d6e,
    name: "addresses"
  }, {
    path: "/Cart",
    component: _4af9084c,
    name: "Cart"
  }, {
    path: "/Login",
    component: _b8c8a526,
    name: "Login"
  }, {
    path: "/Orders",
    component: _68c63091,
    name: "Orders"
  }, {
    path: "/Payment",
    component: _7fa9e2ec,
    name: "Payment"
  }, {
    path: "/Profile",
    component: _2692dcad,
    name: "Profile"
  }, {
    path: "/Register",
    component: _00a84f62,
    name: "Register"
  }, {
    path: "/addresses/add",
    component: _c1943550,
    name: "addresses-add"
  }, {
    path: "/addresses/:id",
    component: _3df1a9f1,
    name: "addresses-id"
  }, {
    path: "/products/:id?",
    component: _237a741b,
    name: "products-id"
  }, {
    path: "/reviews/:id?",
    component: _be2da72c,
    name: "reviews-id"
  }, {
    path: "/",
    component: _6281ea76,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
