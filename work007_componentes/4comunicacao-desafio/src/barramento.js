import Vue from 'vue'

export default new Vue({
     methods: {
         setUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario)
         },
         onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
         }
     }
})


