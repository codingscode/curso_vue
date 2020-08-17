<template>
       <div class="porta-area">
           <div class="porta-moldura">
               <Presente />
           </div>
           <div class="porta">
               <div class="numero">{{numero}}</div>
               <div class="macaneta"></div>
           </div>
       </div>
</template>

<script>
import Presente from './Presente'

export default {
      name: 'Porta',
      components: {Presente},
      props: {
            numero: {},
            temPresente: {tipo: Boolean}
      },
      data: function() {
            return {
                aberto: false,
                selecionado: false
            }
      }
}
</script>

<style>

</style>