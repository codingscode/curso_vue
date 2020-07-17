<template>
     <div class="calculadora">
         <Mostrador valor="1000" />
         <Botao rotulo="AC" triplo @onCalcButtonClick="limparMemoria" />
         <Botao rotulo="/" operacao @onCalcButtonClick="setOperacao"/>
         <Botao rotulo="7" @onCalcButtonClick="adicionarDigito"/>
         <Botao rotulo="8"/>
         <Botao rotulo="9"/>
         <Botao rotulo="*" operacao/>
         <Botao rotulo="4"/>
         <Botao rotulo="5"/>
         <Botao rotulo="6"/>
         <Botao rotulo="-" operacao/>
         <Botao rotulo="1"/>
         <Botao rotulo="2"/>
         <Botao rotulo="3"/>
         <Botao rotulo="+" operacao/>
         <Botao rotulo="0" duplo/>
         <Botao rotulo="."/>
         <Botao rotulo="=" operacao/>
                  
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