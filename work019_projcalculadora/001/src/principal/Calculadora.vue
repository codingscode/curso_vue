<template>
     <div class="calculadora">
         <Mostrador />
         <Botao />
     </div>
</template>

<script>

import Mostrador from '../components/Mostrador'
import Botao from '../components/Botao' 

export default {
      components: {Mostrador, Botao}

}
</script>

<style>
     .calculadora {
         height: 320px;
         width: 235px;
         border-radius: 5px;
         overflow: hidden;

         display: grid;
         grid-template-columns: repeat(4, 25%);
         grid-template-rows: 1fr 48px 48px 48px 48px 48px;
     }

</style>