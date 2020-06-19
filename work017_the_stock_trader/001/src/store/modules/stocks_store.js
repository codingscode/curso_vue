import stocks_data from '../../data/stocks_data'

export default {
    state: {
       stocks: []
    },
    mutations: {
       setStocks(state, stocks) {
          state.stocks = stocks
       }
    },
    actions: {
       comprarStock({commit}, pedido) {
          commit()
       },
       iniciarStocks({commit}) {
          console.log('iniciarStocks...') 
          commit('setStocks', stocks_data)
       }
    },
    getters: {
        stocks(state) {
           return state.stocks
        }
    }
}