<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <p><strong>Código:</strong> {{id}}</p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
     data() {
        return {
            id: this.$route.params.id
        }
     },    
     methods: {
        irParaInicio() {
            //this.$router.push('/') 
            this.$router.push({path: '/'})  // mesmo do de cima
        }
     }
}
// ver localhost:8080/#/usuario   -> Network -> localhost
// com history localhost:8080/usuario
// https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
</script>

<style>

</style>