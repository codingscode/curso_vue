import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       produtos: [],
       quantidade: 1,
       preco: 7.99
    },
    getters: {
        valorTotal(state) {
           return state.produtos.map(p => p.quantidade* p.preco)
              .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {  // é como setter
        adicionarProduto(state, produto) {
           state.produtos.push(produto)
        },
        setQuantidade(state, produto) {
            state.quantidade = produto
        },
        setPreco(state, produto) {
            state.preco = produto
        }
    },
    actions: {
        adicionarProduto({commit}, produto) {
           setTimeout(() => {
              commit('adicionarProduto', produto)
           }, 1000)
        }
    }
})
