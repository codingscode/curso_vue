<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <v-card :elevation="6" class="pa-2 primary" > <!-- v-sheet -->
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-card>
        <v-card :elevation="6" class="pa-2 success darken-1 mt-3" > <!-- v-sheet -->
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia!</span>
        </v-card>
        <v-divider class="my-4"/>
        <p class="display-1"><strong>Seu Saldo:</strong> {{fundos}}</p>
    </div>
</template>

<script>
export default {
     computed: {
        fundos() {
            return this.$store.getters.fundos
        }
     }
}
</script>

<style>

</style>