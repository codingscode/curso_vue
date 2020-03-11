<template>
	<div id="app">
		<h1>Tarefas</h1>
		<GradeTarefa :tarefas="tarefas" />
	</div>
</template>

<script>
import GradeTarefa from './components/GradeTarefa'

export default {
	 components: {GradeTarefa},
     data() {
		return {
			tarefas: [
				{nome: 'Lavar casa', pendente: false},
				{nome: 'Comprar caderno', pendente: true},
			]
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
