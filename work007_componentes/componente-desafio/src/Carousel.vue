<template>
      <v-carousel>
		  <v-carousel-item
		     v-for="(item,i) in fotos" :key="i" :src="item.src">
          </v-carousel-item>
	  </v-carousel>
</template>

<script>
export default {
      data() {
		return {
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	  }
}
</script>

<style>

</style>