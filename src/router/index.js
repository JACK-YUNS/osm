import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/home'
import Commodity from '@/pages/commodity/commodity'
import Store from '@/pages/store/store'
import Marketing from '@/pages/marketing/marketing'
import Transaction from '@/pages/transaction/transaction'
import StoreData from '@/pages/store/storeData/storeData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      redirect:'/store',
      path: '/',
      component: Home,
      children:[
        {
          path: '/commodity',
          component: Commodity,
        },
        {
          redirect:'/store/data',
          path: '/store',
          component: Store,
          children:[
            {
              path:'/store/data',
              component:StoreData,
            }
          ]
        },
        {
          path: '/marketing',
          component: Marketing,
        },
        {
          path: '/transaction',
          component: Transaction,
        },
      ]
    }
  ]
})
