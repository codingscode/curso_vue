<template>
     <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
     </v-layout>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from './Stock'

export default {
        components: {Stock},
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        }
}
</script>

<style>

</style>