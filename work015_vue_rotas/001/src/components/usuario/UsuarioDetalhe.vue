<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{id}}</p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="{name: 'editarUsuario', params: {id}, query: {completo: true, lingua: 'pt'}, hash:'#rodape' }"> <!-- ou só {id} -->
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
     props: ['id'],
     beforeRouteEnter(to, from, next) {
        //console.log(this.id)  // dá errp 
        console.log('dentro do componente -> usuário detalhe')
        next()
     }
}
</script>

<style>

</style>
<!-- http://localhost:8080/usuario/2/editar?completo=true&lingua=pt  o que aparece -->