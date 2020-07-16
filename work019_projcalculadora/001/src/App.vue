<template>
	<div id="app">
		<h1>Calculadora</h1>
		<Calculadora />
	</div>
</template>

<script>
import Calculadora from './principal/Calculadora'

export default {
	  components: {Calculadora}
}

</script>

<style >
     @font-face {
		font-family: "Modak", cursive;
		src: url('./fonts/Modak-Regular.ttf')
	 }

	 * {
		 font-family: "Modak", monospace;
	 }

	 body {
		margin: 0;
	 }

	 #app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		align-items: center;
		text-align: center;

		color: #fff;
		background: linear-gradient(to right, rgb(163, 106, 1), rgb(255, 194, 81));
	 }
</style>

