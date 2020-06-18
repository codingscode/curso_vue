<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
       <v-card class="green darken-3 white--text">
          <v-card-title class="headline">
              <strong>NOME <small>(Preço: PRECO)</small></strong>
          </v-card-title>
       </v-card>
       <v-card>
           <v-container fill-height>
               <v-text-field label="Quantidade" type="number"/>
               <v-btn class="green darken-3 white--text">Comprar</v-btn>
           </v-container>
       </v-card>
    </v-flex>
</template>

<script>
export default {

}
</script>

<style>

</style>