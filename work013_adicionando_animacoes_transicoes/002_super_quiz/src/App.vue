<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<transition name="flip">
            <Pergunta v-if="perguntaModo" :pergunta="perguntas[perguntaAtual]" @respondido="mostrarResultado"/>
		    <resultado v-else :resultado="resultado" @confirmado="proximaPergunta" />
		</transition>
		
	</div>
</template>

<script>
import perguntas from './util/perguntas'
import Pergunta from './components/Pergunta.vue'
import Resultado from './components/Resultado.vue'

export default {
	 components: {Pergunta, Resultado},
	 data() {
		 return {
			 resultado: false,
			 perguntaModo: true,
			 perguntas: perguntas,    // ou apenas perguntas.         chave e valor mesmo nome
			 perguntaAtual: 0
		 }
	 },
     methods: {
        mostrarResultado(resultado) {
            this.resultado = resultado
            this.perguntaModo = false
        },
        proximaPergunta() {
            let r = Math.random()*this.perguntas.length
            this.perguntaAtual = parseInt(r)
            this.perguntaModo = true
        }
     }
}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(20, 14, 99), rgba(18, 27, 150, 0.39));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {     /* + */
	from { transform: rotateY(0deg); }
	to { transform: rotateY(90deg); }
}

@keyframes flip-in {     /* + */
	from { transform: rotateY(90deg); }
	to { transform: rotateY(0deg); }
}

.flip-enter-active {        /* + */
	animation: flip-in 0.3s ease;
}

.flip-leave-active {        /* + */
	animation: flip-out 0.3s ease;
}
</style>
