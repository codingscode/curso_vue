
<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
       <v-card class="blue darken-3 white--text">
          <v-card-title class="headline">
              <strong>{{stock.nome}} <small>(Preço: {{stock.preco}} | Qtd: {{stock.quantidade}})</small></strong>
          </v-card-title>
       </v-card>
       <v-card>
           <v-container fill-height>
               <v-text-field label="Quantidade" type="number" v-model.number="quantidade"/>
               <v-btn class="blue darken-3 white--text" @click="venderStock" :disabled="quantidadeInsuficiente || quantidade <= 0 || !Number.isInteger(quantidade)">
                   {{quantidadeInsuficiente ? 'Insuficiente' : 'Vender'}}
               </v-btn>
           </v-container>
       </v-card>
    </v-flex>
</template>

<script>
import {mapActions} from 'vuex'

export default {
      props: ['stock'],
      data() {
        return {
            quantidade: 0
        }
      },
      methods: {
        ...mapActions({venderStockAction: 'venderStock'}),
        venderStock() {
            const pedido = {
                stockId: this.stock.id,
                stockPreco: this.stock.preco,
                quantidade: this.quantidade
            }

            this.venderStockAction(pedido)
            //this.$store.dispatch('venderStock', pedido)
            console.log(pedido)
            this.quantidade = 0
        }
     },
     computed: {
        quantidadeInsuficiente() {
            return this.quantidade > this.stock.quantidade
        }
     }
}
</script>

<style>

</style>