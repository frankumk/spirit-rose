import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Roses from '../views/Roses.vue'
import Rituals from '../views/Rituals.vue'
import Herbs from '../views/Herbs.vue'
import YoniSteam from '../views/YoniSteam.vue'
import WombHeal from '../views/WombHeal.vue'
import Appointments from '../views/Appointments.vue'
import ContactForm from '../views/ContactForm.vue'
// import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roses',
    name: 'Rose Medicine',
    component: Roses
  },
  {
    path: '/rituals',
    name: 'Ritual Creation',
    component: Rituals
  },
  {
    path: '/yonisteam',
    name: 'Yoni Steaming',
    component: YoniSteam
  },
  {
    path: '/herbs',
    name: 'Herbal Medicine',
    component: Herbs
  },
  {
    path: '/wombhealing',
    name: 'Womb Healing',
    component: WombHeal
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },
  // {
  //   path: '/cart',
  //   name: 'Cart',
  //   component: Cart
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
