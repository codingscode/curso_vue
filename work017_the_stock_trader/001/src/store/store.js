import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

import stocks_store from './modules/stocks_store'
import portfolio_modules from './modules/portfolio_modules'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        stocks_store,
        portfolio_modules
    }
})
