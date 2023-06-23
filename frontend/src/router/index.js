import { createRouter, createWebHashHistory } from 'vue-router'

import ShowerPage from '../views/ShowerPage.vue'
import BaggagePorterPage from '../views/BaggagePorterPage.vue'
import CardPayPage from '../views/CardPayPage'
import LastochkaCenterPage from '../views/LastochkaCenterPage'
import FoodPage from '../views/FoodPage.vue'
import TransferPage from '../views/TransferPage.vue'
import ServicesOfHalls from '../views/ServicesOfHalls.vue'
import PoputchickPage from '../views/PoputchickPage.vue'

const routes = [
  {
    path: '/TransferPage',
    name: 'TransferPage',
    component: TransferPage
  },
  {
    path: '/BaggagePorterPage',
    name: 'BaggagePorterPage',
    component: BaggagePorterPage
  },
  {
    path: '/ServicesOfHalls',
    name: 'ServicesOfHalls',
    component: ServicesOfHalls
  },
  {
    path: '/ShowerPage',
    name: 'ShowerPage',
    component: ShowerPage
  },
  {
    path: '/CardPayPage',
    name: 'CardPayPage',
    component: CardPayPage
  },
  {
    path: '/FoodPage',
    name: 'FoodPage',
    component: FoodPage
  },
  {
    path: '/PoputchickPage',
    name: 'Poputchick',
    component: PoputchickPage
  },
  {
    path: '/LastochkaCenterPage',
    name: 'LastochkaCenterPage',
    component: LastochkaCenterPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
