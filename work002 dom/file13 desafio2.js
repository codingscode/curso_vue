new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Isto é um alerta')
        },
        alterarValor(evento) {
           this.valor = evento.target.value
        }
    }
})