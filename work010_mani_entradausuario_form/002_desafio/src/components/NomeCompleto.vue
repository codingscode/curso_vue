<template>
     <div>
          <Rotulo nome="Nome">
			  <input type="text" v-model="nome">
	      </Rotulo>
		  <Rotulo nome="Sobrenome">
		   	  <input type="text" v-model="sobrenome">
		  </Rotulo>
     </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    
    components: {Rotulo}
}
</script>

<style>

</style>