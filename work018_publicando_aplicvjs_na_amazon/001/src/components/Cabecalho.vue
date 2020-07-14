<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Stock</span>
            <span class="font-weight-light">Comerciador</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Início</v-btn>
            <v-btn flat to="/portfolio">Portfólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn flat @click="finalizarDia">Finalizar Dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar & Carregar</v-btn>
                <v-list>
                    <v-list-tile @click="salvarDados">
                        <v-list-tile-title>Salvar Dados</v-list-tile-title>
                    </v-list-tile>
                    <v-list-tile @click="carregarDadosLocais">
                        <v-list-tile-title>Carregar Dados</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-layout align-center>
                 <span class="text-uppercase grey--text text--darken-2">
                      Saldo: {{fundos | moeda}}
                 </span>
            </v-layout>

        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
      computed: {
         fundos() {
            return this.$store.getters.fundos
         }
      },
      methods: {
            ...mapActions(['randomizeStocks', 'carregarDados']),
            finalizarDia() {
                this.randomizeStocks()
            },
            salvarDados() {
                const {fundos, stockPortfolio, stocks} = this.$store.getters
                this.$http.put('dado1.json', {fundos, stockPortfolio, stocks})  // {fundos: fundos, stockPortfolio: stockPortfolio, stocks: stocks}
            },
            carregarDadosLocais() {
                this.carregarDados()
            }
      }
}
</script>

<style>

</style>