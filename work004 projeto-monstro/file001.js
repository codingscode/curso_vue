new Vue({
    el: '#app',
    data: {
       vidaJogador: 100,
       vidaMonstro: 100,
       executando: false,
       logs: []
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
            this.dano('vidaMonstro', 5, 10, especial, 'Jogador', 'Monstro', 'jogador')
            if(this.vidaJogador > 0) {
                this.dano('vidaJogador',7, 12, false, 'Monstro', 'Jogador', 'monstro')   
            }
        },
        dano(atributo, min, max, especial, fonte, alvo, classe) {
            const plus = especial ? 5 : 0
            const dano = this.aleatorio(min + plus, max + plus)
            this[atributo] = Math.max(this[atributo] - dano, 0)
            this.registrarLog(`${fonte} atingiu ${alvo} com ${dano}.`, classe)
        },
        aleatorio(min, max) {
            const valor = Math.random()*(max - min) + min
            return Math.round(valor)
        },
        curar(min, max) {
            const curar = this.aleatorio(min, max)
            this.vidaJogador = Math.min(this.vidaJogador + curar, 100)
        },
        curarEdano() {
            this.curar(10, 15)
            this.dano('vidaJogador', 7, 12, false)
        },
        registrarLog(texto, classe) {
            this.logs.unshift({texto, classe})
        }
    },
    watch: {
        haResultado(valor) {
            if(valor) this.executando = false
        }
    }
})