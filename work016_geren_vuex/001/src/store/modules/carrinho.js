export default {
    namespaced: true,
    state: {
        produtos: []
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
         }
     },
     actions: {
         adicionarProduto({commit, state, rootState}, produto) {
            setTimeout(() => {
               commit('adicionarProduto', produto)
            }, 1000)
         }
     }
}
// https://vuex.vuejs.org/guide/modules.html