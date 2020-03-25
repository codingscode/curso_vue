<template>
     <div>
          <Rotulo nome="Nome">
			  <input type="text" :value="value.nome" @input="alterarNome">
	      </Rotulo>
		  <Rotulo nome="Sobrenome">
		   	  <input type="text" :value="value.sobrenome" @input="alterarSobrenome">
		  </Rotulo>
     </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: {Rotulo},
    methods: {
        alterarNome(evento) {
            this.$emit('input', {nome: evento.target.value, sobrenome: this.value.sobrenome})
        },
        alterarSobrenome(evento) {
            this.$emit('input', {nome: this.value.nome, sobrenome: evento.target.value})
        }
    }
}
</script>

<style>

</style>