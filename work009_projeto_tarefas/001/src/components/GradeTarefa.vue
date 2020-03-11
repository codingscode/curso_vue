<template>
       <div class="grade-tarefa">
            <template>
                <Tarefa v-for="tarefa in tarefas" :key="tarefa.nome" :tarefa="tarefa" ></Tarefa>
            </template>
       </div>
</template>

<script>
import Tarefa from './Tarefa.vue'

export default {
      components: {Tarefa},
      props: {
          tarefas: {type: Array, required: true}
      }
}
</script>

<style>

</style>