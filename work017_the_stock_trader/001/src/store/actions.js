import Vue from 'vue'

export default {
   carregarDados({commit}) {
      Vue.prototype.$http('dado1.json').then(resp => {
          const dado = resp.data
          if (dado) {
             commit('setStocks', dado.stocks)
             commit('setPortfolio', {
                fundos: dado.fundos,
                stockPortfolio: dado.stockPortfolio
             })
          }
      })
   }
}