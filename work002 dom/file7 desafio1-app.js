new Vue({
    el: '#desafio',
    data: {
      nome: 'Ana Vasconsselos',
      idade: 28,
      imagem: './vue.jpg'
    },
    methods: {
      idadeVezes3() {
        return this.idade*3
      },
      aleatorio() {
        return Math.random()
      }
    }
})



