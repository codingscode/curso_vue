<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{id}}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="{name: 'editarUsuario', params: {id}, query: {completo: true, lingua: 'pt'}}"> <!-- ou só {id} -->
            Editar
        </router-link>
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
<!-- http://localhost:8080/usuario/2/editar?completo=true&lingua=pt  o que aparece -->