<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
       <v-card class="green darken-3 white--text">
          <v-card-title class="headline">
              <strong>{{stock.nome}} <small>(Preço: {{stock.preco | moeda}})</small></strong>
          </v-card-title>
       </v-card>
       <v-card>
           <v-container fill-height>
               <v-text-field label="Quantidade" type="number" :error="fundosInsuficiente || !Number.isInteger(quantidade)" v-model.number="quantidade"/>
               <v-btn class="green darken-3 white--text" @click="comprarStock" :disabled="fundosInsuficiente || quantidade <= 0 || !Number.isInteger(quantidade)">
                   {{fundosInsuficiente ? 'Insuficiente' : 'Comprar'}}
               </v-btn>
           </v-container>
       </v-card>
    </v-flex>
</template>

<script>
export default {
      props: ['stock'],
      data() {
        return {
            quantidade: 0
        }
      },
      methods: {
        comprarStock() {
            const pedido = {
                stockId: this.stock.id,
                stockPreco: this.stock.preco,
                quantidade: this.quantidade
            }

            this.$store.dispatch('comprarStock', pedido)
            console.log(pedido)
            this.quantidade = 0
        }
      },
      computed: {
          fundos() {
              return this.$store.getters.fundos
          },
          fundosInsuficiente() {
              return this.quantidade*this.stock.preco > this.fundos
          }
      } 
}
</script>

<style>

</style>