<template>
       <div class="grade-tarefa">
            <template v-if="tarefas.length">
                <Tarefa v-for="tarefa in tarefas" :key="tarefa.nome" :tarefa="tarefa" ></Tarefa>
            </template>
            <p v-else class="sem-tarefa"> Sua vida está em dia :)</p>
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
      .grade-tarefa {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
      }

      .grade-tarefa .tarefa {
            margin: 10px;
      }

      .sem-tarefa {
            color: #AAA;
            font-size: 1.7rem;
      }
</style>