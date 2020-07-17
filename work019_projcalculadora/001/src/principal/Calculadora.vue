<template>
     <div class="calculadora">
         <Mostrador valor="1000" />
         <Botao rotulo="AC" triplo @clique="limparMemoria" />
         <Botao rotulo="/" operacao @clique="setOperacao"/>
         <Botao rotulo="7" @clique="adicionarDigito"/>
         <Botao rotulo="8" @clique="adicionarDigito"/>
         <Botao rotulo="9" @clique="adicionarDigito"/>
         <Botao rotulo="*" operacao @clique="setOperacao"/>
         <Botao rotulo="4" @clique="adicionarDigito"/>
         <Botao rotulo="5" @clique="adicionarDigito"/>
         <Botao rotulo="6" @clique="adicionarDigito"/>
         <Botao rotulo="-" operacao @clique="setOperacao"/>
         <Botao rotulo="1" @clique="adicionarDigito"/>
         <Botao rotulo="2" @clique="adicionarDigito"/>
         <Botao rotulo="3" @clique="adicionarDigito"/>
         <Botao rotulo="+" operacao @clique="setOperacao"/>
         <Botao rotulo="0" duplo @clique="adicionarDigito"/>
         <Botao rotulo="." @clique="adicionarDigito"/>
         <Botao rotulo="=" operacao @clique="setOperacao"/>
                  
     </div>
</template>

<script>

import Mostrador from '../components/Mostrador'
import Botao from '../components/Botao' 

export default {
      components: {Mostrador, Botao},
      methods: {
            limparMemoria() {
                console.log('limpar memoria')
            },
            setOperacao(operacao) {
                console.log(`Operacao ${operacao}`)
            },
            adicionarDigito(n) {
                console.log(`Digito ${n}`)
            }
      }

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