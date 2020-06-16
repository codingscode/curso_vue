import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks2 from './components/stocks/Stocks2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Inicio },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks2 },
    ]
})