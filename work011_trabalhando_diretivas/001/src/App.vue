<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p> <!-- experimentar usar 'Usando diretiva <strong>v-text</html>'  -->
		<p v-html="'Usando diretiva <strong>v-html</html>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'orange'"> Usando diretiva personalizada </p>  <!-- f5 navegador -->
		<p v-destaque="cor"> Usando diretiva personalizada </p>   <!-- experimentar :fundo -->
	</div>
</template>

<script>
export default {
	  data() {
		  return {
			  cor: 'green'
		  }
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
</style>
<!-- inspecionar elements -->