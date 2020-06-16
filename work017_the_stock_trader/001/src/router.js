import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/Inicio'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Inicio },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})