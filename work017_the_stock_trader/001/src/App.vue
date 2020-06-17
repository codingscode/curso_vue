<template>
    <v-app>
		<Cabecalho />
		<v-content>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-content>
	</v-app>
	
</template>

<script>
import Cabecalho from './components/Cabecalho'

export default {
     components: {Cabecalho}
}
</script>

<style>

</style>

