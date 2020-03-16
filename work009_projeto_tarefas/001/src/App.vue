<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressoTarefas :progresso="progresso" />
		<NovaTarefa @tarefaAdicionada="adTarefa" />
		<GradeTarefa :tarefasgrade="tarefas" @tarefaApagada="apagarTarefa" 
		  @estadoTarefaMudou="estadoTarefasToggle" />
	</div>
</template>

<script>
import ProgressoTarefas from './components/ProgressoTarefas'
import GradeTarefa from './components/GradeTarefa'
import NovaTarefa from './components/NovaTarefa.vue'

export default {
	 components: {GradeTarefa, NovaTarefa, ProgressoTarefas},
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
		},
		apagarTarefa(i) {
		    this.tarefas.splice(i, 1)
		},
		estadoTarefasToggle(i) {
		    this.tarefas[i].pendente = !this.tarefas[i].pendente
		}
	 },
	 computed: {
		progresso() {
			const total = this.tarefas.length
			const feito = this.tarefas.filter(t => !t.pendente).length
			return Math.round(feito/total*100) || 0
		}
	 },
	 watch: {
		tarefas: {
			deep: true,   // se false deixa de monitorar
			handler() {
			    localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
			}
		}
	 },
	 created() {
		 const json = localStorage.getItem('tarefas')
         const array = JSON.parse(json)
		 this.tarefas = Array.isArray(array) ? array : []
     }
}
//digitar no console localStorage.getItem('tarefas')
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
