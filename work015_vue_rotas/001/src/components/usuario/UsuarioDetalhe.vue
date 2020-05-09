<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{id}}</p>
    </div>
</template>

<script>
export default {
     props: ['id']
     /*data() {
        return {
            id: this.$route.params.id
        }
     },
     watch: {   // monitora as mudanças
        $route(to, from) {
           this.id = to.params.id
        }
     }*/
}
</script>

<style>

</style>