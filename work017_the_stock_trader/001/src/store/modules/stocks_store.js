import stocks_data from '../../data/stocks_data'

export default {
    state: {
       stocks: []
    },
    mutations: {
       setStocks(state, stocks) {
          state.stocks = stocks
       },
       randomizeStocks(state) {
          state.stocks.forEach(stock => {
             stock.preco = Math.round(stock.preco*(1 + Math.random() - 0.45))
          })
       }
    },
    actions: {
       comprarStock({commit}, pedido) {
          commit('comprarStock', pedido)
       },
       iniciarStocks({commit}) {
          console.log('iniciarStocks...') 
          commit('setStocks', stocks_data)
       },
       randomizeStocks({commit}) {
          commit('randomizeStocks')
       }
    },
    getters: {
        stocks(state) {
           return state.stocks
        }
    }
}