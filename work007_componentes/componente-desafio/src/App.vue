<template>
	<v-app>
		<app-menu />
        <app-barrferr />
        <v-content>
			<app-carousel />
		</v-content>
        <app-footer />		
	</v-app>
</template>

<script>
import Menu from './components/template/Menu'
import Carousel from './components/widgets/Carousel'
import BarFerr from './components/template/BarFerr'
import Footer from './components/template/Footer'
export default {
	components: {'app-footer': Footer, 'app-carousel': Carousel, 'app-barrferr': BarFerr, 'app-menu': Menu},
	
}
</script>
