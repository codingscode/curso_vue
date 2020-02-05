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
        },
        atacar(especial) {
            this.dano(7, 12, false)
        },
        dano(min, max, especial) {
            const plus = especial ? 5 : 0
            const dano = this.aleatorio(min + plus, max + plus)
            this.vidaJogador = Math.max(this.vidaJogador - dano, 0)
        }
        ,
        aleatorio(min, max) {
            const valor = Math.random()*(max - min) + min
            return Math.round(valor)
        }
    },
    watch: {
        haResultado(valor) {
            if(valor) this.executando = false
        }
    }
})