<template>
      <div id="app">
		    <h1>Problema de Monty Hall</h1>
			<div class="form">
				 <div v-if="!iniciado">
					 <label for="quantPortas">Quantas portas ? </label>
					 <input type="text" id="quantPortas" size="3" v-model.number="quantPortas">
				 </div>
				 <div v-if="!iniciado">
					 <label for="portaSelecionada">Qual porta é a premiada ? </label>
					 <input type="text" id="portaSelecionada" size="3" v-model.number="portaSelecionada">
				 </div>
				 <button v-if="!iniciado" @click="iniciado = true">Iniciar</button>
				 <button v-if="iniciado" @click="iniciado = false">Reiniciar</button>
			</div>
			<div class="portas" v-if="iniciado">
				<div v-for="i in quantPortas" :key="i">
					<Porta :temPresente="i === portaSelecionada" :numero="i" />
				</div>
			</div>
      </div>
</template>

<script>
import Porta from './components/Porta'

export default {
	 name: 'App',
	 components: {Porta},
	 data: function() {
		return {
			iniciado: false,
			quantPortas: 3,
			portaSelecionada: null
		}
	 }
}
</script>

<style>
		* {
			box-sizing: border-box;
			font-family: 'Arial';
		}

		body {
			color: #FFF;
			background: linear-gradient(to right, rgb(36, 121, 3), rgb(59, 201, 2))
		}

		#app {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		#app h1 {
			border: 1px solid #000;
			background-color: #0004;
			padding: 20px;
			margin-bottom: 60px;
		}

		.form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 40px;
		}

		.form, .form input, .form button {
			margin-bottom: 10px;
			font-size: 2rem;
		}
</style>