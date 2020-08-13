<template>
      <div id="app">
		    <h1>Problema de Monty Hall</h1>
			<Presente  />
      </div>
</template>

<script>
import Presente from './components/Presente'

export default {
	 name: 'App',
	 components: {Presente}
}
</script>

<style>
		* {
			box-sizing: border-box;
			font-family: 'Arial';
		}

		body {
			color: #FFF;
			background: linear-gradient(to right, rgb(36, 121, 3), rgb(59, 201, 2))
		}

		#app {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		#app h1 {
			border: 1px solid #000;
			background-color: #0004;
			padding: 20px;
			margin-bottom: 60px;
		}
</style>