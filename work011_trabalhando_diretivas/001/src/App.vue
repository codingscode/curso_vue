<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p> <!-- experimentar usar 'Usando diretiva <strong>v-text</html>'  -->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="'orange'"> Usando diretiva personalizada </p>  <!-- f5 navegador -->
		<p v-destaque="cor"> Usando diretiva personalizada </p>   <!-- experimentar :fundo -->
		<hr>
		<p v-destaque-local:fundo.atrasar="'purple'"> Usando diretiva personalizada </p>  <!-- f5 navegador -->
		<p v-destaque-local="cor"> Usando diretiva personalizada </p>   <!-- experimentar :fundo -->
		<p v-destaque-local.alternar="cor"> Usando diretiva personalizada </p>   <!-- experimentar :fundo -->
	</div>
</template>

<script>
export default {
	  components: {},
	  directives: {
		 'destaque-local': {
              bind(el, binding, vnode) {        //binding e vnode nesse caso podem ser omitidos
				
                const aplicarCor = cor => {
                    if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					}
					else {
						el.style.color = cor
					}
                }

				let atraso = 0
				if (binding.modifiers['atrasar']) atraso = 3000

				

                const cor1 = binding.value
				const cor2 = 'blue'
				let corAtual = cor1
 
				setTimeout(() => {
                    if (binding.modifiers['alternar']) {
                         setInterval(() => {
							 corAtual = corAtual === cor1 ? cor2 : cor1
                             aplicarCor(corAtual)
						 }, 1000)
                    }
					else {
                        aplicarCor(binding.value)
					} 
                }, atraso)
				
			 }
	     }
	  },
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