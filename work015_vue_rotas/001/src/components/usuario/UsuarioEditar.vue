<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{id}} || {{$route.params.id}}</p>
        <p><strong>Completo:</strong> {{$route.query.completo ? 'Sim' : 'Não'}}</p>
        <p><strong>Língua:</strong> {{$route.query.lingua}}</p>
        <div id="rodape">
           <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id']
}
</script>

<style>
    #rodape {
       margin-top: 1000px;
    }
</style>
<!--
  testar http://localhost:8080/usuario/2/editar?completo=true&lingua=pt
         http://localhost:8080/usuario/2/editar?completo=true&lingua=pt#rodape
-->