new Vue({
    el: '#app',
    data: {
       vidaJogador: 100,
       vidaMonstro: 100,
       executando: false
    },
    computed: {
        haResultado() {
            return this.vidaJogador == 0 || this.vidaMonsto == 0
        }
    },
    methods: {
        iniciarJogo() {
            this.executando = true
            this.vidaJogador = 100
            this.vidaMonstro = 100
        }
    },
    watch: {
  
    }
})