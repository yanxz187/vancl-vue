import Vue from 'vue'
import Router from 'vue-router'
import VanIndex from '../pages/VanIndex'
import VanSort from '../pages/VanSort'
import VanVideo from '../pages/VanVideo'
import VanShopping from '../pages/VanShopping'
import VanMy from '../pages/VanMy'
import VanFooter from '../pages/VanFooter'
import VanLogin from "../pages/VanLogin";
import VanReg from "../pages/VanReg";
import VanProduct from "../pages/VanProduct";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: VanFooter,
      children: [
        {
          path: '/',
          component: VanIndex
        },
        {
          path: '/vansort',
          component: VanSort
        },
        {
          path: '/vanvideo',
          component: VanVideo
        },
        {
          path: '/vanshopping',
          component: VanShopping
        },
        {
          path: '/vanmy',
          component: VanMy
        }
      ]
    },
    {
      path:"/login",
      component: VanLogin
    },
    {
      path:"/reg",
      component: VanReg
    },
    {
      path:"/product",
      component: VanProduct
    }
  ]
})
