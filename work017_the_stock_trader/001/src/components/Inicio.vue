<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
        <v-card :elevation="6" class="pa-2" color="primary"> <!-- v-sheet -->
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-card>
        <v-divider class="my-4"/>
        <p><strong>Seu Saldo:</strong> {{fundos}}</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>