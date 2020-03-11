<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NovaTarefa @tarefaAdicionada="adTarefa" />
		<GradeTarefa :tarefas="tarefas" />
	</div>
</template>

<script>
import GradeTarefa from './components/GradeTarefa'
import NovaTarefa from './components/NovaTarefa.vue'

export default {
	 components: {GradeTarefa, NovaTarefa},
     data() {
		return {
			tarefas: [
				{nome: 'Lavar casa', pendente: false},   // experimentar comentar
				{nome: 'Comprar caderno', pendente: true},  // experimentar comentar
			]
		}
	 },
	 methods: {
		adTarefa(tarefa) {
			const mesmoNome = t => t.nome === tarefa.nome
			const novoDeFato = this.tarefas.filter(mesmoNome).length == 0
			if(novoDeFato) {
				this.tarefas.push({
					nome: tarefa.nome,
					pendente: tarefa.pendente || true
				})
			}
		}
	 }
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(3, 47, 95), rgb(241, 120, 6));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
