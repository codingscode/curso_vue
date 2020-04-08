<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade">   <!-- transition sozinho n gera efeito algum -->
             <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		
	</div>
</template>

<script>

export default {
     data() {
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false
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
	font-size: 1.5rem;
}

.fade-enter {
     opacity: 0;
}

.fade-enter-active {
     transition: opacity 2s;
}

.fade-enter-to {
     opacity: 1;
}

.fade-leave {
	 opacity: 1;
}

.fade-leave-active {
    transition: opacity 2s;
}

.fade-leave-to {
      opacity: 0;
}
</style>
