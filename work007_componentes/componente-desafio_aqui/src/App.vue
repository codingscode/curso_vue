<template>
	<v-app>
		<Menu />
        <BarFerr />
        <v-content>
			<Carousel />
		</v-content>
        <Footer />		
	</v-app>
</template>

<script>
import Menu from './components/template/Menu'
import Carousel from './components/widgets/Carousel'
import BarFerr from './components/template/BarFerr'
import Footer from './components/template/Footer'
export default {
	//components: {appFooter: Footer, appCarousel: Carousel, appBarrferr: BarFerr, appMenu: Menu}
	components: {Footer,Carousel, BarFerr, Menu}
	
}
</script>
