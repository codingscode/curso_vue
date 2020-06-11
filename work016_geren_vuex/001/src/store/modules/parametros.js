export default {
    state: {
        quantidade: 1,
        preco: 7.99
     },
     mutations: {  // é como setter
         setQuantidade(state, produto) {
             state.quantidade = produto
         },
         setPreco(state, produto) {
             state.preco = produto
         }
     }
}