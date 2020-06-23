
export default {
    state: {
        fundos: 10000,
        stocks: []
    },
    mutations: {
         comprarStock(state, {stockId, quantidade, stockPreco}) {
           const registro = state.stocks.find(elemento => elemento.id == stockId)
           if (registro) {
              registro.quantidade += quantidade
           }
           else {
              state.stocks.push({
                 id: stockId,
                 quantidade: quantidade
              })
           }
           state.fundos -= stockPreco*quantidade
         },
         venderStock(state, {stockId, quantidade, stockPreco}) {
            const registro = state.stocks.find(elemento => elemento.id == stockId)
            if (registro.quantidade > quantidade) {
               registro.quantidade -= quantidade
            }
            else {
               state.stocks.splice(state.stocks.indexOf(registro), 1)
            }
            state.fundos += stockPreco*quantidade
         }
     },
     actions: {
         venderStock({commit}, pedido) {
            commit('venderStock', pedido)
         }
     },
     getters: {
         stockPortfolio(state, getters) {
             return state.stocks.map(stock => {
                const registro = getters.stocks.find(elemento => elemento.id == stock.id)
                return {
                   id: stock.id,
                   quantidade: stock.quantidade,
                   nome: registro.nome,
                   preco: registro.preco
                }
             })
         },
         fundos(state) {
            return state.fundos
         }
     }
}