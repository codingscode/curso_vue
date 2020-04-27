<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
	</div>
</template>

<script>
export default {
     created() {
		 console.log('executando...')
		 this.$http.post('usuarios.json', {      // verificar firebase e console
				nome: 'Fulanis',
				email: 'fulanis_fulanis@gmail.com'
		  }).then(res => console.log(res))

	 }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
