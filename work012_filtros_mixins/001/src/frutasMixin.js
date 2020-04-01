export default {
    data() {
        return {
            fruta: '',
            frutas: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}