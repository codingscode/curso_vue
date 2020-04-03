<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{cpf | cpf_masc | inverter}}</p>
		<p>{{usuarioLogado}}</p>
		<input type="text" :value="cpf | cpf_masc">  <!-- experimentar tirar | cpf_masc -->
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
			    <li v-for="cada in frutas" :key="cada">{{cada}}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
        </div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	  components: {Frutas},
	  mixins: [frutasMixin, usuarioMixin],
	  filters: {
		cpf_masc(valor) {
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	  },
      data() {
	     return {
			cpf: '90261437893',
			frutas: ['abacate']   //prioridade
		 }
	  },
	  created() {
	  	 console.log('Created - App.vue!')
	  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
   font-size: 2.5rem;
}
</style>
