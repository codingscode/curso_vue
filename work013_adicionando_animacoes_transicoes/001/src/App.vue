<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade" appear>   <!-- transition sozinho n gera efeito algum  -->
             <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		
		<transition name="slide" type="animation" appear>   <!-- experimentar trocar animation por transition -->
             <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<transition enter-active-class="animated bounce" leave-active-class="animated shake">   
             <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			 <option value="fade">Fade</option>
			 <option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao">
             <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
     data() {
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			tipoAnimacao: 'fade'
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

.fade-enter, .fade-leave-to {
     opacity: 0;
}

.fade-enter-active, .fade-leave-active {
     transition: opacity 2s;
}

@keyframes slide-in {
   from {transform: translateY(40px);}
   to {transform: translateY(0);}
}

@keyframes slide-out {
   from {transform: translateY(0);}
   to {transform: translateY(40px);}
}

.slide-enter-active {
   animation: slide-in 2s ease;
   transition: opacity 2s;
}

.slide-leave-active {
   animation: slide-out 2s ease;
   transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
     opacity: 0;
}


</style>
