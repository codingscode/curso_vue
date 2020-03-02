<template>
	<div id="app">
		<usuario-lista :usuarios="usuarios" />
		<usuario-detalhe />
	</div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue'
import UsuarioDetalhe from './components/UsuarioDetalhe.vue'

export default {
	name: "app",
	components: { UsuarioLista, UsuarioDetalhe },
    data() {
        return {
            usuarios: [
                { id: 1, nome: 'Ana', idade: 31 },
                { id: 2, nome: 'Carlos', idade: 22 },
                { id: 3, nome: 'Daniel', idade: 40 },
                { id: 4, nome: 'Ema', idade: 17 },
                { id: 5, nome: 'Lia', idade: 28 }
            ]
        }
    }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
