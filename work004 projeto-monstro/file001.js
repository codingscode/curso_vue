new Vue({
    el: '#app',
    data: {
       vidaJogador: 0,
       vidaMonstro: 100,
       executando: false
    },
    computed: {
        haResultado() {
            return this.vidaJogador == 0 || this.vidaMonsto == 0
        }
    },
    methods: {
  
    },
    watch: {
  
    }
})