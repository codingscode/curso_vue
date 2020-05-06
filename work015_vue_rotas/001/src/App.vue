<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<Menu />
		<router-view />
	</div>
</template>

<script>
import Menu from './components/template/Menu'

export default {
	components: {Menu}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
