<template>
       <div class="tarefas">
            <template>
                <div v-for="tarefa in tarefas" :key="tarefa.nome" >{{tarefa.nome}}</div>
            </template>
       </div>
</template>

<script>
export default {
      props: {
          tarefas: {type: Array, required: true}
      }
}
</script>

<style>

</style>