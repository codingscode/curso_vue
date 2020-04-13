<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<!--<transition name="fade" appear>   
             <b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		
		<transition name="slide" type="animation" appear>   
             <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<transition enter-active-class="animated bounce" leave-active-class="animated shake">   
             <b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition> -->
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			 <option value="fade">Fade</option>
			 <option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao" mode="out-in">
             <b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
             <b-alert variant="warning" show v-else key="warn">{{msg}}</b-alert>
		</transition>

		<hr>
		<button @click="exibir2 = !exibir2">Mostrar</button>
		<transition
		     @before-enter="antesEntrar" @enter="entrar" @after-enter="depoisEntrar" @enter-cancelled="entrarCancelado"

			 @before-leave="antesSair" @leave="sair" @after-leave="depoisSair" @leave-cancelled="sairCancelado">
			 <div v-if="exibir2" class="caixa"></div>
		</transition>
	</div>
</template>

<script>

export default {
     data() {
		return {
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade'
		}
	 },
	 methods: {
		 antesEntrar(el) {
            console.log('antesEntrar')
		 },
		 entrar(el, done) {
			console.log('entrar')
			//done()
		 },
		 depoisEntrar(el) {
			 console.log('depoisEntrar')
		 },
		 entrarCancelado(el) {
             console.log('entrarCancelado')
		 },
		 antesSair(el) {
            console.log('antesSair')
		 },
		 sair(el, done) {
			console.log('sair')
			//done()
		 },
		 depoisSair(el) {
			 console.log('depoisSair')
		 },
		 sairCancelado(el) {
             console.log('sairCancelado')
		 }
	 }
}
// ver console
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

.caixa {
   height: 100px;
   width: 300px;
   margin: 30px auto;
   background-color: orange;
}

</style>
