<template>
     <div class="calculadora">
         <Mostrador :valor="mostrarValor" />
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
                Object.assign(this.$data, this.$options.data())
            },
            setOperacao(operacao) {
                if (this.atual === 0) {
                    this.operacao = operacao
                    this.atual = 1
                    this.limparMostrador = true
                }
                else {
                    const iguais = operacao === '='
                    const operacaoAtual = this.operacao

                    try {
                        this.valores[0] = eval(
                            `${this.valores[0]} ${operacaoAtual} ${this.valores[1]}`
                        )
                    }
                    catch (erro) {
                        this.$emit('onError', e)
                    }

                    this.valores[1] = 0

                    this.mostrarValor = this.valores[0]
                    this.operacao = iguais ? null : operacao
                    this.atual = iguais ? 0 : 1
                    this.limparMostrador = !iguais
                }
            },
            adicionarDigito(n) {
                if (n === '.' && this.mostrarValor.includes('.')) {
                    return
                }

                const limparMostrador = this.mostrarValor === '0' || this.limparMostrador
                const valorAtual = limparMostrador ? '' : this.mostrarValor  
                const mostrarValor = valorAtual + n

                this.mostrarValor = mostrarValor
                this.limparMostrador = false

                if (n !== '.') {
                    const i = this.atual
                    const novoValor = parseFloat(mostrarValor)
                    this.valores[i] = novoValor
                }
            }
      },
      data: function() {
            return {
                mostrarValor: '0',
                limparMostrador: false,
                operacao: null,
                valores: [0, 0],
                atual: 0
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