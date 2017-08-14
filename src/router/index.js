import Vue from 'vue'
import Router from 'vue-router'
import StockTable from '../components/stock-table/stock-table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: StockTable
    }
  ]
})
