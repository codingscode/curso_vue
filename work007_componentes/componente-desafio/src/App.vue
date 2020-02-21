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
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import BarFerr from './BarFerr.vue'
import Footer from './Footer.vue'
export default {
	components: {'app-footer': Footer, 'app-carousel': Carousel, 'app-barrferr': BarFerr, 'app-menu': Menu},
	
}
</script>
