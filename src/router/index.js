import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/recommend',
    component: Home,
    children: [
      {
        path: 'recommend',
        name: 'Recommend',
        component: () => import(/* webpackChunkName: "recommend" */ '../views/Recommend.vue')
      },
      {
        path: 'cellphone',
        name: 'Cellphone',
        component: () => import(/* webpackChunkName: "cellphone" */ '../views/Cellphone.vue')
      },
      {
        path: 'acoustics',
        name: 'Acoustics ',
        component: () => import(/* webpackChunkName: "acoustics" */ '../views/Acoustics.vue')
      },
      {
        path: 'accessories',
        name: 'Accessories',
        component: () => import(/* webpackChunkName: "accessories" */ '../views/Accessories.vue')
      },
      {
        path: 'live',
        name: 'Live',
        component: () => import(/* webpackChunkName: "live" */ '../views/Live.vue')
      },
      {
        path: 'popup',
        name: 'MyPopup',
        component: () => import(/* webpackChunkName: "popup" */ '../views/MyPopup.vue')
      },
      {
        path: 'official',
        name: 'OfficialPopup',
        component: () => import(/* webpackChunkName: "official" */ '../views/OfficialPopup.vue')
      },
    ]
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
  },
  {
    path: '/flyme',
    name: 'Flyme',
    component: () => import(/* webpackChunkName: "flyme" */ '../views/Flyme.vue')
  },
  {
    path: '/cloud',
    name: 'Cloud',
    component: () => import(/* webpackChunkName: "cloud" */ '../views/Cloud.vue')
  },
  {
    path: '/load',
    name: 'Load',
    component: () => import(/* webpackChunkName: "load" */ '../views/Load.vue'),
  },
  {
    path: '/bill',
    name: 'Bill',
    component: () => import(/* webpackChunkName: "bill" */ '../views/Bill.vue'),
    children: [
      {
        path: 'refund',
        name: 'Refund',
        component: () => import(/* webpackChunkName: "refund" */ '../components/Refund.vue'),
      },
    ]
  },
  {
    path: '/packet',
    name: 'Packet',
    component: () => import(/* webpackChunkName: "packet" */ '../views/Packet.vue'),
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: () => import(/* webpackChunkName: "ticket" */ '../views/Ticket.vue'),
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import(/* webpackChunkName: "collect" */ '../views/Collect.vue'),
  },
  {
    path: '/commodity',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "commodity" */ '../views/ProductDetail.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      isShowTabbar: true
    },
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
