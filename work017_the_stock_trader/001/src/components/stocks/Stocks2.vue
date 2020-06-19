<template>
     <v-layout row wrap>
         <Stock2 v-for="stock in stocks" :key="stock.id" :stock="stock"/>
     </v-layout>
</template>

<script>
import Stock2 from './Stock2'

export default {
     components: {Stock2},
     computed: {
        stocks() {
            return this.$store.getters.stocks
        }
    }
}
</script>

<style>

</style>