import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       produtos: [
          {nome: 'Produto 1', quantidade: 7, preco: 14.55 },
          {nome: 'Produto 2', quantidade: 10, preco: 22.99 },
          {nome: 'Produto 3', quantidade: 1, preco: 43.18 }
       ]
    }
})
