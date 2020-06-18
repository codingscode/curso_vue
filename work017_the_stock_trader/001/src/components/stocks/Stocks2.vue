<template>
     <v-layout row wrap>
         <Stock2 v-for="stock in stocks" :key="stock.id"/>
     </v-layout>
</template>

<script>
import Stock2 from './Stock2'

export default {
     components: {Stock2},
     data() {
         return {
            stocks: [
                {id: 1, nome: 'BMW', preco: 110},
                {id: 2, nome: 'Google', preco: 200},
                {id: 3, nome: 'Apple', preco: 280},
                {id: 4, nome: 'Twitter', preco: 83}
            ]
        }
     }
}
</script>

<style>

</style>