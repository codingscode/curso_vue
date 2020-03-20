<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">   <!-- só aparece quando clica fora -->
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade">   <!-- alterando continua number -->
				</Rotulo>
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel"
					   v-model="caracteristicas" > Reproduzível</span>
					<span><input type="checkbox" value="intermitente" v-model="caracteristicas"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option v-for="prioridade in prioridades" :key="prioridade.codigo"
						   :value="prioridade.codigo" :selected="prioridade.codigo === 3">
							{{prioridade.codigo}} - {{prioridade.nome}}
						</option>
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha />
				</Rotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{usuario.email}}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{usuario.senha}}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{usuario.idade}} {{tipoIdade}}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<span style="white-space: pre;" >{{mensagem}}</span>
				</Rotulo>
				<Rotulo nome="Caracteristicas do problema">
					<span>
						<ul>
							<li v-for="c in caracteristicas" :key="c">{{c}}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{produto}}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{prioridade}} {{tipoPrioridade}}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>???</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Escolha from './components/Escolha.vue'

export default {
	name: 'app',
	components: { Rotulo, Escolha },
	data() {
		return {
			mensagem: '',
			caracteristicas: [],
			produto: 'web',
			prioridade: 1,
			prioridades: [
                {codigo: 1, nome: 'Baixa'},
				{codigo: 2, nome: 'Moderada'},
				{codigo: 3, nome: 'Alta'}
			],
			usuario: {
				email: '',
				senha: '',
				idade: 25
			}
		}
	},
	computed: {
		tipoIdade() {
			return typeof this.usuario.idade
		},
		tipoPrioridade() {
			return typeof this.prioridade
		}
	}
}
//digitar no console: document.querySelector('input[type="number"]').value
// parseFloat(document.querySelector('input[type="number"]').value)
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
