new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
              this.valor = 0    
            }, 5000)                 //zera em 5s
        }
    }
});